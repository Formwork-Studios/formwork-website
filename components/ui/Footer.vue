<template>
  <div class="bg-black text-white py-8">
    <div class="mx-20 flex justify-between">
      <div class="flex grow">
        <div class="mr-20">
          <img src="/formwork_color.png" alt="Formwork logo" class="h-40"/>
        </div>
        <div v-for="section in sections" :key="section.title" class="mr-20">
          <h3 class="font-bold mb-2 border-b border-opacity-50 uppercase">{{section.title}}</h3>
          <ul v-if="section.links" :class="{ 'column-list': section.links.length > 5 }">
            <li v-for="link in section.links" :key="link.name"><a :href="link.url" class="text-white-500 hover:text-white-300 hover:text-white">{{link.name}}</a></li>
          </ul>
        </div>
        <div id="lastcol" class="flex grow flex-col h-full justify-between">
  <div class="flex flex-row justify-end space-x-4 text-xl">
    <a href="https://www.pinterest.com" target="_blank">
      <i-mdi-pinterest />
    </a>
    <a href="https://www.twitter.com" target="_blank">
      <i-mdi-twitter />
    </a>
    <a href="https://www.linkedin.com" target="_blank">
      <i-mdi-linkedin />
    </a>
  </div>
  <div class="text-right h-full flex flex-col justify-end text-sm text-stone-400">
    <p class="mt-auto">© 2023 Formwork Studios. All rights reserved.</p>
  </div>
</div>

      </div>
    </div>
  </div>
</template>


<style scoped>
.column-list {
  column-count: 2;
  column-gap: 40px;
}

</style>

<script>
export default {
  data() {
    return {
      sections: [
        { title: 'About', links: [{name: 'Team', url: '#team'}, {name: 'Contact', url: '#contact'}] },
        { title: 'Services', links: [{name: 'Website Development', url: '#webdev'}, {name: 'Website Design', url: '#webdesign'}, {name: 'Digital Marketing', url: '#digitalmarketing'}, {name: 'SEO', url: '#seo'}, {name: 'Social Media', url: '#socialmedia'}, {name: 'Artificial Intelligence', url: '#ai'}, {name: 'Something else', url: '#else'}, {name: 'Another service', url: '#anotherservice'}, {name: 'More services', url: '#moreservices'}] }
      ],
    };
  }
};
</script>
