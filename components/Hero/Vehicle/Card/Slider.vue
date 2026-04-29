<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();
</script>
<template>
  <div
    class="pointer-events-none absolute inset-0 z-10 overflow-hidden"
    aria-hidden="true"
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
