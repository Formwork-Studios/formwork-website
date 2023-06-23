<template>
  <div class="grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-2 md:p-4 gap-4 relative">
    <!-- First Main Column -->
    <div class="col-span-1 flex flex-col h-full relative space-y-8">
      <h2 class="font-bold text-black text-6xl uppercase">A website is a machine for information and delight</h2>
      <div class="bg-primary w-max h-auto text-white p-2 font-bold">LATEST POST</div>

      <div class="text-2xl text-black-300">
        <div>
          <p class="py-4">In the post-WW2 reconstruction era, Béton Brut — the French term for Raw Concrete — became the material of choice for architects tasked with the goal of rebuilding a war-torn Europe. In response to what must be considered the most catastrophic conflict in human history, a collective desire emerged to begin the process of rebuilding society. Inspired by the Modernist principle of 'form follows function,' architects sought to create buildings that embodied the ideals of utilitarianism, egalitarianism, and honesty. In Modernism, there was no need for the ornate flourishes typical of classical architecture. Instead, Architects of that time embraced Le Corbusier's perspective, treating homes as what they fundamentally are — machines for living in."</p> 
        </div>
        <p class="py-4">
        The radical shift towards functionality in architecture embodied in the Modernist movement was pushed to an extreme in Brutalism — a branch of its parent philosophy — by Le Corbusier himself. </p>

      </div>
      <nuxt-link to="/posts/website-machine"><div class="inline readmore text-black-300 text-base">Read More <i-mdi-chevron-double-right class="inline chevron text-secondary" /> </div></nuxt-link>
      <div class="flex-grow"></div>
    </div>
    <!-- Second Main Column -->
    <div class="col-span-1 flex flex-col gap-y-2 md:gap-y-4 order-first md:order-2">
      <!-- First Row of Second Column -->
      <div class="grid grid-cols-2">
        <div class="col-span-2">
          <img class="shadow-sm shadow-black" src="/chinatown.jpg" alt="Image 2" />
        </div>
      </div>

      <!-- Second Row of Second Column -->
      <div class="grid grid-cols-2 gap-x-2 md:gap-x-4">
        <div class="col-span-1">
          <img class="shadow-sm shadow-black" src="/birds2.jpg" alt="Image 1" style="object-fit: cover;" />
        </div>
        <div class="col-span-1">
          <img class="shadow-sm shadow-black" src="/subwaycompressed.png" alt="Image 2" style="object-fit: cover;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.readmore {}

.chevron {
  animation: move 1.5s infinite; /* adjust the 1s value for the speed of the movement */
  display: inline-block;
}

@keyframes move {
  0% {transform: translateX(0);}
  50% {transform: translateX(5px);} /* adjust the 10px value for the distance of the movement */
  100% {transform: translateX(0);}
}
</style>
