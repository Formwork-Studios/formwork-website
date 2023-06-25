<template>
  <NuxtLayout name="404">
    <div class="errorSection flex justify-center items-center flex-col h-screen">
      <p class="text-4xl text-white max-w-[10ch] pb-10">You've Arrived Here on Error, Sir</p>
      <button class="mt-5 bg-secondary hover:bg-primary text-white font-bold py-2 px-4 uppercase"
        @click="goBack">Back</button>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: "404",
});


const router = useRouter()

const goBack = () => {
  router.go(-1)  // This will navigate one page back in the history stack
}

onMounted(() => {
  // Here you can handle your page metadata, but this is usually done in router configuration or a higher-level component
  document.title = '404 - Page Not Found'
})
</script>

  
<style scoped></style>
  