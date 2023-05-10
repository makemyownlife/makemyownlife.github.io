RocketMQ 4.X 版本是目前使用最广泛的版本，但它的消费逻辑相对较重，很多同学学习起来没有头绪。

这篇文章，笔者梳理了 RocketMQ 的消费逻辑流程，希望对大家有所启发。

![](https://oscimg.oschina.net/oscnet/up-d1efa01d7864a45020f2e49eddf5c52daea.png)

# 1 架构概览

在展开集群消费逻辑细节前，我们先对 RocketMQ 4.X 架构做一个概览。

  

![](https://oscimg.oschina.net/oscnet/up-66da691e8721105da136e7227f902637c01.png)

整体架构中包含**四种角色** : 

**1、NameServer**

名字服务是是一个几乎无状态节点，可集群部署，节点之间无任何信息同步。它是一个非常简单的 Topic 路由注册中心，其角色类似 Dubbo 中的 zookeeper ，支持 Broker 的动态注册与发现。       

**2、BrokerServer**

Broker 主要负责消息的存储、投递和查询以及服务高可用保证 。

**3、Producer**

消息发布的角色，Producer 通过 MQ 的负载均衡模块选择相应的 Broker 集群队列进行消息投递，投递的过程支持快速失败并且低延迟。

**4、Consumer**

消息消费的角色，支持以 push 推，pull 拉两种模式对消息进行消费。

RocketMQ 集群工作流程：

1、**启动 NameServer**，NameServer 起来后监听端口，等待 Broker、Producer 、Consumer 连上来，相当于一个路由控制中心。

2、**Broker 启动**，跟所有的 NameServer 保持长连接，定时发送心跳包。心跳包中包含当前 Broker信息( IP+端口等 )以及存储所有 Topic 信息。注册成功后，NameServer 集群中就有 Topic 跟 Broker 的映射关系。

3、收发消息前，先**创建 Topic**，创建 Topic 时需要指定该 Topic 要存储在哪些 Broker 上，也可以在发送消息时自动创建 Topic。

4、**Producer 发送消息**，启动时先跟 NameServer 集群中的其中一台建立长连接，并从 NameServer 中获取当前发送的 Topic 存在哪些 Broker 上，轮询从队列列表中选择一个队列，然后与队列所在的 Broker 建立长连接从而向 Broker 发消息。

5、Consumer 跟 Producer 类似，跟其中一台 NameServer 建立长连接，获取当前订阅 Topic 存在哪些 Broker 上，然后直接跟 Broker 建立连接通道，开始**消费消息**。

# 2 发布订阅

 RocketMQ 的传输模型是：**发布订阅模型** 。 

![](https://oscimg.oschina.net/oscnet/up-b38179c9bbef66d49261ae1d838432dbc63.png)

发布订阅模型具有如下特点：

- **消费独立**

  相比队列模型的匿名消费方式，发布订阅模型中消费方都会具备的身份，一般叫做订阅组（订阅关系），不同订阅组之间相互独立不会相互影响。

- **一对多通信**

  基于独立身份的设计，同一个主题内的消息可以被多个订阅组处理，每个订阅组都可以拿到全量消息。因此发布订阅模型可以实现一对多通信。

为了实现这种发布订阅模型 ， RocketMQ 精心设计了它的存储模型。先进入 Broker 的文件存储目录。

![](https://oscimg.oschina.net/oscnet/up-83b1effdd6fa374828db4e52b52800e4e54.png)

RocketMQ 采用的是**混合型**的存储结构。

**1、Broker 单个实例下所有的队列共用一个数据文件（commitlog）来存储**

生产者发送消息至 Broker 端，然后 Broker 端使用同步或者异步的方式对消息刷盘持久化，保存至 commitlog 文件中。只要消息被刷盘持久化至磁盘文件 commitlog 中，那么生产者发送的消息就不会丢失。

单个文件大小默认 1G , 文件名长度为 20 位，左边补零，剩余为起始偏移量，比如 00000000000000000000 代表了第一个文件，起始偏移量为 0 ，文件大小为1 G = 1073741824 。

 ![ commitlog 目录](https://oscimg.oschina.net/oscnet/up-6d06c299479d66a86ff8303df50da571a16.png)

这种设计有两个优点：

- 充分利用顺序写，大大提升写入数据的吞吐量；

- 快读定位消息。

  因为消息是一条一条写入到 commitlog 文件 ，写入完成后，我们可以得到这条消息的**物理偏移量**。

  每条消息的物理偏移量是唯一的， commitlog 文件名是递增的，可以根据消息的物理偏移量通过**二分查找**，定位消息位于那个文件中，并获取到消息实体数据。 

**2、Broker 端的后台服务线程会不停地分发请求并异步构建 consumequeue（消费文件）和 indexfile（索引文件）**

进入索引文件存储目录 ：

![](https://oscimg.oschina.net/oscnet/up-db90ca808b6609202502b1bf52b955eaf5c.png)

1、消费文件按照主题存储，每个主题下有不同的队列，图中主题 my-mac-topic 有 16 个队列 (0 到 15) ;

2、每个队列目录下 ，存储 consumequeue 文件，每个 consumequeue 文件也是顺序写入，数据格式见下图。

![](https://oscimg.oschina.net/oscnet/up-9225df4ff7dc9f6fee489bef336dab8c8cf.png)

每个 consumequeue 文件包含 30 万个条目，每个条目大小是 20 个字节，每个文件的大小是 30 万 * 20 = 60万字节，每个文件大小约 5.72M 。

和 commitlog 文件类似，consumequeue 文件的名称也是以偏移量来命名的，可以通过消息的逻辑偏移量定位消息位于哪一个文件里。

消费文件按照**主题-队列**来保存 ，这种方式特别适配**发布订阅模型**。

消费者从 Broker 获取订阅消息数据时，不用遍历整个 commitlog 文件，只需要根据逻辑偏移量从 consumequeue 文件查询消息偏移量 ,  最后通过定位到 commitlog 文件， 获取真正的消息数据。

要实现发布订阅模型，还需要一个重要文件：**消费进度**文件。原因有两点：

- 不同消费组之间相互独立，不会相互影响 ；
- 消费者下次拉取数据时，需要知道从哪个进度开始拉取 ，就像我们小时候玩单机游戏存盘一样。

因此消费进度文件需要保存消费组所订阅主题的消费进度。

我们浏览下集群消费场景下的 Broker 端的消费进度文件 **consumerOffset.json** 。

![](https://oscimg.oschina.net/oscnet/up-f0c182582325f26744cd09c8e4a6afe968d.png)

![](https://oscimg.oschina.net/oscnet/up-a7381178541da1449b6066c7116a6c25863.png)

在进度文件 consumerOffset.json 里，数据以 key-value 的结构存储，key 表示：主题@消费者组 ， value 是 consumequeue 中每个队列对应的逻辑偏移量 。

写到这里，我们**粗糙模拟**下 RocketMQ **存储模型如何满足发布订阅模型** 。 

![](https://oscimg.oschina.net/oscnet/up-9eb0af3b6fe9ee467ca3436470467b86daf.png)

1、**发送消息**：生产者发送消息到 Broker ；

2、**保存消息**：Broker 将消息存储到 commitlog 文件 ，异步线程会构建消费文件 consumequeue ；

3、**消费消息**：Broker 收到消费者拉取请求之后，根据订阅组，消费者编号，主题，队列名，逻辑偏移量等参数 ，从该主题下的 consumequeue 文件查询消息消费条目，然后从 commitlog 文件中获取消息实体。消费者在收到消息数据之后，执行消费监听器，消费完消息；

4、**保存进度**：消费者将消费进度提交到 Broker ，Broker 会将该消费组的消费进度存储在进度文件里。 

# 3 消费流程

RocketMQ 支持两种消息模式：**集群消费**（ Clustering ）和**广播消费**（ Broadcasting ）。

**集群消费**：**同一 Topic 下的一条消息只会被同一消费组中的一个消费者消费**。也就是说，消息被负载均衡到了同一个消费组的多个消费者实例上。

![](https://oscimg.oschina.net/oscnet/up-86169443c61dd3759dbb42303370c1d86cd.png)

**广播消费**：当使用广播消费模式时，每条消息推送给集群内所有的消费者，保证消息至少被每个消费者消费一次。

![](https://oscimg.oschina.net/oscnet/up-5a6025f1a89369e9e4f83c24e3cba4e4ac0.png)

我们重点讲解下集群消费的消费流程 ，因为**集群消费是使用最普遍的消费模式**，理解了集群消费，广播消费也就能顺理成章的掌握了。

![](https://oscimg.oschina.net/oscnet/up-e0cd5ee091baccad0968b0d560da9221f79.png)

集群消费示例代码里，启动消费者，我们需要配置三个核心属性：**消费组名**、**订阅主题**、**消息监听器**，最后调用 start 方法启动。

消费者启动后，我们可以将整个流程简化成：

![](https://oscimg.oschina.net/oscnet/up-c1083cb8e7bf71e49a31c235194ae8d4390.png)

# 4 负载均衡

消费端的负载均衡是指**将 Broker 端中多个队列按照某种算法分配给同一个消费组中的不同消费者**。

负载均衡是每个**客户端独立进行计算**，那么何时触发呢 ？ 

![](https://oscimg.oschina.net/oscnet/up-f9740796d6cae2a403cd227240471e07791.png)

- 消费端启动时，立即进行负载均衡；

- 消费端定时任务每隔 20 秒触发负载均衡；
- 消费者上下线，Broker 端通知消费者触发负载均衡。

负载均衡流程如下：

**1、发送心跳** 

消费者启动后，它就会通过定时任务不断地向 RocketMQ 集群中的所有 Broker 实例发送心跳包（**消息消费分组名称**、**订阅关系集合**、**消息通信模式**和**客户端实例编号**等信息）。

Broker 端在收到消费者的心跳消息后，会将它维护在 ConsumerManager 的本地缓存变量 consumerTable，同时并将封装后的客户端网络通道信息保存在本地缓存变量 channelInfoTable 中，为之后做消费端的负载均衡提供可以依据的元数据信息。

**2、启动负载均衡服务**

负载均衡服务会根据消费模式为”广播模式”还是“集群模式”做不同的逻辑处理，这里主要来看下集群模式下的主要处理流程：

(1) 获取该主题下的消息消费队列集合；

(2) 查询 Broker 端获取该消费组下消费者 Id 列表；

(3) 先对 Topic 下的消息消费队列、消费者 Id 排序，然后用消息队列分配策略算法（默认为：消息队列的平均分配算法），计算出待拉取的消息队列；

![](https://oscimg.oschina.net/oscnet/up-2939ad37a75aa30db5f032612e4da771de6.png)

这里的平均分配算法，类似于分页的算法，将所有 MessageQueue 排好序类似于记录，将所有消费端排好序类似页数，并求出每一页需要包含的平均 size 和每个页面记录的范围 range ，最后遍历整个 range 而计算出当前消费端应该分配到的记录。

(4) 分配到的消息队列集合与 processQueueTable 做一个过滤比对操作。

![](https://oscimg.oschina.net/oscnet/up-6389e1bd0107238dbc346433e4687c04f23.png)

消费者实例内 ，processQueueTable 对象存储着当前负载均衡的队列 ，以及该队列的消费快照。

- 标红的 Entry 部分表示与分配到的消息队列集合互不包含，则需要将这些红色队列 Dropped 属性为 true , 然后从 processQueueTable 对象中移除。

- 绿色的 Entry 部分表示与分配到的消息队列集合的交集，processQueueTable 对象中已经存在该队列。

- 黄色的 Entry 部分表示这些队列需要添加到 processQueueTable 对象中，创建这些队列的消费快照。

  最后创建拉取消息请求列表，并**将请求分发到消息拉取服务，进入拉取消息环节**。 

# 5 推拉结合





















# 6 消息消费





















# 7 保存进度





















# 8 重试机制

开源RocketMQ支持延迟消息，但是不支持秒级精度。默认支持18个level的延迟消息，这是通过broker端的messageDelayLevel配置项确定的，如下：

```javascript
messageDelayLevel=1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
```

Broker在启动时，内部会创建一个内部主题：SCHEDULE_TOPIC_XXXX，根据延迟 level 的个数，创建对应数量的队列，也就是说 18 个 level 对应了 18 个队列。

注意事项：

- 一条消息无论重试多少次，这些重试消息的 Message ID 都不会改变。
- 消息重试只针对集群消费模式生效；广播消费模式不提供失败重试特性，即消费失败后，失败消息不再重试，继续消费新的消息。

策略概述：

消息收发过程中，若 Consumer 消费某条消息失败或消费超时，则 RocketMQ 会在重试间隔时间后，将消息重新投递给 Consumer 消费，若达到最大重试次数后消息还没有成功被消费，则消息将被投递至死信队列。

消息重试主要功能行为包括：

- **重试间隔**：上一次消费失败或超时后，距下次消息可被重新消费的间隔时间。
- **最大重试次数**：消息消费失败后，可被 RocketMQ 重复投递的最大次数。

# 9 总结











------

如果我的文章对你有所帮助，还请帮忙**点赞、在看、转发**一下，你的支持会激励我输出更高质量的文章，非常感谢！

![](https://oscimg.oschina.net/oscnet/up-9a84ebdc2d42e5dce07580c3f1dc7865795.JPEG)





