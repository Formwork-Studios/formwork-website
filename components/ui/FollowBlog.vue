<template>
  <div class="mx-10">
    <div ref="form" class="opacity-0">
    <div  class="max-w-2xl md:max-w-4xl bg-white w-full md:mx-auto mb-60 text-black grid grid-cols-5 h-full">
      <div class="p-14 flex flex-col justify-between col-span-5 md:col-span-3">
        <div class="mb-20">
          <h3 class="text-black text-3xl font-bold inline-block">New Article Notification</h3>
          <div class="my-4 text-lg">When you sign-up below we will kindly notify you when the next article drops.</div>
        </div>
       
        <div>
          <input type="email" v-model="email" placeholder="Enter your email" class="mb-4 p-2 w-full rounded-none"/>
          <uiButton class="inline-flex px-4 py-2 w-full uppercase" btnText="Submit" />
        </div>
       
      </div>
      <div class="col-span-5 md:col-span-2 order-first md:order-none hidden md:flex">
        <img src="/birds2.jpg" class="block object-fill h-full">
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const email = ref('')
const form = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add 'animate-delay' class to the target
          entry.target.classList.add('animate-delay');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  // observe each element
  if (form.value) {
    observer.observe(form.value);
  }
});

</script>




<style scoped>

.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}


</style>