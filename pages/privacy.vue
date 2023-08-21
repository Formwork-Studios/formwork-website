<template>
  <div class="flex items-center justify-center h-screen  text-white max-w-[40ch] mx-auto px-6 leading-7 tracking-wide">
    <div class="inline-block"><div id="privacyPolicy">
  <h1 class="text-3xl md:text-4xl mb-6 font-bold">PRIVACY POLICY</h1>
  
  <ul class="mb-6">
    <li>
      <strong>No Cookies:</strong> Unlike many, our site doesn't use cookies. Your browsing here leaves no digital crumbs.
    </li>
    <li>
      <strong>No Tracking:</strong> We don't track your activities. Your online journey stays your own.
    </li>
    <li>
      <strong>Contact Form Use Only:</strong> We collect emails via our contact forms, but that's it. Your emails are for our communication only. No other use, no sharing.
    </li>
  </ul>

  <p >That's it! No cookies, no tracking, and respect for your email privacy. Welcome to the unicorn of privacy policies, where your privacy matters to us.</p>
</div>
<div class="mt-8">
  <a @click="goBack" class="text-secondary text-lg group mt-8 cursor-pointer">Back</a>      </div>
      </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'


definePageMeta({
  layout: "nofooter"})



const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>


<style scoped>
li {
  margin-bottom: 1rem;
}
</style>
