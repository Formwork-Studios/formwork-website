<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  bigQuote: String
})

const quote = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-delay');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (quote.value) {
    observer.observe(quote.value);
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen ">
  <div 
    ref="quote" 
    class="quote text-white text-8xl font-fancy">
    {{ props.bigQuote }}
  </div>
  </div>
</template>

<style scoped>
.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}

.quote {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}
</style>
