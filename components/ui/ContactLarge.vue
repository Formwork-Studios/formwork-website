<template>
  <div class="h-screen flex items-center justify-center bg-transparent w-full">
    <form ref="form" id="mainContact" class="w-11/12 lg:w-2/3 px-0 lg:px-6 mx-auto" @submit.prevent="submitForm">
      <div class="flex flex-col md:flex-row items-center">
        <div id="col1" class="flex items-center md:p-6 lg:p-10">
    <img
        src="/formwork_white.png"
        class="hidden md:block mr-0 md:mr-8 p-10na md:h-[500px] h-[300px]"
    />

    <span 
        class="md:hidden text-white text-xl" 
    >
        FORMWORK STUDIOS
    </span>
</div>

        <div id="col2" class="flex-grow p-2 md:p-6 lg:p-10">
          <div class="relative mb-8">
            <label class="block text-white text-lg font-bold mb-2" for="reason">REASON FOR CONTACT</label>
            <select v-model="reason" id="reason" class="w-full text-white text-lg py-3 px-4 leading-tight bg-black focus:z-10 relative">
  <option value="" disabled>-</option>
  <option value="web-design-and-ui-ux">Website Design</option>
  <option value="web-development">Website Development</option>
  <option value="digital-marketing">Digital Marketing</option>
  <option value="branding-identity">Visual Identity</option>
  <option value="e-commerce">E-commerce</option>
  <option value="social-media">Social Media</option>
  <option value="Artificial Intelligence">Artificial Intelligence</option>
  <option value="General Inquiry">General Inquiry</option>
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
          <div class="button-container relative">
            <button
              class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 flex justify-center items-center text-lg"
              type="submit" @click.prevent="submitForm">
              <span v-show="!isLoading" class="uppercase">Send</span>
              <i-ri-loader-4-line v-show="isLoading" class="animate-spin" />
            </button>
            <div class="form-feedback absolute">
              <uiFormFeedback v-if="formFeedback" :formFeedback="formFeedback" class="feedback-animation"
                :success="success" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouteQuery } from '@vueuse/router'

const routeQuery = useRouteQuery('reason')
const reason = ref('')


watch(routeQuery, newValue => {

  reason.value = newValue
})

onMounted(() => {
  console.log('Route reason:', routeQuery.value)
  if (routeQuery.value) {
    reason.value = routeQuery.value
    console.log(reason.value)
  }
})




const consent = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const form = ref('')
const isLoading = ref(false)
const formFeedback = ref(null)
const client = useSupabaseClient()
const success = ref(true);



const submitForm = async () => {
  isLoading.value = true;
  formFeedback.value = null;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim() || reason.value === "") {
    formFeedback.value = "incompleteForm";
    success.value = false;
    isLoading.value = false;
    return;
  }

  if (!consent.value) {
    formFeedback.value = "consentNotGiven";
    success.value = false;
    isLoading.value = false;
    return;
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    formFeedback.value = "invalidEmail";
    success.value = false;
    isLoading.value = false;
    return;
  }

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
    formFeedback.value = "error"; 
    success.value = false;
  } else {
    console.log("Form submitted successfully!");
    formFeedback.value = "success";
    success.value = true;
  }

  isLoading.value = false;
}




</script>

<style scoped>
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
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#reason {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0 !important;
}

.button-container {
  position: relative;
}



.form-feedback {
    position: absolute;
    width: 100%;
    top: 100%; /* This positions it right below the element */
}

</style>
