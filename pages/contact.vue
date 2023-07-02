<template>
  <div class="flex items-center justify-center h-screen text-2xl p-4 sm:p-20">
    <div class="bg-black w-full flex flex-col border-white border-2 p-4 sm:h-full">
      <h3 class="text-white border-b-2 border-white mb-4">Form title</h3>
      <div class="flex flex-col sm:flex-row border-t-2 border-white">
        <div class="block border-b-2 sm:border-b-0 sm:border-r-2 border-white mb-4 sm:mb-0 p-4">
          <label class="text-white">
            Email
            <input class="bg-gray-900 text-white w-full mb-4" />
          </label>
          <label class="text-white">
            Name
            <input class="bg-gray-900 text-white w-full mb-4" />
          </label>
        </div>
        <div class="border-b-2 sm:border-b-0 sm:border-r-2 border-white mb-4 sm:mb-0 p-4">
          <h3 class="text-white mb-4">Selection Area</h3>
          <div class="flex flex-col">
            <label class="text-white">
              <input type="radio" name="contactReason" class="text-white" /> Reason 1
            </label>
            <label class="text-white">
              <input type="radio" name="contactReason" class="text-white" /> Reason 2
            </label>
            <label class="text-white">
              <input type="radio" name="contactReason" class="text-white" /> Reason 3
            </label>
          </div>
        </div>
      </div>
      <div class="border-t-2 border-white p-4">
        <h3 class="text-white mb-4">Message Area</h3>
        <textarea class="bg-gray-900 text-white w-full h-32"></textarea>
      </div>
      <h3 class="text-white border-t-2 border-white mb-4 p-4">Another random H3 area</h3>
      <h3 class="text-white border-t-2 border-white mb-4 p-4">And another random H3 area</h3>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  .border-right {
    border-right: 2px solid white;
  }
}
</style>
