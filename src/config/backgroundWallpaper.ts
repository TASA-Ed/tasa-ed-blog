import type { BackgroundWallpaperConfig } from "@/types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
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
      // 是否开启毛玻璃模糊效果，如果不开启则是半透明
			enableBlur: true,
			// 毛玻璃模糊度
			blur: 3,
    },
    // 波浪动画效果配置，开启可能会影响页面性能，请根据实际情况开启
    waves: {
      enable: {
        desktop: true, // 桌面端启用波浪动画效果
        mobile: true, // 移动端启用波浪动画效果
      },
    },
  },

  // 全屏透明覆盖模式特有配置
  overlay: {
    zIndex: -1, // 层级，确保壁纸在背景层
    opacity: 0.8, // 壁纸透明度
    blur: 2, // 背景模糊程度
  },
};
