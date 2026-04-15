<template>
  <div class="grid w-full gap-3 sm:grid-cols-2">
    <NuxtLink
      to="/media-center"
      class="group flex items-center justify-between rounded-3xl border border-white/14 bg-white/8 px-5 py-4 text-left text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
    >
      <div class="space-y-1">
        <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
          Previous Layer
        </p>
        <p class="font-opensans text-lg font-semibold tracking-[-0.03em]">
          Back to Media Center
        </p>
      </div>
      <ArrowLeftIcon class="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
    </NuxtLink>

    <NuxtLink
      to="/"
      class="group flex items-center justify-between rounded-3xl bg-[#d7e4d1] px-5 py-4 text-left text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3edde]"
    >
      <div class="space-y-1">
        <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6a8076]">
          Metro Electric
        </p>
        <p class="font-opensans text-lg font-semibold tracking-[-0.03em]">
          Return Home
        </p>
      </div>
      <ArrowUpRightIcon class="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/vue/20/solid";
</script>
