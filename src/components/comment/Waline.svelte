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
    /*	color: var(--color-neutral-100);*/
    /*}*/
</style>
