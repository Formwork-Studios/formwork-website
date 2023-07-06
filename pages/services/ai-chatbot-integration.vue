<template>
	<div class="h-screen text-white flex justify-center">
	  <div class="box-border w-11/12 md:w-3/4">
		<ChatBot />
		<div class="fixed bottom-10 right-10 text-4xl">
		  <i-mdi-information-slab-circle-outline @click="showModal = true" />
  
		  <transition name="fade">
			<div v-if="showModal" class="modal" @click.self="showModal = false">
			  <div class="m-auto p-10 bg-stone-900 text-white relative sm:w-full md:w-3/4 lg:max-w-3xl">
				<span class="close absolute top-2 right-2" @click="showModal = false">&times;</span>
				<h2 class="modal-header flex"><i-mdi-robot-excited class="mr-3"/><span class="inline-block align-baseline mt-[-2px]">Customized ChatBot Demo</span></h2>

				<p class="modal-text">Through the use of vector databases, users can provide private or up-to-date information for ChatGPT to learn and assist users with.</p>
				<uiButton btnText="Schedule Consultation" icon="i-mdi-arrow-right-thick" ghost @click="navigateToContact"/>			</div>
			</div>
		  </transition>
  
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' 
const showModal = ref(false)
const router = useRouter() 

const navigateToContact = () => {
  router.push('/contact') 
}
  </script>
  
  <style scoped>
  input:focus {
	outline: none;
	box-shadow: none;
  }
  
  /* The Modal (background) */
  .modal {
	display: block; 
	position: fixed; 
	z-index: 1; 
	padding-top: 100px; 
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%; 
	overflow: auto; 
	background-color: rgba(0,0,0,0.4); 
  }
  
  /* Modal Content */
  .modal-content {
	position: relative;
	background-color: #000;
	color: #fff;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
  }
  
  /* The Close Button */
  .close {
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
	font-size: 28px;
	font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
	color: #aaa;
	text-decoration: none;
	cursor: pointer;
  }
  
  .modal-header {
	font-size: 24px;
	margin-bottom: 10px;
  }
  
  .modal-text {
	font-size: 18px;
  }
  
  /* Fade In/Out Transition */
  .fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
	opacity: 0;
  }
  </style>
  
