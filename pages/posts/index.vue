<template>
  <div>
    <ul class="text-xl text-white pt-40">
      <li v-for="post in posts" :key="post.path">
        <nuxt-link :to="post.path">{{ post.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import routes from '~/.nuxt/routes.mjs'

const posts = ref([]);

onMounted(() => {
  posts.value = routes.filter(route => route.path.startsWith('/posts'));
});
</script>
