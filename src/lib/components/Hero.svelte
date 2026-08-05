<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { m } from '$lib/paraglide/messages.js';

	const stack = ['Spring Boot', 'LangGraph', 'PostgreSQL', 'OpenAI', 'AWS'];
</script>

<section
	class="relative grid min-h-[calc(100vh-5rem)] grid-cols-1 text-foreground lg:grid-cols-[1fr_1.15fr_1fr]"
>
	<!-- Colonne gauche : identité + pitch -->
	<div class="relative flex flex-col lg:border-r">
		<div class="flex flex-1 items-center px-6 py-14 lg:px-10">
			<h1
				class="font-display text-5xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-6xl lg:text-5xl xl:text-6xl"
			>
				{m.hero_headline_line1()}<br />{m.hero_headline_line2()}<br />{m.hero_headline_line3()}<br
				/>{m.hero_headline_line4()}<br />{m.hero_headline_line5()}
			</h1>
		</div>

		<div class="border-t px-6 py-10 lg:px-10">
			<p class="text-muted-foreground max-w-xs text-sm leading-relaxed sm:text-base">
				{m.hero_pitch()}
			</p>

			<Button href="/experience" variant="outline" size="lg" class="mt-8">{m.hero_cta_work()}</Button>

			<div class="text-muted-foreground mt-14 flex items-center gap-5">
				<a href="#" aria-label={m.social_github()} class="hover:text-foreground transition">
					<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
						<path
							d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
						/>
					</svg>
				</a>
				<a href="#" aria-label={m.social_linkedin()} class="hover:text-foreground transition">
					<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
						<path
							d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
						/>
					</svg>
				</a>
				<a
					href="mailto:ismael@automathing.ca"
					aria-label={m.social_email()}
					class="hover:text-foreground transition"
				>
					<svg
						viewBox="0 0 24 24"
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
						<path d="m3.5 6 8.5 7 8.5-7" />
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- Colonne centrale : laisse le visuel d'ambiance respirer, pas de contenu -->
	<div class="relative hidden lg:block lg:border-r"></div>

	<!-- Colonne droite : case study -->
	<div class="relative flex flex-col">
		<div
			class="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden border-b"
			style="background-image: repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 18px);"
		>
			<span class="text-muted-foreground text-xs tracking-[0.3em] uppercase"
				>{m.case_study_preview()}</span
			>
		</div>

		<div class="flex flex-1 flex-col justify-between px-6 py-10 lg:px-10">
			<div>
				<p class="text-muted-foreground text-xs tracking-[0.2em] uppercase">
					{m.case_study_category()}
				</p>
				<h2 class="font-display mt-2 text-3xl font-semibold">{m.case_study_title()}</h2>

				<div class="mt-6 flex flex-wrap gap-2">
					{#each stack as tech (tech)}
						<span class="text-muted-foreground rounded-full border px-3 py-1 text-xs">
							{tech}
						</span>
					{/each}
				</div>

				<a href="/work/hermes-ai" class="group mt-8 flex items-center gap-3">
					<span
						class="group-hover:bg-foreground group-hover:text-background flex h-10 w-10 items-center justify-center border transition"
					>
						<svg
							viewBox="0 0 24 24"
							class="h-4 w-4 transition group-hover:translate-x-0.5"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M5 19 19 5M9 5h10v10" />
						</svg>
					</span>
					<span class="text-sm tracking-wide uppercase">{m.case_study_cta()}</span>
				</a>
			</div>

			<p class="font-display mt-10 text-sm tracking-wide">
				<span class="text-foreground">01</span><span class="text-muted-foreground">/04</span>
			</p>
		</div>
	</div>
</section>
