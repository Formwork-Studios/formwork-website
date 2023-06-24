<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  btnText: {
    type: String,
    default: 'Click Me',
  },
});
</script>

<template>
  <div class="px-4 py-2 bg-primary bg-opacity-50 hover:bg-opacity-100 hover:text-stone-950 transition-color duration-200 text-stone-100 cursor-pointer flex items-center justify-center">
    {{ btnText }}
  </div>
</template>

<style scoped></style>
