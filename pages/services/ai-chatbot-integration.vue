<template>
	<div class="h-screen text-white flex justify-center">
		<div class="box-border w-11/12 md:w-3/4">
			<ChatBot />
		</div>
	</div>
</template>


<script>
definePageMeta({
	layout: 'nofooter'
});
</script>

<style scoped>
input:focus {
	outline: none;
	box-shadow: none;
}
</style>
