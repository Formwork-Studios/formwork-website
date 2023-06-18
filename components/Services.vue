<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from "vue";

const hoveredService = ref("");
const animationServices = ref<{ title: string | null; delay: number }[]>([]);
const visibleServices = ref<string[]>([]);

const isServiceVisible = computed(() => {
	return (serviceTitle: string) =>
		visibleServices.value.includes(serviceTitle);
});

const serviceBrightness = computed(() => {
	return (serviceTitle: string) =>
		hoveredService.value === serviceTitle || hoveredService.value === null
			? 1
			: 0.6;
});

const services = ref([
	{
		title: "WEB DESIGN",
		description:
			"More than what a website looks like, we focus on how it feels. Whether your project is big or small, we use industry best practices to make sure your audience gets the type of experience youre looking for.",
		link: "/services/website-design/",
	},
	{
		title: "DEVELOPMENT",
		description:
			"Code is just a means to an end. We use the technology needed to complete the project, from cutting-edge Javascript frameworks to Wordpress and Shopify - we got you covered.",
		link: "/services/website-development",
	},
	{
		title: "DIGITAL MARKETING",
		description:
			'The Digital Marketing landscape is a cluttered mess, comprised of hoards of agencies producing endless AI generated "content". We will cut through the mess and bring back the human element to your work.',
		link: "/services/digital-marketing",
	},
	{
		title: "SOCIAL MEDIA",
		description:
			"Social media is a powerful tool for any company, big or small. Let us get you running on all relevant platforms and help set up targeting marketing.",
		link: "/services/social-media",
	},
	{
		title: "BRANDING",
		description:
			"Impeccable branding feels effortless when the work behind it is rigorous.",
		link: "/services/branding-identity",
	},
	{
		title: "E-commerce Solutions",
		description:
			"We will leverage the latest automation systems to help you save time and money.",
		link: "/services/e-commerce-solutions",
	},
]);

const serviceList = ref(null);
onMounted(() => {
	nextTick(() => {
		let delay = 0.1;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target as HTMLElement;
						target.style.animationDelay = `${delay}s`;
						target.classList.add("animate-delay");
						observer.unobserve(target);

						animationServices.value.push({
							title: target.getAttribute("data-title"),
							delay,
						});

						delay += 0.1;
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		// Assuming that each service container has a class 'service-container'
		const serviceContainers =
			document.querySelectorAll(".service-container");
		serviceContainers.forEach((container) => {
			observer.observe(container);
		});
	});

	watch(
		animationServices,
		(newServices) => {
			newServices.forEach(({ title, delay }) => {
				setTimeout(() => {
					visibleServices.value.push(title ?? "");
				}, delay * 1000); // convert delay from seconds to milliseconds
			});
		},
		{ deep: true }
	);
});
</script>
<template>
	<div
		class="grid grid-cols-1 gap-y-20 md:gap-y-0 md:grid-cols-3 gap-x-28 place-items-start min-h-screen h-fit max-w-6xl mx-auto mb-16 md:mb-0"
	>
		<div
			v-for="service in services"
			:key="service.title"
			class="service-container serviceList -mt-4"
			:data-title="service.title"
			@mouseover="hoveredService = service.title"
			@mouseout="hoveredService = ''"
		>
			<div
				class="content-wrapper px-4 md:px-0"
				:class="{
					dim:
						hoveredService !== '' &&
						service.title !== hoveredService,
				}"
			>
				<h2
					class="text-2xl font-sans tracking-wide animate-slide-in text-white mb-2"
				>
					{{ service.title }}
				</h2>
				<div class="text-white-500 mb-4 leading-7">
					{{ service.description }}
				</div>
				<nuxt-link :to="service.link" class="text-secondary group"
					>See more
					<i-mdi-chevron-double-right
						class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"
				/></nuxt-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.content-wrapper {
	transition: filter 0.3s ease;
}

.content-wrapper.dim {
	filter: brightness(0.6);
}

.service-container {
	position: relative;
}

.service-container.dim {
	filter: brightness(0.6);
}

.not-hovered {
	filter: brightness(0.6);
}

.service-container.dim {
	filter: brightness(0.6);
}

.service-container::before {
	content: "";
	position: absolute;
	left: -25px;
	top: 8%;
	transform: translate(-50%, -50%) scale(0.4);
	transition: all 0.3s ease-in-out;
	opacity: 0;
	width: 100px;
	height: 100px;
	background-image: url("/formwork_100.png");
	background-size: contain;
	background-repeat: no-repeat;
}

.service-container:hover::before {
	left: -35px;
	opacity: 1;
	transform: translate(-50%, -50%) scale(0.6) rotate(-10deg);
}

.animate-delay {
	animation-duration: 0.5s;
	animation-fill-mode: both;
	animation-name: animate-delay;
}

@keyframes animate-delay {
	0% {
		opacity: 0;
		transform: translateY(10px);
		-webkit-transform: translateY(20px);
		-moz-transform: translateY(20px);
		-ms-transform: translateY(20px);
		-o-transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
		-webkit-transform: translateY(0);
		-moz-transform: translateY(0);
		-ms-transform: translateY(0);
		-o-transform: translateY(0);
	}
}

.serviceList {
	opacity: 0;
	transform: translateY(10px);
	-webkit-transform: translateY(20px);
	-moz-transform: translateY(20px);
	-ms-transform: translateY(20px);
	-o-transform: translateY(20px);
}

::v-deep .visible {
	opacity: 1 !important;
}

.serviceList {
	opacity: 0;
	transition: opacity 0.5s, transform 0.5s;
	transform: translateY(10px);
}

.visible {
	opacity: 1 !important;
	transform: translateY(0px) !important;
}
</style>
