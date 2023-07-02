<template>
  <div 
    :class="[
      'px-4', 
      'py-2',
      'transition-color',
      'duration-200',
      'cursor-pointer',
      'flex',
      'items-center',
      'justify-center',
      'tracking-wider',
      ghost ? 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white' : 'bg-primary hover:bg-primary-light text-white hover:text-white hover:shadow'
    ]"
  >
    {{ btnText }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  btnText: {
    type: String,
    default: 'Click Me',
  },
  ghost: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped></style>
