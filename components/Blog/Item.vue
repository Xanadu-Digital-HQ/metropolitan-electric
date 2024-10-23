<template>
  <NuxtLink :to="slug" class="group hover:shadow p-2 h-fit">
    <div class="flex flex-col gap-3.5 w-full max-w-full lg:max-w-[310px] pb-5">
      <div class="w-full h-36 overflow-clip">
        <img
          class="group-hover:scale-125 size-full object-cover transition-all duration-200"
          :src="image"
          :alt="title"
        />
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="flex flex-wrap gap-1.5">
          <p
            v-for="(tag, index) in tags"
            :key="`tag${index}`"
            class="text-[#101920] text-xs"
          >
            #{{ tag }}
          </p>
        </div>
        <h1
          class="group-hover:text-black/80 text-lg font-semibold max-w-full md:max-w-[90%] transition-all duration-200"
        >
          {{ title }}
        </h1>
        <p
          class="group-hover:text-black/50 text-sm sm:text-base text-black/60 line-clamp-2 transition-all duration-200 w-full"
        >
          {{ description }}
        </p>
      </div>
      <div class="flex justify-between">
        <span class="text-xs">{{ minutesRead }} mins</span>
        <span class="text-xs">{{ date }}</span>
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
