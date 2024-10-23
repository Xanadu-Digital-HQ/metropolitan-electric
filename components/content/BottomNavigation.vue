<template>
  <div class="flex py-2.5 justify-between">
    <NuxtLink
      to="/media-center"
      class="flex items-center gap-1.5 text-green-500 hover:text-green-600"
    >
      <ArrowLeftIcon class="size-4" />
      Back
    </NuxtLink>
    <NuxtLink
      to="/media-center"
      class="flex items-center gap-1.5 text-green-500 hover:text-green-600"
    >
      Return to Homepage
      <ArrowUturnLeftIcon class="size-4" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowUturnLeftIcon } from "@heroicons/vue/20/solid";
</script>
