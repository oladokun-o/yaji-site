<script>
	import Name from '$lib/assets/yaji-logo.png';
	import HeroText from '$lib/assets/Our Flavours Served Bold!.png';
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
</script>

<!-- ============================Hero section======================== -->
<section class="relative min-h-screen overflow-x-hidden py-20 pb-56 flex flex-col gap-30 md:gap-0">
	<!-- Background image -->
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/background.png');"
	></div>

	<!-- Orange overlay with transparency using blend mode -->
	<div class="absolute inset-0 bg-[#EE3300] opacity-80 mix-blend-multiply"></div>

	<!-- Main centered content (logo, title, tagline, opening info) -->
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-10 text-center text-white md:gap-20"
	>
		<!-- Yaji logo -->
		<div class="w-full max-w-[100px] md:max-w-[200px]">
			<img src={Name} alt="name" class="w-full" />
		</div>

		<!-- Hero header text -->
		<div class="w-full md:max-w-[500px]">
			<h1 class="Permanent-Marker text-[50px] lg:text-[70px]">Our Flavours<br/>Served Bold!</h1>
		</div>

		<!-- Tagline -->
		<p class="Plus-Jakarta-Sans text-[20px] font-[500]">
			We bring you vibrant Nigerian Flavours<br />
			with Modern Convenience.
		</p>

		<!-- Opening notice and location -->
		<div class="flex flex-col text-sm">
			<p class="rounded-t-xl bg-[#FBAB13] px-2 py-1">Opening Soon</p>
			<p class="rounded-b-xl bg-white px-2 py-1 text-black uppercase">from naija to dc!</p>
		</div>
	</div>

	<div class="relative md:static">
		<!-- Left-side puff puff image with overlay text -->
		<div
			class="w-ful absolute top-1/2 left-0 z-10 max-w-[300px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px] lg:max-w-[600px]"
		>
			<div class="relative">
				<!-- Puff Puff image -->
				<img src={PuffPuff} alt="puffpuff" class="w-full" />

				<!-- "🔥 100% Authentic" label on puff puff -->
				<div class="absolute top-[85%] right-[0px] z-10 lg:top-25">
					<p class="rounded-xl bg-white px-5 py-3 font-medium text-black">
						🔥 100% <span class="text-sm font-extralight">Authentic</span>
					</p>
				</div>
			</div>
		</div>

		<!-- Right-side rice image with floating fire icon -->
		<div
			class="w-ful absolute right-0 bottom-[0] z-10 max-w-[300px] translate-x-1/4 md:max-w-[400px] lg:max-w-[600px]"
		>
			<div class="relative">
				<!-- Rice image -->
				<img src={HeroRice} alt="rice" class="w-full" />

				<!-- Floating fire image above rice -->
				<div
					class="absolute -top-[10%] left-[25%] z-10 w-20 md:-top-[25%] md:w-40 lg:-top-[20%] lg:w-55"
				>
					<img src={Fire} alt="fire" class="w-full" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===============Introductory description============== -->
<section
	class="relative z-0 -mt-[150px] flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#FEE6B4]"
>
	<!-- Section heading -->
	<h1 class="Permanent-Marker text-5xl font-extrabold text-[#4C0703]">The Yaji Way!</h1>

	<!-- Introductory description about Yaji's concept -->
	<div
		class="Plus-Jakarta-Sans flex w-90 flex-col gap-5 text-center text-lg font-medium text-[#4C0703] md:w-109"
	>
		<p>
			Yaji is the next evolution of West African flavour—a fast-casual restaurant built around bold,
			fire-kissed bowls, wraps, and tacos. Inspired by suya culture.
		</p>
		<p>Made to move with you.</p>
		<p>Built to stay on your mind.</p>
	</div>

	<!-- Steps to build a Yaji meal: base, protein, sauce, sides, garnish -->
	<div class="flex flex-row gap-3">
		<!-- Step 1: Base -->
		<div class="Plus-Jakarta-Sans flex flex-col items-center justify-center gap-3 text-white">
			<div class="w-40">
				<img src={Jrice} alt="food" class="w-full" />
			</div>
			<p class="w-35 rounded-lg bg-[#EE3300] py-3 text-center text-sm">Start with a Base</p>
		</div>

		<!-- Step 2: Protein -->
		<div class="Plus-Jakarta-Sans flex flex-col items-center justify-center gap-3 text-white">
			<div class="w-40">
				<img src={Protein} alt="food" class="w-full" />
			</div>
			<p class="w-35 rounded-lg bg-[#4C0703] py-3 text-center text-sm">Choose Protein</p>
		</div>

		<!-- Step 3: Sauce -->
		<div class="Plus-Jakarta-Sans flex flex-col items-center justify-center gap-3 text-white">
			<div class="w-40">
				<img src={Sauce} alt="food" class="w-full" />
			</div>
			<p class="w-35 rounded-lg bg-[#FBAB1E] py-3 text-center text-sm">Add Sauce</p>
		</div>

		<!-- Step 4: Sides -->
		<div class="Plus-Jakarta-Sans flex flex-col items-center justify-center gap-3 text-white">
			<div class="w-40">
				<img src={Yam} alt="food" class="w-full" />
			</div>
			<p class="w-35 rounded-lg bg-[#104E44] py-3 text-center text-sm">Pick Slides</p>
		</div>

		<!-- Step 5: Garnish -->
		<div class="Plus-Jakarta-Sans flex flex-col items-center justify-center gap-3 text-white">
			<div class="w-40">
				<img src={Pepper} alt="food" class="w-full" />
			</div>
			<p class="w-35 rounded-lg bg-[#EA6113] py-3 text-center text-sm">Garnish & Finish</p>
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
		<h1 class="Permanent-Marker text-5xl font-extrabold">Our Story</h1>

		<!-- Story content describing the inspiration behind Yaji -->
		<div class="Plus-Jakarta-Sans flex md:w-180 w-[80%] flex-col gap-10 md:text-2xl text-xl font-medium">
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
	class="relative z-0 flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#4C0703] px-10"
>
	<!-- Contact form card -->
	<div class="md:max-w-209 w-full rounded-4xl bg-[#FEF0EA] p-10">
		<div class="flex flex-col items-center gap-20 md:flex-row">
			<!-- Left: Image beside form -->
			<div class="w-full md:max-w-50 overflow-hidden rounded-4xl">
				<img src={ContactImg} alt="contact-img" class="object-contain" />
			</div>

			<!-- Right: Signup form content -->
			<div class="Plus-Jakarta-Sans">
				<h1 class="text-3xl font-medium text-[#4C0703]">Get the first taste!</h1>
				<p class="text-xl font-normal text-[#4C0703]">
					Be the first to know when we open <br />
					Sign up to join our waitlist
				</p>

				<!-- Email input and submit button -->
				<div class="mt-10 flex md:w-full w-[100%] rounded-2xl border border-[#f766315e] bg-white p-1">
					<input
						type="email"
						placeholder="your.email@example.com"
						class="h-12 w-70 border-0 bg-white"
					/>
					<button
						type="button"
						class="flex w-full flex-row items-center justify-center rounded-2xl bg-[#F76631] text-white"
					>
						<span>Submit</span>
						<img src={Arrow} alt="arrow" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Social media follow section -->
	<h1 class="Permanent-Marker text-5xl font-extrabold text-[#FEE6B4] text-center flex justify-center">Follow The Story</h1>
	<ul class="Plus Jakarta-Sans text-center text-sm font-light text-white underline">
		<li><a href="#">Instagram</a></li>
		<li><a href="#">Twitter</a></li>
		<li><a href="#">Facebook</a></li>
	</ul>
</section>
