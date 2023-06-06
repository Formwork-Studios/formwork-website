<template>
  <div class="flex flex-col min-h-screen">
    <uiNavBar />
    <div class="flex-grow formworkbg">
      <slot />
    </div>
    <uiFooter />
  </div>
</template>