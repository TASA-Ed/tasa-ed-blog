import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
    {
        title: "鹰歌游戏引擎文档",
        imgurl: "https://docs-mf.tasaed.top/assets/image/TwemojiEagle.svg",
        desc: "一个关于鹰歌游戏引擎的文档",
        siteurl: "https://docs-mf.tasaed.top/",
        tags: ["TASA-Ed的网站"],
        weight: 10,
        enabled: true,
    },
    {
        title: "TASA-Ed 百科",
        imgurl: "https://wiki.tasaed.top/assets/logo/tasaed.svg",
        desc: "TASA-Ed工作室的百科wiki",
        siteurl: "https://wiki.tasaed.top/",
        tags: ["TASA-Ed的网站"],
        weight: 10,
        enabled: true,
    },
    {
        title: "张洪Heo",
        imgurl: "https://bu.dusays.com/2022/12/28/63ac2812183aa.png",
        desc: "分享设计与科技生活",
        siteurl: "https://blog.zhheo.com/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "新 · 都在",
        imgurl: "/blog/assets/logos/friends/xindu_logo.png",
        desc: "Carol小屋",
        siteurl: "https://blog.xindu.site/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "iMaeGoo’s Blog",
        imgurl: "https://www.imaegoo.com/images/avatar.jpg",
        desc: "虹墨空间站",
        siteurl: "https://www.imaegoo.com/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "Anyeの小站",
        imgurl: "https://www.anye.xyz/upload/Anye-logo-white.webp",
        desc: "Always Nurturing Your Enthusiasm",
        siteurl: "https://www.anye.xyz/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "Liu Zijian's Blog",
        imgurl: "/blog/assets/logos/friends/liuzijian_logo.jpg",
        desc: "Keep on going never give up",
        siteurl: "https://blog.liuzijian.com",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "Zyx的小窝",
        imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2078170660&spec=100",
        desc: "人生海海，山山而川，不过尔尔。",
        siteurl: "https://www.dorazhang.cn/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "Steven的博客",
        imgurl: "https://blog.stevenw.cc/upload/logo.png",
        desc: "没有既定的终点，只有无限的探索。",
        siteurl: "https://blog.stevenw.cc/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "日出资源网",
        imgurl: "/blog/assets/logos/friends/rnmcnm_logo.webp",
        desc: "活动，教程，技术，资源反正奇怪又有趣~",
        siteurl: "https://www.rnmcnm.com",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "LogDict",
        imgurl: "https://www.logdict.com/upload/avatar-links2.jpg",
        desc: "一个专注于记录, 分享, 学习的网站",
        siteurl: "https://www.logdict.com",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "希乐博客",
        imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=1043865083&spec=640",
        desc: "总有人间人间一两风，吹我十万八千梦",
        siteurl: "https://blog.xlenco.top",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "鹰歌框架游戏引擎",
        imgurl: "/blog/assets/logos/logo-makerframe.png",
        desc: "鹰歌MakerFrame框架游戏引擎",
        siteurl: "https://gitee.com/leamus/MakerFrame/",
        tags: ["其他"],
        weight: 8,
        enabled: true,
    },
    {
        title: "Astro",
        imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
        desc: "Astro 是一款面向现代网络的网站构建工具",
        siteurl: "https://github.com/withastro/astro",
        tags: ["其他"],
        weight: 8,
        enabled: true,
    },
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
    return friendsConfig
        .filter((friend) => friend.enabled)
        .sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
