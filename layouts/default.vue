<script setup>
import "@/assets/css/main.css";
</script>
<template>
	<img src="../public/buildings.jpg"
		class="fixed top-0 left-0 min-w-full max-w-full min-h-full max-h-full object-cover" />
	<div class="flex flex-col min-h-screen w-screen">
		<uiNavBar />
		<div class="flex-grow formworkbg z-40">
			<slot />
		</div>
		<uiFooter />
	</div>
</template>
