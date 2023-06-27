<template>
  <div class="w-full h-screen flex items-center justify-center bg-transparent my-20">
    <form ref="form" id="mainContact" class="w-full max-w-xl px-6 opacity-0" @submit.prevent="submitForm">
      <uiLogoCombo />
      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="name">Name</label>
        <input v-model="name"
          class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="name" type="text" placeholder="Your Name">
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
      </div>
      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="email">Email</label>
        <input v-model="email"
          class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="email" type="email" placeholder="Your Email">
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
      </div>
      <div class="relative mb-8">
        <textarea v-model="message"
          class="border-b !border-opacity-50 border-gray  shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="message" placeholder="Your Message"></textarea>
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
        <label class="block text-white text-lg font-bold mt-auto sr-only" for="message">Your Message</label>
      </div>

      <div class="mb-8">
        <label class="flex items-center text-white text-lg">
          <input type="checkbox" v-model="consent" class="mr-3" id="updates" />
          I agree to receive email updates
        </label>
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 grid place-items-center"
          type="submit" @click.prevent="submitForm">
          <span v-show="!isLoading" class="uppercase">Send</span>
          <i-ri-loader-4-line v-show="isLoading" class="animate-spin" />
        </button>
      </div>

    </form>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const consent = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const form = ref('')
const isLoading = ref(false)
const client = useSupabaseClient()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-delay');
        }
      })
    },
    {
      threshold: .5,
    }
  );

  if (form.value) {
    observer.observe(form.value);
  }
})

const submitForm = async () => {
  isLoading.value = true;

  // Submit form data to Supabase
  const { error } = await client
    .from('blogFollows')
    .insert([
      { 
        email: email.value, 
        topic: 'home',
        name: name.value,
        message: message.value,
        consent: consent.value 
      },
    ]);

  if (error) {
    console.error("Error submitting form:", error.message);
  } else {
    console.log("Form submitted successfully!");
  }

  isLoading.value = false;
}
</script>


<style scoped>
.border-b-extend {
  background-color: #14B8A6;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  bottom: 23px;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 100;
}

.relative:focus-within>.border-b-extend {
  transform: scaleX(1);
}

form {
  max-width: 500px;
  margin: 0 auto;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
  background: transparent !important;
}

button[type="submit"] {
  margin-top: 1rem;
}

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
