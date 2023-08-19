<script lang="ts" setup>
import routes from '~/.nuxt/routes.mjs'

const route = useRoute()

useHead({

  titleTemplate: 'Formwork Studios | %s',

})

</script>

<template>
  <div class="flex flex-col min-h-screen bg-stone-950 text-white">
    <uiNavBar />
    <slot />

    <UiFollowBlog />
    <uiFooter />
  </div>
</template>
