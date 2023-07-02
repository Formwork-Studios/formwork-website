<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  formFeedback: String,
  success: Boolean
})
</script>

<template>
  <div v-if="formFeedback" 
       class="text-white w-full block p-3 my-4 font-semibold"
       :class="{'bg-primary': success, 'bg-tertiary': !success}">
    {{ formFeedback }}
  </div>
</template>

<style scoped>
.feedback {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
