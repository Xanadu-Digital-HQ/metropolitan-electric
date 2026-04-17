<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
<template>
  <div class="relative flex flex-col h-full items-center justify-center" :class="container">
    <div class="flex flex-col gap-2.5 items-center">
      <h1 class="text-3xl md:text-4xl lg:text-5xl text-white font-elemental text-center md:leading-14">
        driving the future of Sustainable Mobility in Africa
      </h1>
      <p class="text-base md:text-lg lg:text-xl text-white/90 text-center mt-4">
        Leading the Electric Vehicle Revolution across the Continent
      </p>
    </div>
  </div>
</template>
