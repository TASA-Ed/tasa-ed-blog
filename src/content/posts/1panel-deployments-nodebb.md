---
title: 【教程】使用1Panel部署NodeBB论坛
published: 2025-04-06
pinned: false
description: 使用1Panel部署NodeBB论坛教程
tags: [服务器,NodeBB,1Panel,教程]
category: 教程
author: 德二吹风机
draft: false
---

各位好，1个月前，我给 1Panel 应用商店提交了 [NodeBB](https://github.com/1Panel-dev/appstore/pull/3389) 应用，目前已经是可以通过 1Panel 应用商店来部署 NodeBB 了，但可能依然有人不会部署，所以我写了这篇教程。

## 准备工作

在安装 NodeBB 之前还需要一些准备工作。

### 配置镜像加速（国内服务器）

由于 NodeBB 的镜像放置在 GHCR 上，因此在国内拉取可能会非常慢，那么我们就需要配置一个镜像加速源了，首先打开 1Panel，进入容器的配置页，设置镜像加速，然后填写 `https://ghcr.nju.edu.cn`，填写完成后点击确认：

![配置镜像加速](/public/assets/images/posts/1panel-deployments-nodebb/配置镜像加速.png)

## 安装&配置数据库

NodeBB 有一个数据库抽象层（DBAL），允许用户为自己选择的数据库编写驱动程序。目前支持以下数据库：

- MongoDB（默认)
- Redis
- PostgreSQL

本教程默认和推荐你使用 1Panel 应用商店安装上述数据库。

### MongoDB（默认)

如果你担心使用 Redis 会耗尽内存，或者希望你的论坛更容易扩展，那么你可以选择安装 MongoDB。

#### 安装 MongoDB

在应用商店的数据库页安装 MongoDB 即可：

![安装 MongoDB](/public/assets/images/posts/1panel-deployments-nodebb/安装%20MongoDB.png)

一般情况下版本选择最新，用户名，密码和端口保持默认即可。

只在本地使用时建议将端口外部访问关闭。

#### 配置 MongoDB

首先进入容器页，找到 MongoDB 容器，在操作那一栏上点击终端：

![容器终端](/public/assets/images/posts/1panel-deployments-nodebb/容器终端.png)

随后在命令那一栏选择 bash（或其他 sh ，按照个人习惯来），连接即可：

![bash](/public/assets/images/posts/1panel-deployments-nodebb/bash.png)

一般的 MongoDB 管理通过 MongoDB Shell `mongosh` 完成，这里假设 MongoDB 使用**默认端口** `27017` 并部署在**本地主机**上，在命令行中输入：

```bash
mongosh
```

如果一切正确，命令行中应显示为：

![mongosh](/public/assets/images/posts/1panel-deployments-nodebb/mongosh.png)

随后我们切换到内置的 `admin` 数据库：

```bash
use admin
```

![admin](/public/assets/images/posts/1panel-deployments-nodebb/admin.png)

在配置之前我们需要进行身份验证，请将 `<用户>` 更换为安装时填写的用户名，`<密码>` 更换为安装时填写的密码，如果忘记了请在应用商店已安装应用的参数页面查看：

```bash
db.auth("<用户>","<密码>")
```

如果一切正确，则提示 `{ ok: 1 }` ：

![auth](/public/assets/images/posts/1panel-deployments-nodebb/auth.png)

随后我们需要为 NodeBB 创建一个 `nodebb` 数据库，在命令行输入：

```bash
use nodebb
```

将创建并将上下文切换到 `nodebb`。

然后我们创建具有相应权限的 `nodebb` 用户，请将 `<输入一个密码>` 替换为你自己的密码：

```bash
db.createUser( { user: "nodebb", pwd: "<输入一个密码>", roles: [ { role: "readWrite", db: "nodebb" }, { role: "clusterMonitor", db: "admin" } ] } )
```

`readWrite` 权限允许 NodeBB 从 `nodebb` 数据库中存储和检索数据。`clusterMonitor` 权限允许 NodeBB 以只读方式访问查询数据库服务器统计数据，这些数据随后会在 NodeBB 管理控制面板 (ACP) 中显示。

退出 Mongo Shell：

```bash
quit()
```

完成后我们可以验证用户是否可以连接，请使用 `--username` 和 `--authenticationDatabase` 选项。`mongosh` 会提示你输入密码，并在你输入密码时将其隐藏，请将 `<mongo>` 替换为安装时填写的用户名：

```bash
mongosh "mongodb://localhost:27017" --username <mongo> --authenticationDatabase admin

mongosh "mongodb://localhost:27017" --username nodebb --authenticationDatabase nodebb
```

如果一切配置正确，Mongo Shell 将会连接。使用 `quit()` 退出 shell。

### Redis

NodeBB 默认使用 MongoDB 作为其主要数据存储，尽管我们也支持 Redis。Redis 和 MongoDB 都被视为在 NodeBB 中具有一流支持的数据存储，因此，如果您使用 Redis 而不是 MongoDB 作为数据存储时遇到错误，我们仍然鼓励您[提交问题](https://github.com/NodeBB/NodeBB/issues/new)。

Redis 在某些高可扩展性方案中可能很有用，因为它的设计将整个数据库保持在活动内存中。这种策略允许查找非常非常快，与 MongoDB 相比，您可能会看到一些不小的提高。

然而，这个优势是一把双刃剑。由于 Redis 将整个数据库保存在活动内存中，这意味着您的系统内存需要比数据集大两倍（如果不是更多的话）（即 2GB 的数据需要至少 4GB 的系统）。Redis 需要两倍的内存（与其数据集相比），因为其备份策略包括在将内存数据持久保存到磁盘之前克隆内存数据。

仔细考虑您的硬件选项，看看这种权衡是否值得您的安装。请记住，NodeBB 团队为需要它的人维护着 Redis 到 MongoDB 的迁移服务。有关更多信息，请联系 [sales@nodebb.org](mailto:sales@nodebb.org)。

#### 安装 Redis

在应用商店的数据库页安装 Redis 即可：

![安装 Redis](/public/assets/images/posts/1panel-deployments-nodebb/安装%20Redis.png)

一般情况下版本选择最新，密码和端口保持默认即可。

只在本地使用时建议将端口外部访问关闭。

#### NodeBB 安装程序

在 NodeBB 的设置阶段，系统会问您一系列与数据库相关的问题。当问及使用哪个数据存储时，请输入 `redis`。

- Redis 实例的主机 IP 或地址
  - `127.0.0.1` 或 `localhost` 适用于本地安装
- Redis 实例的主机端口
  - 默认情况下，Redis 监听端口为 `6379`。如果在 `/etc/redis.conf` 中做了更改，也请在此处进行调整
- Redis 数据库的密码
  - 输入在 `/etc/redis.conf` 中设置的密码。如果没有修改该文件，则可能没有密码，可以留空。我们建议你设置一个密码。
- 使用哪个数据库（0...n）
  - Redis 默认使用 16 个数据库，编号从 0 到 15。你可以选择其中任何一个。

### PostgreSQL

注:尽管 NodeBB 完全支持 PostgreSQL，但我们仍然建议使用MongoDB和Redis，因为这是 NodeBB 官方社区和托管客户端上使用的。

#### 安装 PostgreSQL

在应用商店的数据库页安装 PostgreSQL 即可：

![安装 PostgreSQL](/public/assets/images/posts/1panel-deployments-nodebb/安装%20PostgreSQL.png)

一般情况下版本选择最新，密码和端口保持默认即可。

只在本地使用时建议将端口外部访问关闭。

## 安装

在所有准备工作都完成之后我们就可以开始安装 NodeBB 了。

### 安装 NodeBB

首先在应用商店的建站页找到 NodeBB，并点击安装：

![NodeBB](/public/assets/images/posts/1panel-deployments-nodebb/安装%20NodeBB.png)

默认情况下版本选择最新，端口默认即可，因为安装时需要通过网页安装程序配置，所以必须打开端口外部访问：

![端口外部访问](/public/assets/images/posts/1panel-deployments-nodebb/端口外部访问.png)

因为在首次启动时需要安装 npm 模块，因此需要等待一会，在此期间我们可以来到已安装应用页面找到 NodeBB，打开日志：

![NodeBB 日志](/public/assets/images/posts/1panel-deployments-nodebb/NodeBB%20日志.png)

当日志中输出 `Web installer listening on http://0.0.0.0:4567` 时我们就可以打开网页安装程序了（在上图中，日志的下方有一个服务端口，点击它即可快速打开）：

![网页安装程序](/public/assets/images/posts/1panel-deployments-nodebb/网页安装程序.png)

### 网页安装程序

随后你会进入网页安装程序，请按照下图文字进行配置：

![创建账号](/public/assets/images/posts/1panel-deployments-nodebb/创建账号.png)

![数据库](/public/assets/images/posts/1panel-deployments-nodebb/数据库.png)

一切就绪后就可以点击`Install NodeBB`进行安装。

### 大功告成

安装完成后应显示为：

![论坛](/public/assets/images/posts/1panel-deployments-nodebb/论坛.png)

登录你刚才创建的管理员账户，点击右栏的齿轮即可开始配置：

![管理面板](/public/assets/images/posts/1panel-deployments-nodebb/管理面板.png)

## 结尾

> 本文章由本人原创，部分参考 [https://docs.nodebb.org/](https://docs.nodebb.org/)。
