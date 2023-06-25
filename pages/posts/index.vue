<template>
  <div class="mb-40">
    <h1 class="text-6xl font-fancy font-bold text-white pt-40 pb-20 max-w-3xl mx-auto">Blog Posts</h1>
    <ul class="text-xl text-white max-w-3xl mx-auto">
      <li v-for="post in posts" :key="post.path" class="py-4">
        <nuxt-link :to="post.path"><h2>{{ post.meta.title }}</h2></nuxt-link>
        <p>{{ post.meta.date }}</p>

        <p class="py-2">{{ post.meta.blurb }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import routes from '~/.nuxt/routes.mjs'

const posts = ref([]);

onMounted(() => {
  posts.value = routes.filter(route => route.path.startsWith('/posts/') && route.path !== '/posts');
});
</script>
