<template>
  <a
    :href="image"
    target="_blank"
    rel="noreferrer"
    class="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#d8dfd5] bg-white/80 shadow-[0_14px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,32,39,0.08)]"
  >
    <div class="relative overflow-hidden">
      <img
        class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        :src="image"
        :alt="title"
      />
      <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-brand/36 via-transparent to-transparent" />
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5">
      <p class="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#6b8177]">
        Visual Highlight
      </p>
      <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
        {{ title }}
      </h3>
      <p class="line-clamp-3 text-sm leading-7 text-[#41555d]">
        {{ description }}
      </p>

      <div class="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand">
        Open Image
        <ArrowRightIcon class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/20/solid";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
