<template>
  <div class="w-full h-screen flex items-center justify-center bg-transparent my-20">
    <form ref="form" id="mainContact" class="w-full max-w-xl px-6 opacity-0">
      <uiLogoCombo />
      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="name">Name</label>
        <input class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="name" type="text" placeholder="Your Name">
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
      </div>
      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="email">Email</label>
        <input class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="email" type="email" placeholder="Your Email">
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
      </div>
      <div class="relative mb-8">
        <textarea class="border-b !border-opacity-50 border-gray  shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="message" placeholder="Your Message"></textarea>
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
        <label class="block text-white text-lg font-bold mt-auto sr-only" for="message">Your Message</label>
      </div>

      <div class="mb-8">
        <label class="flex items-center text-white text-lg">
          <input type="checkbox" v-model="checked" class="mr-3" id="updates" />
          I agree to receive email updates
        </label>
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const checked = ref(false)
const form = ref('')

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
      threshold: 1,
    }
  );

  if (form.value) {
    observer.observe(form.value);
  }
})
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

.relative:focus-within > .border-b-extend {
  transform: scaleX(1);
}

/* Additional Styles */

form {
  max-width: 500px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the form horizontally */
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%; /* Make the form elements occupy the full width */
  padding: 0.75rem; /* Increase the padding for more spacing */
  margin-bottom: 1.5rem; /* Add bottom margin for vertical spacing */
}

input[type="checkbox"] {
  margin-right: 0.5rem; /* Add right margin for spacing */
  background: transparent !important; /* Make the background transparent */
}
button[type="submit"] {
  margin-top: 1rem; /* Add top margin for spacing */
}

.animate-delay {
  animation-duration: 2s;
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
