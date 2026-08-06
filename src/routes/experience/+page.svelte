<script lang="ts">
	import { page } from '$app/state';
	import { PageSeo } from '$lib/components';
	import { m } from '$lib/paraglide/messages.js';
	import { experiences } from '$lib/experience';

	const siteUrl = $derived(page.url.origin);
	const experienceSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		url: `${siteUrl}/experience/`,
		mainEntity: {
			'@type': 'Person',
			name: 'Ismael Messa',
			url: siteUrl,
			jobTitle: 'CTO & Co-Founder',
			worksFor: {
				'@type': 'Organization',
				name: 'Automathing'
			},
			hasOccupation: {
				'@type': 'Occupation',
				name: 'Chief Technology Officer',
				occupationLocation: {
					'@type': 'Country',
					name: 'Canada'
				},
				startDate: '2025-04'
			},
			hasPart: {
				'@type': 'ItemList',
				itemListElement: experiences.map((job, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					name: `${job.role} — ${job.company}`,
					description: job.summary ?? job.highlights?.[0]
				}))
			}
		}
	});
</script>

<PageSeo
	title={m.seo_experience_title()}
	description={m.seo_experience_description()}
	imageAlt={m.seo_experience_image_alt()}
	path="/experience/"
	schema={experienceSchema}
/>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_experience()}
	</h1>
	<p class="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
		{m.experience_description()}
	</p>

	<div class="max-w-2sxl mt-12 border-t">
		<ul class="max-w-2xl space-y-16">
			{#each experiences as job, index (index)}
				<li class="pt-8" class:border-t={index !== 0}>
					<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
						<h2 class="font-display text-xl font-semibold uppercase">{job.company}</h2>
						<p class="text-xs tracking-[0.2em] text-muted-foreground uppercase">{job.period}</p>
					</div>
					<p class="mt-1 text-sm text-muted-foreground sm:text-base">
						{job.role} · {job.employment}
						{#if job.location}
							· {job.location}
						{/if}
						{#if job.workMode}
							· {job.workMode}
						{/if}
					</p>

					{#if job.summary}
						<p class="mt-6 text-sm sm:text-base">{job.summary}</p>
					{/if}

					{#if job.highlights}
						<ul class="mt-6 space-y-2">
							{#each job.highlights as highlight (highlight)}
								<li class="text-sm sm:text-base">
									<span class="mr-2 text-muted-foreground">—</span>{highlight}
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</main>
