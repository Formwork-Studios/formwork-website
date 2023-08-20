<template>
  <div class="flex flex-col items-center justify-center h-screen text-white">
    <h1 class="text-4xl mb-10">Our Team</h1> <!-- Team header -->
    <div class="flex flex-col sm:flex-row items-center justify-center">
      <div class="flex flex-col items-center m-5" v-for="member in team" :key="member.id">
        <img :src="member.image" alt="Team Member" class="w-full sm:w-64 h-auto" />
        <NuxtLink :to="member.link" class="text-center mt-2">{{ member.name }}</NuxtLink>
        <NuxtLink :to="member.link" class="text-center mt-2">{{ member.role }}</NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


definePageMeta({
  layout: "nofooter"})


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
