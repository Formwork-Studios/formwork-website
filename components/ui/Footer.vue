<template>
  <div class="bg-black text-white py-8">
    <div class="container mx-auto flex justify-between items-start">
      <div class="flex">
        <div class="mr-20">
          <img src="formwork_color.png" alt="Formwork logo" class="h-40"/>
        </div>
        <div v-for="section in sections" :key="section.title" class="mr-20">
          <h3 class="font-bold mb-2">{{section.title}}</h3>
          <ul v-if="section.links" :class="{ 'column-list': section.links.length > 5 }">
            <li v-for="link in section.links" :key="link"><a href="#" class="text-gray-300 hover:text-white">{{link}}</a></li>
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
        { title: 'About', links: ['Team', 'Contact'] },
        { title: 'Services', links: ['Website Development', 'Website Design', 'Digital Marketing', 'SEO', 'Social Media', 'Artificial Intelligence', 'Something else', 'Another service', 'More services'] }
      ],
    };
  }
};
</script>
