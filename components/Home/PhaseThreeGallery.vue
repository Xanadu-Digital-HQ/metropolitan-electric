<template>
  <section class="js-phase-three-gallery relative overflow-hidden bg-white">
    <div class="js-phase-three-gallery-scroll overflow-hidden py-16">
      <div
        :class="[
          container,
          'js-phase-three-gallery-track mt-16 flex flex-col justify-start gap-20 pb-24 lg:mt-24 lg:gap-28 lg:pb-32',
        ]"
      >
        <article
          v-for="feature in features"
          :key="feature.title"
          class="js-phase-three-panel grid min-h-[70vh] items-center gap-8 lg:justify-between lg:gap-10"
          :class="
            feature.reverse
              ? 'lg:grid-cols-[minmax(18rem,32rem)_minmax(0,58%)] lg:[&>*:first-child]:order-2'
              : 'lg:grid-cols-[minmax(0,58%)_minmax(18rem,32rem)]'
          "
        >
          <div
            class="js-phase-three-image-wrapper relative overflow-hidden rounded-[1.75rem] bg-[#f3f5f7] shadow-[0_30px_90px_rgba(16,25,32,0.12)]"
          >
            <img
              :src="feature.image"
              :alt="feature.title"
              class="js-phase-three-image absolute inset-x-0 top-[-14%] h-[128%] w-full object-cover will-change-transform sm:top-[-16%] lg:top-[-18%]"
            />
            <div class="h-72 w-full sm:h-96 lg:h-108" />
          </div>

          <div
            class="js-phase-three-copy max-w-xl"
          >
            <div class="space-y-3">
              <h2 class="js-phase-three-title font-opensans text-3xl font-bold leading-tight text-brand/75 md:text-4xl">
                {{ feature.title }}
              </h2>
              <p
                v-if="feature.subTitle"
                class="js-phase-three-subtitle font-opensans text-lg font-medium leading-7 text-brand/55 md:text-xl"
              >
                {{ feature.subTitle }}
              </p>
            </div>

            <p class="js-phase-three-description mt-7 max-w-lg font-poppins text-base leading-8 text-brand/70">
              {{ feature.description }}
            </p>
          </div>
        </article>
        <div
          class="js-phase-three-cta -mt-8 flex justify-center pb-8 lg:-mt-12 lg:pb-12"
        >
          <NuxtLink :to="URLS.SOLUTIONS" class="inline-flex">
            <CustomButton text="Explore More Solutions" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { URLS } from '~/utils/constants';

const { container } = useTailwindConfig();

defineProps<{
  features: ReadonlyArray<{
    title: string;
    subTitle?: string;
    description: string;
    image: string;
    reverse: boolean;
  }>;
}>();
</script>
