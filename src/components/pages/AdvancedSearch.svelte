<script lang="ts">
  import I18nKey from "@i18n/i18nKey";
  import { i18n } from "@i18n/translation";
  import Icon from "@iconify/svelte";
  import { onDestroy, onMount } from "svelte";
  import type { SearchResult } from "@/global";
  import { MeiliSearch } from "meilisearch";
  import type { MeiliSearchConfig } from "@/types/config.ts";

  // --- Props ---
  export let title = i18n(I18nKey.search);
  export let description = "";
  export let meiliSearchConfig: MeiliSearchConfig;

  // --- State ---
  let keyword = "";
  let results: SearchResult[] = [];
  let isSearching = false;
  let initialized = false;
  let meiliClient: MeiliSearch | null = null;
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;
  let requestId = 0;

  // 在客户端获取 URL 参数
  const getInitialKeyword = (): string => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get("q") || "";
    }
    return "";
  };

  // --- Core Search Logic ---
  const search = async (): Promise<void> => {
    const query = keyword.trim();
    if (!initialized || !query) {
      results = [];
      isSearching = false;
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      return;
    }
    isSearching = true;

    const currentRequestId = ++requestId;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(async () => {
      try {
        let searchResults: SearchResult[] = [];

        if (!meiliClient)
          throw new Error("MeiliSearch client not initialized.");
        const index = meiliClient.index(meiliSearchConfig.INDEX_NAME);
        const searchResponse = await index.search(query, {
          limit: 100,
          attributesToHighlight: ["title", "content"],
          attributesToCrop: ["content:100"],
          highlightPreTag: "<mark>",
          highlightPostTag: "</mark>",
        });
        // Map MeiliSearch results to our standard SearchResult format
        searchResults = searchResponse.hits
          .filter((hit) => hit._formatted)
          .map((hit) => {
            return {
              url: hit._formatted?.slug,
              meta: {title: hit._formatted?.title},
              excerpt: hit._formatted?.description,
              content: hit._formatted?.content,
            };
          });

        if (currentRequestId === requestId && query === keyword.trim()) {
          results = searchResults;
        }
      } catch (error) {
        console.error("Search error:", error);
        if (currentRequestId === requestId) {
          results = [];
        }
      } finally {
        if (currentRequestId === requestId) {
          isSearching = false;
        }
      }
    }, 300); // 300ms debounce
  };

  // --- Initialization onMount ---
  onMount(() => {
    const initialize = () => {
      try {
        meiliClient = new MeiliSearch({
          host: meiliSearchConfig.PUBLIC_MEILI_HOST,
          apiKey: meiliSearchConfig.PUBLIC_MEILI_SEARCH_KEY,
        });
        initialized = true;
      } catch (e) {
        console.error("Failed to initialize MeiliSearch:", e);
        initialized = false;
        return;
      }

      // 从 URL 获取初始关键词
      const initialKeyword = getInitialKeyword();
      if (initialKeyword) {
        keyword = initialKeyword;
      }

      // 如果有关键词，自动执行搜索
      if (keyword)
        search();
    };

    initialize();

  });

  const handleInput = () => {
    search();
  };

  onDestroy(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  });
</script>

<div class="card-base px-6 py-6 md:px-9 md:py-6 mb-4 rounded-[var(--radius-large)]">
    <!-- Title Section -->
    <div class="mb-4">
        <div class="flex items-center gap-3 mb-3">
            <div class="h-8 w-8 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white dark:text-black/70">
                <Icon icon="material-symbols:search" class="text-[1.5rem]"></Icon>
            </div>
            <h1 class="text-3xl font-bold text-90">
                {title}
            </h1>
        </div>
        {#if description}
            <p class="text-base text-50 leading-relaxed">
                {description}
            </p>
        {/if}
    </div>

    <!-- Search Bar -->
    <div class="relative flex">
        <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon icon="material-symbols:search" class="text-2xl text-50"/>
            </div>
            <input
                    type="text"
                    class="block w-full p-4 pl-10 text-sm bg-transparent border border-black/10 dark:border-white/10 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)] hover:border-black/20 dark:hover:border-white/20 text-75 placeholder-50 transition-colors outline-0"
                    placeholder={i18n(I18nKey.search)}
                    bind:value={keyword}
                    on:input={handleInput}
            >
        </div>
    </div>
</div>

<div class="grid grid-cols-1 gap-4">
    <!-- Results Area -->
    <div>
        {#if isSearching}
            <div class="flex justify-center py-10">
                <Icon icon="svg-spinners:ring-resize" class="text-4xl text-[var(--primary)]"/>
            </div>
        {:else if results.length > 0}
            <div class="space-y-4">
                {#each results as result}
                    <div class="card-base p-6 block rounded-[var(--radius-large)]">
                        <a href={result.url} class="block group">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-90 group-hover:text-[var(--primary)] transition-colors">
                                {@html result.meta.title}
                            </h5>
                            <p class="font-normal text-75">
                                {@html result.content}
                            </p>
                        </a>
                    </div>
                {/each}
            </div>
        {:else if keyword}
            <div class="card-base p-10 text-center text-50 rounded-[var(--radius-large)]">
                {i18n(I18nKey.searchNoResults)}
            </div>
        {:else}
            <div class="card-base p-10 text-center text-50 rounded-[var(--radius-large)]">
                {i18n(I18nKey.searchTypeSomething)}
            </div>
        {/if}
    </div>
</div>

<style>
    /* 关键字高亮效果 - 主题色 */
    :global(mark) {
        background: transparent;
        color: var(--primary);
        font-weight: 600;
        padding: 0 0.1em;
    }
</style>
