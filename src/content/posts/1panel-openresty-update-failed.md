---
title: 1Panel 升级 OpenResty 失败？解决方法
published: 2026-08-17
pinned: false
description: 1Panel 升级 OpenResty 到 1.31.1.1-2-3-noble 时失败时的解决方法
tags: [1Panel,教程,OpenResty]
category: 教程
author: 德二吹风机
draft: false
---

各位好，几天前 1Panel 提示 OpenResty 可以升级了，然后咱就点了一下升级，过了一会儿回来再看发现升级失败了！

提示：

```text
等待应用就绪 失败 : container openresty is not ready: container restart count changed from 1 to 1 during startup
```

然后咱就搜索了一下发现 1Panel 论坛里并没有相关解决方法，只有一个古早的帖子说可能是新版本更新覆盖了 OpenResty
 的主配置文件。

然后我看咱确实修改了主配置文件，还在其他网站里面引用了这些配置。

所以我就将我新增的配置放进了 \<OpenResty 网站目录\>/conf.d/ 文件夹里面，再点击升级。

就好了！

## 总结

这次更新应该是更新了 OpenResty
 的主配置文件，然后你一更新就会覆盖掉原来你修改过的配置文件，如果你在别的地方引用过主配置文件里面的配置自然就会报错。

如果需要更新的话就把你新增的配置创建一个 `.conf` 文件，放入 \<OpenResty 网站目录\>/conf.d/ 文件夹里（建议命名成 0a 开头这样的，可以优先加载），就可以升级了。

简单分享一下。
