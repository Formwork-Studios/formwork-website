<template>
  <div class="flex items-center justify-center h-screen w-full text-2xl ">
      <UiContactLarge />
  </div>
</template>

<style scoped>

@media (min-width: 640px) {
  .border-right {
    border-right: 2px solid white;
  }
}
</style>

<script setup>
import { ref } from 'vue'


definePageMeta({
  layout: "nofooter"})

  </script>

