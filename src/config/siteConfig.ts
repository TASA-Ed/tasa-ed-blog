import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "TASA-Ed Blog",
	subtitle: "德二吹风机的博客",
	site_url: "https://www.tasaed.top/blog",
	description:
		"德二吹风机的博客！分享有趣的技术和疑难杂症解决方式！",
	keywords: [
		"Firefly",
		"Fuwari",
		"Astro",
		"ACGN",
		"博客",
		"技术博客",
		"静态博客",
	],

	lang: SITE_LANG,

	themeColor: {
		hue: 165, // 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: true, // 对访问者隐藏主题色选择器
		defaultMode: "system", // 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
	},

	favicon: [
		// 留空以使用默认 favicon
		{
			src: "/assets/images/favicon.ico", // 图标文件路径
			theme: "light", // 可选，指定主题 'light' | 'dark'
			sizes: "32x32", // 可选，图标大小
		},
	],

	// 导航栏Logo
	// navbarLogo 支持三种类型：Astro图标库，本地图片，网络图片
	// { type: "icon", value: "material-symbols:home-pin-outline" }
	// { type: "image", value: "/assets/images/logo.webp", alt: "Firefly Logo" }
	// { type: "image", value: "https://example.com/logo.png", alt: "Firefly Logo" }
	navbarLogo: {
		type: "image",
		value: "/assets/images/LiuYingPure3.svg",
		alt: "🍀",
	},
	navbarTitle: "德二吹风机的博客", // 导航栏标题，可以设置为与 title 不同的值，如果不设置则使用 title
	navbarWidthFull: false, // 全宽导航栏，导航栏是否占满屏幕宽度，true：占满，false：不占满

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2022-03-01", // 请修改为你的站点实际开始日期，格式：YYYY-MM-DD

	// 文章页底部的"上次编辑时间"卡片开关
	showLastModified: true,

	// 文章过期阈值（天数），超过此天数才显示"上次编辑"卡片
	outdatedThreshold: 60,

	// OpenGraph图片功能,注意开启后要渲染很长时间，不建议本地调试的时候开启
	generateOgImages: false,

	// 页面开关配置 - 控制特定页面的访问权限，设为false会返回404
	// bangumi的数据为编译时获取的，所以不是实时数据，请配置bangumi.userId
	pages: {
		sponsor: true, // 赞助页面开关
		guestbook: true, // 留言板页面开关，需要配置评论系统
		bangumi: false, // 番组计划页面开关，含追番和游戏，dev调试时只获取一页数据，build才会获取全部数据
	},

	// 文章列表布局配置
	postListLayout: {
		// 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（双列布局）
		// 如果sidebarConfig.ts中侧边栏配置启用了"both"双侧边栏，则无法使用文章列表"grid"网格（双列）布局
		defaultMode: "list",
		// 是否允许用户切换布局
		allowSwitch: false,

		// 网格布局配置，仅在 defaultMode 为 "grid" 或允许切换布局时生效
		grid: {
			// 是否开启瀑布流布局，同时有封面图和无封面图的混合文章推荐开启
			masonry: true,
		},
	},

	// 分页配置
	pagination: {
		// 每页显示的文章数量
		postsPerPage: 10,
	},

	backgroundWallpaper: {
		// 壁纸模式："banner" 横幅壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
		mode: "banner",
		// 是否允许用户通过导航栏切换壁纸模式，设为false可提升性能（只渲染当前模式）
		switchable: false,

		// 背景图片配置
		src: {
			// 桌面背景图片
			desktop: "https://api.tasaed.top/get/bingtoday/?type=f",
			// 移动背景图片
			mobile: "https://api.tasaed.top/get/bingtoday/?type=m",
		},

		// Banner模式特有配置
		banner: {
			// 图片位置
			// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'...
			// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
			position: "0% 20%",

			homeText: {
				// 主页显示自定义文本（全局开关）
				enable: true,
				// 主页横幅主标题
				title: "德二吹风机的博客！",
				// 主页横幅副标题
				subtitle: [
					"欢迎来到德二吹风机的博客！这里有一些好玩的东西等你来看！或者留在这也行，这会有一些名言名句：",
					"错过了，就很难再遇见了，所以请珍惜眼前的人，或事物。——德二吹风机",
					"人道洛阳花似锦，偏我来时不遇春。——张四维",
					"凡属金子不一定发光；并不是所有流浪的人都迷失；老骥伏枥志在千里；霜冻无法触及深根。——J. R. R.托尔金",
					"待年华已逝，青春不再，令你抱憾余生的，不会是你曾做过什么，而是你未曾做过什么。所以扬起白帆，离开避风塘，趁着东风正起，春光正好，乘长风破万里浪：去探索，去梦想，去追寻。——佚名",
					"苟日新，日日新，又日新。——曾子",
                    "大胆挑战，世界总会让步。如果有时候你被它打败了，不断地挑战，它总会屈服。——萨克雷",
                    "在科学上没有平坦的大道，只有不畏劳苦沿着其崎岖之路攀登的人，才有希望达到它光辉的顶点。——马克思",
                    "成功不是终点，失败也不是致命的：能够有继续前进的勇气才是最重要的。——温斯顿·丘吉尔",
                    "人有悲欢离合，月有阴晴圆缺，此事古难全。——苏轼",
                    "莫愁前路无知己，天下谁人不识君。——高适",
                    "海内存知己，天涯若比邻。——王勃",
                    "一向年光有限身，等闲离别易销魂，酒筵歌席莫辞频。 满目山河空念远，落花风雨更伤春，不如怜取眼前人。——晏殊",
                    "有志者，事竟成。——范晔"
				],
				typewriter: {
					//打字机开启 → 循环显示所有副标题
					//打字机关闭 → 每次刷新随机显示一条副标题
					enable: true, // 启用副标题打字机效果
					speed: 100, // 打字速度（毫秒）
					deleteSpeed: 50, // 删除速度（毫秒）
					pauseTime: 2000, // 完全显示后的暂停时间（毫秒）
				},
			},
			credit: {
				enable: {
					desktop: true, // 桌面端显示横幅图片来源文本
					mobile: true, // 移动端显示横幅图片来源文本
				},
				text: {
					desktop: "Bing", // 桌面端要显示的来源文本
					mobile: "Bing", // 移动端要显示的来源文本
				},
				url: {
					desktop: "https://www.microsoft.com/zh-cn/bing/features/bing-wallpaper/", // 桌面端原始艺术品或艺术家页面的 URL 链接
					mobile: "https://www.microsoft.com/zh-cn/bing/features/bing-wallpaper/", // 移动端原始艺术品或艺术家页面的 URL 链接
				},
			},
			navbar: {
				transparentMode: "semifull", // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
			},
			// 波浪动画效果配置，开启可能会影响页面性能，请根据实际情况开启
			waves: {
				enable: {
					desktop: true, // 桌面端启用波浪动画效果
					mobile: true, // 移动端启用波浪动画效果
				},
				performance: {
                    // low 有 bug
					quality: "medium",
					hardwareAcceleration: true, // 是否启用硬件加速
				},
				// 性能优化说明：
				// quality: "high" - 最佳视觉效果，但GPU占用较高，适合高性能设备
				// quality: "medium" - 平衡性能和质量，适合中等性能设备
				// quality: "low" - 最低GPU占用，动画更简单，适合低性能设备
				// hardwareAcceleration: true - 启用GPU加速，提升性能但增加GPU占用
				// hardwareAcceleration: false - 禁用GPU加速，降低GPU占用但可能影响性能
			},
		},

		// 全屏透明覆盖模式特有配置
		overlay: {
			zIndex: -1, // 层级，确保壁纸在背景层
			opacity: 0.8, // 壁纸透明度
			blur: 1, // 背景模糊程度
		},
	},

	// 字体配置
	// 在src/config/fontConfig.ts中配置具体字体
	font: fontConfig,
};
