<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';

	const navLinks = [
		{ href: '/blog', label: m.nav_blog },
		{ href: '/work', label: m.nav_work },
		{ href: '/about', label: m.nav_about },
		{ href: '/contact', label: m.nav_contact }
	];
</script>

<header class="relative z-10 grid grid-cols-1 border-b lg:grid-cols-[1fr_1.15fr_1fr]">
	<div class="flex h-20 items-center justify-between px-6 lg:px-10">
		<a href="/" class="font-display text-sm tracking-[0.2em] uppercase">{m.nav_brand()}</a>
	</div>

	<div class="hidden items-center justify-center lg:flex">
		<img src="/assets/Union.png" alt="" class="h-6 w-auto opacity-70 pr-5" />
	</div>

	<div class="flex h-20 items-center justify-end gap-8 px-6 lg:px-10">
		{#each navLinks as link (link.href)}
			<a
				href={link.href}
				aria-current={page.url.pathname === link.href ? 'page' : undefined}
				class="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground text-sm tracking-wide uppercase transition"
			>
				{link.label()}
			</a>
		{/each}
	</div>
</header>
