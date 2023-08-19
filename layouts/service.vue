<template>
  <div class="flex flex-col min-h-screen bg-stone-950">
    <uiNavBar />
    <slot />
  </div>
</template>



<script setup>
import "@/assets/css/main.css";
const route = useRoute()

useHead({

  titleTemplate: 'Formwork Studios | %s',

})



</script>