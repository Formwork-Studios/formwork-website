<script lang="ts" setup></script>

<template>
  <div>
    <div class="flex justify-start items-center text-white my-40 flex-col max-w-3xl mx-auto">
    <h2 class="text-left">AI Chatbot Integration <span class="blinking">_</span></h2>

    <div class="text-xl pt-4 pb-2 inline text-center">We provide custom chatbots that are trained on your own up-to-date documentation or recent news and information.</div>

    <nuxt-link to="/services/ai-chatbot-integration" class="text-secondary group text-xl"
					>See more
					<i-mdi-chevron-double-right
						class="inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"
				/></nuxt-link>
    </div>
  </div>
</template>

<style scoped>

@keyframes blink {
  0%, 49% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 1;
  }
}

.blinking {
  animation: blink 1s linear infinite;
}

</style>
