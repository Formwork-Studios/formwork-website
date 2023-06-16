<script setup lang="ts">
import { useStore } from '~/store/store.ts';
import { ref } from 'vue';
definePageMeta({
  layout: "service",
});
const store = useStore();
const currentService = ref("website-design");

const service = store.projects.find(project => project.slug.includes(currentService.value));
const serviceName = ref(service ? service.name : '');
const serviceDescription = ref(service ? service.description : '');
</script>

<template>
  <div class="grid grid-rows-2 h-screen gap-y-8">
    <div class="bg-stone-950 px-10 pt-14">
      <div id="toparea" class="col-span-1 p-4 h-full flex flex-col justify-center custom-border">
        <div class="text-xl text-white clamp-text font-black">
          {{ serviceName }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-5 px-10 pb-10 bg-stone-950 gap-x-8">
      <!-- Menu - 1 column -->
      <div class="bg-stone-800 col-span-1 p-4">
        Menu
      </div>

      <!-- Description - 4 columns -->
      <div class="bg-stone-800 text-white text-2xl col-span-4 p-4 relative">
        {{ serviceDescription }}
        <div class="absolute bottom-0 right-0 h-20 w-52 bg-secondary font-bold flex items-center justify-center">
          GET IN TOUCH
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-border {
  border: 10px solid white;
}
</style>

<style scoped>
#toparea {
  background-image: url(/public/birds2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  /* Adjust the position here */
}

.clamp-text {
  font-size: clamp(1rem, 5vw, 5rem);
  /* Adjust the minimum and maximum font sizes as needed */
  text-align: left;
}</style>
