const e=JSON.parse('{"key":"v-3bf318f4","path":"/mq/rocketmq4/08RocketMQ4_masterslave.html","title":"RocketMQ 主从同步","lang":"zh-CN","frontmatter":{"title":"RocketMQ 主从同步","category":"RocketMQ","tag":["RocketMQ","消息队列"],"head":[["meta",{"name":"keywords","content":"RocketMQ,消息队列,设计,精要,Nameserver,消费者,广播消费,主从同步"}],["meta",{"name":"description","content":"一本RocketMQ电子书，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javayong.cn/mq/rocketmq4/08RocketMQ4_masterslave.html"}],["meta",{"property":"og:site_name","content":"勇哥Java实战"}],["meta",{"property":"og:title","content":"RocketMQ 主从同步"}],["meta",{"property":"og:description","content":"RocketMQ 主从复制是 RocketMQ 高可用机制之一，数据可以从主节点复制到一个或多个从节点。 这篇文章，我们聊聊 RocketMQ 的主从复制，希望大家读完之后，能够理解主从复制的精髓。 1 同步与异步 在 RocketMQ 的集群模式中，Broker 分为 Master 与 Slave，一个 Master 可以对应多个 Slave，但是一个 Slave 只能对应一个 Master。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T08:13:01.000Z"}],["meta",{"property":"article:author","content":"勇哥"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2023-11-17T08:13:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 主从同步\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-17T08:13:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"勇哥\\",\\"url\\":\\"https://javayong.cn/article/\\"}]}"]],"description":"RocketMQ 主从复制是 RocketMQ 高可用机制之一，数据可以从主节点复制到一个或多个从节点。 这篇文章，我们聊聊 RocketMQ 的主从复制，希望大家读完之后，能够理解主从复制的精髓。 1 同步与异步 在 RocketMQ 的集群模式中，Broker 分为 Master 与 Slave，一个 Master 可以对应多个 Slave，但是一个 Slave 只能对应一个 Master。"},"headers":[{"level":2,"title":"1 同步与异步","slug":"_1-同步与异步","link":"#_1-同步与异步","children":[]},{"level":2,"title":"2 元数据复制","slug":"_2-元数据复制","link":"#_2-元数据复制","children":[]},{"level":2,"title":"3 消息数据复制","slug":"_3-消息数据复制","link":"#_3-消息数据复制","children":[]},{"level":2,"title":"4 同步的实现","slug":"_4-同步的实现","link":"#_4-同步的实现","children":[]},{"level":2,"title":"5 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1700101097000,"updatedTime":1700208781000,"contributors":[{"name":"makemyownlife","email":"zhangyong7120180@163.com","commits":4}]},"readingTime":{"minutes":5.64,"words":1691},"filePathRelative":"mq/rocketmq4/08RocketMQ4_masterslave.md","localizedDate":"2023年11月16日","excerpt":"<p>RocketMQ 主从复制是 RocketMQ 高可用机制之一，数据可以从主节点复制到一个或多个从节点。</p>\\n<p>这篇文章，我们聊聊 RocketMQ 的主从复制，希望大家读完之后，能够理解主从复制的精髓。</p>\\n<figure><img src=\\"https://www.javayong.cn/pics/temp//NlcPeBacCl.png\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>\\n<h2> 1 同步与异步</h2>\\n<p>在 RocketMQ 的集群模式中，Broker 分为 Master 与 Slave，一个 Master 可以对应多个 Slave，但是一个 Slave 只能对应一个 Master。</p>","copyright":{"author":"勇哥"},"autoDesc":true}');export{e as data};