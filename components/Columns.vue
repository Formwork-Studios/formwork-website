<script lang="ts" setup></script>

<template>

<div class="h-screen relative">
  <div class="absolute inset-0 bg-fixed bg-cover h-[200px]" style="background-image: url('https://source.unsplash.com/random/1920x1080?nature')">
    <div id="xray" class="grid grid-cols-5 h-[200px] text-white text-2xl font-bold relative z-10">
      <div class="bg-secondary bg-opacity-50"></div>
      <div class="bg-tertiary bg-opacity-50"></div>
      <div class="bg-purple-300 bg-opacity-50"></div>
      <div class="bg-primary bg-opacity-50"></div>
      <div class="bg-black bg-opacity-50"></div>
    </div>
  </div>
</div>

</template>

<style scoped>
.h-screen {
  background-color: transparent;  /* Background color outside xray div */
}
</style>
