<template>
  <div class="bg-[#113912]">
    <div class="flex flex-col" :class="container">
      <div
        class="flex flex-wrap justify-between sm:justify-start gap-5 sm:gap-10 py-24"
      >
        <NuxtLink
          to="/#services"
          class="text-xs sm:text-sm text-white font-medium font-serif border-b-2 border-b-transparent hover:border-b-white transition-colors duration-200 cursor-pointer"
          >Services</NuxtLink
        >
        <NuxtLink
          to="/intake-form"
          aria-label="Navigate to FeedBack Page"
          class="text-xs sm:text-sm text-white font-medium font-serif border-b-2 border-b-transparent hover:border-b-white transition-colors duration-200"
          >Investor Relations</NuxtLink
        >
        <NuxtLink
          to="/#contact"
          class="text-xs sm:text-sm text-white font-medium font-serif border-b-2 border-b-transparent hover:border-b-white transition-colors duration-200 cursor-pointer"
          >Contact</NuxtLink
        >
      </div>
      <p class="text-white text-xs sm:text-sm pb-5">
        © 2024 Metropolitan Electric Limited. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
