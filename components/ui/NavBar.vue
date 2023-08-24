<template>
  <div>
    <div class="fixed top-0 right-2 z-[10000] lg:hidden">
      <button @click="isOpen = !isOpen" class="text-white py-4 cursor-pointer">
  <div class="menu-icon" :class="{ 'menu-open': isOpen }">
    <div class="menu-line top" style="top: 4px; right: 5px;"></div>
    <div class="menu-line bottom short" style="top: 10px; right: 5px;"></div>
  </div>
</button>
</div>

  <header class="fixed top-0 left-0 right-0 z-[1000]">
    <nav
      class="py-2 flex items-center justify-between pl-4 lg:pl-10 w-full background-blur backdrop-filter backdrop-blur-sm bg-stone-950 bg-opacity-60 z-50">
      <div>
        <uiBranding />
      </div>
      <div class="hidden lg:flex items-center space-x-8 relative tracking-wide h-full">
        <nuxt-link to="/" class="text-white border-none uppercase">Home</nuxt-link>
        <nuxt-link to="/posts/" class="text-white border-none uppercase">Blog</nuxt-link>
        <div class="flex flex-col">
          <div @click="isDropdownOpen = !isDropdownOpen" class="cursor-pointer text-white border-none uppercase">Services
            <i-mdi-chevron-down
              :class="isDropdownOpen ? 'rotate-180' : ''"
              class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </div>
          <div v-show="isDropdownOpen" class="absolute top-10 w-96 bg-stone-950 text-white border-white border-2 shadow-md right-0">
    <nuxt-link 
        v-for="item in serviceItems" 
        :key="item.id" 
        :to="`/services/${item.slug}`" 
        class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-secondary hover:text-white tracking-wide"
    >
        {{ item.name }}
    </nuxt-link>
</div>

        </div>
        <div  @click="$router.push('/contact')" class="!h-full -my-2 px-4 py-3 tracking-wider bg-primary bg-opacity-50 hover:bg-opacity-100 hover:text-stone-950 transition-color duration-200 text-stone-100 cursor-pointer">
          START A PROJECT
    
  </div>
      </div>


    </nav>
    <div id="nav-menu" 
  :class="{ 'menu-open': isOpen, 'menu-closed': !isOpen, 'fixed inset-0 bg-gray-900 flex': isOpen }" class="transition-all transition-150 nav-menu opacity-0 bg-stone-950 bg-opacity-80"
 >
<div class="bg-stone-950 lg:hidden shadow-md max-w-3/4 w-3/4 ml-auto pt-12 !z-40 ">
  <div class="flex flex-col h-full w-full justify-between items-start space-y-4 text-xl">
    <div class="p-8">
      <nuxt-link to="/" @click="isOpen = !isOpen" class="text-white border-none uppercase block mb-3">Home</nuxt-link>
      <nuxt-link to="/posts/" class="text-white border-none uppercase block mb-3">Blog</nuxt-link>
      <div @click="isDropdownOpen = !isDropdownOpen" class="cursor-pointer text-white border-none uppercase block mb-3">Services
        <i-mdi-chevron-down
          :class="isDropdownOpen ? 'rotate-180' : ''"
          class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
      </div>
      <div v-show="isDropdownOpen" class="ml-2">
  <nuxt-link 
    v-for="(item, index) in serviceItems" 
    :key="item.id" 
    :to="`/services/${item.slug}`" 
    @click="isOpen = !isOpen; isDropdownOpen = false" 
    class="tracking-wide"
    :class="['text-white border-none flex flex-row text-lg py-2', { 'mb-4': index === serviceItems.length - 1 }]"
  >
    {{ item.name }}  
  </nuxt-link>
</div>

      <nuxt-link to="/contact" @click="isOpen = !isOpen" class="text-white border-none uppercase">Contact</nuxt-link>
    </div>

    <div class="flex flex-row bottom-0 w-full items-center bg-gray-400">
  <a href="https://github.com" class="flex justify-center items-center bg-primary w-1/3 h-16" target="_blank">
    <i-mdi-github style="color: white" class="turtle-icon text-xl md:text-2xl cursor-pointer" />
  </a>
  <a href="https://pinterest.com" class="flex justify-center items-center bg-secondary w-1/3 h-16" target="_blank">
    <i-mdi-pinterest style="color: white" class="turtle-icon text-xl md:text-2xl cursor-pointer" />
  </a>
  <a href="https://twitter.com" class="flex justify-center items-center bg-tertiary w-1/3 h-16" target="_blank">
    <i-mdi-twitter style="color: white" class="turtle-icon text-xl md:text-2xl cursor-pointer" />
  </a>
</div>
</div>
  </div>
</div>

  </header>
  </div>
</template>


<script>
import { useStore } from '/store/store.ts';
import { ref } from 'vue';

export default {
  data() {
    return {
      isOpen: false,
      isDropdownOpen: false,
      showModal: false,
    };
  },
  setup() {
    const menuStore = useStore();
    const serviceItems = ref([]);

    serviceItems.value = menuStore.projects;

    return { serviceItems };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.isDropdownOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeMenu() {
      this.isOpen = false;
      this.isDropdownOpen = false;
    },
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

.rotate-180 {
  transform: rotate(180deg);
}

.menu-closed {
  display: none;
}

.menu-icon {

    width: 24px;
    height: 24px;
    position: relative;
    transition: all 0.3s ease;
  }

  .menu-line {
    width: 100%;
    height: 3px;
    background-color: currentColor;
    position: absolute;
    transition: all 0.3s ease;
  }

  .menu-line.short {
    width: 66%;
  }

  .menu-open .menu-line.top {
    transform: translateY(0px) rotate(-45deg);
    width: 100%;
  }

  .menu-open .menu-line.bottom {
    transform: translateY(-6px) rotate(45deg);
    width: 100%;
  }
</style>

