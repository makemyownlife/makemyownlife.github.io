const e=JSON.parse('{"key":"v-4a827335","path":"/mq/rocketmq4/06RocketMQ4_consumer.html","title":"RocketMQ 消费者","lang":"zh-CN","frontmatter":{"title":"RocketMQ 消费者","category":"RocketMQ","tag":["RocketMQ","消息队列"],"head":[["meta",{"name":"keywords","content":"RocketMQ,消息队列,设计,精要,Nameserver,名字服务,消费者"}],["meta",{"name":"description","content":"一本RocketMQ电子书，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javayong.cn/mq/rocketmq4/06RocketMQ4_consumer.html"}],["meta",{"property":"og:site_name","content":"勇哥Java实战"}],["meta",{"property":"og:title","content":"RocketMQ 消费者"}],["meta",{"property":"og:description","content":"RocketMQ 是笔者非常喜欢的消息队列，4.9.X 版本是目前使用最广泛的版本，但它的消费逻辑相对较重，很多同学学习起来没有头绪。 这篇文章，笔者梳理了 RocketMQ 的消费逻辑，希望对大家有所启发。 1 架构概览 在展开集群消费逻辑细节前，我们先对 RocketMQ 4.X 架构做一个概览。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T08:13:01.000Z"}],["meta",{"property":"article:author","content":"勇哥"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2023-11-17T08:13:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 消费者\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-17T08:13:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"勇哥\\",\\"url\\":\\"https://javayong.cn/article/\\"}]}"]],"description":"RocketMQ 是笔者非常喜欢的消息队列，4.9.X 版本是目前使用最广泛的版本，但它的消费逻辑相对较重，很多同学学习起来没有头绪。 这篇文章，笔者梳理了 RocketMQ 的消费逻辑，希望对大家有所启发。 1 架构概览 在展开集群消费逻辑细节前，我们先对 RocketMQ 4.X 架构做一个概览。"},"headers":[{"level":2,"title":"1 架构概览","slug":"_1-架构概览","link":"#_1-架构概览","children":[]},{"level":2,"title":"2 发布订阅","slug":"_2-发布订阅","link":"#_2-发布订阅","children":[]},{"level":2,"title":"3 消费流程","slug":"_3-消费流程","link":"#_3-消费流程","children":[]},{"level":2,"title":"4 负载均衡","slug":"_4-负载均衡","link":"#_4-负载均衡","children":[]},{"level":2,"title":"5 长轮询","slug":"_5-长轮询","link":"#_5-长轮询","children":[]},{"level":2,"title":"6 消费消息","slug":"_6-消费消息","link":"#_6-消费消息","children":[{"level":3,"title":"6.1 并发消费","slug":"_6-1-并发消费","link":"#_6-1-并发消费","children":[]},{"level":3,"title":"6.2 顺序消费","slug":"_6-2-顺序消费","link":"#_6-2-顺序消费","children":[]}]},{"level":2,"title":"7 保存进度","slug":"_7-保存进度","link":"#_7-保存进度","children":[]},{"level":2,"title":"8 重试机制","slug":"_8-重试机制","link":"#_8-重试机制","children":[]},{"level":2,"title":"9 总结","slug":"_9-总结","link":"#_9-总结","children":[]}],"git":{"createdTime":1700101097000,"updatedTime":1700208781000,"contributors":[{"name":"makemyownlife","email":"zhangyong7120180@163.com","commits":3}]},"readingTime":{"minutes":28.35,"words":8506},"filePathRelative":"mq/rocketmq4/06RocketMQ4_consumer.md","localizedDate":"2023年11月16日","excerpt":"<p>RocketMQ 是笔者非常喜欢的消息队列，4.9.X 版本是目前使用最广泛的版本，但它的消费逻辑相对较重，很多同学学习起来没有头绪。</p>\\n<p>这篇文章，笔者梳理了 RocketMQ 的消费逻辑，希望对大家有所启发。</p>\\n<figure><img src=\\"https://www.javayong.cn/pics/temp//qaRc3GjFlL.webp!large\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>\\n<h2> 1 架构概览</h2>\\n<p>在展开集群消费逻辑细节前，我们先对 RocketMQ 4.X 架构做一个概览。</p>","copyright":{"author":"勇哥"},"autoDesc":true}');export{e as data};