<template>
	<div class="h-screen text-white flex justify-center">
	  <div class="box-border w-11/12 md:w-3/4">
		<ChatBot />
		<div class="fixed bottom-1/2 md:bottom-10 right-4 md:right-10 text-4xl">
		  <i-mdi-information-slab-circle-outline @click="showModal = true" class="cursor-pointer text-3xl" />
  
		  <transition name="fade">
			<div v-if="showModal" class="modal" @click.self="showModal = false">
			  <div class="m-auto p-10 bg-stone-900 text-white relative w-5/6 md:w-1/3 lg:max-w-3xl">
				<span class="close absolute top-0 right-0" @click="showModal = false">&times;</span>
				<h2 class="modal-header flex"><span class="inline-block align-baseline mt-[-2px]">Customized ChatBot Demo</span></h2>

				<p class="text-lg pb-6">Through the use of vector databases, users can provide private or up-to-date information for ChatGPT to learn and assist users with.</p>
				<uiButton btnText="Schedule Consultation" icon="i-mdi-arrow-right-thick" @click="navigateToContact" text="Get in Touch" />			</div>
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
  router.push({ path: '/contact', query: { reason: 'Artificial Intelligence' } }) 
}

definePageMeta ({
	layout: 'nofooter'
})
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
	background-color: rgba(0,0,0,0.6); 
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
	top: 0px;
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
  

  /* Fade In/Out Transition */
  .fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
	opacity: 0;
  }


  </style>
  
