<template>
  <NuxtLink
    :to="slug"
    class="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-[#d8dfd5] bg-white/80 shadow-[0_18px_60px_rgba(16,32,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(16,32,39,0.1)]"
  >
    <div class="relative overflow-hidden">
      <img
        class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
        :src="image"
        :alt="title"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101920]/55 via-[#101920]/12 to-transparent" />
      <div class="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-sm">
        Media Story
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5 sm:p-6">
      <div class="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#6a8076]">
        <span class="size-2 rounded-full bg-[#719f63]" />
        EV Update
      </div>

      <div class="space-y-3">
        <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-[#101920]">
          {{ title }}
        </h2>
        <p class="line-clamp-3 text-sm leading-7 text-[#41555d] sm:text-base">
          {{ description }}
        </p>
      </div>

      <div class="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#101920]">
        Read Story
        <ArrowRightIcon class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </NuxtLink>
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
  slug: {
    type: String,
    required: true,
  },
});
</script>
