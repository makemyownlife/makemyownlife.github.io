import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as l,a as t,b as e,d as n,w as h,e as u}from"./app-549a0b82.js";const g={},c=t("strong",null,"常见 SQL 优化手段总结",-1),p={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html",target:"_blank",rel:"noopener noreferrer"},d=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/javamianshizhibei/sql-optimization.png",alt:"",tabindex:"0"}),t("figcaption")],-1),f={href:"https://javaguide.cn/zhuanlan/java-mian-shi-zhi-bei.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javaguide.cn/#/",target:"_blank",rel:"noopener noreferrer"},m=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/xingqiu/image-20220304102536445.png",alt:"《Java 面试指北》内容概览",tabindex:"0"}),t("figcaption",null,"《Java 面试指北》内容概览")],-1),x=t("h2",{id:"星球介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#星球介绍","aria-hidden":"true"},"#"),e(" 星球介绍")],-1),b={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},q=t("p",null,"下面是星球提供的部分服务（点击下方图片即可获取知识星球的详细介绍）：",-1),k=t("img",{src:"https://oss.javaguide.cn/xingqiu/xingqiufuwu.png",alt:"星球服务",tabindex:"0"},null,-1),z=t("figcaption",null,"星球服务",-1),J=t("p",null,[t("strong",null,"我有自己的原则，不割韭菜，用心做内容，真心希望帮助到你！")],-1),w={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},y=u('<h2 id="如何加入" tabindex="-1"><a class="header-anchor" href="#如何加入" aria-hidden="true">#</a> 如何加入？</h2><p><strong>方式一（不推荐）</strong>：扫描下面的 10 元优惠卷直接加入（续费半价不到）。</p><figure><img src="https://oss.javaguide.cn/xingqiu/xingqiuyouhuijuan-10.jpg" alt="知识星球10元优惠卷" tabindex="0"><figcaption>知识星球10元优惠卷</figcaption></figure><p>使用这种方式进入的话，建议你也添加一下我的个人微信（**备注“星球”**即可），方便后续交流沟通。</p><p><strong>方式二（推荐）</strong>：添加我的个人微信（<strong>javaguide1024</strong>）领取一个 <strong>30</strong> 元的星球专属优惠券（续费半价不到）。</p><p><strong>一定要备注“优惠卷”</strong>，不然通过不了。</p><figure><img src="https://oss.javaguide.cn/xingqiu/weixin-guidege666.jpeg" alt="个人微信" tabindex="0"><figcaption>个人微信</figcaption></figure><p><strong>无任何套路，无任何潜在收费项。用心做内容，不割韭菜！</strong></p>',8),L={href:"https://t.zsxq.com/0d18KSarv",target:"_blank",rel:"noopener noreferrer"},N=t("p",null,"随着时间推移，星球积累的干货资源越来越多，我花在星球上的时间也越来越多，星球的价格会逐步向上调整，想要加入的同学一定要尽早。",-1),V=t("p",null,[e("不过， "),t("strong",null,"一定要确定需要再进"),e(" 。并且， "),t("strong",null,"三天之内觉得内容不满意可以全额退款"),e(" 。")],-1);function B(E,S){const a=o("ExternalLinkIcon"),i=o("RouterLink");return s(),l("div",null,[t("p",null,[c,e(" 相关的内容为我的"),t("a",p,[e("知识星球"),n(a)]),e("（点击链接即可查看详细介绍以及加入方法）专属内容，已经整理到了"),t("a",_,[e("《Java 面试指北》"),n(a)]),e("中。")]),d,t("p",null,[t("a",f,[e("《Java 面试指北》"),n(a)]),e("（点击链接即可查看详细介绍）的部分内容展示如下，你可以将其看作是 "),t("a",v,[e("JavaGuide"),n(a)]),e(" 的补充完善，两者可以配合使用。")]),m,x,t("p",null,[e("为了帮助更多同学准备 Java 面试以及学习 Java ，我创建了一个纯粹的"),t("a",b,[e(" Java 面试知识星球"),n(a)]),e("。虽然收费只有培训班/训练营的百分之一，但是知识星球里的内容质量更高，提供的服务也更全面，非常适合准备 Java 面试和学习 Java 的同学。")]),t("p",null,[t("strong",null,[e("欢迎准备 Java 面试以及学习 Java 的同学加入我的 "),t("a",j,[e("知识星球"),n(a)]),e("，干货非常多，学习氛围也很不错！收费虽然是白菜价，但星球里的内容或许比你参加上万的培训班质量还要高。")])]),q,t("figure",null,[n(i,{to:"/about-the-author/zhishixingqiu-two-years.html"},{default:h(()=>[k]),_:1}),z]),J,t("p",null,[e("如果你感兴趣的话，不妨花 3 分钟左右看看星球的详细介绍："),t("a",w,[e("JavaGuide 知识星球详细介绍"),n(a)]),e("。")]),y,t("p",null,[e("进入星球之后，记得查看 "),t("strong",null,[t("a",L,[e("星球使用指南"),n(a)])]),e(" （一定要看！） 。")]),N,V])}const I=r(g,[["render",B],["__file","sql-optimization.html.vue"]]);export{I as default};