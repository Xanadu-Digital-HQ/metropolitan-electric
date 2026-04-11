<template>
  <div class="js-phase-three-gallery absolute inset-0 z-25 overflow-hidden bg-white">
    <div class="js-phase-three-gallery-scroll h-full overflow-y-auto px-4 py-16 sm:px-8 lg:px-12">
      <div class="mx-auto flex min-h-full max-w-368 flex-col justify-start gap-20 pb-24 lg:gap-28 lg:pb-32">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="js-phase-three-panel grid min-h-[70vh] items-center gap-8 lg:grid-cols-12 lg:gap-10"
          :class="feature.reverse ? 'lg:[&>*:first-child]:order-2' : ''"
        >
          <div
            class="js-phase-three-image-wrapper relative overflow-hidden rounded-[1.75rem] bg-[#f3f5f7] shadow-[0_30px_90px_rgba(16,25,32,0.12)] lg:col-span-7"
            :class="feature.reverse ? 'lg:col-start-6' : ''"
          >
            <img
              :src="feature.image"
              :alt="feature.title"
              class="js-phase-three-image absolute inset-x-0 top-[-14%] h-[128%] w-full object-cover will-change-transform sm:top-[-16%] lg:top-[-18%]"
            >
            <div class="h-72 w-full sm:h-96 lg:h-108" />
          </div>

          <div
            class="js-phase-three-copy max-w-xl lg:col-span-4"
            :class="feature.reverse ? 'lg:col-start-2' : 'lg:col-start-9'"
          >
            <h2 class="font-noto text-3xl leading-tight text-brand sm:text-4xl">
              {{ feature.title }}
            </h2>
            <p class="mt-5 font-mono text-base leading-8 text-brand/70 sm:text-lg">
              {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  features: ReadonlyArray<{
    title: string;
    description: string;
    image: string;
    reverse: boolean;
  }>;
}>();
</script>
