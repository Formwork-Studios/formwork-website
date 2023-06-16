<template>
  <div class="grid grid-rows-2 h-screen gap-y-8">
    <div class="bg-stone-950 px-10 pt-14">
      <div id="toparea" class="col-span-1 p-4 h-full flex flex-col justify-end custom-border ">
        <div class="text-xl text-white clamp-text font-black mb-8">
          {{ serviceName }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-5 px-10 pb-10 bg-stone-950 gap-x-8">
      <!-- Menu - 1 column -->
      <div class="col-span-1 p-4">
        <ul class="space-y-4 text-xl uppercase">
          <li v-for="subService in subServices" :key="subService.sid" class="text-white cursor-pointer"
            @click="selectSubService(subService)">
            <!-- Add '+' if subService is the selected one -->
            <span v-if="subService === selectedSubService" class="pr-2">+</span>{{ subService.name }}
          </li>
        </ul>
      </div>


      <!-- Description - 4 columns -->
      <div class=" text-white text-2xl col-span-4 p-4 relative">
        <transition-group name="fade">
          <div v-if="selectedSubService" :key="selectedSubService.sid">
            <div class="grid grid-cols-3 gap-x-20">
              <div class="col-span-1">
                <div class="text-white font-bold mb-2 text-3xl" v-if="selectedSubService.header">
                  {{ selectedSubService.header }}
                </div>
                <div class="text-white mb-4">
                  {{ selectedSubService.description }}
                </div>
              </div>
              <div class="col-span-2">

                {{ selectedSubService.details }}
              </div>
            </div>
          </div>
        </transition-group>

        <div
          class="absolute bottom-0 right-0 h-auto w-auto px-4 py-4 bg-secondary font-bold flex items-center justify-center text-base"
          :class="contactPulseAnimation">
          <span class="pr-2">GET IN TOUCH</span>
          <i-mdi-arrow-right-thick style="align-self: center;" />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store/store.ts';
import { ref, watchEffect } from 'vue';

definePageMeta({
  layout: "service",
});

const store = useStore();
const currentService = ref("website-design");
const selectedSubService = ref({}); // initialize as an empty object
const subServices = ref([]);
const serviceName = ref('');
const serviceDescription = ref('');
const serviceDetails = ref('');
const contactPulseAnimation = ref('');

watchEffect(() => {
  const service = store.projects.find(project => project.slug.includes(currentService.value));
  serviceName.value = service ? service.name : '';
  serviceDescription.value = service ? service.description : '';
  serviceDetails.value = service ? service.details : '';
  subServices.value = service ? service.subServices : [];
  const defaultSubService = subServices.value.find(subService => subService.sid === 0);
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

watch(() => selectedSubService.value, () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, 0);
});
</script>

<style scoped>
.custom-border {
  border: 10px solid white;
  border-radius: 10px;
}

#toparea {
  background-image: url(/public/birds2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.clamp-text {
  font-size: clamp(1rem, 5vw, 5rem);
  text-align: left;
}

.fade-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.5s;
  /* delay equal to the leave transition */
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
