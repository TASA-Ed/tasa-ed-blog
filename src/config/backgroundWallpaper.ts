import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式，设为false可提升性能（只渲染当前模式）
	switchable: false,

	/**
	 * 背景图片配置
	 * 图片路径支持三种格式：
	 * 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
	 * 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
	 * 3. 远程 URL："https://example.com/banner.jpg"
	 * 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
	 *
	 * 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
	 * 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
	 * 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
	 *
	 * 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
	 * desktop: "https://t.alcy.cc/pc",   // 随机图API
	 * desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
	 *
	 * mobile: "https://t.alcy.cc/mp", // 随机图API
	 * mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
	 *
	 * 支持配置多张图片（数组），每次刷新页面随机显示一张：
	 * desktop: [
	 * "assets/images/DesktopWallpaper/d1.avif",
	 * "assets/images/DesktopWallpaper/d2.avif",
	 * ],
	 *
	 * mobile:[
	 *   "assets/images/MobileWallpaper/m1.avif",
	 *   "assets/images/MobileWallpaper/m2.avif",
	 * ],
	 */
	src: {
		// 桌面背景图片（支持单张或多张随机）
		// desktop: "assets/images/DesktopWallpaper/d1.avif",
		desktop: "https://api.tasaed.top/get/bingtoday/?type=f",
		// 移动背景图片（支持单张或多张随机）
		// mobile: "assets/images/MobileWallpaper/m1.avif",
		mobile: "https://api.tasaed.top/get/bingtoday/?type=m",
	},

	// Banner模式特有配置
	// Banner模式特有配置
	banner: {
		// 图片位置
		// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
		position: "0% 20%",

		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 是否允许用户通过控制面板切换横幅标题显示
			switchable: true,
			// 主页横幅主标题
			title: "德二吹风机的博客！",
			// 主页横幅主标题字体大小
			titleSize: "3.8rem",
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
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 → 循环显示所有副标题
				// 打字机关闭 → 每次刷新随机显示一条副标题
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
		},
		// 图片来源
		credit: {
			enable: {
				// 桌面端显示横幅图片来源文本
				desktop: true,
				// 移动端显示横幅图片来源文本
				mobile: true,
			},
			text: {
				// 桌面端要显示的来源文本
				desktop: "Bing",
				// 移动端要显示的来源文本
				mobile: "Bing",
			},
			url: {
				// 桌面端原始艺术品或艺术家页面的 URL 链接
				desktop: "https://www.microsoft.com/zh-cn/bing/features/bing-wallpaper/",
				// 移动端原始艺术品或艺术家页面的 URL 链接
				mobile: "https://www.microsoft.com/zh-cn/bing/features/bing-wallpaper/",
			},
		},
		// 横幅导航栏配置
		navbar: {
			// 横幅导航栏透明模式："semi" 半透明，"full" 完全透明，"semifull" 动态透明
			transparentMode: "semi",
			// 是否开启毛玻璃模糊效果，开启可能会影响页面性能，如果不开启则是半透明，请根据自己的喜好开启
			enableBlur: true,
			// 毛玻璃模糊度
			blur: 5,
		},
		// 横幅图片轮播配置，仅在当配置多张图片时生效
		carousel: {
			// 是否启用横幅图片轮播；关闭时保持每次刷新随机显示一张
			// 开启轮播可能会有点奇怪，为了让图片之间的切换自然，图片会在下一张加载完成后，当前图片才会消失，所以会导致过渡有重影，可能会影响观感
			// 目前还没有找到更好的过渡效果方案，所以如果你觉得轮播切换时的过渡效果不好，可以考虑关闭轮播，保持每次刷新随机显示一张图片
			// 反正我目前不是很满意这个过渡效果，所以默认关闭了，如果你有更好的过渡效果方案，欢迎提交PR改进这个功能
			enable: false,
			// 轮播切换间隔（毫秒）
			interval: 5000,
			// 是否允许用户通过控制面板切换横幅轮播
			switchable: false,
		},
		// 水波纹动画效果配置，开启会影响页面性能，请根据自己的喜好开启
		waves: {
			enable: {
				// 桌面端是否启用水波纹动画效果
				desktop: true,
				// 移动端是否启用水波纹动画效果
				mobile: true,
			},
			// 是否允许用户通过控制面板切换水波纹动画
			switchable: true,
		},
	},
	// 全屏透明覆盖模式特有配置
	overlay: {
		// 是否允许用户通过控制面板调整全屏透明模式参数
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		// 层级，确保壁纸在背景层
		zIndex: -1,
		// 壁纸透明度
		opacity: 0.8,
		// 背景模糊度
		blur: 10,
		// 卡片透明度，0-1之间，值越小越透明
		cardOpacity: 0.5,
	},
};
