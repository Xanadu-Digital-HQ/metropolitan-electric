<template>
  <div class="bg-[#1C6220] p-5 sm:p-10">
    <div class="py-20 mx-auto">
      <div class="flex flex-col gap-5" :class="container">
        <p class="text-white text-3xl sm:text-4xl font-semibold sm:font-medium">
          We Would Love To Hear From You
        </p>
        <p class="text-white text-lg font-serif max-w-2xl">
          Feel free to give us a call or send us an email with any questions or
          comments you have.
        </p>
        <NuxtLink
          to="/#contact"
          class="px-8 py-2.5 text-white border-2 border-white bg-[#1C6220] hover:bg-[#113912] hover:border-transparent w-fit font-semibold transition-colors duration-200"
          >Get In Touch</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
