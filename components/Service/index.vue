<template>
  <div>
    <div class="p-5 sm:p-10">
      <div
        class="flex flex-col md:flex-row justify-start gap-10 py-24"
        :class="container"
      >
        <div
          v-motion-fade-visible-once
          :duration="1200"
          class="rounded-xl overflow-clip w-full h-fit md:w-80 md:h-[435px]"
        >
          <img
            class="object-cover w-full h-full"
            :src="`/card/${image}`"
            :alt="title"
          />
        </div>
        <div class="flex flex-col justify-center items-start">
          <div
            v-motion
            :initial="{ opacity: 1, y: 20 }"
            :enter="{ opacity: 1, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="400"
            :delay="500"
            class="flex items-center gap-1.5"
          >
            <span class="size-4 md:size-3 bg-[#1C6220]"></span>
            <p
              class="font-medium md:font-semibold text-2xl md:text-base text-[#1C6220]"
            >
              {{ title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <CTA />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});
const { container } = useTailwindConfig();
</script>
