<template>
  <div class="mb-40 min-h-screen">
    <h1 class="text-6xl font-fancy font-bold text-white pt-40 pb-20 max-w-3xl mx-auto">Blog Posts</h1>
    <ul class="text-xl text-white max-w-3xl mx-auto">
      <li v-for="(post, index) in posts" :key="post.path" class="py-4 animate-delay" :style="{animationDelay: index * 0.1 + 's'}">
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

<style scoped>
.animate-delay {
	animation-duration: 1s;
	animation-fill-mode: both;
	animation-name: animate-delay;
}

@keyframes animate-delay {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}
</style>
