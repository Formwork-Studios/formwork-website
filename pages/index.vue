<template>
  <div class="overflow-auto">
    <Formwork />
    <Services />
    <BigQuote :bigQuote="bigQuote" />
    <Columns />
  </div>
</template>


<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

const bigQuote = ref("We Help Ideas Take Shape")
</script>