<script lang="ts">
	import { page } from '$app/state';
	import { PageSeo } from '$lib/components';
	import { m } from '$lib/paraglide/messages.js';
	import { certifications } from '$lib/about';

	const siteUrl = $derived(page.url.origin);
	const profileSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		url: `${siteUrl}/about/`,
		mainEntity: {
			'@type': 'Person',
			name: 'Ismael Messa',
			url: siteUrl,
			jobTitle: 'AI Engineer & Software Architect',
			sameAs: [
				'https://github.com/messaismael',
				'https://www.linkedin.com/in/messaismael',
				'https://twitter.com/messaismael'
			]
		}
	});
</script>

<PageSeo
	title={m.seo_about_title()}
	description={m.seo_about_description()}
	imageAlt={m.seo_about_image_alt()}
	path="/about/"
	schema={profileSchema}
/>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_about()}
	</h1>
	<p class="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
		{m.about_subtitle()}
	</p>

	<div class="mt-12 border-t">
		<div class="mt-10 max-w-2xl">
			<h2 class="font-display text-2xl font-semibold uppercase">{m.about_greeting()}</h2>
			<p class="mt-2 text-base text-muted-foreground">{m.about_role()}</p>
			<p class="mt-6 text-sm sm:text-base">{m.about_intro()}</p>

			<p class="mt-16 font-display text-xl font-semibold tracking-tight uppercase sm:text-2xl">
				{m.about_tagline()}
			</p>

			<h2 class="mt-16 font-display text-2xl font-semibold uppercase">
				{m.about_certifications_heading()}
			</h2>
			<ul class="mt-4 divide-y border-t border-b">
				{#each certifications as cert (cert.href)}
					<li class="py-4">
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							href={cert.href}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center justify-between gap-4 text-sm sm:text-base"
						>
							<span class="group-hover:underline">{cert.name}</span>
							<span class="shrink-0 text-xs tracking-wide text-muted-foreground uppercase">↗</span>
						</a>
						<!-- eslint-enable svelte/no-navigation-without-resolve -->
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
