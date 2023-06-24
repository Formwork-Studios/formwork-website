<template>
  <div class="overflow-auto">
    <div v-if="!passwordEntered && isProduction">
      <div id="password-popup">
        <div id="password-form">
          <h2 class="my-4">Enter Password</h2>
          <input type="password" v-model="password" />
          <br /><br />
          <button @click="checkPassword">Submit</button>
          <p v-if="passwordError" id="password-error">Incorrect password. Please try again.</p>
        </div>
      </div>
    </div>
    <div v-else>
      <Formwork />
      <Services />
      <BigQuote :bigQuote="bigQuote" />
      <sectionFeaturedBlog />
      <uiContact />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const bigQuote = ref("We Help Ideas Take Shape")
const password = ref("")
const passwordEntered = ref(false)
const passwordError = ref(false)
const isProduction = process.env.NODE_ENV === 'production'

function checkPassword() {
  if (isProduction && password.value === "formwork") {
    passwordEntered.value = true;
  } else if (!isProduction) {
    passwordEntered.value = true;
  } else {
    passwordError.value = true;
  }
}

onMounted(() => {
  console.log('NODE_ENV:', process.env.NODE_ENV)
})
</script>
<style scoped>
/* Style for the password popup */
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

/* Style for the password form */
#password-form {
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  color: black;
}

/* Style for the submit button */
#password-form button {
  background-color: #4a4a4a;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

/* Hover effect for the submit button */
#password-form button:hover {
  background-color: #555;
}
</style>
