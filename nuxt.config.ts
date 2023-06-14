// https://nuxt.com/docs/api/configuration/nuxt-config

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
    css: [
        '@/assets/css/main.css'
      ],
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PINECONE_API_KEY: process.env.PINECONE_API_KEY,
    PINECONE_BASE_URL: process.env.PINECONE_BASE_URL,
    PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['unplugin-icons/nuxt', { autoInstall: true }],
  ],
  vite: {
    plugins: [
        Components({
            resolvers: IconsResolver(),
        }),
        Icons(),
    ]
},
postcss: {
  plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
},
})
