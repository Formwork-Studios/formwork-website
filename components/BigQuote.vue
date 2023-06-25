<template>
	<div class="flex justify-center items-start mb-20 md:mb-80">
		<div
			class="quote text-white text-4xl md:text-7xl font-fancy flex flex-col md:flex-row items-center"
		>
			<img
				src="/formwork_white.png"
				class="mr-0 md:mr-8 md:h-[500px] h-[300px]"
			/>
			<div class="my-10 md:m-10 md:ml-28 text-white-500 quote-content items-center tracking-wider">
				<div
					v-for="(word, index) in words"
					:key="index"
					class="quoteWord"
				>
					{{ word }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
	bigQuote: String,
});

const words = ref(props.bigQuote.split(" "));

onMounted(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add("animate-delay");
					}, index * 250);
				}
			});
		},
		{
			threshold: 1,
		}
	);

	const quoteWords = ref(document.querySelectorAll(".quoteWord"));
	quoteWords.value.forEach((word) => {
		observer.observe(word);
	});
});
</script>

<style scoped>
.animate-delay {
	animation-duration: 1s;
	animation-fill-mode: both;
	animation-name: animate-delay;
}

@keyframes animate-delay {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

.quote {
	line-height: 1.25;
}

.quote-content {
	max-width: 10ch;
}

.quoteWord {
	display: inline-block;
	opacity: 0;
	margin-right: 20px;
}
</style>
