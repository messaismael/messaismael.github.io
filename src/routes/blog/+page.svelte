<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { PageSeo } from '$lib/components';
	import { m } from '$lib/paraglide/messages.js';
	import { posts } from '$lib/posts';

	const siteUrl = $derived(page.url.origin);
	const blogSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Blog',
		url: `${siteUrl}/blog/`,
		name: 'Ismael Messa Blog',
		author: {
			'@type': 'Person',
			name: 'Ismael Messa',
			url: siteUrl
		},
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.metadata.title,
			description: post.metadata.subtitle,
			datePublished: post.metadata.date,
			url: `${siteUrl}/blog/${encodeURIComponent(post.slug)}/`,
			...(post.metadata['cover-img'] ? { image: `${siteUrl}${post.metadata['cover-img']}` } : {})
		}))
	});
</script>

<PageSeo
	title={m.seo_blog_title()}
	description={m.seo_blog_description()}
	imageAlt={m.seo_blog_image_alt()}
	path="/blog/"
	schema={blogSchema}
/>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_blog()}
	</h1>
	<p class="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
		{m.blog_description()}
	</p>

	<div class="mt-12 border-t">
		{#if posts.length === 0}
			<p class="mt-6 max-w-md text-sm text-muted-foreground sm:text-base">{m.blog_empty()}</p>
		{:else}
			<ul class="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
				{#each posts as post (post.slug)}
					<li>
						<a href={resolve(`/blog/${encodeURIComponent(post.slug)}/`)} class="group block">
							{#if post.metadata['cover-img']}
								<div class="aspect-16/10 overflow-hidden border">
									<img
										src={post.metadata['cover-img']}
										alt=""
										class="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
									/>
								</div>
							{/if}
							<p class="mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">
								{post.metadata.date}
							</p>
							<h2 class="mt-1 font-display text-lg font-semibold uppercase group-hover:underline">
								{post.metadata.title}
							</h2>
							{#if post.metadata.subtitle}
								<p class="mt-1 text-sm text-muted-foreground">{post.metadata.subtitle}</p>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</main>
