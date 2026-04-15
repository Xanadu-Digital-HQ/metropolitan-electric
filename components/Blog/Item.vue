<template>
  <NuxtLink
    :to="slug"
    class="group flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-[#d8dfd5] bg-white/84 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,32,39,0.09)]"
  >
    <div class="relative overflow-hidden">
      <img
        class="h-46 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48"
        :src="image"
        :alt="title"
      />
      <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-brand/30 via-transparent to-transparent" />
    </div>

    <div class="flex flex-1 flex-col gap-3.5 p-4.5 sm:p-5">
      <div class="card-tag-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span
          v-for="(tag, index) in tags.slice(0, 3)"
          :key="`tag${index}`"
          class="shrink-0 rounded-full border border-[#dce4d9] bg-[#f6f8f5] px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#50645c]"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="space-y-2.5">
        <h2 class="line-clamp-2 min-h-[3.1rem] font-opensans text-[1.35rem] font-semibold leading-[1.12] tracking-[-0.035em] text-brand sm:min-h-[3.35rem] sm:text-[1.45rem]">
          {{ title }}
        </h2>
        <p class="line-clamp-3 min-h-[4.5rem] text-[0.92rem] leading-6 text-[#41555d]">
          {{ description }}
        </p>
      </div>

      <div class="mt-auto flex items-center justify-between gap-4 border-t border-[#e3eae0] pt-3.5 text-[10px] uppercase tracking-[0.18em] text-[#73867d] sm:text-[11px]">
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

<style scoped>
.card-tag-scroll {
  min-height: 2.25rem;
}
</style>
