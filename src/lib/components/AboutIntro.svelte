<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	let scene: HTMLElement;
	let progress = $state(0);

	const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

	const reveal = (start: number, end: number) =>
		`--reveal: ${clamp((progress - start) / (end - start))};`;

	const focus = (start: number, end: number) => {
		const entry = clamp((progress - start) / 0.12);
		const exit = 1 - clamp((progress - end) / 0.18) * 0.58;
		return `--reveal: ${entry}; --focus: ${exit};`;
	};

	$effect(() => {
		let frame = 0;

		const updateProgress = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const bounds = scene.getBoundingClientRect();
				const distance = Math.max(scene.offsetHeight - window.innerHeight, 1);
				progress = clamp(-bounds.top / distance);
			});
		};

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	});
</script>

<section
	bind:this={scene}
	class="relative h-[320svh] bg-cinematic"
	aria-labelledby="about-intro-title"
>
	<div class="sticky top-0 min-h-svh overflow-hidden bg-cinematic text-foreground">
		<div class="neural-field pointer-events-none absolute inset-0" aria-hidden="true">
			<svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
				<g class="network network-one">
					<path d="M66 752 292 589 502 690 731 473 1010 562 1268 338 1427 408" />
					<path d="M292 589 384 318 731 473 806 192 1010 562 1160 725" />
					<path d="M502 690 635 870 1010 562 1268 782" />
					<path d="M384 318 190 176M806 192 1002 70M1160 725 1388 875" />
					<circle cx="66" cy="752" r="3" />
					<circle cx="292" cy="589" r="5" />
					<circle cx="502" cy="690" r="3" />
					<circle cx="731" cy="473" r="6" />
					<circle cx="1010" cy="562" r="4" />
					<circle cx="1268" cy="338" r="5" />
					<circle cx="1427" cy="408" r="3" />
					<circle cx="384" cy="318" r="4" />
					<circle cx="806" cy="192" r="3" />
					<circle cx="1160" cy="725" r="5" />
				</g>
				<g class="network network-two">
					<path d="M-30 301 206 414 448 198 690 330 935 166 1184 259 1478 86" />
					<path d="M206 414 311 805 690 330 866 778 1184 259 1332 630" />
					<circle cx="206" cy="414" r="3" />
					<circle cx="448" cy="198" r="4" />
					<circle cx="690" cy="330" r="3" />
					<circle cx="935" cy="166" r="5" />
					<circle cx="1184" cy="259" r="3" />
				</g>
			</svg>
			<div class="signal signal-one"></div>
			<div class="signal signal-two"></div>
		</div>

		<div
			class="relative mx-auto flex min-h-svh w-full max-w-[1600px] flex-col px-6 py-[11svh] sm:px-10 lg:px-16 xl:px-24"
		>
			<div class="opening reveal-block" style={focus(0, 0.34)}>
				<p
					class="font-display text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.055em]"
				>
					{m.home_about_opening()}
				</p>
				<h2
					id="about-intro-title"
					class="font-display text-[clamp(3.25rem,9vw,8.75rem)] leading-[0.88] font-semibold tracking-[-0.065em]"
				>
					{m.home_about_emphasis()}
				</h2>
			</div>

			<div
				class="description reveal-block mt-auto ml-auto w-full max-w-3xl pb-[8svh] text-muted-foreground sm:w-4/5 lg:w-3/5"
				style={focus(0.2, 0.58)}
			>
				<p class="text-[clamp(1.35rem,2.7vw,2.9rem)] leading-[1.16] tracking-[-0.035em]">
					{m.home_about_foundation_line1()}<br />
					{m.home_about_foundation_line2()}<br />
					{m.home_about_foundation_line3()}
				</p>

				<p class="mt-[4svh] text-[clamp(1.1rem,2vw,2rem)] leading-[1.3] tracking-[-0.025em]">
					{m.home_about_building_line1()}<br />
					{m.home_about_building_line2()}<br />
					{m.home_about_building_line3()}
				</p>
			</div>

			<div
				class="manifesto absolute right-6 bottom-[7svh] left-6 sm:right-10 sm:left-10 lg:right-16 lg:left-16 xl:right-24 xl:left-24"
			>
				<p class="manifesto-line" style={reveal(0.5, 0.64)}>
					{m.home_about_manifesto_reliability()}
				</p>
				<p class="manifesto-line" style={reveal(0.64, 0.78)}>
					{m.home_about_manifesto_impact()}
				</p>
				<p class="manifesto-line manifesto-final" style={reveal(0.78, 0.92)}>
					{m.home_about_manifesto_future()}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.reveal-block {
		opacity: calc(var(--reveal) * var(--focus, 1));
		transform: translateY(calc((1 - var(--reveal)) * 2rem));
		filter: blur(calc((1 - var(--reveal)) * 5px));
		will-change: opacity, transform, filter;
	}

	.manifesto {
		font-family: var(--font-display);
		font-size: clamp(1.65rem, 4vw, 4.75rem);
		font-weight: 500;
		letter-spacing: -0.045em;
		line-height: 1.04;
	}

	.manifesto-line {
		opacity: calc(0.12 + var(--reveal) * 0.88);
		transform: translateY(calc((1 - var(--reveal)) * 1.25rem));
		transition: color 700ms ease;
		will-change: opacity, transform;
	}

	.manifesto-final {
		font-weight: 600;
	}

	.neural-field {
		opacity: 0.075;
		mask-image: radial-gradient(circle at 64% 50%, black 0%, transparent 72%);
	}

	.neural-field svg {
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	.network {
		fill: var(--foreground);
		stroke: var(--foreground);
		stroke-width: 1;
		vector-effect: non-scaling-stroke;
	}

	.network path {
		fill: none;
	}

	.network-one {
		animation: drift 28s ease-in-out infinite alternate;
	}

	.network-two {
		opacity: 0.38;
		animation: drift-reverse 34s ease-in-out infinite alternate;
	}

	.signal {
		position: absolute;
		border: 1px solid var(--foreground);
		border-radius: 999px;
		opacity: 0;
		animation: reason 7s ease-out infinite;
	}

	.signal-one {
		top: 46.8%;
		left: 50.6%;
	}

	.signal-two {
		top: 55.5%;
		left: 70%;
		animation-delay: 3.2s;
	}

	@keyframes drift {
		to {
			transform: translate3d(1.5%, -1%, 0) scale(1.015);
		}
	}

	@keyframes drift-reverse {
		to {
			transform: translate3d(-1%, 1.5%, 0) scale(0.99);
		}
	}

	@keyframes reason {
		0% {
			width: 0;
			height: 0;
			opacity: 0;
		}
		18% {
			opacity: 0.85;
		}
		100% {
			width: 12rem;
			height: 12rem;
			transform: translate(-6rem, -6rem);
			opacity: 0;
		}
	}

	@media (max-height: 760px) {
		.opening p {
			font-size: clamp(2.5rem, 7vw, 5.75rem);
		}

		.opening h2 {
			font-size: clamp(3rem, 8.5vw, 6.75rem);
		}
	}

	@media (max-width: 639px) {
		.opening {
			position: absolute;
			top: 13svh;
			right: 1.5rem;
			left: 1.5rem;
		}

		.description {
			position: absolute;
			top: 45svh;
			right: 1.5rem;
			left: 2.5rem;
			width: auto;
			margin: 0;
			padding: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.reveal-block,
		.manifesto-line {
			opacity: 1;
			transform: none;
			filter: none;
		}

		.network,
		.signal {
			animation: none;
		}
	}
</style>
