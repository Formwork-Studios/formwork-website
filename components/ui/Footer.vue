<template>
    <div class="bg-black text-white py-6 z-50 w-full tracking-wide border-t-2 border-t-black">
				<div class="flex flex-col md:flex-row md:justify-between px-6 lg:px-8 xl:px-10 2xl:px-20 w-full">
		   <div id="footer-content" class="flex flex-col md:flex-row md:grow w-full justify-between">
	
				<div class="flex flex-col lg:flex-row">
				<div v-for="section in sections" :key="section.title" class="mb-4 sm:mb-5 md:mb-6 md:mr-20">
					<h3 class="font-bold mb-2 border-b border-opacity-50 uppercase pr-20">
						{{ section.title }} 
					</h3>
					<ul v-if="section.links" :class="{ 'column-list': section.links.length > 5 }">
						<li v-for="link in section.links" :key="link.name">
							<a :href="link.url" class="text-white-500 hover:text-white-300 section-link">{{ link.name }}</a>
						</li>
					</ul>
				</div>
				<div class="mb-4 sm:mb-5 md:mb-6 sm:pr-0 md:pr-0">
					<h3 class="font-bold mb-2 border-b border-opacity-50 uppercase">
						Business Inquiries
					</h3>
					<ul>
						<li>
							<a href="#inquiry1" class="text-white-500 hover:text-white-300">+1-800-657-6893</a>
						</li>
						<li>
							<a href="#inquiry2" class="text-white-500 hover:text-white-300">hello@formworkstudios.com</a>
						</li>
					</ul>
				</div>
				</div>
				<div id="lastcol" class="flex flex-col h-full justify-between flex-grow">
					<div class="flex flex-row justify-center md:justify-end space-x-2 sm:space-x-3 md:space-x-4 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6 md:py-0 py-4">
						<a href="https://www.pinterest.com/formworkstudios/" target="_blank">
							<i-mdi-pinterest />
						</a>
						<a href="https://www.instagram.com/formworkstudios/" target="_blank">
							<i-mdi-instagram />
						</a>
						<a href="https://www.linkedin.com/company/formwork-studios/" target="_blank">
							<i-mdi-linkedin />
						</a>
						<a href="https://github.com/Formwork-Studios" target="_blank">
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
	display: inline-flex;
	align-items: center;
}

@media (min-width: 640px) { /* Apply the styles only for screens larger than 640px */
	.section-link:hover::before {
		content: "+";
		position: absolute;
		left: -20px;
		color: #fff;
		opacity: 40%;
		top: 50%;
		transform: translateY(-50%);
	}
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
						{ name: "Social Media", url: "/services/social-media" },
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
