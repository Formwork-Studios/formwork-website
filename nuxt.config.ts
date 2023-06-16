// https://nuxt.com/docs/api/configuration/nuxt-config

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	target: "static",
	css: ["@/assets/css/main.css"],
	modules: [
		"@nuxtjs/tailwindcss",
		'@pinia/nuxt',
		["unplugin-icons/nuxt", { autoInstall: true }],
	],
	vite: {
		plugins: [
			Components({
				resolvers: IconsResolver(),
			}),
			Icons(),
		],
		optimizeDeps: { exclude: ["fsevents"] },
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		PINECONE_API_KEY: process.env.PINECONE_API_KEY,
		PINECONE_BASE_URL: process.env.PINECONE_BASE_URL,
	}
});
