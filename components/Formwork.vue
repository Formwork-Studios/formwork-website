<template>
  <div class="h-screen min-h-screen relative flex items-center justify-center break-words mb-20">
    <div class="w-screen text-center">
      <div v-show="activeMessage === 1">
        <h2 id="message1" class="font-sans tracking-wide animate-fade-in-out">FORMWORK</h2>
      </div>

      <div v-show="activeMessage === 2">
        <h2 id="message2" class="font-sans tracking-wide animate-fade-in-out">WE ARE A FULL SERVICE DIGITAL DESIGN AGENCY</h2>
      </div>

      <div v-show="activeMessage === 3">
        <h2 id="message3" class="font-sans tracking-wide animate-fade-in-out">LET'S BUILD SOMETHING</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeMessage = ref(1)

onMounted(() => {
  setInterval(() => {
    activeMessage.value = activeMessage.value % 3 + 1
  }, 5000) 
})
</script>

<style scoped>
@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-in-out {
  animation: fade-in-out 5s infinite;
}

#message1 {
  font-size: clamp(6vw, 14vw, 90vw);
  color: #fff;
}

#message2 {
  font-size: clamp(6vw, 8vw, 70vw);
  line-height: 1.2; 
  color: #fff;
}

#message3 {
  font-size: clamp(6vw, 12vw, 80vw);
  line-height: 1.2; 
  color: #fff;
}
</style>
