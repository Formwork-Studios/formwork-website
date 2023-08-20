<script lang="ts" setup></script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center h-screen text-white">
    <div class="flex flex-col items-center m-5" v-for="member in team" :key="member.id">
      <img :src="member.image" alt="Team Member" class="w-full sm:w-64 h-auto" />
      <NuxtLink :to="member.link" class="text-center mt-2">{{ member.name }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const team = ref([
  {
    id: 1,
    name: 'Abderrahmane Hana',
    image: '/abderrahmane-hana.jpg',
    link: '/team/abderrahmane-hana',
  },
  {
    id: 2,
    name: 'Michael Synan',
    image: '/michael-synan.jpg',
    link: '/team/michael-synan',
  },
]);
</script>
