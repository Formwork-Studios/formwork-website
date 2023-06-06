<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <ClientOnly>
    <Teleport to="body">
      <uiModal v-model:visible="showModal" @close="showModal = false" />
    </Teleport>
  </ClientOnly>
    <nav
      class="flex items-center justify-between pl-10 w-full background-blur backdrop-filter backdrop-blur-sm bg-stone-950 bg-opacity-60 z-50">
      <div>
        <uiBranding />
      </div>
      <div class="hidden lg:flex items-center space-x-8">
        <nuxt-link to="/" class="text-white border-none uppercase">Home</nuxt-link>
        <nuxt-link to="/services" class="text-white border-none uppercase">Services</nuxt-link>
        <a href="/services/ai" class="text-white border-none uppercase">AI</a>
        <uiBtn @click="showModal = !showModal" btnText="START A PROJECT" />
      </div>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" class="text-white z-50">
          <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer z-50" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer z-50" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
    <div id="nav-menu" :class="{ 'menu-open': isOpen, 'fixed inset-0 bg-gray-900 flex': isOpen }"
      class="bg-stone-900 p-4 lg:hidden shadow-md pt-20 transition-all transition-150 nav-menu opacity-0 mt-14">
      <div class="flex flex-col items-start space-y-4 text-2xl mr-auto">
        <nuxt-link to="/" @click="isOpen = !isOpen" class="text-white border-none uppercase">Home</nuxt-link>
        <nuxt-link to="/services" @click="isOpen = !isOpen" class="text-white border-none uppercase ">Services</nuxt-link>
        <a href="/services/ai" class="text-white border-none uppercase">AI</a>
        <div class="flex py-10 space-x-2">
          <i-mdi-github style="color: white" class="turtle-icon text-xl md:text-4xl inline col-span-1  cursor-pointer" />
          <i-mdi-pinterest style="color: white"
            class="turtle-icon text-xl md:text-4xl inline col-span-1  cursor-pointer" />
          <i-mdi-twitter style="color: white" class="turtle-icon text-xl md:text-4xl inline col-span-1  cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const showModal = ref(false);

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const showModal = ref(false);
    const isOpen = ref(false);
    return { showModal, isOpen };
  },
};

</script>

<style scoped>
body {
  padding-top: 4rem;
}

.menu-open {
  opacity: 1;
  transform: translateY(0);
}
</style>
