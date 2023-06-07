<template>
  <div class="bg-black text-white py-8">
    <div class="container mx-auto flex justify-around items-center">
      <div class="w-1/4">
        <img src="path-to-your-logo/formwork-logo.png" alt="Formwork logo" class="w-24 h-24"/>
      </div>
      <div v-for="section in sections" :key="section.title" class="w-1/4">
        <h3 class="font-bold mb-2">{{section.title}}</h3>
        <ul v-if="section.links">
          <li v-for="link in section.links" :key="link"><a href="#" class="text-gray-300 hover:text-white">{{link}}</a></li>
        </ul>
      </div>
      <div class="w-1/4 flex flex-row text-xl gap-5">
        <i-mdi-twitter />
    <i-mdi-linkedin />
    <i-mdi-pinterest />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { title: 'About', links: ['Link 1', 'Link 2'] },
        { title: 'Services', links: ['Link 1', 'Link 2'] }
      ],
    };
  }
};
</script>
