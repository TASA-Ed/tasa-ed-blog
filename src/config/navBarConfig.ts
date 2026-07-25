import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
		{
			name: "文章",
			url: "/content/",
			icon: "material-symbols:article-outline",
			children: [
				LinkPresets.Archive,
				LinkPresets.Tags,
				LinkPresets.Categories
			]
		},
		LinkPresets.cLink,
		LinkPresets.Gallery,
		LinkPresets.Friends,
		LinkPresets.Guestbook,
		{
			name: "关于",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				LinkPresets.Sponsor,
				LinkPresets.About,
			]
		}
	];

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	meiliSearchConfig: {
		INDEX_NAME: "astro_blog",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_SEARCH_KEY:
			"abe955d602ba2a76e7ec203374535d5c0d3257afb0df5f8c14d9378da6859b70",
	},
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
		pageKey: "friends",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	cLink: {
		name: "链接",
		url: "/links/",
		icon: "material-symbols:link",
		children: [
			{
				name: "GitHub",
				url: "https://github.com/ccd2s",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/1936406435",
				external: true,
				icon: "fa7-brands:bilibili",
			},
			{
				name: "QQ群",
				url: "https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/",
				external: true,
				icon: "fa7-brands:qq",
			},
		]
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
