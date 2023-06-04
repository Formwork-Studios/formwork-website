<template>
  <div class="h-screen relative overflow-hidden">
    <h2 class="text-9xl font-sans tracking-wide absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-slide-in">FORMWORK</h2>
  </div>
</template>

<style scoped>
@keyframes slide-in {
  0% {
    top: 100%;
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}

h2 {
  top: 100%;
  position: absolute;
  animation: slide-in 2s forwards ease-in-out;
}
</style>
