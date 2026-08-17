import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
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
        imgurl: "/blog/assets/logos/friends/zhheo_logo.avif",
        desc: "分享设计与科技生活",
        siteurl: "https://blog.zhheo.com/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "新 · 都在",
        imgurl: "/blog/assets/logos/friends/xindu_logo.avif",
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
        imgurl: "/blog/assets/logos/friends/liuzijian_logo.avif",
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
        title: "B84F2246 的节点",
        imgurl: "https://assets.b84f2246.top/img/avatar.png",
        desc: "TECH OTAKUS SAVE THE WORLD!",
        siteurl: "https://blog.b84f2246.top",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "yyyyt 的文档站",
        imgurl: "https://cf-img.yyyyt.top/avatar/avatar",
        desc: "Bad or Worse!",
        siteurl: "https://docs.yyyyt.top",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "FayeDerolex",
        imgurl: "/blog/assets/logos/friends/fayederolex_logo.avif",
        desc: "一个濒临死亡的沙漠",
        siteurl: "https://fayederolex.top/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "CyanTea的小站",
        imgurl: "/blog/assets/logos/friends/cyantea_logo.avif",
        desc: "不定时写点东西（？",
        siteurl: "https://www.allons-y.uk/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "梦溯·镜影",
        imgurl: "https://img-r2.yumetsuki.moe/3C1952B6737A9989B2E4EFE1563E43E4.png",
        desc: "sleeeeep",
        siteurl: "https://yumetsuki.moe/",
        tags: ["博客"],
        weight: 9,
        enabled: true,
    },
    {
        title: "鹰歌框架游戏引擎",
        imgurl: "/blog/assets/logos/logo-makerframe.avif",
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

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
