---
title: 自行实现查询SCP：秘密实验室服务器信息（A2S 协议）
published: 2025-11-01
pinned: false
description: 自行实现查询SCP：秘密实验室服务器信息（A2S 协议）
tags: [游戏,A2S,PHP,服务器]
category: 教程
author: 德二吹风机
draft: false
---

各位好呀， 本文章要讨论的就是如何自行实现查询 SCP：Secret Laboratory 游戏服务器信息（如人数）。首先，对于已列入官方服务器列表的服务器是可以直接使用 Northwood 提供的[查询 API](https://api.scpslgame.com/) 的，但是，如果你并没有在列表上的服务器，或者说 IP 因为某些原因被 Cloudflare 屏蔽无法使用 Northwood 的查询 API，那么就需要考虑自行实现了。

自行实现的方法有很多种，比如你可以自己写一个插件获取信息并开放一个查询接口出来，或者使用 [A2S 协议](https://developer.valvesoftware.com/wiki/Server_queries) 查询服务器，这就是本文要讲的内容。

## 关于 A2S 协议

A2S 是一种基于 UDP 的游戏服务器查询协议，由 Valve Software 作为 Steam SDK 的一部分维护，而 SCP：Secret Laboratory 同样支持此协议，使我们能够直接获取服务器信息。

## 注意事项

在文章的主要内容开始之前，我要讲一些注意事项...：

- 由于 A2S 使用 UDP 协议，所以请确保你的查询环境（如 VPS/云服务器）未封锁 UDP。
- 有相当一部分位于中国的服务器屏蔽了来自海外的 UDP 请求，因此如果你的查询环境在中国境外，则可能无法正常获取这些服务器的信息。

请一定要认真阅读这些，谢谢...

## 实现步骤

因为在 [Server queries/Implementations](https://developer.valvesoftware.com/wiki/Server_queries#Implementations) 中有 30+ 种 A2S 库，所以咱们将借助成熟的开发库来实现，避免从零造轮子，以 PHP 为例，本文使用 [xPaw/PHP-Source-Query](https://github.com/xPaw/PHP-Source-Query) PHP 库做示例。

这个库共提供了 8 个函数，除去连接服务器相关的有 6 个，但是在这 6 个函数中，SCP: Secret Laboratory 服务器只支持应答 GetInfo 函数，使用其他函数不会返回任何信息（只会报错），不过好消息是 GetInfo 获取的信息中包含了人数等，对于基础查询来说是够用的了。

### 安装

这里假设你已经配置好了 PHP 开发环境和 Composer 。在项目目录中执行以下命令安装依赖：

```bash
composer require xpaw/php-source-query-class
```

（在国内网络环境下可能安装缓慢，可以考虑配置 Composer 中国镜像。）

### 编写代码

在你的项目目录中创建一个 PHP 文件，并写入以下代码：

```php
<?php
require 'vendor/autoload.php';

use xPaw\SourceQuery\SourceQuery;
// 设置响应头
header("Content-Type: text/plain; X-Content-Type-Options: nosniff; charset=utf-8");

// 服务器配置常量
const SQ_SERVER_ADDR = '127.0.0.1'; // 替换为你的服务器 IP
const SQ_SERVER_PORT = 7777; // 替换为你的服务器端口
const SQ_TIMEOUT = 1; // 超时时间（秒）
const SQ_ENGINE = SourceQuery::SOURCE; // 请勿修改

$Query = new SourceQuery();
try
{
    // 连接服务器
    $Query->Connect(SQ_SERVER_ADDR, SQ_SERVER_PORT, SQ_TIMEOUT, SQ_ENGINE);
    // 执行查询并打印原始结果
    print_r($Query->GetInfo());
}
catch( Exception $e )
{
    // 报错
    echo $e->getMessage();
}
finally
{
    // 确保断开连接
    $Query->Disconnect( );
}
```

### 运行

运行此 PHP 文件，如果查询成功，你将看到类似以下的输出结构：

```php
Array
(
    [Protocol] => 17
    [HostName] => [CN]BA:基沃托斯 沙勒服 BGP轻插服-沙勒本部 服务器群:917260212 有规则服务器 回合已进行[00:00] | 0/0 SCPs 存活 BGP/设施冰封/文字聊天/粉糖刷新/无限体力＆子弹/BA插件角色/娱乐插件Exiled 9.10.0SAC 4.3.8
    [Map] => Facility
    [ModDir] => scp secret laboratory
    [ModDesc] => SCP: Secret Laboratory
    [AppID] => 44970
    [Players] => 23
    [MaxPlayers] => 45
    [Bots] => 0
    [Dedicated] => d
    [Os] => w
    [Password] => 
    [Secure] => 
    [Version] => 14.2.0
    [ExtraDataFlags] => 145
    [GamePort] => 55513
    [SteamID] => 0
    [GameID] => 700330
)
```

否则：

```php
Failed to read any data from socket
```

如果查询失败的话，请检查常量是否配置正确，如果都配置正确的话可以仔细阅读一下注意事项，实在不行可以到评论区中寻求帮助（注：请提供详细的日志与运行环境信息）。

## 结语

至此，你已经成功自行实现了查询 SCP: Secret Laboratory 服务器，获取到数据之后可以自行加工等，希望本文章对你有帮助，拜拜！

> By 德二吹风机
