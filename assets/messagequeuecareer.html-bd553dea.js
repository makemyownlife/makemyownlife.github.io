const e=JSON.parse('{"key":"v-4205c9c4","path":"/codelife/messagequeuecareer.html","title":"我与消息队列的八年情缘","lang":"zh-CN","frontmatter":{"title":"我与消息队列的八年情缘","category":"技术人生","tag":["opensource","消息队列"],"head":[["meta",{"name":"keywords","content":"开源,ActiveMQ,RabbitMQ,RocketMQ"}],["meta",{"name":"description","content":"消息队列，缓存，分库分表是高并发解决方案三剑客，而消息队列是我最喜欢，也是思考最多的技术。"}],["meta",{"property":"og:url","content":"https://javayong.cn/codelife/messagequeuecareer.html"}],["meta",{"property":"og:site_name","content":"勇哥Java实战"}],["meta",{"property":"og:title","content":"我与消息队列的八年情缘"}],["meta",{"property":"og:description","content":"谈起消息队列，内心还是会有些波澜。 消息队列，缓存，分库分表是高并发解决方案三剑客，而消息队列是我最喜欢，也是思考最多的技术。 我想按照下面的四个阶段分享我与消息队列的故事，同时也是对我技术成长经历的回顾。 初识：ActiveMQ 进阶：Redis&amp;RabbitMQ 升华：MetaQ 钟情：RocketMQ 1 初识ActiveMQ 1.1 异步&amp;解耦"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-20T06:53:02.000Z"}],["meta",{"property":"article:author","content":"勇哥"}],["meta",{"property":"article:tag","content":"opensource"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2023-11-20T06:53:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"我与消息队列的八年情缘\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-20T06:53:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"勇哥\\",\\"url\\":\\"https://javayong.cn/article/\\"}]}"]],"description":"谈起消息队列，内心还是会有些波澜。 消息队列，缓存，分库分表是高并发解决方案三剑客，而消息队列是我最喜欢，也是思考最多的技术。 我想按照下面的四个阶段分享我与消息队列的故事，同时也是对我技术成长经历的回顾。 初识：ActiveMQ 进阶：Redis&amp;RabbitMQ 升华：MetaQ 钟情：RocketMQ 1 初识ActiveMQ 1.1 异步&amp;解耦"},"headers":[{"level":2,"title":"1 初识ActiveMQ","slug":"_1-初识activemq","link":"#_1-初识activemq","children":[{"level":3,"title":"1.1 异步&解耦","slug":"_1-1-异步-解耦","link":"#_1-1-异步-解耦","children":[]},{"level":3,"title":"1.2 调度中心","slug":"_1-2-调度中心","link":"#_1-2-调度中心","children":[]},{"level":3,"title":"1.3 重启大法","slug":"_1-3-重启大法","link":"#_1-3-重启大法","children":[]},{"level":3,"title":"1.4 复盘","slug":"_1-4-复盘","link":"#_1-4-复盘","children":[]}]},{"level":2,"title":"2 进阶Redis&RabbitMQ","slug":"_2-进阶redis-rabbitmq","link":"#_2-进阶redis-rabbitmq","children":[{"level":3,"title":"2.1 Redis可以做消息队列吗","slug":"_2-1-redis可以做消息队列吗","link":"#_2-1-redis可以做消息队列吗","children":[]},{"level":3,"title":"2.2 RabbitMQ是管子不是池子","slug":"_2-2-rabbitmq是管子不是池子","link":"#_2-2-rabbitmq是管子不是池子","children":[]}]},{"level":2,"title":"3 升华MetaQ","slug":"_3-升华metaq","link":"#_3-升华metaq","children":[{"level":3,"title":"3.1 惊艳消费者模型","slug":"_3-1-惊艳消费者模型","link":"#_3-1-惊艳消费者模型","children":[]},{"level":3,"title":"3.2 激进的消峰","slug":"_3-2-激进的消峰","link":"#_3-2-激进的消峰","children":[]},{"level":3,"title":"3.3 消息SDK封装","slug":"_3-3-消息sdk封装","link":"#_3-3-消息sdk封装","children":[]}]},{"level":2,"title":"3.4 重构MetaQ , 自成体系","slug":"_3-4-重构metaq-自成体系","link":"#_3-4-重构metaq-自成体系","children":[]},{"level":2,"title":"4 钟情RocketMQ","slug":"_4-钟情rocketmq","link":"#_4-钟情rocketmq","children":[{"level":3,"title":"4.1 开源的盛宴","slug":"_4-1-开源的盛宴","link":"#_4-1-开源的盛宴","children":[]},{"level":3,"title":"4.2 Kafka: 大数据生态的不可或缺的部分","slug":"_4-2-kafka-大数据生态的不可或缺的部分","link":"#_4-2-kafka-大数据生态的不可或缺的部分","children":[]},{"level":3,"title":"4.3 如何技术选型","slug":"_4-3-如何技术选型","link":"#_4-3-如何技术选型","children":[]}]},{"level":2,"title":"5 写到最后","slug":"_5-写到最后","link":"#_5-写到最后","children":[]}],"git":{"createdTime":1700463182000,"updatedTime":1700463182000,"contributors":[{"name":"makemyownlife","email":"zhangyong7120180@163.com","commits":1}]},"readingTime":{"minutes":26.29,"words":7886},"filePathRelative":"codelife/messagequeuecareer.md","localizedDate":"2023年11月20日","excerpt":"<p>谈起消息队列，内心还是会有些波澜。</p>\\n<p><strong>消息队列</strong>，缓存，分库分表是高并发解决方案三剑客，而消息队列是我最喜欢，也是思考最多的技术。</p>\\n<p>我想按照下面的四个阶段分享我与消息队列的故事，同时也是对我技术成长经历的回顾。</p>\\n<ul>\\n<li>初识：ActiveMQ</li>\\n<li>进阶：Redis&amp;RabbitMQ</li>\\n<li>升华：MetaQ</li>\\n<li>钟情：RocketMQ</li>\\n</ul>\\n<h2> <strong>1 初识ActiveMQ</strong></h2>\\n<h3> <strong>1.1 异步&amp;解耦</strong></h3>","copyright":{"author":"勇哥"},"autoDesc":true}');export{e as data};