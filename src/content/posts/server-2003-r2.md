---
title: 【教程】在2025年使用Server 2003 R2搭建网站
published: 2025-03-28
pinned: false
description: 【教程】在2025年使用Server 2003 R2搭建网站
tags: [教程,Windows,网站]
category: 教程
author: 德二吹风机
draft: false
---

各位好，今天我们将尝试在2025年使用 Windows Server 2003 R2（在后文中称为 Server 2003 R2）搭建一个网站，使用的是 VMware Workstation Pro 虚拟机，需要注意的是，本教程的所有内容仅供非生产环境下使用，因为 Server 2003 R2 早已停止支持（主流支持与延长支持），在生产环境下使用非常不安全。

## 下载镜像

一般情况下，我们是没有 Server 2003 R2 镜像的，所以我建议你从 [MSDN, 我告诉你 - 做一个安静的工具站](https://msdn.itellyou.cn/) 中下载。

然后我们在操作系统分类中找到**Windows Server 2003 R2**，然后选择一个版本将CD1和CD2通过BT下载下来，在这里我选择的是Enterprise Edition（企业版）：

![下载镜像](/public/assets/images/posts/server-2003-r2/下载镜像.png)

下载完镜像之后我们就可以开始创建虚拟机了，如果你使用的不是虚拟机，那么请跳转到下个步骤，安装系统。

## 创建虚拟机

首先，进入VMware Workstation Pro 17，点击创建虚拟机并选择自定义：

![创建虚拟机](/public/assets/images/posts/server-2003-r2/创建虚拟机.png)

然后点击下一步，硬件兼容性我们不用管，安装来源我们选择稍后安装操作系统：

![安装来源](/public/assets/images/posts/server-2003-r2/安装来源.png)

操作系统版本我们选择Windows Server 2003后面加上你镜像的版本就行，比如说你镜像版本是Enterprise，就选择Windows Server 2003 Enterprise Edition：

![操作系统版本](/public/assets/images/posts/server-2003-r2/操作系统版本.png)

之后一路下一步即可，到达虚拟机处理器配置那里选择自己物理机能承受的数量（一般是物理机核心数的一半），虚拟机内存那里最低分配1024MB，推荐分配4096MB：

![虚拟机内存](/public/assets/images/posts/server-2003-r2/虚拟机内存.png)

网络类型那里如果需要外部可以访问虚拟机创建的网页的话建议选择桥接模式：

![虚拟机网络](/public/assets/images/posts/server-2003-r2/虚拟机网络.png)

剩下的一路默认然后创建虚拟机即可。

创建虚拟机后我们会到一个新页面，我们点击设备那里的CD/DVD（IDE），选择我们刚才下载的镜像文件（注意，选择CD1！最大的那个！）并打开：

![选择镜像文件](/public/assets/images/posts/server-2003-r2/选择镜像文件.png)

打开完成后我们点击虚拟机设置窗口的确定，就可以开启虚拟机了。

## 安装系统

在我们安装系统时，会先进入到这个页面，我们直接按Enter（回车）即可：

![安装系统-欢迎](/public/assets/images/posts/server-2003-r2/安装系统-欢迎.png)

随后会让你同意一个协议，按F8即可。

之后会进入到磁盘分区界面，这里只演示一般的虚拟机硬盘的处理方法，直接按Enter即可：

![安装系统-磁盘](/public/assets/images/posts/server-2003-r2/安装系统-磁盘.png)

随后会让你格式化这个分区，我们选择哪个都可以，这里我选择快一点的方式，然后直接按Enter：

![安装系统-分区格式化](/public/assets/images/posts/server-2003-r2/安装系统-分区格式化.png)

随后会开始格式化该分区，格式化完成之后会开始复制安装文件，安装文件复制完成之后这部分安装程序就结束了，会提示让你重启，直接按Enter即可。

重启完成后会进入到安装页面：

![XP安装系统](/public/assets/images/posts/server-2003-r2/XP安装系统.png)

这代表已经开始安装了我们等待一会即可，稍等一会，会弹出一个弹窗让你配置语言和区域设置，这一般情况下都是正确的我们直接下一步即可，然后会让你输入姓名和单位，随便输入一个就可以了。

接着会让你输入密钥，这个需要自己解决。

---

然后一路下一步，管理员密码可以设置一个自己喜欢的或者说不设置。

稍等一会，会进入到网络设置中，这个我们不用管，还是一路下一步：

![XP安装系统-网络](/public/assets/images/posts/server-2003-r2/XP安装系统-网络.png)

之后就正式开始了安装，我们等待一会，会自动重启，然后，基本就安装成功了。

但有些人就发现了，还有一个CD2我们没有使用呢？这个CD2其实是需要你在基本系统安装成功之后使用的，安装成功之后我们登录到系统中（如果说你没有设置密码，直接点击确定即可），会弹出这么一个窗口：

![安装完成](/public/assets/images/posts/server-2003-r2/安装完成.png)

这时我们只需要点击右下角的光盘，将ISO镜像文件换成CD2（体积较小的那一个），然后点击虚拟机设置窗口的确定即可：

![CD2](/public/assets/images/posts/server-2003-r2/CD2.png)

随后我们直接点击虚拟机里面弹出的窗口的确定，如果一切正常的话就会弹出这个窗口：

![CD2-安装](/public/assets/images/posts/server-2003-r2/CD2-安装.png)

我们一路点击下一步即可。

## 安装IIS

CD2安装完成之后就会弹出这个窗口：

![后安装](/public/assets/images/posts/server-2003-r2/后安装.png)

是让你安装更新的，但是现在这个没什么用，因为Windows Update早就被微软关闭了，所以说直接点击完成就好。

然后那个窗口会卡一会儿，这就不用担心了我们稍等一会，会弹出这个窗口：

![服务器管理](/public/assets/images/posts/server-2003-r2/服务器管理.png)

我们直接选择添加或删除角色，然后单击下一步：

![添加或删除角色](/public/assets/images/posts/server-2003-r2/添加或删除角色.png)

在部分情况下可能会提示你是否使用第一台服务器配置，我们直接选择自定义就好。

之后会进入到服务器角色页面我们选择应用程序服务器（IIS，ASP.NET），然后单击下一步：

![应用程序服务器](/public/assets/images/posts/server-2003-r2/应用程序服务器.png)

然后会提示你是否添加其他工具如果都不需要，一路下一步即可，随后会提示你将CD1插入驱动器中：

![CD1](/public/assets/images/posts/server-2003-r2/CD1.png)

在这一次我们按照上文的操作将ISO镜像文件换成CD1然后单击确定即可。但切换完成的时候可能会弹出这个B窗口，我们直接关掉就行：

![关闭](/public/assets/images/posts/server-2003-r2/关闭.png)

安装完成后会提示你此服务器是一台应用程序服务器我们单击完成就行。

## 访问IIS

当应用程序服务器安装完成时，我们点击管理此应用程序服务器，然后展开IIS列表进入到网站之中，我们会发现，有一个默认网站：

![IIS列表](/public/assets/images/posts/server-2003-r2/IIS列表.png)

如果状态是正在运行的话，那么就证明网站已经可以正常访问了，我们可以在自带的IE中输入127.0.0.1，就可以看到“建设中”网页了：

![建设中](/public/assets/images/posts/server-2003-r2/建设中.png)

如果说你想要让局域网也能访问到你的网页，那么请先获取自己的局域网IP地址，打开开始菜单，点击控制面板，选择网络连接，里面有个本地连接，我们点击，然后点击支持，连接状态里面有个IP地址，这就是你的局域网IP地址了：

![IP地址](/public/assets/images/posts/server-2003-r2/IP地址.png)

我们得到IP地址之后，直接在主机的浏览器上输入，就可以看到网页了：

![edge浏览器](/public/assets/images/posts/server-2003-r2/edge浏览器.png)

如果需要编辑网站，我们直接右键“默认网站”，然后点击打开，就会弹出资源管理器了：

![资源管理器](/public/assets/images/posts/server-2003-r2/资源管理器.png)

之后我们新建一个网页之类的都可以，但需要注意的是，如果不配置的话，输入的中文编码默认是 gb2312，我们需要在 meta 标签里面添加 `content="text/html; charset=gb2312"`。

## 安装更新

如果说你需要安装更新的话，那么通过 Windows Update 肯定是行不通的，那么这里有两个方法：

### 使用补丁集安装更新

我们可以通过卡饭论坛网友整理的补丁集去安装更新：

[卡饭论坛 Microsoft Windows Server 2003 R2 SP2 CHS 2015.07 更新补丁(x86).exe\_免费高速下载|百度网盘-分享无限制](https://pan.baidu.com/s/1ntGcy9b)

### 使用 LegacyUpdate

近期，有一个叫 LegacyUpdate 的项目，可以帮助修复在早期版本 Windows 上的更新服务：

[Legacy Update: Get back online, activate, and install updates on your legacy Windows PC](https://legacyupdate.net/)

## 结尾

> 本文章由本人原创。
