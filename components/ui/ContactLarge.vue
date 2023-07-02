<template>
  <div class="w-full h-screen flex items-center justify-center bg-transparent">
    <form ref="form" id="mainContact" class="w-full max-w-4xl px-6 " @submit.prevent="submitForm">
      <uiLogoCombo />
      <div id="lastcol" class="flex flex-col h-full justify-between flex-grow">
					<div class="flex flex-row justify-center md:justify-end space-x-2 sm:space-x-3 md:space-x-4 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6 md:py-0 py-4 text-white">
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

				</div>
        <div class="relative mb-8">
  <label class="block text-white text-lg font-bold mb-2" for="reason">REASON FOR CONTACT</label>
  <select v-model="reason" id="reason" 
          class="w-full text-white text-lg py-3 px-4 leading-tight bg-black focus:z-10 relative">
    <option value="" disabled selected>-</option>
    <option value="option1">Web</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>


      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="name">Name</label>
        <input v-model="name"
          class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="name" type="text" placeholder="Your Name">
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
      </div>
      <div class="relative mb-8">
        <label class="block text-white text-lg font-bold mb-2 sr-only" for="email">Email</label>
        <input v-model="email"
          class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="email" type="email" placeholder="Your Email">
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
      </div>
      <div class="relative mb-8">
        <textarea v-model="message"
          class="border-b !border-opacity-50 border-gray  shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative"
          id="message" placeholder="Your Message"></textarea>
        <div
          class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left">
        </div>
        <label class="block text-white text-lg font-bold mt-auto sr-only" for="message">Your Message</label>
      </div>

      <div class="mb-8">
        <label class="flex items-center text-white text-lg">
          <input type="checkbox" v-model="consent" class="mr-3" id="updates" />
          I agree to receive email updates
        </label>
      </div>

      <div>
  <button
    class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 flex justify-center items-center text-lg"
    type="submit" @click.prevent="submitForm">
    <span v-show="!isLoading" class="uppercase">Send</span>
    <i-ri-loader-4-line v-show="isLoading" class="animate-spin" />
  </button>
</div>

      <div class="block">
    <uiFormFeedback v-if="formFeedback" :formFeedback="formFeedback" class="feedback-animation" :success="success" />
  </div>
    </form>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const consent = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const form = ref('')
const isLoading = ref(false)
const formFeedback = ref(null) 
const client = useSupabaseClient()
const success = ref(true); 
const reason = ref('')


onMounted(() => {
  // Same as before
})

const submitForm = async () => {
  isLoading.value = true;
  formFeedback.value = null; // Reset feedback message

  // Email validation
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    formFeedback.value = "invalidEmail";
    success.value = false; 
    isLoading.value = false;
    return;
  }

  // Submit form data to Supabase
  const { error } = await client
    .from('blogFollows')
    .insert([
      { 
        email: email.value, 
        topic: 'home',
        name: name.value,
        message: message.value,
        consent: consent.value,
        reason: reason.value 
      },
    ]);

  if (error) {
    console.error("Error submitting form:", error.message);
    formFeedback.value = "error"; // Update feedback message
    success.value = false; 
  } else {
    console.log("Form submitted successfully!");
    formFeedback.value = "success"; // Update feedback message
    success.value = true; 
  }

  isLoading.value = false;
}
</script>




<style scoped>
#reason, #reason:focus {}
.border-b-extend {
  background-color: #14B8A6;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  bottom: 23px;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 100;
}

.relative:focus-within>.border-b-extend {
  transform: scaleX(1);
}

form {
  max-width: 500px;
  margin: 0 auto;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
  background: transparent !important;
}

button[type="submit"] {
  margin-top: 1rem;
}

.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.feedback-animation {
    animation: feedback-fade-in 1s ease-in-out forwards;
    opacity: 0;
  }

  @keyframes feedback-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  #reason {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0 !important;
}

#reason option {
  border-radius: 0 !important;
  background: #000; /* You can change this to match your theme */
  color: #fff; /* You can change this to match your theme */
}
</style>
