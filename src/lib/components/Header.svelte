<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';

	const navLinks = [
		{ href: '/blog', label: m.nav_blog },
		// { href: '/work', label: m.nav_work },
		{ href: '/experience', label: m.nav_experience },
		{ href: '/about', label: m.nav_about },
		{ href: '/contact', label: m.nav_contact }
	];

	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 10;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class={`sticky top-0 z-20 grid grid-cols-1 border-b transition-colors duration-300 lg:grid-cols-[1fr_1.15fr_1fr] ${scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}
>
	<div class="flex h-16 md:h-20 items-center justify-between px-6 lg:px-10">
		<a href="/" class="font-display text-sm tracking-[0.2em] uppercase">{m.nav_brand()}</a>
	</div>

	<div class="hidden items-center justify-center lg:flex">
		<img src="/assets/Union.png" alt="" class="h-6 w-auto opacity-70 pr-5" />
	</div>

	<div class="flex h-14 md:h-20 items-center justify-end gap-8 px-6 lg:px-10">
		{#each navLinks as link (link.href)}
			<a
				href={link.href}
				class:text-foreground!={page.url.pathname.startsWith(link.href)}
				class="text-muted-foreground hover:text-foreground aria-[current=page]: text-sm tracking-wide uppercase transition"
			>
				{link.label()}
			</a>
		{/each}
	</div>
</header>
