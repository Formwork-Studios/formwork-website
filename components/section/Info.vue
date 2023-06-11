<template>
  <div class="grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-4 gap-4 ">
    <!-- First Main Column -->
    <div class="col-span-1 flex flex-col h-full relative space-y-8">
      <h2 class="font-bold text-black text-6xl uppercase">A website is a machine for information and delight</h2>

      <div class="text-2xl text-black-300">
        <div>
          <p class="py-4">Far from being simply functional or purely aesthetic, a website serves as a conduit for both information and pleasure. Its design should be intuitive, effortlessly guiding users while also predicting their needs by presenting the right information at the right moment. Consequently, a website is a mechanism that delivers outcomes not only visually but also socially. It may persuade a user to make a purchase, join a community, 
            or share a fascinating article with their circle. To manifest this tangible impact, however, a website must intertwine the informative with the delightful..</p> 
          <p class="pb-4">The esteemed French architect Le Corbusier once proclaimed, "The house is a machine for living in." While a website may not seem to fulfill such a lofty objective as providing a 'habitat for living,' in the digital era, it contends for a respectable position on the importance hierarchy, rivaling physical living spaces. It suggests that information and its organization have become crucial components of our modern existence.</p>
         <p class="">In every creation process, the intent should be to achieve a defined goal. The realm of Digital Media is no exception. It involves navigating a two-way path, balancing what the creator wants to convey and what the user seeks to discover.</p>
        </div>
      </div>
      <div class="inline readmore">Read More <i-mdi-chevron-double-right class="inline chevron" /> </div>
      <div class="flex-grow"></div>
    </div>
    <!-- Second Main Column -->
    <div class="col-span-1 flex flex-col gap-y-4 order-first md:order-2">
      <!-- First Row of Second Column -->
      <div class="grid grid-cols-2">
        <div class="col-span-2">
          <img class="shadow-sm shadow-black" src="/chinatown.jpg" alt="Image 2" />
        </div>
      </div>

      <!-- Second Row of Second Column -->
      <div class="grid grid-cols-2 gap-x-4">
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
