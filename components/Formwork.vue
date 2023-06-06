<template>
  <div class="h-screen relative flex items-center justify-center break-words">
    <div class="w-screen text-center">
      <div v-show="activeMessage === 1">
        <h2 id="message1" class="font-sans tracking-wide animate-slide-in">FORMWORK</h2>
      </div>

      <div v-show="activeMessage === 2">
        <h2 id="message2" class="font-sans tracking-wide animate-slide-in">WE ARE A FULL SERVICE DIGITAL DESIGN AGENCY</h2>
      </div>

      <div v-show="activeMessage === 3">
        <h2 id="message3" class="font-sans tracking-wide animate-slide-in">LET'S BUILD SOMETHING</h2>
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
  }, 5000) // 5000ms = 5s
})
</script>

<style scoped>
@keyframes slide-in {
  0% {
  
    opacity: 0;
  }
  100% {
 
    opacity: 1;
  }
}

#message1 {
  animation: slide-in 2s forwards ease-in-out;
  font-size: clamp(6vw, 14vw, 90vw);
  color: #fff;

}

#message2 {
  animation: slide-in 2s forwards ease-in-out;
  font-size: clamp(6vw, 8vw, 70vw);
  line-height: 1.2; 
  color: #fff;

}

#message3 {
  animation: slide-in 2s forwards ease-in-out;
  font-size: clamp(6vw, 12vw, 80vw);
  line-height: 1.2; 
  color: #fff;

}

</style>
