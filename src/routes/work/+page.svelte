<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { projects } from '$lib/projects';
</script>

<main class="min-h-[calc(100vh-5rem)] px-6 py-16 lg:px-10">
	<h1 class="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">
		{m.nav_work()}
	</h1>
	<p class="text-muted-foreground mt-4 max-w-md text-sm sm:text-base">
		{m.work_description()}
	</p>

	<div class="mt-12 border-t">
  	<ul class="max-w-2xl divide-y border-b">
  		{#each projects as project, index (index)}
  			<li class="py-6">
  				<a
  					href={project.href}
  					target="_blank"
  					rel="noopener noreferrer"
  					class="group flex items-baseline justify-between gap-4"
  				>
  					<span class="font-display text-lg font-semibold uppercase group-hover:underline">
  						{project.name}
  					</span>
  					<span
  						class="text-muted-foreground group-hover:text-foreground shrink-0 text-xs tracking-wide uppercase transition"
  					>
  						{m.work_github_link()}
  					</span>
  				</a>
  				<p class="text-muted-foreground mt-2 text-sm sm:text-base">{@html project.description}</p>
  			</li>
  		{/each}
  	</ul>
	</div>
</main>
