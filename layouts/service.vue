<script setup>
import '@/assets/css/main.css'

</script>
<template>
  <div class="flex flex-col min-h-screen">
    <uiNavBar />
    <uiServicesSidemenu />
    <div class="flex-grow formworkbg h-screen">
      <slot />
    </div>
    <uiFooter />
  </div>
</template>