<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{page.status} — {m.error_heading()}</title>
</svelte:head>

<main
	class="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 py-16 text-center"
>
	<p class="font-display text-8xl leading-none font-semibold tracking-tight sm:text-9xl">
		{page.status}
	</p>
	<div class="bg-border mt-8 h-px w-16"></div>
	<h1 class="font-display mt-8 text-xl font-semibold tracking-[0.2em] uppercase sm:text-2xl">
		{m.error_heading()}
	</h1>
	<p class="text-muted-foreground mt-4 max-w-sm text-sm sm:text-base">
		{m.error_message()}
	</p>
	<Button href="/" variant="outline" size="lg" class="mt-10">{m.error_cta()}</Button>
</main>
