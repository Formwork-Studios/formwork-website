<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <!-- Top Part -->
    <div class="bg-stone-950 basis-1/4 md:basis-1/2 mb-6">
      <div id="toparea" class="col-span-1 p-4 h-full flex flex-col justify-end"
        :style="{
          'background-image': `url(${serviceImage})`,
          'background-position': 'center bottom',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }">
        <div class="text-xl text-white clamp-text font-black mb-0 md:mb-8 uppercase tracking-wide ml-4">
          {{ serviceName }}
        </div>
      </div>
    </div>
    <!-- Bottom Part -->
    <div class="flex flex-grow overflow-auto px-4 pb-10 bg-stone-950 flex-basis-50 flex-col md:flex-row">
  <!-- Menu - 1 column -->
  <div class="w-full md:w-1/4 flex-none p-4 mr-6 border-b-2 md:border-b-0 pb-6 mb-4 border-stone-600"> 
    <ul class="space-y-2 md:space-y-4 text-base md:text-lg uppercase">
      <li v-for="subService in subServices" :key="subService.sid"
        :class="{ 'text-stone-600': subService !== selectedSubService, 'text-white': subService === selectedSubService }"
        class="cursor-pointer hover:text-white" @click="selectSubService(subService)">
        <!-- Add '+' if subService is the selected one -->
        <span v-if="subService === selectedSubService" class="pr-2">+</span>{{ subService.name }}
      </li>
    </ul>
  </div>
  <!-- Description Area -->
  <div class="w-full md:w-3/4 text-white text-2xl p-4 relative ">
    <transition-group name="fade">
      <div v-if="selectedSubService" :key="selectedSubService.sid">
        <div class="text-white font-bold mb-4 text-3xl uppercase" v-if="selectedSubService.header">
          <span class="">{{ selectedSubService.header }}</span>
        </div>
        <div class="text-white-500 mb-4 text-lg max-w-[80ch]">
          {{ selectedSubService.description }}
        </div>
        <!-- removed link to contact, using fixed position link instead
        <a :href="selectedSubService.link" class="hidden md:inline text-secondary text-lg group" target="_blank">{{
          selectedSubService.linkText }}
          <i-mdi-chevron-double-right
            class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </a>
      -->
      </div>
    </transition-group>
    <nuxt-link :to="{ path: '/contact', query: { reason: routeParam } }">
          <div
          class="rounded-tl-2xl md:rounded-tl-none fixed bottom-0 right-0 h-auto w-auto px-4 md:px-4 py-3 md:py-4 bg-secondary text-white font-bold flex items-center justify-center text-sm md:text-base"
          :class="contactPulseAnimation">
          <span class="pr-2">GET IN TOUCH</span>
          <i-mdi-arrow-right-thick style="align-self: center;" />
        </div>
        </nuxt-link>
  </div>
</div>

  </div>
</template>

<script setup>
import { useStore } from '/store/store.ts';
import { ref, watchEffect, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

definePageMeta({
  layout: "service",
});

const store = useStore();

const route = useRoute();
const router = useRouter();
const serviceImage = ref(''); 
const currentService = ref(route.params.service);
console.log(currentService.value)

const selectedSubService = ref({}); // initialize as an empty object
const subServices = ref([]);
const serviceName = ref('');
const routeParam = ref('');
const serviceDescription = ref('');
const serviceQuestion = ref('');
const contactPulseAnimation = ref('');

watchEffect(() => {
  const service = store.projects.find(project => project.slug === currentService.value);
  if (!service) {
    router.push('/error'); // assuming you have an error page
    return;
  }

  serviceName.value = service ? service.name : '';
  routeParam.value = service ? service.routeParam : '';
  serviceDescription.value = service ? service.description : '';
  serviceQuestion.value = service ? service.subServices[0].question : ''; // Assuming question is part of each subService
  subServices.value = service ? service.subServices : [];
  const defaultSubService = subServices.value.find(subService => subService.sid === 0);
  serviceImage.value = service ? service.image : '';  // add this line to set the image from the store
  selectedSubService.value = defaultSubService || {};

  const pulseAnimationInterval = setInterval(() => {
    contactPulseAnimation.value = 'animate-pulse';
    setTimeout(() => {
      contactPulseAnimation.value = '';
    }, 2000); // Remove the animation after 2 seconds
  }, 7000); // Start the animation every 7 seconds (5 seconds wait + 2 seconds animation)

  // IMPORTANT: remember to clear the interval when the component unmounts
  onUnmounted(() => {
    clearInterval(pulseAnimationInterval);
  });
});

function selectSubService(subService) {
  selectedSubService.value = subService;
}
</script>

<style scoped>
.custom-border {
  border: 6px solid white;
}

#toparea {
  background-image: url(/public/birds2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.clamp-text {
  font-size: clamp(1.5rem, 5vw, 5rem);
  text-align: left;
}

.fade-enter-active {
  transition: opacity 0.2s;
  transition-delay: 0.2s;
  /* delay equal to the leave transition */
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.text-white {
  color: white;
}
</style>