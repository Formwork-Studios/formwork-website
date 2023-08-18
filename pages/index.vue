<template>
  <div class="overflow-auto relative">
    <div>
      <Formwork />
      <Services />
      <BigQuote :bigQuote="bigQuote" class="relative z-10" />
      <sectionFeaturedBlog class="relative z-20" />
      <uiContact />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Home',
    meta: [
    { name: 'description', content: 'Formwork Studios works at the nexus of creativity and technology. As a full-service web design and development team, we guide projects with data-driven rigor, helping ideas take shape.' }
  ],
})

definePageMeta({
  description: 'Formwork Studios works at the nexus of creativity and technology. As a full-service web design and development team, we guide projects with data-driven rigor, helping ideas take shape.'
})

const bigQuote = ref("We Help Ideas Take Shape");
const password = ref("");
const passwordEntered = ref(false);
const passwordError = ref(false);
const isProduction = process.env.NODE_ENV === 'production';

function checkPassword() {
  if (isProduction && password.value === "formwork") {
    passwordEntered.value = true;
  } else if (!isProduction) {
    passwordEntered.value = true;
  } else {
    passwordError.value = true;
  }
}
</script>

<style scoped>
#password-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: auto;
}

#password-form {
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  color: black;
}

#password-form button {
  background-color: #4a4a4a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

#password-form button:hover {
  background-color: #555;
}
</style>
