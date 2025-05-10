<script lang="ts">
	import Name from '$lib/assets/yaji-logo.png';
	import PuffPuff from '$lib/assets/yaggi-image.png';
	import HeroRice from '$lib/assets/hero-rice.png';
	import Jrice from '$lib/assets/jrice.png';
	import Pepper from '$lib/assets/pepper.png';
	import Sauce from '$lib/assets/sauce.png';
	import Yam from '$lib/assets/yam.png';
	import Protein from '$lib/assets/protein.png';
	import Fire from '$lib/assets/fire.png';
	import Pot from '$lib/assets/Pot.png';
	import ContactImg from '$lib/assets/contact-img.png';
	import Arrow from '$lib/assets/Arrow.png';
	import ArrowLeft from '$lib/assets/Arrow---Left-3.png';

	const steps = [
		{ img: Jrice, label: 'Start with a Base', color: '#EE3300' },
		{ img: Protein, label: 'Choose Protein', color: '#4C0703' },
		{ img: Sauce, label: 'Add Sauce', color: '#FBAB1E' },
		{ img: Yam, label: 'Pick Slides', color: '#104E44' },
		{ img: Pepper, label: 'Garnish & Finish', color: '#EA6113' }
	];

	let currentIndex = 0;

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % steps.length;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + steps.length) % steps.length;
	};

	// Auto slide change every 5 seconds
	import { onMount } from 'svelte';
	onMount(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	});
</script>

<!-- ============================Hero section======================== -->
<section class="relative flex min-h-screen flex-col gap-30 overflow-x-hidden py-20 pb-56 md:gap-0">
	<!-- Background image -->
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/background.png');"
	></div>

	<!-- Orange overlay with transparency using blend mode -->
	<div class="absolute inset-0 bg-[#E7472C] opacity-80 mix-blend-multiply"></div>

	<!-- Main centered content (logo, title, tagline, opening info) -->
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center text-white md:gap-20"
	>
		<!-- Yaji logo -->
		<div class="w-full max-w-[127px] md:max-w-[270px]">
			<img src={Name} alt="name" class="w-full" />
		</div>

		<!-- Hero header text -->
		<div class="w-full md:max-w-[500px]">
			<h1 class="Permanent-Marker text-[40px] lg:text-[70px] leading-tight">Our Flavours<br />Served Bold!</h1>
		</div>

		<!-- Tagline -->
		<p class=" text-[15px] font-[600] lg:text-3xl">
			We bring you vibrant Nigerian Flavours<br />
			with Modern Convenience.
		</p>

		<!-- Opening notice and location -->
		<div class="flex h-[60px] w-32 flex-col text-sm md:h-20 md:w-[173px] md:text-lg">
			<p class="rounded-t-xl bg-[#FBAB13] px-2 py-1">Opening Soon</p>
			<p class="rounded-b-xl bg-white px-2 py-1 text-[10px] text-black uppercase md:text-sm">
				from naija to dc!
			</p>
		</div>
	</div>

	<!--Floating hero images -->
	<div class="relative flex flex-col items-center justify-end gap-0 md:static md:block h-79 md:h-auto">
		<!-- Left-side puff puff image with overlay text -->
		<div
			class="w-full relative md:absolute -ml-90 sm:-ml-150 md:-ml-0 top-1/2 left-0 z-10 max-w-[277px] md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[400px] lg:max-w-[600px]"
		>
			<div class="relative ">
				<!-- Puff Puff image -->
				<img src={PuffPuff} alt="puffpuff" class="w-full" />

				<!-- "🔥 100% Authentic" label on puff puff -->
				<div class="absolute top-[85%] right-[0px] z-10 lg:top-25">
					<p class="rounded-xl bg-white px-2 py-2 md:px-5 md:py-3 font-medium text-black text-[12px]">
						🔥 100% <span class="md:text-sm text-[10px] font-extralight">Authentic</span>
					</p>
				</div>
			</div>
		</div>

		<!-- Right-side rice image with floating fire icon -->
		<div
			class="w-full relatve md:absolute -mr-60 sm:-mr-150 md:-mr-0 right-0 bottom-[0] z-10 max-w-[332px] md:translate-x-1/4 md:max-w-[400px] lg:max-w-[600px]"
		>
			<div class="relative">
				<!-- Rice image -->
				<img src={HeroRice} alt="rice" class="w-full" />

				<!-- Floating fire image above rice -->
				<div
					class="absolute -top-[15%] left-[25%] z-10 w-30 md:-top-[25%] md:w-40 lg:-top-[20%] lg:w-55"
				>
					<img src={Fire} alt="fire" class="w-full" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===============Introductory description============== -->
<section
	class="relative z-0 -mt-[150px] flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#FEE6B4] py-20"
>
	<!-- Section heading -->
	<h1 class="Permanent-Marker text-[40px] font-medium text-[#4C0703] md:text-[70px]">
		The Yaji Way!
	</h1>

	<!-- Introductory description about Yaji's concept -->
	<div
		class=" flex w-90 flex-col gap-5 text-center text-lg font-medium text-[#4C0703] md:w-109 md:text-3xl"
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
	<div class="hidden gap-3 lg:flex lg:flex-row">
		{#each steps as step}
			<div class=" flex flex-col items-center justify-center gap-3 text-white">
				<div class="w-full max-w-50">
					<img src={step.img} alt="food" class="w-full" />
				</div>
				<p
					class="w-35 rounded-lg py-3 text-center text-[16px]"
					style="background-color: {step.color};"
				>
					{step.label}
				</p>
			</div>
		{/each}
	</div>

	<!-- Mobile View: Carousel -->
	<div class="relative mx-auto w-full max-w-md px-5 py-16 lg:hidden">
		<div class=" relative w-full overflow-hidden">
			<div
				class="flex w-full transition-transform duration-500 ease-in-out"
				style="transform: translateX(-{currentIndex * 100}%)"
			>
				{#each steps as step, index}
					<div class=" h-auto w-full flex-shrink-0 rounded-3xl bg-white">
						<div class="flex h-full w-full flex-col justify-center gap-9 py-9">
							<div class="mx-auto max-w-50">
								<img src={step.img} alt={step.label} class="h-full w-full object-cover" />
							</div>
							<div class="relative flex flex-col gap-9">
								<div
									class="bg-opacity-50 mx-auto w-[50%] transform rounded-lg p-4 shadow-lg"
									style="background-color: {step.color}"
								>
									<p class="text-center text-sm text-white">{step.label}</p>
								</div>
								<div class="flex justify-center gap-10">
									<button
										class="h-12 w-12 transform rounded-full bg-[#F2F4F7] shadow-lg"
										on:click={prevSlide}
										aria-label="Previous"
									>
										<img src={ArrowLeft} alt="arrow" class="mx-auto" />
									</button>
									<button
										class="h-12 w-12 transform rounded-full bg-[#F76631] shadow-lg"
										on:click={nextSlide}
										aria-label="Next"
									>
										<img src={Arrow} alt="arrow" class="mx-auto" />
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============about section=================== -->
<section class="relative min-h-[50vh] overflow-x-hidden py-20">
	<!-- Background image layer -->
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/bg.png');"></div>

	<!-- Content wrapper with z-index to appear above background -->
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-15 text-center text-[#FEE6B4]"
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
	<div class="w-full rounded-4xl bg-[#FEF0EA] p-7 md:max-w-209">
		<div class="flex flex-col items-center gap-5 md:flex-row lg:gap-20">
			<!-- Left: Image beside form -->
			<div class="w-full overflow-hidden rounded-4xl md:max-w-50">
				<img src={ContactImg} alt="contact-img" class="object-contain" />
			</div>

			<!-- Right: Signup form content -->
			<div class=" w-full text-center md:text-left">
				<h1 class="text-xl font-[600] text-[#4C0703] md:text-3xl">Get the first taste!</h1>
				<p class="text-sm font-normal text-[#4C0703] md:w-90 md:text-xl">
					Be the first to know when we open Sign up to join our waitlist
				</p>

				<!-- Email input and submit button -->
				<div
					class="mt-10 flex h-[41px] w-[100%] items-center rounded-2xl border border-[#f766315e] bg-white p-1 md:h-16 md:w-full"
				>
					<input
						type="email"
						placeholder="your.email@example.com"
						class="h-4 w-[90%] border-0 bg-white text-black outline-white focus:ring-0 focus:outline-none md:h-6"
					/>
					<button
						type="button"
						class="flex h-8 w-[82px] flex-row items-center justify-center rounded-lg bg-[#F76631] text-white md:h-14 md:w-[160px] md:rounded-2xl"
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
		Follow The Story
	</h1>
	<ul class="Plus Jakarta-Sans text-center text-2xl font-light text-white underline md:text-sm">
		<li><a href="#">Instagram</a></li>
		<li><a href="#">Twitter</a></li>
		<li><a href="#">Facebook</a></li>
	</ul>
</section>
