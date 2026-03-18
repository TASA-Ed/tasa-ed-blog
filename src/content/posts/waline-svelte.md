---
title: Astro 博客使用 Svelte 接入 Waline
published: 2026-03-18
pinned: false
description: Astro 博客使用 Svelte 接入 Waline 教程。
tags: [Astro,Svelte,Waline,评论,博客,教程]
category: 教程
author: 德二吹风机
draft: false
---

各位好。

之前咱做出了一个决定，就是将评论区从 Artalk 换到 Waline，这主要还是因为 Artalk 作者已经长期不维护了。

可能是忙于工作吧，但总而言之就是不维护了，然后咱就看到了 Waline 现在仍然还在维护，而且还支持 IPv6 属地等，因此咱就决定换到 Waline。

## 部署 Waline

参考 [独立部署](https://waline.js.org/guide/deploy/vps.html) 。

这其实并不是本篇博客的主题，所以就不多说了，可能以后会写吧（）。

## 接入 Waline

接入 Waline 和接入 Artalk 的方式差不多，咱看了一下博客主题的接入方式，发现是通过 unpkg 导入的。

说实话，我对这种方式并不是很喜欢，可能突然有一天就不让你用了！所以还是自己托管比较舒服一些。

然后呢我也参考了一些其他博客的部署方式（.astro 文件），但还是有一些奇奇怪怪的诡异问题，所以咱就打算使用 Svelte 接入。

### 安装 Client 包

使用自托管的方式接入 Waline 的话是需要安装一个 npm 包的。

运行：

```bash
pnpm i @waline/client
```

Client 包是需要打包在内的，所以说不需要加 `-D` 。

### Svelte 实现

Svelte 是原生支持生命周期的，因此还可以添加一个销毁事件，下面是我的实现：

```svelte
<script lang="ts">
    import { commentConfig } from "@/config";
    import { init } from '@waline/client';
    import '@waline/client/waline.css';
    import { onMount, onDestroy } from 'svelte';

    interface Props {
        path: string;
    }

    const {
        path,
    }: Props = $props();

    let walineInstance;

    onMount(() => {
        walineInstance = init({
            serverURL: commentConfig.waline?.serverURL as string,
            lang: commentConfig.waline?.lang as string,
            emoji: commentConfig.waline?.emoji,
            login: commentConfig.waline?.login,
            reaction: commentConfig.waline?.reaction,
            search: commentConfig.waline?.search,
            recaptchaV3Key: commentConfig.waline?.recaptchaV3Key,
            imageUploader: commentConfig.waline?.imageUploader,
            locale: commentConfig.waline?.locales,
            requiredMeta: ['nick', 'mail'],
            el: "#waline",
            path: path,
            dark: "html.dark",
            wordLimit: [2, 600],
            ...(commentConfig.waline?.visitorCount ? { pageview: true } : {}),
        });
    });

    onDestroy(() => {
        walineInstance?.destroy();
    });
</script>

<div id="waline"></div>

<style>
    :root {
        --waline-theme-color: var(--primary) !important;
        --waline-active-color: var(--primary) !important;
    }

    :root.dark {
        --waline-bg-color: rgba(0, 0, 0, 0) !important;
        --waline-color: var(--content-meta) !important;
        --waline-info-color: var(--color-neutral-500) !important;
    }

    :global(.wl-editor),
    :global(.wl-link),
    :global(.wl-mail),
    :global(.wl-nick) {
        background: transparent !important;
        border-radius: 10px !important;
        border: var(--waline-border) !important;
        border-color: transparent !important;
    }

    :global(.wl-editor) {
        padding: 0 0 0 4px !important;
    }

    :global(.wl-editor):focus,
    :global(.wl-link):focus,
    :global(.wl-mail):focus,
    :global(.wl-nick):focus {
        background: transparent !important;
        border-color: var(--primary) !important;
    }

    :global(.wl-preview),
    :global(.wl-count),
    :global(.wl-reaction-title) {
        color: var(--btn-content) !important;
    }

    /*:global(html.dark .wl-gif-popup input)::placeholder {*/
    /*  color: var(--color-neutral-100);*/
    /*}*/
</style>
```

请不要过多在意咱的配置合并方式，临时这么写的（）。

## 结束

就写到这里吧，咱感觉没什么好写的吧。

> 博客因为备案暂时关闭评论
