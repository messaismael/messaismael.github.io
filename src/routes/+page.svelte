<script lang="ts">
	import { page } from '$app/state';
	import { AboutIntro, Hero } from '$lib/components';
	import { m } from '$lib/paraglide/messages.js';

	const siteUrl = $derived(page.url.origin);
	const socialProfiles = [
		'https://github.com/messaismael',
		'https://www.linkedin.com/in/messaismael',
		'https://twitter.com/messaismael'
	];

	const structuredData = $derived({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${siteUrl}/#person`,
				name: 'Ismael Messa',
				url: siteUrl,
				jobTitle: 'AI Engineer & Software Architect',
				description: m.seo_home_description(),
				sameAs: socialProfiles,
				knowsAbout: [
					'Artificial intelligence',
					'Autonomous agents',
					'Software architecture',
					'Cloud-native systems'
				]
			},
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				url: siteUrl,
				name: m.seo_home_title(),
				description: m.seo_home_description(),
				publisher: { '@id': `${siteUrl}/#person` }
			}
		]
	});
</script>

<svelte:head>
	<title>{m.seo_home_title()}</title>
	<meta name="author" content="Ismael Messa" />
	<meta name="description" content={m.seo_home_description()} />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#09090B" />
	<link rel="canonical" href={`${siteUrl}/`} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={m.seo_home_title()} />
	<meta property="og:url" content={`${siteUrl}/`} />
	<meta property="og:title" content={m.seo_home_title()} />
	<meta property="og:description" content={m.seo_home_description()} />
	<meta property="og:image" content={`${siteUrl}/assets/preview.png`} />
	<meta property="og:image:alt" content={m.seo_home_image_alt()} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.seo_home_title()} />
	<meta name="twitter:description" content={m.seo_home_description()} />
	<meta name="twitter:image" content={`${siteUrl}/assets/preview.png`} />
	<meta name="twitter:image:alt" content={m.seo_home_image_alt()} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags, @typescript-eslint/no-unused-expressions -->
	{@html '<script type="application/ld+json">' + JSON.stringify(structuredData) + '</script>'}
</svelte:head>

<main>
	<Hero />
	<AboutIntro />
</main>
