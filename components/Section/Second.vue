<template>
  <div class="flex justify-center items-center h-screen py-5 px-10">
    <div class="absolute top-0 left-0 size-full bg-white z-1"></div>

    <div class="size-full z-0">
      <img class="object-cover" src="/building.png" alt="building" />
    </div>

    <div class="flex flex-col"></div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
import type { Card } from "~/types/types.js";
defineProps<{ data: Card[] }>();
</script>
