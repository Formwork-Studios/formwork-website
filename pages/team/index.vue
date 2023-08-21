<template>
  <div class="flex flex-col items-center justify-center min-h-screen pt-16 sm:pt-0">
    <div class="mx-auto text-white custom-wide-container">
      <!-- About Us Section -->
      <div class="flex flex-col md:flex-row items-start justify-center my-10 space-x-4 md:space-x-0 mb-20">
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl mb-5">ABOUT US</h2>
        </div>
        <div class="!ml-0 md:w-1/2 text-left">
          <p class="text-lg max-w-md">Boilerplate text about the company, mission, values, etc. Boilerplate text about the company, mission, values, etc. Boilerplate text about the company, mission, values, etc.</p>
        </div>
      </div>
      <!-- Team Section -->
      <div class="flex flex-col items-start justify-center">
        <h1 class="text-3xl mb-10 font-bold">Our Team</h1>
        <div class="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div class="flex flex-col items-start" v-for="member in team" :key="member.id">
            <img :src="member.image" alt="Team Member" class="w-full sm:w-64 h-auto" />
            <NuxtLink :to="member.link" class="text-left mt-2">{{ member.name }}</NuxtLink>
            <NuxtLink :to="member.link" class="text-left mt-2">{{ member.role }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-wide-container {
  max-width: none;
  width: 60%;
}

@media (max-width: 768px) {
  .custom-wide-container {
    width: 90%;
  }
}
</style>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: "nofooter"
});

const team = ref([
  {
    id: 1,
    name: 'Abderrahmane Hana',
    image: '/abderrahmane-hana.jpg',
    link: '/team/abderrahmane-hana',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Michael Synan',
    image: '/michael-synan.jpg',
    link: '/team/michael-synan',
    role: 'Founder'
  },
]);
</script>
