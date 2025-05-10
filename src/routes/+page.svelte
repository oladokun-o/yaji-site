<script lang="ts">
	import TextLogo from '$lib/assets/text-logo.svg';
	import Side from '$lib/assets/yaggi-image.png';
	import HeroRice from '$lib/assets/hero-rice.png';
	import Base from '$lib/assets/jrice.png';
	import Garnish from '$lib/assets/pepper.png';
	import Sauce from '$lib/assets/sauce.png';
	import Sides from '$lib/assets/yam.png';
	import Protein from '$lib/assets/protein.png';
	import Fire from '$lib/assets/fire.png';
	import Pot from '$lib/assets/Pot.png';
	import ContactImg from '$lib/assets/contact-img.png';
	import Arrow from '$lib/assets/Arrow.png';
	import ArrowLeft from '$lib/assets/Arrow---Left-3.png';
	import HeroBackground from '$lib/assets/hero-background.png';
	import HeroImage1 from '$lib/assets/hero-image-1.svg';
	import HeroImage1Sm from '$lib/assets/hero-image-1-sm.svg';
	import HeroImage2 from '$lib/assets/hero-image-2.svg';
	import HeroImage2Sm from '$lib/assets/hero-image-2-sm.svg';
	import AboutUsBg from '$lib/assets/about-us-bg.svg';
	import AboutUsBgSm from '$lib/assets/about-us-bg-sm.svg';
	import { onMount } from 'svelte';

	const steps = [
		{
			img: Base,
			label: 'Start with a Base',
			color: '#EE3300',
			size: 'w-[201px] md:w-[150px] xl:[256px]'
		},
		{
			img: Protein,
			label: 'Choose Protein',
			color: '#4C0703',
			size: 'w-[182px] md:w-[150px] xl:[232px]'
		},
		{ img: Sauce, label: 'Add Sauce', color: '#FBAB1E', size: 'w-[163px] md:w-[150px] xl:[217px]' },
		{
			img: Sides,
			label: 'Pick Slides',
			color: '#104E44',
			size: 'w-[203px] md:w-[150px] xl:[259px]'
		},
		{
			img: Garnish,
			label: 'Garnish & Finish',
			color: '#EA6113',
			size: 'w-[120px] md:w-[80px] xl:w-[154px]'
		}
	];

	let currentIndex = 0;
	let carouselElement: HTMLDivElement | null = null;

	// Navigation functions
	function nextSlide() {
		if (currentIndex < steps.length - 1) {
			currentIndex++;
		} else {
			currentIndex = 0; // Loop back to first slide
		}
		updateCarousel();
	}

	function prevSlide() {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = steps.length - 1; // Loop to last slide
		}
		updateCarousel();
	}

	function updateCarousel() {
		if (carouselElement) {
			carouselElement.style.transform = `translateX(-${currentIndex * 100}%)`;
		}
	}

	onMount(() => {
		carouselElement = document.querySelector('.carousel-track');
		updateCarousel();
	});
</script>

<!-- ============================Hero section======================== -->
<section
	class="relative flex min-h-screen flex-col gap-30 overflow-x-hidden py-20 pb-56 md:gap-0 -mb-90 md:-mb-0"
	style="background-image: url({HeroBackground}); background-size: contain; background-position: center;"
>
	<!-- Main centered content (logo, title, tagline, opening info) -->
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center text-white lg:gap-12 2xl:gap-20"
	>
		<!-- Yaji logo -->
		<div class="w-[127px] lg:w-[150px] 2xl:w-[272.77px]">
			<img src={TextLogo} alt="name" class="w-full" />
		</div>

		<!-- Hero header text -->
		<div class="w-full md:max-w-[500px]">
			<h1
				class="Permanent-Marker text-[40px] leading-tight font-[600] lg:text-[50px] 2xl:text-[120px]"
			>
				Our Flavours<br />Served Bold!
			</h1>
		</div>

		<!-- Tagline -->
		<p class=" text-[15px] font-[600] lg:text-[20px] 2xl:text-[30px]">
			We bring you vibrant Nigerian Flavours<br />
			with Modern Convenience.
		</p>

		<!-- Opening notice and location -->
		<div
			class="flex w-32 flex-col overflow-hidden rounded-[16px] border-[2px] border-[#FBAB13] bg-[#FBAB13] md:w-[173px]"
		>
			<p
				class="flex h-[36px] w-full items-center justify-center px-2 py-1 text-[13px] md:text-[18px]"
			>
				Opening Soon
			</p>
			<p
				class="flex h-[44px] w-full items-center justify-center bg-white px-2 py-1 text-[10px] text-[#4C0703] uppercase md:text-[16px]"
			>
				from naija to dc!
			</p>
		</div>
	</div>

	<!--Floating hero images -->
	<div
		class="relative flex h-79 flex-col items-center justify-end gap-0 md:static md:block md:h-auto"
	>
		<!-- Left-side -->
		<div
			class="relative top-1/2 left-0 lg:left-19 xl:left-50 z-10 -ml-90 w-full max-w-[277px] sm:-ml-150 md:absolute md:-ml-0 md:max-w-[400px] md:-translate-x-1/2 md:-translate-y-1/2 lg:max-w-[500px] 2xl:max-w-[600px]"
		>
			<div class="relative">
				<!-- Hero image 1 -->
				<img src={HeroImage1} alt="hero-1" class="hidden w-full md:block" />
				<img src={HeroImage1Sm} alt="hero-1-sm" class="block w-full md:hidden" />
			</div>
		</div>

		<!-- Right-side rice image with floating fire icon -->
		<div
			class="relatve right-0 bottom-[0] lg:right-19 xl:right-20 z-10 -mr-60 w-full max-w-[332px] sm:-mr-150 md:absolute md:-mr-0 md:max-w-[400px] md:translate-x-1/4 lg:max-w-[500px] 2xl:max-w-[600px]"
		>
			<div class="relative">
				<!-- Hero image 2 -->
				<img src={HeroImage2} alt="hero-2" class="hidden w-full md:block" />
				<img src={HeroImage2Sm} alt="hero-2-sm" class="block w-full md:hidden" />
			</div>
		</div>
	</div>
</section>

<!-- ===============Introductory description============== -->
<section
	class="relative z-0 -mt-[150px] flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#FEE6B4] py-20 md:gap-5 xl:gap-10 pt-5 md:pt-0"
>
	<!-- Section heading -->
	<h1 class="Permanent-Marker text-[40px] font-medium text-[#4C0703] 2xl:text-[70px]">
		The Yaji Way!
	</h1>

	<!-- Introductory description about Yaji's concept -->
	<div
		class="flex w-full flex-col gap-5 px-5 text-center text-[17px] font-medium text-[#4C0703] md:w-[500px] md:px-0 xl:w-[783px] xl:text-[30px]"
	>
		<p>
			Yaji is the next evolution of West African flavour—a fast-casual restaurant built around bold,
			fire-kissed bowls, wraps, and tacos. Inspired by suya culture.
		</p>
		<p>Made to move with you.</p>
		<p>Built to stay on your mind.</p>
	</div>

	<!-- Steps to build a Yaji meal: base, protein, sauce, sides, garnish -->
	<!-- Desktop View: Grid Layout -->
	<div class="hidden gap-5 lg:flex lg:flex-row">
		{#each steps as step}
			<div class="flex flex-col items-center justify-between gap-3 text-white">
				<div class={step.size + ' flex h-full items-center justify-center'}>
					<img src={step.img} alt="food" class="w-full" />
				</div>
				<p
					class="rounded-lg px-6 py-3 text-center text-[10px] xl:text-[20px]"
					style="background-color: {step.color};"
				>
					{step.label}
				</p>
			</div>
		{/each}
	</div>

	<!-- Mobile View: Carousel -->
	<div class="relative mx-auto flex w-full max-w-md flex-col items-center px-5 md:mt-10 lg:hidden">
		<div
			class="relative flex h-[396px] w-[322px] flex-col items-center justify-between overflow-hidden rounded-[25px] bg-white pt-6 sm:w-full md:pt-9"
		>
			<div
				class="carousel-track flex w-full transition-transform duration-500 ease-in-out"
				bind:this={carouselElement}
			>
				{#each steps as step, index}
					<div class="h-auto w-full flex-shrink-0">
						<div class="flex h-full w-full flex-col justify-center gap-4 md:gap-9">
							<div class={step.size + ' mx-auto flex h-full items-center justify-center'}>
								<img src={step.img} alt={step.label} class="w-full" />
							</div>
							<div class="relative flex flex-col gap-9">
								<div
									class="mx-auto w-[50%] transform rounded-lg p-4 shadow-lg"
									style="background-color: {step.color}; opacity: 0.9;"
								>
									<p class="text-center text-sm font-medium text-white">{step.label}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Navigation buttons -->
			<div class="flex justify-center gap-10 pb-6 md:pb-9">
				<button class="nav-btn prev" on:click={prevSlide} aria-label="Previous">
					<svg
						width="20"
						height="12"
						viewBox="0 0 20 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.84281 11.9019C10.1028 11.7642 10.2649 11.5023 10.2649 11.2175V6.7825H19.1841C19.6345 6.7825 20 6.43195 20 6.00003C20 5.56811 19.6345 5.21756 19.1841 5.21756H10.2649V0.782525C10.2649 0.496663 10.1028 0.234796 9.84281 0.0981252C9.58281 -0.0406327 9.26516 -0.0312431 9.01387 0.120034L0.380745 5.33754C0.143595 5.48151 0 5.73086 0 6.00003C0 6.2692 0.143595 6.51854 0.380745 6.66252L9.01387 11.88C9.14659 11.9593 9.2978 12 9.44901 12C9.5839 12 9.71988 11.9666 9.84281 11.9019Z"
							class="icon-path"
						/>
					</svg>
				</button>

				<button class="nav-btn next" on:click={nextSlide} aria-label="Next">
					<svg
						width="20"
						height="12"
						viewBox="0 0 20 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="rotate-180"
					>
						<path
							d="M9.84281 11.9019C10.1028 11.7642 10.2649 11.5023 10.2649 11.2175V6.7825H19.1841C19.6345 6.7825 20 6.43195 20 6.00003C20 5.56811 19.6345 5.21756 19.1841 5.21756H10.2649V0.782525C10.2649 0.496663 10.1028 0.234796 9.84281 0.0981252C9.58281 -0.0406327 9.26516 -0.0312431 9.01387 0.120034L0.380745 5.33754C0.143595 5.48151 0 5.73086 0 6.00003C0 6.2692 0.143595 6.51854 0.380745 6.66252L9.01387 11.88C9.14659 11.9593 9.2978 12 9.44901 12C9.5839 12 9.71988 11.9666 9.84281 11.9019Z"
							class="icon-path"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

<!-- ============about section=================== -->
<section class="relative overflow-x-hidden py-20">
	<!-- Background image layer -->
	<div class="absolute inset-0 bg-cover bg-center">
		<img src={AboutUsBg} alt="about-us-bg" class="hidden h-full w-full object-cover md:block" />
		<img
			src={AboutUsBgSm}
			alt="about-us-bg-sm"
			class="block h-full w-full object-cover md:hidden"
		/>
	</div>

	<!-- Content wrapper with z-index to appear above background -->
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center text-[#FEE6B4] 2xl:gap-15"
	>
		<!-- Decorative fire and pot icons -->
		<div class="flex flex-col gap-5">
			<img src={Fire} alt="fire" class="w-25" />
			<img src={Pot} alt="pot" class="w-25" />
		</div>

		<!-- Section heading -->
		<h1 class="Permanent-Marker text-[40px] font-medium md:text-[70px]">Our Story</h1>

		<!-- Story content describing the inspiration behind Yaji -->
		<div class=" flex w-[80%] flex-col gap-10 text-xl font-medium md:w-180 md:text-3xl">
			<p>
				Yaji was born from a craving—something deeper than hunger. A craving for food that feels
				familiar yet fresh, rooted in heritage but made for now. Inspired by the bold heat of suya
				spice, Yaji is a love letter to our flavour, our fire, and our people.
			</p>
			<p>More than food—it’s culture, served bold.</p>
		</div>
	</div>
</section>

<!-- ============contact section============== -->
<section
	class="relative z-0 flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#4C0703] px-10 py-20"
>
	<!-- Contact form card -->
	<div class="w-full rounded-[25px] bg-[#FEF0EA] p-5 md:max-w-209 md:rounded-[30px]">
		<div class="flex flex-col items-center gap-5 md:flex-row lg:gap-20">
			<!-- Left: Image beside form -->
			<div class="w-full overflow-hidden rounded-[10px] md:max-w-50 md:rounded-[20px]">
				<img src={ContactImg} alt="contact-img" class="object-contain" />
			</div>

			<!-- Right: Signup form content -->
			<div class=" w-full text-center md:text-left">
				<h1 class="text-[30px] font-[600] text-[#4C0703] md:text-[35px] xl:text-[50px]">
					Get the first taste!
				</h1>
				<p class="text-[15px] font-normal text-[#4C0703] md:w-90 md:text-[15px]">
					Be the first to know when we open Sign up to join our waitlist
				</p>

				<!-- Email input and submit button -->
				<div
					class="mt-10 flex h-[41px] w-[100%] items-center overflow-hidden rounded-[10px] border border-[#f766315e] bg-white p-1 md:h-16 md:w-full"
				>
					<input
						type="email"
						placeholder="your.email@example.com"
						class="w-[90%] border-0 bg-white pt-1 pl-2 text-black outline-white focus:ring-0 focus:outline-none md:h-6"
					/>
					<button
						type="button"
						class="flex h-8 w-[82px] flex-row items-center justify-center rounded-lg bg-[#F76631] text-white md:h-14 md:w-[160px]"
					>
						<span class="text-[10px] md:text-[16px]">Submit</span>
						<img src={Arrow} alt="arrow" class="w-3 md:w-6" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Social media follow section -->
	<h1
		class="Permanent-Marker flex justify-center text-center text-4xl font-medium text-[#FEE6B4] md:text-5xl"
	>
		Follow The <br class="block md:hidden" /> Story
	</h1>
	<ul class="Plus Jakarta-Sans text-center font-light text-white underline">
		<li><a href="#" class="text-[25px]">Instagram</a></li>
		<li><a href="#" class="text-[25px]">Twitter</a></li>
		<li><a href="#" class="text-[25px]">Facebook</a></li>
	</ul>
</section>

<style>
	.nav-btn {
		height: 3rem;
		width: 3rem;
		border-radius: 9999px;
		border: 1px solid #f2f4f7;
		background-color: white;
		transition: all 0.3s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.nav-btn .icon-path {
		fill: #667085;
		transition: fill 0.3s ease;
	}

	.nav-btn:hover {
		border-color: #f76631;
		background-color: #f76631;
	}

	.nav-btn:hover .icon-path {
		fill: white;
	}
</style>
