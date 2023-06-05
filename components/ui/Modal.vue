<template>
  <transition name="modal">
    <div v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950 bg-opacity-70 mx-auto shadow"
      @click.self="$emit('close')">
      <div class="bg-black p-8 shadow-md absolute relative" @click.stop>
        <i-mdi-close class="absolute top-4 right-4 text-2xl" @click="$emit('close')"/>
          <h2 class="text-2xl uppercase font-bold mb-4">Start a Project</h2>
          <div class="my-4 text-lg">Interested in working together? Let's build something great.</div>
          <div class="flex flex-col space-y-4">
            <div class="w-full">
              <label for="name" class="text-stone-500">Name:</label>
              <input id="name" class="block p-2 my-1 bg-stone-950 text-stone-400 shadow w-full" placeholder="Enter Name" />
            </div>
            <div class="w-full">
              <label for="email" class="text-stone-500">Email:</label>
              <input id="email" class="block p-2 my-1 bg-stone-950 text-stone-40 shadow w-full" placeholder="Enter Email" />
            </div>
            <div class="w-full">
              <label for="message" class="text-stone-500">Message:</label>
              <textarea id="message" class="block p-2 my-1 bg-stone-950 text-stone-40 shadow w-full"
                placeholder="Enter your message" rows="6" />
            </div>
          </div>
          <button @click="$emit('close')" class="mt-6 px-4 py-2 bg-white text-black w-full shadow">Let's Talk</button>
        </div>
      </div>
    </transition>
  </template>
  
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['close'],
    watch: {
      visible(val) {
        if (val) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
    transform: scale(1.1);
  }
  
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.3s;
  }
  
  .modal-open {
    overflow-y: hidden;
  }</style>
  