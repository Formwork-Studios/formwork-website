<script setup lang="ts">
import { useStore } from '~/store/store.ts';
const store = useStore();
definePageMeta({
  layout: "service",
});

const serviceImage = ref("/public/birds2.jpg")
</script>


<template>
  <div class="h-screen grid grid-rows-2">
    <div id="TOP" class="row-span-1 flex justify-between p-4 bg-stone-950 pt-20">
      <!-- Add border and rounded corners to the new div with the background image -->
      <div id="TOP-IMG" class="w-full h-full bg-cover bg-center border-8 border-white rounded-lg flex-row flex">
        <!-- Two columns inside the first row -->
        <div id="service" class="w-1/2 flex items-center justify-center">
          <div class="text-[10vw] text-center font-black">SEO</div>
        </div>
        <div class="w-1/2">
         <!-- put stuff here -->
        </div>
      </div>
    </div>
    <div id="BOTTOM" class="row-span-1 bg-stone-950 grid grid-cols-5">
      <!-- Five columns for the second row -->
      <div id="menu" class="col-span-1 bg-stone-950 p-4 py-8">
        <div v-for="project in store.projects" :key="project.id" class="text-xl text-white py-2 ml-4 sidemenuitem"> 
          {{  project.name }} 
        </div>
      </div>
      <div class="col-span-4 bg-stone-950 m-4 p-4">
        <h2 class="">THE SEO PROBLEM</h2>
        <div>Almost all agencies follow a standard template for doing SEO, but not us. </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
#TOP-IMG {background-image: url(/public/birds2.jpg);}  .sidemenuitem {
    font-size: 16px; /* Initial font size */
    transition: font-size 0.1s ease; /* Transition properties: font-size, duration, easing */
  }

  .sidemenuitem:hover {
    font-size: 30px; /* Font size on hover */
  }


  .sidemenuitem:hover:before {
  content: "+";
  position: absolute;
  left: 10px; /* adjust as necessary */
  color: #FFF;
  opacity: 40%;
}
</style>
