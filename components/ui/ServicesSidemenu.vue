<script lang="ts" setup>
import { ref } from 'vue'

const subServices = ref(['thing1', 'thing2'])
</script>

<template>
  <div class="fixed left-10 top-40 text-white bg-stone-950 py-6 px-4 rounded flex space-y-10 flex-col">
    <div v-for="(service, index) in subServices" :key="index">
      {{ service }}
    </div>
  </div>
</template>

<style scoped></style>
