<script lang="ts">
	import { page } from '$app/state';

	type StructuredData = Record<string, unknown>;

	type Props = {
		title: string;
		description: string;
		imageAlt: string;
		path: string;
		type?: 'website' | 'article';
		schema?: StructuredData;
	};

	let { title, description, imageAlt, path, type = 'website', schema }: Props = $props();

	const siteUrl = $derived(page.url.origin);
	const imageUrl = $derived(`${siteUrl}/avatar.png`);
	const canonicalUrl = $derived(`${siteUrl}${path}`);
	const structuredData = $derived(
		schema ?? {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			url: canonicalUrl,
			name: title,
			description
		}
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Ismael Messa" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	<!-- Static, trusted JSON-LD generated from page content. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags, @typescript-eslint/no-unused-expressions -->
	{@html '<script type="application/ld+json">' + JSON.stringify(structuredData) + '</script>'}
</svelte:head>
