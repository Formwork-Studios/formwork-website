<template>
  <div class="h-screen overflow-auto" data-dev-class="snap snap-y snap-proximity">
    <Formwork class="" data-dev-class="snap-start"/>
    <Services class="" data-dev-class="snap-start"/>
    <BigQuote :bigQuote="bigQuote" class="" data-dev-class="snap-start"/>
  </div>
</template>


<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

const bigQuote = ref("We Help Ideas Take Shape")
</script>