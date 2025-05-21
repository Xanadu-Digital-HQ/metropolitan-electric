<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>

<template>
  <div class="group flex gap-2.5 size-full items-center justify-between">
    <div
      class="flex w-5/12 h-full backdrop-blur-[1px] bg-gradient-to-b from-[#295A80]/10 via-[#2C516E]/10 via-45% to-[#255173]/80 group-hover:-translate-x-full transition duration-200 overflow-hidden"
    ></div>
    <div
      class="flex w-5/12 h-full backdrop-blur-[1px] bg-gradient-to-b from-[#295A80]/10 via-[#2C516E]/10 via-45% to-[#255173]/80 group-hover:translate-x-full transition duration-200 overflow-hidden"
    ></div>
  </div>
</template>
