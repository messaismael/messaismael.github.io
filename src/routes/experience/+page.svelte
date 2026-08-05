<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { experiences } from '$lib/experience';
</script>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_experience()}
	</h1>
	<p class="text-muted-foreground mt-4 max-w-md text-sm sm:text-base">
		{m.experience_description()}
	</p>

	<div class="mt-12 border-t max-w-2sxl">
  	<ul class="max-w-2xl space-y-16">
  		{#each experiences as job, index (index)}
  			<li class="pt-8" class:border-t={index !== 0} >
  				<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
  					<h2 class="font-display text-xl font-semibold uppercase">{job.company}</h2>
  					<p class="text-muted-foreground text-xs tracking-[0.2em] uppercase">{job.period}</p>
  				</div>
  				<p class="text-muted-foreground mt-1 text-sm sm:text-base">
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
  								<span class="text-muted-foreground mr-2">—</span>{highlight}
  							</li>
  						{/each}
  					</ul>
  				{/if}
  			</li>
  		{/each}
  	</ul>

	</div>
</main>
