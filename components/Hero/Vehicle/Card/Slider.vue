<script lang="ts" setup>
const isOpen = ref(false);
</script>
<template>
  <div
    class="relative flex-1 h-110 sm:h-140 lg:h-170 w-full overflow-hidden drop-shadow-xl shadow-md border-accent"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <div
      class="absolute inset-y-0 left-0 z-10 w-[49%] origin-left transform-gpu overflow-hidden rounded-none bg-linear-to-b from-[rgba(41,90,128,0.1)] from-0% via-[rgba(44,81,110,0.1)] via-[41.891891891891895%] to-[rgba(37,81,115,0.8)] to-100% backdrop-blur-[1px] transition-transform duration-500 ease-out will-change-transform pointer-events-none"
      :style="{ transform: `scaleX(${isOpen ? 0.1 : 1})` }"
    />
    <div
      class="absolute inset-y-0 right-0 z-10 w-[49%] origin-right transform-gpu overflow-hidden rounded-none bg-linear-to-b from-[rgba(41,90,128,0.1)] from-0% via-[rgba(44,81,110,0.1)] via-[41.891891891891895%] to-[rgba(37,81,115,0.8)] to-100% backdrop-blur-[1px] transition-transform duration-500 ease-out will-change-transform pointer-events-none"
      :style="{ transform: `scaleX(${isOpen ? 0.1 : 1})` }"
    />
  </div>
</template>
