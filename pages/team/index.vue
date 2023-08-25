<template>
  <div class="flex flex-col items-center justify-center min-h-screen pt-16 sm:pt-0">
    <div class="mx-auto text-white custom-wide-container">
      <!-- About Us Section -->
      <div class="flex flex-col md:flex-row items-start justify-center my-10 space-x-4 md:space-x-0 mb-14 md:mb-20">
        <div class="md:w-1/3 text-center md:text-left">
          <h2 class="text-4xl mb-5">ABOUT US</h2>
        </div>
        <div class="!ml-0 md:w-2/3 text-left">
          <p class="text-lg max-w-2xl">

            Formwork excels in transforming concepts into market-ready products, enhancing brand reach and audience connection. With a focus on user-friendliness and inclusivity, our design caters to the human experience across devices. Tailored to unique business needs, our solutions streamline processes and offer seamless shopping. Guided by core values, we foster collaboration and transparency. Every step resonates with your product's journey from idea to success.            
          </p>
        </div>
      </div>
      <!-- Team Section -->
      <div class="flex flex-col items-start justify-center">
        <h1 class="text-3xl mb-10 font-bold">Our Team</h1>
        <div class="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <NuxtLink v-for="member in team" :key="member.id" :to="member.link" class="flex flex-col items-start pb-10 md:pb-0">
            <img :src="member.image" alt="Team Member" class="w-full sm:w-64 h-auto" />
            <span class="text-left mt-4 font-bold tracking-wide">{{ member.name }}</span>
            <span class="text-left text-stone-500 mt-0">{{ member.role }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-wide-container {
  max-width: none;
  width: 60%;
}

@media (max-width: 768px) {
  .custom-wide-container {
    width: 90%;
  }
}
</style>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: "nofooter"
});

const team = ref([
  {
    id: 1,
    name: 'Michael Synan',
    image: '/michael-synan.jpg',
    link: '/team/michael-synan',
    role: 'Founder'
  },
  {
    id: 2,
    name: 'Abderrahmane Hana',
    image: '/abderrahmane-hana.jpg',
    link: '/team/abderrahmane-hana',
    role: 'Developer'
  },
]);
</script>
