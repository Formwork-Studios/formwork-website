<template>
  <div class="bg-black text-white py-8">
    <div class="container mx-auto flex justify-between items-start">
      <div class="flex">
        <div class="mr-20">
          <img src="formwork_color.png" alt="Formwork logo" class="h-40"/>
        </div>
        <div v-for="section in sections" :key="section.title" class="mr-20">
          <h3 class="font-bold mb-2 border-b border-opacity-50">{{section.title}}</h3>
          <ul v-if="section.links" :class="{ 'column-list': section.links.length > 5 }">
            <li v-for="link in section.links" :key="link.name"><a :href="link.url" class="text-white-500 hover:text-white-300 hover:text-white">{{link.name}}</a></li>
          </ul>
        </div>
      </div>
      <div class="w-1/4 flex flex-row text-xl gap-5">
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
