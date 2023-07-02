<script lang="ts" setup>

const props = defineProps({
  btnText: {
    type: String,
    default: 'Click Me',
  },
});

</script>

<template>
  <div class="px-4 py-2 tracking-wider bg-primary bg-opacity-50 hover:bg-opacity-100 hover:text-stone-950 transition-color duration-200 text-stone-100 cursor-pointer">
    {{ btnText}}
    
  </div>
</template>

<style scoped></style>
