---
title: 从零开始用 Node.js 写库踩坑记录
published: 2026-04-14
pinned: false
description: 从零开始用 Node.js 写 TypeScript 命令行库踩坑记录。
tags: [Node.js,TypeScript,Rolldown,Vite,教程]
category: 教程
author: 德二吹风机
draft: false
---

最近咱写了一个叫 [NanoYunHu](https://github.com/TASA-Ed/nanoyunhu) 的命令行库，嗯，命令行库，应该是这么叫，反正定义是 能通过命令行运行也可以通过依赖调用。

总之想法的是挺好的，然后就踩坑了（）。

## 构建工具

遇到的第一个坑就是构建工具，本来是想着新时代库肯定要用新的构建工具，什么 esbuild，rollup 去一边吧，我要用 [vite](https://github.com/vitejs/vite)！

而事实是 vite 并不适用（）。

但其实 vite 底层是 [rolldown](https://rolldown.rs/)，所以我就跳过了 vite 直接用上了 rolldown ，然后发现 rolldown 会直接输出成一个文件，不过 rolldown 有个配置项就是 `preserveModules`，打开这个就可以按照源码的结构输出文件。

当然 rolldown 肯定是不能生成 d.ts 文件的，所以我就使用了 [typescript](https://github.com/microsoft/TypeScript) 来生成 d.ts 文件。

还有别的方法也可以生成 d.ts 文件，不过还是绕不过 typescript，要不然就是 [oxc](https://github.com/oxc-project/oxc)。

## 不能在 index.js 写运行

第二个坑就是不能在 index.js 写运行逻辑，这似乎不算坑，只是我脑抽了（）。

毕竟别人是需要 import 你的库的，不能一 import 就自动运行了吧，所以不能在 index.js 写运行逻辑，需要额外加一个 cli.js 之类的。

## 构建的小文件太多

这可能也不算坑，只是咱自己觉得有点怪。

前面提到咱把 rolldown 的 `preserveModules` 打开了，然后这样的话生成的文件就变多了！

比如说你有 30 个 .ts 文件，rolldown build 一下生成了 30 个 .js 文件，然后 typescript 在 build 一下就生成了 30 个 .d.ts 文件，加起来就变成了 60 个文件。

理论上是 60 个文件实际上可能更多，比如说你 import 了 package.json，rolldown 就会给你生成一个 package.js，这样就变成了 61 个文件。

项目前期的话可能是没多少，到后期源码越来越多，生成的文件也越来越多，然后就有点难受了（）。

所以后来我就改了一下 rolldown 的生成逻辑，只生成 index.js 和 bin.js。

然后我还要改 .d.ts 的生成逻辑，然后就又踩了一个坑。

## 导出逻辑问题与 d.ts 生成问题

首先就是 typescript 7 将不再支持 outFile 配置，所以我只好通过 [rolldown-plugin-dts](https://github.com/sxzz/rolldown-plugin-dts) 生成，然后生成出来的就只有 index.ts 的东西！

这不就奇了怪了吗，然后我就发现原来是入口文件没有重新导出，但是这样的话就很难办了，如果要重新导出所有函数和类型的话起码得写三十多行。

然后就懒得写了（），所以就放弃了 d.ts 的生成，只保留 index.js ，等过几天 Node.js 26 或许还可以添加一个 [SEA](https://nodejs.org/api/single-executable-applications.html) 支持。

## 顿悟！原来要 Monorepo

琢磨了一夜，发现其实不能在一个包里，假设用 Monorepo 分成 @nanoyunhu/core，@nanoyunhu/protocol 和 @nanoyunhu/cli 就很清晰明了了。

比如 @nanoyunhu/cli 单独负责命令行运行，就不用分出来个神秘 bin.js 了。

不过其实也要重新导出，但是可读性变好了，原来可能要哗啦哗啦导出一大堆，分不清是真的，就算要整理也挺费时费力的，一个包负责一个东西就挺好的。

## 总结

本来是想要写一个命令行库的，后来就变成纯命令行了，所以以我的经验来告诫众人，写命令行库一定要 Monorepo（）。
