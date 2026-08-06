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

	<div class="about-grid mt-12 border-t pt-10 lg:mt-16 lg:pt-14">
		<div class="max-w-2xl">
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

		<figure class="about-portrait" aria-labelledby="portrait-caption">
			<div class="portrait-orbit portrait-orbit-one" aria-hidden="true"></div>
			<div class="portrait-orbit portrait-orbit-two" aria-hidden="true"></div>
			<div class="portrait-frame">
				<img
					src="/avatar.png"
					alt={m.about_avatar_alt()}
					width="450"
					height="457"
					loading="eager"
					decoding="async"
				/>
			</div>
			<figcaption id="portrait-caption" class="portrait-caption">
				<!-- <span class="h-px w-8 bg-foreground/35" aria-hidden="true"></span> -->
				<span>{m.about_avatar_label()}</span>
			</figcaption>
		</figure>
	</div>
</main>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 4rem;
	}

	.about-portrait {
		position: relative;
		order: -1;
		align-self: start;
		justify-self: center;
		width: min(72vw, 22rem);
		aspect-ratio: 1;
		padding: 1.15rem;
	}

	.portrait-frame {
		position: relative;
		z-index: 1;
		height: 100%;
		overflow: hidden;
		border-radius: 9999px;
		background: #09090b;
		box-shadow: 0 0 0 1px color-mix(in oklab, currentColor 16%, transparent), 0 2rem 5rem -2rem rgb(0 0 0 / 35%);
	}

	.portrait-frame::after {
		position: absolute;
		inset: 0;
		background: linear-gradient(145deg, rgb(255 255 255 / 12%), transparent 42%, rgb(0 0 0 / 20%));
		content: '';
		pointer-events: none;
	}

	.portrait-frame img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center top;
		filter: grayscale(1) contrast(1.08);
		transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms ease;
	}

	.about-portrait:hover .portrait-frame img {
		transform: scale(1.035);
		filter: grayscale(0.65) contrast(1.05);
	}

	.portrait-orbit {
		position: absolute;
		inset: 0;
		border: 1px solid currentColor;
		border-radius: 9999px;
		color: color-mix(in oklab, currentColor 18%, transparent);
		pointer-events: none;
	}

	.portrait-orbit-one {
		transform: rotate(-28deg) scaleX(1.12);
	}

	.portrait-orbit-two {
		transform: rotate(48deg) scaleX(0.84) scaleY(1.08);
		opacity: 0.65;
	}

	.portrait-caption {
		position: absolute;
		bottom: -0.2rem;
		left: 50%;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		transform: translateX(-50%);
		white-space: nowrap;
		font-family: var(--font-display);
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: color-mix(in oklab, currentColor 68%, transparent);
	}

	@media (min-width: 1024px) {
		.about-grid {
			grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
			align-items: start;
			gap: 7rem;
		}

		.about-portrait {
			order: 0;
			margin-top: -2rem;
			justify-self: end;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.portrait-frame img {
			transition: none;
		}
	}
</style>
