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
			requiredMeta: ['nick', 'mail'],
			el: "#waline",
			path: path,
			dark: "html.dark",
			wordLimit: [2, 300],
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
		--waline-theme-color: var(--primary);
		--waline-active-color: var(--primary);
	}

	:root.dark {
		--waline-bg-color: rgba(0, 0, 0, 0);
		--waline-color: var(--content-meta);
		--waline-info-color: var(--color-neutral-500);
	}

	:global(.wl-editor),
	:global(.wl-link),
	:global(.wl-mail),
	:global(.wl-nick) {
		background: transparent;
		border-radius: 10px;
		border: var(--waline-border);
		border-color: transparent;
	}

	:global(.wl-editor) {
		padding: 0 0 0 4px;
	}

	:global(.wl-editor):focus,
	:global(.wl-link):focus,
	:global(.wl-mail):focus,
	:global(.wl-nick):focus {
		background: transparent;
		border-color: var(--primary);
	}

	:global(.wl-preview),
	:global(.wl-count),
	:global(.wl-reaction-title) {
		color: var(--btn-content);
	}

	/*:global(html.dark .wl-gif-popup input)::placeholder {*/
	/*	color: var(--color-neutral-100);*/
	/*}*/
</style>
