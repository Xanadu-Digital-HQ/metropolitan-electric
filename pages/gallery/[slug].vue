<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';
import type { vehicle } from '~/types/types';
import { findVehicleBySlug } from '~/utils/vehicleCatalog';

const { container } = useTailwindConfig();

const route = useRoute();
const slug = computed(() => {
  const value = route.params.slug;
  return Array.isArray(value) ? (value[0] ?? '') : String(value ?? '');
});
const currentImageIndex = ref(0);

const activeVehicle = computed<vehicle | undefined>(() => findVehicleBySlug(slug.value));
const activeImage = computed(() => {
  return (
    activeVehicle.value?.images[currentImageIndex.value] ?? activeVehicle.value?.images[0] ?? ''
  );
});

watch(
  activeVehicle,
  () => {
    currentImageIndex.value = 0;
  },
  { immediate: true },
);

if (!slug.value || !activeVehicle.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Vehicle not found',
  });
}

useSeoMeta({
  title: () => `${activeVehicle.value?.name ?? 'Vehicle'} Details`,
  ogTitle: () => `${activeVehicle.value?.name ?? 'Vehicle'} Details`,
  description: () => activeVehicle.value?.description ?? 'Vehicle details',
  ogDescription: () => activeVehicle.value?.description ?? 'Vehicle details',
  ogImage: () => activeVehicle.value?.images[0] ?? 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const selectImage = (index: number) => {
  currentImageIndex.value = index;
};
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-[#102027]">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,151,116,0.12),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      v-if="activeVehicle"
      :class="[container, 'flex flex-col gap-8 pb-16 pt-34 lg:pb-24 lg:pt-40']"
    >
      <div class="page-reveal reveal-delay-1 flex flex-wrap items-center justify-between gap-4">
        <NuxtLink
          to="/gallery"
          class="inline-flex items-center gap-2 rounded-full border border-[#d7ded4] bg-white/92 px-4 py-2.5 text-sm font-medium text-[#22343b] shadow-[0_10px_30px_rgba(16,32,39,0.06)] backdrop-blur-sm"
        >
          <ArrowLeftIcon class="size-4" />
          Back to Gallery
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white shadow-[0_14px_40px_rgba(16,32,39,0.12)]"
        >
          Contact Sales
          <ArrowRightIcon class="size-4" />
        </NuxtLink>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="flex flex-col gap-8">
          <div
            class="page-reveal reveal-delay-2 rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 p-5 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm sm:p-8 h-fit"
          >
            <div class="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#6b8177]"
                >
                  Preview
                </p>
                <h1
                  class="mt-2 font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
                >
                  {{ activeVehicle.name }}
                </h1>
              </div>
              <div class="rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white">
                {{ activeVehicle.price }}
              </div>
            </div>
            <div
              class="mt-6 rounded-2xl bg-[radial-gradient(circle_at_top,#ffffff,#e7eee7_64%,#dde5de_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6"
            >
              <img
                :src="activeImage"
                :alt="activeVehicle.name"
                class="h-full w-full object-cover sm:h-105 lg:h-130 rounded-2xl"
              />
            </div>
            <div class="mt-5 flex flex-wrap gap-3">
              <button
                v-for="(image, index) in activeVehicle.images"
                :key="`${activeVehicle.name}-${index}`"
                type="button"
                class="overflow-hidden rounded-2xl border bg-white transition-all duration-300"
                :class="
                  currentImageIndex === index
                    ? 'border-brand shadow-[0_10px_30px_rgba(16,32,39,0.16)]'
                    : 'border-[#dbe3d8] opacity-75 hover:opacity-100'
                "
                @click="selectImage(index)"
              >
                <img
                  :src="image"
                  :alt="`${activeVehicle.name} view ${index + 1}`"
                  class="h-18 w-28 object-cover sm:h-24 sm:w-32"
                />
              </button>
            </div>
          </div>
          <section
            class="hidden md:block page-reveal reveal-delay-4 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_20px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-8"
          >
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Feature Set</p>
                <h2 class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.04em] text-brand">
                  Designed for real-world deployment.
                </h2>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-2.5">
              <span
                v-for="feature in activeVehicle.features"
                :key="feature"
                class="rounded-full border border-[#d8dfd5] bg-[#fbfdfb] px-4 py-2.5 text-sm text-[#22343b]"
              >
                {{ feature }}
              </span>
            </div>
          </section>
        </div>

        <div class="flex flex-col gap-8">
          <section
            class="page-reveal reveal-delay-3 rounded-4xl bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Overview</p>
            <p class="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              {{ activeVehicle.description }}
            </p>

            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="spec in activeVehicle.specification"
                :key="spec.label"
                class="rounded-[1.2rem] border border-white/10 bg-white/5 p-4"
              >
                <p class="text-[11px] uppercase tracking-[0.24em] text-white/40">
                  {{ spec.label }}
                </p>
                <p class="mt-2 text-sm font-medium text-white/90 sm:text-base">{{ spec.value }}</p>
              </div>
            </div>
          </section>

          <section
            class="block md:hidden page-reveal reveal-delay-4 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_20px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-8"
          >
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Feature Set</p>
                <h2 class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.04em] text-brand">
                  Designed for real-world deployment.
                </h2>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-2.5">
              <span
                v-for="feature in activeVehicle.features"
                :key="feature"
                class="rounded-full border border-[#d8dfd5] bg-[#fbfdfb] px-4 py-2.5 text-sm text-[#22343b]"
              >
                {{ feature }}
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
