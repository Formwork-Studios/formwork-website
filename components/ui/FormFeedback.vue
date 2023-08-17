<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  formFeedback: String,
  success: Boolean
})
</script>

<template>
  <div v-if="formFeedback === 'error'" 
       class="text-white w-full block p-3 mt-4 font-semibold text-base md:text-lg "
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    There was an error processing your request. Please try again.
  </div>

  <div v-else-if="formFeedback === 'success'" 
       class="text-white w-full block p-3 mt-4 font-semibold text-base md:text-lg"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    Your request was processed successfully.
  </div>

  <div v-else-if="formFeedback === 'invalidEmail'" 
       class="text-white w-full block p-3 mt-4 font-semibold text-base md:text-lg"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    The email address you have entered is not valid.
  </div>

  <div v-else-if="formFeedback === 'incompleteForm'" 
       class="text-white w-full block p-3 mt-4 font-semibold text-base md:text-lg"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    Please complete all required fields.
  </div>

  <div v-else-if="formFeedback === 'consentNotGiven'" 
       class="text-white w-full block p-3 mt-4 font-semibold text-base md:text-lg "
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    Please agree to the terms before submitting.
  </div>
</template>

<style scoped>
.feedback {
  margin-top: 10px;
}
</style>
