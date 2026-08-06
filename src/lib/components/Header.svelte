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
	let menuOpen = $state(false);

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

		<button
			type="button"
			class="flex items-center gap-3 text-sm tracking-wide uppercase lg:hidden"
			aria-controls="primary-navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<!-- <span>{m.nav_menu()}</span> -->
			<span class:menu-open={menuOpen} class="menu-icon" aria-hidden="true">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</button>
	</div>

	<div class="hidden items-center justify-center lg:flex">
		<img src="/assets/Union.png" alt="" class="h-6 w-auto opacity-70 pr-5" />
	</div>

	<nav
		id="primary-navigation"
		aria-label="Primary navigation"
		class={`${menuOpen ? 'visible pointer-events-auto max-h-96 opacity-100' : 'invisible pointer-events-none max-h-0 opacity-0'} flex flex-col overflow-hidden transition-[max-height,opacity,visibility] duration-500 ease-out lg:visible lg:pointer-events-auto lg:flex lg:max-h-none lg:flex-row lg:items-center lg:justify-end lg:gap-8 lg:overflow-visible lg:px-10 lg:py-0 lg:opacity-100`}
	>
		{#each navLinks as link (link.href)}
			<a
				href={link.href}
				aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
				onclick={() => (menuOpen = false)}
				class:text-foreground!={page.url.pathname.startsWith(link.href)}
				class="border-t px-6 py-3 text-xs tracking-wide whitespace-nowrap text-muted-foreground uppercase transition hover:text-foreground lg:border-0 lg:px-0 lg:py-0 lg:text-sm"
			>
				{link.label()}
			</a>
		{/each}
	</nav>
</header>

<style>
	.menu-icon {
		display: inline-flex;
		width: 1.65rem;
		flex-direction: column;
		gap: 0.3rem;
	}

	.menu-icon span {
		display: block;
		height: 2px;
		width: 100%;
		background: currentColor;
		transition: transform 350ms ease, opacity 200ms ease;
	}

	.menu-icon span:last-child {
		width: 0.85rem;
	}

	.menu-icon.menu-open span:first-child {
		transform: translateY(0.6rem) rotate(45deg);
	}

	.menu-icon.menu-open span:nth-child(2) {
		opacity: 0;
	}

	.menu-icon.menu-open span:last-child {
		width: 100%;
		transform: translateY(-0.6rem) rotate(-45deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.menu-icon span {
			transition: none;
		}
	}
</style>
