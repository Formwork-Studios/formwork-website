<template>
	<div class="flex justify-center items-start mb-40 h-screen">
		<div id="thequote"
			class="quote text-white font-fancy flex flex-col md:flex-row items-center w-2/3"
		>
			<img
				src="/formwork_white.png"
				class="mr-auto md:mr-8 md:h-[500px] h-[300px]"
			/>
			<div class="my-10 md:m-10 md:ml-28 text-white-500 quote-content items-center tracking-wider w-full text-4xl md:text-8xl">
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
  const thequote = document.getElementById("thequote");
  const parentElement = thequote.parentElement; // Assuming the parent is the one being scrolled

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

  const quoteWords = document.querySelectorAll(".quoteWord");
  quoteWords.forEach((word) => {
    observer.observe(word);
  });

  window.addEventListener('scroll', () => {
    const parentPosition = parentElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Determine the opacity based on how far the parent is from the center of the viewport
    const opacity = 1 - Math.abs(parentPosition) / viewportHeight;

    thequote.style.opacity = opacity.toString();
    thequote.style.transition = "opacity 0.2s ease"; // Optional: to make the fade effect smoother
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
 /* max-width: 10ch; */
}

.quoteWord {
	display: inline-block;
	opacity: 0;
	margin-right: 20px;
}



@media (max-width: 640px) { /* Adjust this breakpoint as needed for your design */
  .quote-content {
    max-width: 100%;
  }

  .quoteWord {

	margin-right: 10px;
}


}


#thequote {  pointer-events: none; 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centering */
  opacity: 0; /* Initially invisible */
  z-index: 100; /* Ensuring it's above other content */
}
</style>
