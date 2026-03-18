<script lang="ts">
  import I18nKey from "@i18n/i18nKey";
  import { i18n } from "@i18n/translation";
  import { navigateToPage } from "@utils/navigation-utils";
  import { MeiliSearch } from "meilisearch";
  import { onDestroy, onMount } from "svelte";
  import Icon from "@/components/common/Icon.svelte";
  import type { SearchResult } from "@/global";
  import { type MeiliSearchConfig } from "@/types/config";
  import { getSearchUrl } from "@/utils/url-utils";

  // --- Props from Astro ---
  export let meiliSearchConfig: MeiliSearchConfig;

  // --- State ---
  let keywordDesktop = "";
  let keywordMobile = "";
  let result: SearchResult[] = [];
  let isSearching = false;
  let initialized = false;
  let meiliClient: MeiliSearch | null = null;
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;
  let activeInput: "desktop" | "mobile" | null = null;
  let isPanelOpen = false;
  let lastSearchToken = 0;
  let activeKeyword = "";
  let activeKeywordTrimmed = "";

  // --- UI Logic ---
  const togglePanel = () => {
    isPanelOpen = !isPanelOpen;
    if (isPanelOpen) {
      activeInput = "mobile";
    } else if (activeInput === "mobile") {
      activeInput = null;
    }
  };

  const setActiveInput = (input: "desktop" | "mobile") => {
    activeInput = input;
  };

  const closeSearchPanel = (): void => {
    isPanelOpen = false;
    activeInput = null;
    keywordDesktop = "";
    keywordMobile = "";
    result = [];
  };

  const handleResultClick = (event: Event, url: string): void => {
    event.preventDefault();
    closeSearchPanel();
    navigateToPage(url);
  };

  // --- Core Search Logic ---
  const sanitizeHighlightedHtml = (value: string | undefined): string => {
    if (!value) return "";
    const escaped = value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return escaped
      .replace(/&lt;mark&gt;/g, "<mark>")
      .replace(/&lt;\/mark&gt;/g, "</mark>");
  };

  const search = async (
    keyword: string,
    input: "desktop" | "mobile",
  ): Promise<void> => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) {
      result = [];
      isSearching = false;
      if (input === "desktop") {
        isPanelOpen = false;
      }
      return;
    }
    if (!initialized) return;

    isSearching = true;
    const searchToken = ++lastSearchToken;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(async () => {
      try {
        let searchResults: SearchResult[] = [];

        if (!meiliClient)
          throw new Error("MeiliSearch client not initialized.");
        const index = meiliClient.index(meiliSearchConfig.INDEX_NAME);
        const searchResponse = await index.search(trimmedKeyword, {
          limit: 10,
          attributesToHighlight: ["title", "content", "description"],
          attributesToCrop: ["content:50"],
          highlightPreTag: "<mark>",
          highlightPostTag: "</mark>",
        });
        // Map MeiliSearch results to our standard SearchResult format
        searchResults = searchResponse.hits
          .filter((hit) => hit._formatted)
          .map((hit) => {
            return {
              url: hit._formatted?.slug,
              meta: { title: sanitizeHighlightedHtml(hit._formatted?.title) },
              excerpt: sanitizeHighlightedHtml(hit._formatted?.description),
              content: sanitizeHighlightedHtml(hit._formatted?.content),
            };
          });

        if (searchToken !== lastSearchToken || activeInput !== input) return;
        result = searchResults;
        isPanelOpen = true;
      } catch (error) {
        console.error("Search error:", error);
        if (searchToken !== lastSearchToken || activeInput !== input) return;
        result = [];
        if (input === "desktop") {
          isPanelOpen = false;
        }
      } finally {
        if (searchToken === lastSearchToken) {
          isSearching = false;
        }
      }
    }, 300); // 300ms debounce
  };

  // --- Initialization onMount ---
  onMount(() => {
    try {
      meiliClient = new MeiliSearch({
        host: meiliSearchConfig.PUBLIC_MEILI_HOST,
        apiKey: meiliSearchConfig.PUBLIC_MEILI_SEARCH_KEY,
      });
      initialized = true;
    } catch (e) {
      console.error("Failed to initialize MeiliSearch:", e);
    }
  });

  onDestroy(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  });

  // --- Reactive Statements ---
  $: activeKeyword =
    activeInput === "desktop"
      ? keywordDesktop
      : activeInput === "mobile"
        ? keywordMobile
        : keywordDesktop || keywordMobile;
  $: activeKeywordTrimmed = activeKeyword.trim();
  $: if (initialized && activeInput === "desktop") {
    search(keywordDesktop, "desktop");
  }
  $: if (initialized && activeInput === "mobile") {
    search(keywordMobile, "mobile");
  }
</script>

<!-- search bar for desktop view -->
<div id="search-bar" class="hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg
      bg-black/4 hover:bg-black/6 focus-within:bg-black/6
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
">
    <Icon icon="material-symbols:search"
          class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30"></Icon>
    <input placeholder="{i18n(I18nKey.search)}" bind:value={keywordDesktop}
           on:focus={() => setActiveInput("desktop")}
           class="transition-all pl-10 text-sm bg-transparent outline-0
         h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"
    >
</div>

<!-- toggle btn for phone/tablet view -->
<button on:click={togglePanel} aria-label="Search Panel" id="search-switch"
        class="btn-plain scale-animation lg:hidden! rounded-lg w-11 h-11 active:scale-90">
    <Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
</button>

<!-- search panel -->
<div id="search-panel" class="float-panel float-panel-closed search-panel absolute md:w-120
top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2"
     class:float-panel-closed={!isPanelOpen}>

    <!-- search bar inside panel for phone/tablet -->
    <div id="search-bar-inside" class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
      bg-black/4 hover:bg-black/6 focus-within:bg-black/6
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10
  ">
        <Icon icon="material-symbols:search"
              class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30"></Icon>
        <input placeholder={i18n(I18nKey.search)} bind:value={keywordMobile}
               on:focus={() => setActiveInput("mobile")}
               class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
               focus:w-60 text-black/50 dark:text-white/50"
        >
    </div>

    <!-- search results -->
    {#if isSearching}
        <div class="transition first-of-type:mt-2 lg:first-of-type:mt-0 block rounded-xl text-lg px-3 py-2 text-50">
            {i18n(I18nKey.searchLoading)}
        </div>
    {:else if !activeKeywordTrimmed}
        <div class="transition first-of-type:mt-2 lg:first-of-type:mt-0 block rounded-xl text-lg px-3 py-2 text-50">
            {i18n(I18nKey.searchTypeSomething)}
        </div>
    {:else if result.length > 0}
        {#each result.slice(0, 5) as item}
            <a href={item.url}
               on:click={(e) => handleResultClick(e, item.url)}
               class="transition first-of-type:mt-2 lg:first-of-type:mt-0 group block
           rounded-xl text-lg px-3 py-2 hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active)">
                <div class="transition text-90 inline-flex font-bold group-hover:text-(--primary)">
                    {@html item.meta.title}
                    <Icon icon="fa7-solid:chevron-right"
                          class="transition text-[0.75rem] translate-x-1 my-auto text-(--primary)"></Icon>
                </div>
                {#if item.excerpt.includes("<mark>")}
                    <div class="transition text-sm text-50" style="display: flex; align-items: flex-start; margin-top: 0.1rem">
                        <div>
                            {@html item.excerpt}
                        </div>
                    </div>
                {/if}

                {#if item.content && item.content.includes("<mark>")}
                    <div class="transition text-sm text-30"
                         style="display: flex; align-items: flex-start; margin-top: 0.1rem">
                        <span style="display: inline-block; background-color: var(--btn-plain-bg-active); color: var(--primary); padding: 0.1em 0.4em; border-radius: 5px; font-size: 0.75em; font-weight: 600; margin-right: 0.5em; shrink: 0;">
                            {i18n(I18nKey.searchContent)}
                        </span>
                        <div>
                            {@html item.content}
                        </div>
                    </div>
                {/if}
            </a>
        {/each}
        {#if result.length > 5}
            <a href={getSearchUrl(activeKeywordTrimmed)}
               on:click={(e) => handleResultClick(e, getSearchUrl(activeKeywordTrimmed))}
               class="transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active) text-(--primary) font-bold text-center">
                <span class="inline-flex items-center">
                    {i18n(I18nKey.searchViewMore).replace('{count}', (result.length - 5).toString())}
                    <Icon icon="fa7-solid:arrow-right" class="transition text-[0.75rem] ml-1"></Icon>
                </span>
            </a>
        {/if}
    {:else if result.length === 0}
        <div class="transition first-of-type:mt-2 lg:first-of-type:mt-0 block rounded-xl text-lg px-3 py-2 text-50">
            {i18n(I18nKey.searchNoResults)}
        </div>
    {/if}
</div>

<style>
    input:focus {
        outline: 0;
    }

    .search-panel {
        max-height: calc(100vh - 100px);
        overflow-y: auto;
    }
</style>

