<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { posts } from '$lib/posts';
</script>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_blog()}
	</h1>

	{#if posts.length === 0}
		<p class="text-muted-foreground mt-6 max-w-md text-sm sm:text-base">{m.blog_empty()}</p>
	{:else}
		<ul class="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts as post (post.slug)}
				<li>
					<a href={`/${post.slug}/`} class="group block">
						{#if post.metadata['cover-img']}
							<div class="aspect-16/10 overflow-hidden border">
								<img
									src={post.metadata['cover-img']}
									alt=""
									class="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
								/>
							</div>
						{/if}
						<p class="text-muted-foreground mt-4 text-xs tracking-[0.2em] uppercase">
							{post.metadata.date}
						</p>
						<h2 class="font-display mt-1 text-lg font-semibold uppercase group-hover:underline">
							{post.metadata.title}
						</h2>
						{#if post.metadata.subtitle}
							<p class="text-muted-foreground mt-1 text-sm">{post.metadata.subtitle}</p>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>
