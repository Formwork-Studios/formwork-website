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
      full ? 'w-full' : 'w-max', // Conditional class
      ghost ? 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white' : 'bg-primary hover:bg-primary-light text-white hover:text-white hover:shadow'
    ]"
  >
    {{ btnText }}
    <i-mdi-arrow-right-thick v-if="icon === 'i-mdi-arrow-right-thick'" class="ml-2"/>
    <!-- Add other icons here with v-if checks based on icon prop -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'i-mdi-arrow-right-thick'
  },
  btnText: {
    type: String,
    default: 'Click Me',
  },
  ghost: {
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

