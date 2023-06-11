// https://nuxt.com/docs/api/configuration/nuxt-config

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
    css: [
        '@/assets/css/main.css'
      ],
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