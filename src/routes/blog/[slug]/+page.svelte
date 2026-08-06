<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { getPost } from '$lib/posts';
	import { m } from '$lib/paraglide/messages.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const siteUrl = $derived(page.url.origin);
	const post = $derived(getPost(data.slug)!);
	const canonicalUrl = $derived(`${siteUrl}/blog/${encodeURIComponent(data.slug)}/`);
</script>

<svelte:head>
	<title>{post.metadata.title} — Ismael Messa</title>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonicalUrl} />
	{#if post.metadata.subtitle}
		<meta name="description" content={post.metadata.subtitle} />
	{/if}
	{#if post.metadata['cover-img']}
		<meta property="og:image" content={`${siteUrl}${post.metadata['cover-img']}`} />
	{/if}
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-16 lg:px-10">
	<a
		href={resolve('/blog/')}
		class="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground uppercase transition hover:text-foreground"
	>
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5">
			<path d="M19 12H5m0 0 6-6m-6 6 6 6" />
		</svg>
		{m.blog_back()}
	</a>

	<p class="mt-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">{post.metadata.date}</p>
	<h1 class="mt-2 font-display text-3xl font-semibold tracking-tight uppercase sm:text-4xl">
		{post.metadata.title}
	</h1>
	{#if post.metadata.subtitle}
		<p class="mt-3 text-base text-muted-foreground">{post.metadata.subtitle}</p>
	{/if}

	{#if post.metadata['cover-img']}
		<div class="mt-8 aspect-16/9 overflow-hidden border">
			<img
				src={post.metadata['cover-img']}
				alt=""
				loading="eager"
				decoding="async"
				class="h-full w-full object-cover grayscale"
			/>
		</div>
	{/if}

	{#if post.metadata.tags}
		<div class="mt-6 flex flex-wrap gap-2">
			{#each post.metadata.tags as tag (tag)}
				<span class="rounded-full border px-3 py-1 text-xs text-muted-foreground">{tag}</span>
			{/each}
		</div>
	{/if}

	<div
		class="prose mt-10 max-w-none prose-invert prose-headings:font-display prose-headings:uppercase prose-a:text-foreground prose-img:border"
	>
		<post.component />
	</div>
</article>
