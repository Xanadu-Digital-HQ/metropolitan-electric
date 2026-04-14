<template>
  <NuxtLink
    :to="slug"
    class="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#d8dfd5] bg-white/80 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,32,39,0.09)]"
  >
    <div class="relative overflow-hidden">
      <img
        class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        :src="image"
        :alt="title"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101920]/30 via-transparent to-transparent" />
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in tags.slice(0, 3)"
          :key="`tag${index}`"
          class="rounded-full border border-[#dce4d9] bg-[#f6f8f5] px-3 py-1.5 text-[11px] font-medium text-[#31464d]"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="space-y-3">
        <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-[#101920]">
          {{ title }}
        </h2>
        <p class="line-clamp-3 text-sm leading-7 text-[#41555d] sm:text-base">
          {{ description }}
        </p>
      </div>

      <div class="mt-auto flex items-center justify-between gap-4 border-t border-[#e3eae0] pt-4 text-xs uppercase tracking-[0.18em] text-[#73867d]">
        <span>{{ minutesRead }} mins</span>
        <span>{{ date }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
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
  tags: {
    type: Array,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  minutesRead: {
    type: Number,
    required: true,
  },
});
</script>
