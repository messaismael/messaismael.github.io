<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import { Header } from '$lib/components';

	let { children } = $props();

	let isHome = $derived(page.url.pathname === '/');
</script>

<svelte:head><link rel="icon" href='/avatar.ico' /></svelte:head>

<!-- Background: persists across navigation (layout stays mounted) — sharp on the home hero, blurred to ambient texture everywhere else -->
<div class="fixed inset-0 -z-10 opacity-60 lg:opacity-100">
	<img
		src="/background.jpg"
		alt=""
		loading="eager"
		decoding="async"
		class={`absolute inset-0 h-full w-full scale-105 object-cover transition-[filter] duration-700 ${isHome ? '' : 'blur'}`}
	/>
	<div
		class={`absolute inset-0 bg-linear-to-r transition-opacity duration-700 ${
			isHome
				? 'from-background/90 via-background/15 to-background/90'
				: 'from-background/70 via-background/45 to-background/70'
		}`}
	></div>
	<div
		class={`absolute inset-0 bg-linear-to-t ${
			isHome
				? 'from-background/40 via-transparent to-background/20'
				: 'from-background/50 via-transparent to-background/40'
		}`}
	></div>
</div>

<Header />
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
