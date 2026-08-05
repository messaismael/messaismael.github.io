<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_blog()}
	</h1>
	<p class="text-muted-foreground mt-6 max-w-md text-sm sm:text-base">
		{m.blog_empty()}
	</p>
</main>
