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
    <div class="chevron-container">
      <i-mdi:chevron-down @click="scrollOneScreenDown" class="chevron-bottom text-white text-3xl md:text-6xl animate-bounce cursor-pointer" />
    </div>    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeMessage = ref(1)

onMounted(() => {
  setInterval(() => {
    activeMessage.value = activeMessage.value % 3 + 1
  }, 5000)
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleScrollOpacity);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollOpacity);
})

function scrollOneScreenDown() {
  window.scrollBy({
    top: window.innerHeight,  // scroll by one screen height
    left: 0,
    behavior: 'smooth'
  });
}

function handleScrollOpacity() {
  const chevronContainer = document.querySelector('.chevron-container');
  const chevron = chevronContainer.querySelector('.chevron-bottom');

  if (chevron) {
    chevron.classList.add('fade-out');
    chevron.classList.remove('animate-bounce'); // remove bounce animation if it's interfering

    // Remove the event listener after animation completes (assuming animation is 0.5s)
    setTimeout(() => {
      window.removeEventListener('scroll', handleScrollOpacity);
    }, 500);
  }
}



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

.chevron-container {
  position: fixed;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%); /* Center the chevron horizontally */
  z-index: 10;
}

.chevron-bottom {
  transition: transform 0.3s ease;
}


@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0%) scale(1);

  }
  to {
    opacity: 0;
    transform: translateY(50%) scale(.5);
  }
}

.fade-out {
  animation: fadeOut 0.5s forwards; /* The 'forwards' value ensures that the end value of the animation is retained after it completes */
}


</style>
