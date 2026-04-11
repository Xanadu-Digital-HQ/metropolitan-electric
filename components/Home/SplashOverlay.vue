<template>
  <Transition
    enter-active-class="transition-opacity duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-700 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-200 flex items-center justify-center bg-brand"
    >
      <video
        v-if="showVideo"
        class="h-auto w-[min(42rem,88vw)] object-contain"
        autoplay
        muted
        playsinline
        preload="auto"
        @ended="$emit('video-ended')"
        @error="$emit('video-ended')"
      >
        <source src="/metro_motion.webm" type="video/webm" />
      </video>

      <div
        v-else
        class="flex flex-col items-center gap-6 text-white/75"
      >
        <img
          src="/wheel.svg"
          alt="Loading"
          class="size-20 animate-pulse object-contain"
        >
        <p class="text-sm font-medium tracking-[0.3em] uppercase">
          Loading
        </p>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
defineProps<{
  show: boolean;
  showVideo: boolean;
}>();

defineEmits<{
  'video-ended': [];
}>();
</script>
