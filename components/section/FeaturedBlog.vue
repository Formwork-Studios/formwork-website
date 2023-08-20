<template>
  <div class="grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-0 md:p-20 gap-10 relative">
    <!-- First Main Column -->
    <div class="col-span-1 flex flex-col h-full relative px-6 md:px-14 space-y-8" tracking-wide>
      <div class=" w-max  text-secondary font-bold blogitem opacity-0 text-base md:text-xl">LATEST POST</div>

      <nuxt-link to="/posts/website-machine">
        <h2 class="font-bold text-black text-4xl md:text-5xl uppercase blogitem opacity-0">A website is a machine for information and delight</h2>
      </nuxt-link>
      <div class="text-black-300 leading-loose text-lg blogitem opacity-0">
        <div>
          <p class="py-4">In the early 20th century, Modernism became the dominant architectural movement in Europe.
          Inspired by the Modernist principle of "form follows
          function," architects sought to create buildings that embodied the ideals of utilitarianism, egalitarianism, and
          honesty, eschewing the elaborate ornamentation customary in classical architecture.</p>
        </div>
        <p class="py-4">
          The radical shift towards functionality seen in the Modernist movement was pushed to an extreme by Le Corbusier who, under than banner of Burtalism, 
          famously argued that a house is a machine for living in. 
          In line with this utilitarian approach, and against the backdrop of 
          WWII reconstruction, architects of the day turned towards Béton Brut — the French term for Raw Concrete — 
          as their material of choice for rebuilding a war-torn Europe. </p>

      </div>
      <nuxt-link to="/posts/website-machine">
        <div class="inline readmore text-black-300 text-base">Read More <i-mdi-chevron-double-right
            class="inline chevron text-secondary mb-0.5 md:mb-0 " /> </div>
      </nuxt-link>
      <div class="flex-grow"></div>
    </div>
    <!-- Second Main Column -->
    <div class="col-span-1 flex flex-col gap-y-2 md:gap-y-4 order-first md:order-2 h-full">
  <img class=" blogitem opacity-0 w-full h-full" src="/unite-dhabitation.webp" alt="Image 1" style="object-fit: cover;" />
</div>


  </div>
</template>

<style scoped>
.readmore {}

.chevron {
  animation: move 1.5s infinite;
  /* adjust the 1s value for the speed of the movement */
  display: inline-block;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }

  /* adjust the 10px value for the distance of the movement */
  100% {
    transform: translateX(0);
  }
}


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

</style>


<script setup>
import { ref, onMounted } from 'vue'

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
			threshold: .25,
		}
	);

	const observedItems = ref(document.querySelectorAll(".blogitem"));
	observedItems.value.forEach((item) => {
		observer.observe(item);
	});
});

</script>
