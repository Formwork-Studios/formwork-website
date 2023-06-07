<template>
  <div class="h-screen w-screen flex items-center justify-center bg-transparent">
    <form class="w-full max-w-md">
      <uiLogoCombo />
      <div class="relative mb-6">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="name">Name</label>
        <input class="border-b shadow appearance-none w-full text-white text-lg py-3 px-2 leading-tight focus:outline-none bg-transparent placeholder-white focus:z-10 relative" id="email" type="name" placeholder="Your Name">
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
      </div>
      <div class="relative mb-6">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="email">Email</label>
        <input class="border-b shadow appearance-none w-full text-white text-lg py-3 px-2 leading-tight focus:outline-none bg-transparent placeholder-white focus:z-10 relative" id="email" type="email" placeholder="Your Email">
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
      </div>
      <div class="relative mb-6 flex flex-col">
        <textarea class="border-b shadow appearance-none w-full text-white text-lg py-3 px-2 leading-tight focus:outline-none bg-transparent placeholder-white focus:z-10 relative" id="message" placeholder="Your Message"></textarea>
        <div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left"></div>
        <label class="block text-white text-lg font-bold mt-auto sr-only" for="message">Your Message</label>
      </div>

      <div class="mb-6 h-8">
  <label class="flex items-center text-white text-lg w-auto">
    <div class="relative flex items-center">
      <input type="checkbox" v-model="checked" class="hidden" id="updates" />
      <div class="w-5 h-5 mr-2 border-2 border-white rounded flex items-center justify-center">
        <svg v-if="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.7.7 0 0 1 0 .942l-3.47 3.746c-.267.287-.72.296-.994.02l-1.1-1.153a.7.7 0 1 1 .99-.993l.777.81 2.943-3.184a.7.7 0 1 1 1.03.948v-.04Z" fill="white"/>
        </svg>
      </div>
      I agree to receive email updates
    </div>
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
import { ref } from 'vue'
const checked = ref(false)
</script>




<style scoped>
.checkmark {
  visibility: hidden;
}

#updates:checked+label .checkmark {
  visibility: visible;
}


.border-b-extend {
  background-color: #14B8A6;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
}

.relative:focus-within > .border-b-extend {
  transform: scaleX(1);
}
</style>