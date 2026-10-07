import type { WavesManagerLike } from "./types/waves";


declare global {
  interface HTMLElementTagNameMap {
    "table-of-contents": HTMLElement & {
      init?: () => void;
    };
  }

  interface Window {
    // oxlint-disable-next-line typescript/no-explicit-any -- External library
    swup: any;
    spineModelInitialized?: boolean;
    floatingTOCListenersInitialized?: boolean;
    wavesManager?: WavesManagerLike;
    wavesInitialized?: boolean;
    // oxlint-disable-next-line typescript/no-explicit-any -- External library
    spinePlayerInstance?: any;
    /** 布局初始化守卫,确保 Swup 切页重跑模块脚本时只执行一次 */
    __fireflyLayoutInit?: boolean;
    /** 打字机特效监听器守卫,确保只注册一次 */
    __typewriterTextInit?: boolean;
    /** 分类栏监听器守卫,确保只注册一次 */
    __categoryBarInit?: boolean;
    /** 侧边栏目录监听器守卫,确保只注册一次 */
    __sidebarTOCInit?: boolean;
    /** 文章封面图监听器守卫,确保只注册一次 */
    __coverImageInit?: boolean;
    /** 悬浮目录自动关闭监听器守卫,确保只注册一次 */
    __floatingTOCAutoCloseInit?: boolean;
    /** 文章列表页布局监听器守卫,确保只注册一次 */
    __postPageInit?: boolean;
  }

  interface MediaQueryList {
    addListener(listener: (e: MediaQueryListEvent) => void): void;
    removeListener(listener: (e: MediaQueryListEvent) => void): void;
  }
}

interface SearchResult {
  url: string;
  meta: {
    title: string;
  };
  excerpt: string;
  content?: string;
  word_count?: number;
  filters?: Record<string, unknown>;
  anchors?: Array<{
    element: string;
    id: string;
    text: string;
    location: number;
  }>;
  weighted_locations?: Array<{
    weight: number;
    balanced_score: number;
    location: number;
  }>;
  locations?: number[];
  raw_content?: string;
  raw_url?: string;
  sub_results?: SearchResult[];
}

export type { SearchResult };
