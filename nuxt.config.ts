import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	target: "static",
	ssr: false,
	css: ['~/assets/css/main.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		["unplugin-icons/nuxt", { autoInstall: true }],
		'@nuxtjs/supabase'
	],
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
	  },
	plugins: [
		{
		  src: '~/plugins/vue3-particles.ts',
		  mode: 'client',
		},

		'~/plugins/supabase-actions.js',

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

		EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,

		PASSWORD: process.env.PASSWORD,
		EMAIL: process.env.EMAIL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
	
	}
});
