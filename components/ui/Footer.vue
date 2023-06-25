<template>
	<div class="bg-black text-white py-4 sm:py-6 md:py-8 z-50 w-full tracking-wide">
		<div class="flex flex-col md:flex-row md:justify-between px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-20 w-full">

		   <div id="footer-content" class="flex flex-col md:flex-row md:grow w-full justify-between">
				<div class="mr-8 my-10 md:my-0">
					<img src="/formwork_color.png" alt="Formwork logo" class="fit mx-auto max-h-40" />
				</div>
				<div class="flex flex-col lg:flex-row">
				<div v-for="section in sections" :key="section.title" class="mb-4 sm:mb-5 md:mb-6 md:mr-20">
					<h3 class="font-bold mb-2 border-b border-opacity-50 uppercase pr-20">
						{{ section.title }} ok
					</h3>
					<ul v-if="section.links" :class="{ 'column-list': section.links.length > 5 }">
						<li v-for="link in section.links" :key="link.name">
							<a :href="link.url" class="text-white-500 hover:text-white-300 section-link">{{ link.name }}</a>
						</li>
					</ul>
				</div>
				<!-- New column for Business Inquiries -->
				<div class="mb-4 sm:mb-5 md:mb-6 sm:mr-6 md:mr-8">
					<h3 class="font-bold mb-2 border-b border-opacity-50 uppercase">
						Business Inquiries
					</h3>
					<ul>
						<li>
							<a href="#inquiry1" class="text-white-500 hover:text-white-300">+1-222-222-2222</a>
						</li>
						<li>
							<a href="#inquiry2" class="text-white-500 hover:text-white-300">hello@formworkstudios.com</a>
						</li>
					</ul>
				</div>
				</div>
				<!-- End of new column -->
				<div id="lastcol" class="flex flex-col h-full justify-between flex-grow">
					<div class="flex flex-row justify-center md:justify-end space-x-2 sm:space-x-3 md:space-x-4 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6 md:py-0 py-4">
						<a href="https://www.pinterest.com" target="_blank">
							<i-mdi-pinterest />
						</a>
						<a href="https://www.twitter.com" target="_blank">
							<i-mdi-twitter />
						</a>
						<a href="https://www.linkedin.com" target="_blank">
							<i-mdi-linkedin />
						</a>
						
						<a href="https://www.github.com" target="_blank">
							<i-mdi-github />
						</a>
					</div>
					<div class="text-center md:text-right h-full flex flex-col justify-end text-sm text-stone-400">
						<p class="mt-auto">
							© 2023 Formwork Studios. All rights reserved.
					
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<style scoped>
.column-list {
	column-count: 2;
	column-gap: 40px;
}

li {
	position: relative;
}

a {
	position: relative;
}

.section-link:hover:before {
  content: "+";
  position: absolute;
  left: -20px; /* adjust as necessary */
  color: #fff;
  opacity: 40%;
}

</style>

<script>
export default {
	data() {
		return {
			sections: [
				{
					title: "About",
					links: [
						{ name: "Team", url: "/team" },
						{ name: "Contact", url: "/contact" },
						{ name: "Privacy", url: "/privacy" },
						{ name: "Blog", url: "/posts" },
					],
				},
				{
					title: "Services",
					links: [
						{ name: "Website Development", url: "/services/website-development" },
						{ name: "Website Design", url: "/services/website-design" },
						{ name: "Digital Marketing", url: "/services/digital-marketing" },
						{ name: "SEO", url: "/services/digital-marketing" },
						{ name: "Social Media", url: "/services/socialmedia" },
						{
							name: "Artificial Intelligence",
							url: "/services/ai-chatbot-integration",
						},
						{ name: "Branding", url: "/services/branding-identity" },
	
					],
				},
			],
		};
	},
};
</script>
