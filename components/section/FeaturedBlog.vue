<template>
  <div class="grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-2 md:p-20 gap-10 relative">
    <!-- First Main Column -->
    <div class="col-span-1 flex flex-col h-full relative space-y-8" tracking-wide>
      <nuxt-link to="/posts/website-machine ">
        <h2 class="font-bold text-black text-6xl uppercase blogitem opacity-0">A website is a machine for information and delight</h2>
      </nuxt-link>
      <div class="bg-primary w-max h-auto text-white-300 p-2 font-bold blogitem opacity-0">LATEST POST</div>

      <div class="text-black-300 leading-loose text-lg blogitem opacity-0">
        <div>
          <p class="py-4">In the post-WW2 reconstruction era, Béton Brut — the French term for Raw Concrete — became the
            material of choice for architects tasked with the goal of rebuilding a war-torn Europe. In response to what
            must be considered the most catastrophic conflict in human history, a collective desire emerged to begin the
            process of rebuilding society. Inspired by the Modernist principle of 'form follows function,' architects
            sought to create buildings that embodied the ideals of utilitarianism, egalitarianism, and honesty. In
            Modernism, there was no need for the ornate flourishes typical of classical architecture. Instead, Architects
            of that time embraced Le Corbusier's perspective, treating homes as what they fundamentally are — machines for
            living in."</p>
        </div>
        <p class="py-4">
          The radical shift towards functionality in architecture embodied in the Modernist movement was pushed to an
          extreme in Brutalism — a branch of its parent philosophy — by Le Corbusier himself. </p>

      </div>
      <nuxt-link to="/posts/website-machine">
        <div class="inline readmore text-black-300 text-base">Read More <i-mdi-chevron-double-right
            class="inline chevron text-secondary" /> </div>
      </nuxt-link>
      <div class="flex-grow"></div>
    </div>
    <!-- Second Main Column -->
    <div class="col-span-1 flex flex-col gap-y-2 md:gap-y-4 order-first md:order-2">
      <!-- First Row of Second Column -->
      <div class="grid grid-cols-2">
        <div class="col-span-2">
          <img class="shadow-sm shadow-black blogitem opacity-0" src="/chinatown.jpg" alt="Image 2" />
        </div>
      </div>

      <!-- Second Row of Second Column -->
      <div class="grid grid-cols-2 gap-x-2 md:gap-x-4">
        <div class="col-span-1">
          <img class="shadow-sm shadow-black blogitem opacity-0" src="/birds2.jpg" alt="Image 1" style="object-fit: cover;" />
        </div>
        <div class="col-span-1">
          <img class="shadow-sm shadow-black blogitem opacity-0" src="/subwaycompressed.png" alt="Image 2" style="object-fit: cover;" />
        </div>
      </div>
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
