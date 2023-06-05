<script lang="ts" setup>

const props = defineProps({
  btnText: {
    type: String,
    default: 'Click Me',
  },
});

</script>

<template>
  <div class="px-4 py-2 bg-transparent hover:bg-stone-100 hover:text-stone-950 transition-color duration-200 text-stone-100 border-2 border-stone-100 cursor-pointer">
    {{ btnText}}
  </div>
</template>

<style scoped></style>
