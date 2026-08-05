<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { certifications } from '$lib/about';
</script>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_about()}
	</h1>
	<p class="text-muted-foreground mt-4 max-w-md text-sm sm:text-base">
		{m.about_subtitle()}
	</p>

	<div class="mt-12 border-t">
	<div class="mt-10 max-w-2xl">
		<h2 class="font-display text-2xl font-semibold uppercase">{m.about_greeting()}</h2>
		<p class="text-muted-foreground mt-2 text-base">{m.about_role()}</p>
		<p class="mt-6 text-sm sm:text-base">{m.about_intro()}</p>

		<p class="font-display mt-16 text-xl font-semibold tracking-tight uppercase sm:text-2xl">
			{m.about_tagline()}
		</p>

		<h2 class="font-display mt-16 text-2xl font-semibold uppercase">
			{m.about_certifications_heading()}
		</h2>
		<ul class="mt-4 divide-y border-t border-b">
			{#each certifications as cert (cert.href)}
				<li class="py-4">
					<a
						href={cert.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center justify-between gap-4 text-sm sm:text-base"
					>
						<span class="group-hover:underline">{cert.name}</span>
						<span class="text-muted-foreground shrink-0 text-xs tracking-wide uppercase">↗</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	</div>
</main>
