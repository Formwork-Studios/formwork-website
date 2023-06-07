<script lang="ts" setup>
import { ref } from 'vue'

const hoveredService = ref(null)

const services = ref([
  {
    title: 'WEB DESIGN',
    description: 'More than what a website looks like, we focus on how it feels. Whether your project is big or small, we use industry best practices to make sure your audience gets the type of experience youre looking for.',
    link: '#',
  },
  {
    title: 'DEVELOPMENT',
    description: 'Code is just a means to an end. We use the technology needed to complete the project, from cutting-edge Javascript frameworks to Wordpress and Shopify - we got you covered.',
    link: '#',
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'The Digital Marketing landscape is a cluttered mess, comprised of hoards of agencies producing endless AI generated "content". We will cut through the mess and bring back the human element to your work.',
    link: '#',
  },
  {
    title: 'SOCIAL MEDIA',
    description: 'Social media is a powerful tool for any company, big or small. Let us get you running on all relevant platforms and help set up targeting marketing.',
    link: '#',
  },
  {
    title: 'BRANDING',
    description: 'Impeccable branding feels effortless when the work behind it is rigorous.',
    link: '#',
  },
  {
    title: 'AUTOMATION',
    description: 'We will leverage the latest automation systems to help you save time and money.',
    link: '#',
  }
])

</script>



<template>
  <div class="grid grid-cols-3 grid-rows-2 place-items-start h-screen max-w-6xl mx-auto gap-28">
    <div 
      v-for="service in services" 
      :key="service.title" 
      class="service-container"
      :class="{ 'not-hovered': hoveredService !== null && service.title !== hoveredService }"
      @mouseover="hoveredService = service.title"
      @mouseout="hoveredService = null"
    >
      <h2 class="text-2xl font-sans tracking-wide animate-slide-in text-white mb-2">{{ service.title }}</h2>
      <div class="text-white-500 mb-4 leading-7">{{ service.description }}</div>
      <nuxt-link :to="service.link" class="text-secondary group">See more <i-mdi-chevron-double-right class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" /></nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.service-container {
  position: relative;
  transition: filter 0.3s ease; /* Add this line */
}
.service-container::before {
  content: '';
  position: absolute;
  left: -25px; /* Adjust this value as needed */
  top: 8%;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  width: 100px; /* Set this to the original size of your image */
  height: 100px; /* Set this to the original size of your image */
  background-image: url('formwork_100.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.service-container:hover::before {
  left: -35px; /* Adjust this value as needed */
  opacity: 1;
  transform: translate(-50%, -50%) scale(0.5) rotate(-10deg); /* Rotate 10 degrees on hover */
}


.not-hovered {
  filter: brightness(0.6);
}

</style>
