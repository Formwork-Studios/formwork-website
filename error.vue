<template>
    <NuxtLayout>
      <div class="errorSection flex justify-center items-center flex-col h-screen">
        <p class="text-4xl text-white max-w-[10ch] pb-10">You've Arrived Here on Error, Sir</p>
        <button class="mt-5 bg-secondary hover:bg-primary text-white font-bold py-2 px-4 uppercase" @click="goBack">Back</button>
      </div>
    </NuxtLayout>
  </template>
  
  <script>
  export default {
    methods: {
      goBack () {
        this.$router.go(-1)  // This will navigate one page back in the history stack
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  