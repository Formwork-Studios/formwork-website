<template>
  <div class="mb-40 min-h-screen px-6">
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-fancy font-bold text-white pt-28 md:pt-40 pb-10 md:pb-20 max-w-3xl mx-auto">Blog Posts</h1>
    <ul class="text-xl text-white max-w-3xl mx-auto">
      <li v-for="(post, index) in posts" :key="post.path" class="py-4 animate-delay" :style="{animationDelay: index * 0.1 + 's'}">
        <nuxt-link :to="post.path">
          <h2 class="leading-snug text-2xl md:text-4xl">
            {{ post.meta.title }}
            <span v-if="isDevEnv && post.meta.status !== 'published'" class="text-tertiary">- unpublished</span>
          </h2>
        </nuxt-link>
    
        <div class="flex items-center text-white-800 text-lg pt-1 pb-2">
         
  <p>By {{ post.meta.author }}</p>
  <span class="px-2 text-lg md:text-2xl mt-1">|</span>
  <p>{{ post.meta.date }}</p>
</div>

        <p class="py-2">{{ post.meta.blurb }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import routes from '~/.nuxt/routes.mjs'

const posts = ref([]);

const isDevEnv = computed(() => process.env.NODE_ENV === 'development');

onMounted(() => {
  if (isDevEnv.value) {
    posts.value = routes.filter(route => route.path.startsWith('/posts/') && route.path !== '/posts');
  } else {
    posts.value = routes.filter(route => route.path.startsWith('/posts/') && route.path !== '/posts' && route.meta.status === 'published');
  }
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
