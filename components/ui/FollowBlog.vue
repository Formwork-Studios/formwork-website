<template>
  <div class="mx-6">
    <div ref="form" class="opacity-0">
      <div class="max-w-2xl md:max-w-4xl bg-white w-full md:mx-auto mb-60 text-black grid grid-cols-5 h-full">
        <div class="p-8 md:p-14 flex flex-col justify-between col-span-5 md:col-span-3 relative"> <!-- Added relative positioning here -->
          <div class="mb-10 md:mb-20">
            <h3 class="text-black text-3xl font-bold inline-block">Let's Stay in Touch</h3>
            <div class="my-4 text-lg">When you sign-up below we will kindly notify you when the next post drops, once or twice a month. We won't send spammy emails and you can unsubscribe anytime.</div>
          </div>
          <div>
            <input type="email" v-model="email" placeholder="Enter your email" class="mb-4 p-3 w-full rounded-none"/>
            <uiButton @click="submitEmail" class="inline-flex px-4 py-2 !w-full uppercase font-bold" full text="Submit" />
            <i-ri-loader-4-line v-show="isLoading" class="animate-spin" /> 
          </div>
          <div class="block absolute bottom-0 left-0 w-full"> <!-- Made the absolute positioned element span the width of its parent -->
            <uiFormFeedback v-if="formFeedback" :formFeedback="formFeedback" class="feedback-animation" :success="success" />
          </div>
        </div>
        <div class="col-span-5 md:col-span-2 order-first md:order-none hidden md:flex">
          <img src="/birds2.jpg" class="block object-cover h-full">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Updated styles */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

/* Existing styles */
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const client = useSupabaseClient()

const email = ref('')
const form = ref('')
const formFeedback = ref(null)
const success = ref(true);  

async function submitEmail() {
  // Simple regex for email validation
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  if (email.value && !regex.test(email.value)) {
    formFeedback.value = "invalidEmail"
    success.value = false; 
    return
  } 

  const { error } = await client
    .from('blogFollows')
    .insert([
      { email: email.value, topic: 'blog' },
    ]);

  if (error) {
    console.error("Error submitting email:", error.message);
    formFeedback.value = "error"; // Update feedback message
    success.value = false; 
    return;
  }

  console.log("Email submitted successfully!");
  formFeedback.value = "success"; // Update feedback message
    success.value = true; 
}

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


