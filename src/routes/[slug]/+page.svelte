<script lang="ts">
	import { getPost } from '$lib/posts';
	import { m } from '$lib/paraglide/messages.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const post = $derived(getPost(data.slug)!);
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-16 lg:px-10">
	<a
		href="/blog/"
		class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm tracking-wide uppercase transition"
	>
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5">
			<path d="M19 12H5m0 0 6-6m-6 6 6 6" />
		</svg>
		{m.blog_back()}
	</a>

	<p class="text-muted-foreground mt-8 text-xs tracking-[0.2em] uppercase">{post.metadata.date}</p>
	<h1 class="font-display mt-2 text-3xl font-semibold tracking-tight uppercase sm:text-4xl">
		{post.metadata.title}
	</h1>
	{#if post.metadata.subtitle}
		<p class="text-muted-foreground mt-3 text-base">{post.metadata.subtitle}</p>
	{/if}

	{#if post.metadata['cover-img']}
		<div class="mt-8 aspect-16/9 overflow-hidden border">
			<img
				src={post.metadata['cover-img']}
				alt=""
				class="h-full w-full object-cover grayscale"
			/>
		</div>
	{/if}

	{#if post.metadata.tags}
		<div class="mt-6 flex flex-wrap gap-2">
			{#each post.metadata.tags as tag (tag)}
				<span class="text-muted-foreground rounded-full border px-3 py-1 text-xs">{tag}</span>
			{/each}
		</div>
	{/if}

	<div
		class="prose prose-invert prose-headings:font-display prose-headings:uppercase prose-a:text-foreground prose-img:border mt-10 max-w-none"
	>
		<post.component />
	</div>
</article>
