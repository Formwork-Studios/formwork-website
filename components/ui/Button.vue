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
      'text-lg',
      'mt-4',
      'border-2',
      'uppercase',
      full ? 'w-full' : 'w-max', // Conditional class
      secondary ? 'bg-secondary border-secondary hover:bg-secondary-dark hover:bg-secondary-light text-white hover:text-white hover:shadow' : ghost ? 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white' : 'bg-primary border-primary hover:bg-primary-light text-white hover:text-white hover:shadow'    ]"
  >
    {{ text }}
    <i-mdi-arrow-right-thick v-if="icon === 'i-mdi-arrow-right-thick'" class="ml-2"/>
    <!-- Add other icons here with v-if checks based on icon prop -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: 'Click Me',
  },
  ghost: {
    type: Boolean,
    default: false
  },
  secondary: {
    type: Boolean,
    default: false
  },
  full: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped></style>

