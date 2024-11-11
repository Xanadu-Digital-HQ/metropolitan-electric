<template>
  <div
    class="relative flex flex-col h-[80vh] justify-center"
    :class="container"
  >
    <div class="flex flex-col gap-y-5 w-full max-w-2xl z-20">
      <div class="flex flex-col gap-y-2">
        <p
          v-motion
          :initial="{ opacity: 1, y: 80 }"
          :enter="{ opacity: 1, y: 80 }"
          :visible-once="{
            opacity: 1,
            y: 0,
          }"
          :delay="800"
          :duration="600"
          class="font-medium font-main text-3xl sm:text-4xl text-white leading-9 sm:leading-10 tracking-wider"
        >
          Driving The Future Of Sustainable Mobility In Africa
        </p>
        <p
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
          }"
          :delay="900"
          :duration="400"
          class="text-base md:text-xl text-white tracking-wide font-serif"
        >
          Leading the Electric Vehicles (EV) Revolution across the Continent
        </p>
      </div>
      <NuxtLink
        v-motion
        :initial="{ opacity: 1, y: 50 }"
        :enter="{ opacity: 1, y: 50 }"
        :visible-once="{
          opacity: 1,
          y: 0,
        }"
        :delay="800"
        :duration="400"
        to="/#about"
        class="px-8 py-3 text-sm sm:text-base hover:bg-accentHovered bg-accent w-fit font-semibold font-main text-white transition-all duration-200"
        >Lead The Charge</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
