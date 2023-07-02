<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  formFeedback: String,
  success: Boolean
})
</script>

<template>
  <div v-if="formFeedback === 'error'" 
       class="text-white w-full block p-3 mt-4 font-semibold"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    There was an error processing your request. Please try again.
  </div>

  <div v-else-if="formFeedback === 'success'" 
       class="text-white w-full block p-3 mt-4 font-semibold"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    Your request was processed successfully.
  </div>

  <div v-else-if="formFeedback === 'invalidEmail'" 
       class="text-white w-full block p-3 mt-4 font-semibold"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    The email address you have entered is not valid.
  </div>
</template>

<style scoped>
.feedback {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
