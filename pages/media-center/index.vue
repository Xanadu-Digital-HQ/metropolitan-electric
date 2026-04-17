<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import type { Collections } from '@nuxt/content';

type MediaCenterItem = Collections['mediaCenter'] & {
  path: string;
  slug?: string;
  type?: 'story' | 'image';
};

type RenderableMediaCenterItem = MediaCenterItem & {
  image: string;
  title: string;
  description: string;
  type: 'story' | 'image';
};

const { data: newsItems } = await useAsyncData<MediaCenterItem[]>('media-center-news', () =>
  queryCollection('mediaCenter').all(),
);

const visibleMediaCount = ref(4);

const sortedMediaItems = computed(() => [...(newsItems.value ?? [])].reverse());
const storyItems = computed(() =>
  sortedMediaItems.value.filter(
    (item): item is RenderableMediaCenterItem =>
      !!item.image &&
      !!item.title &&
      !!item.description &&
      (item.type ?? 'story') === 'story',
  ),
);
const featuredNews = computed(() => storyItems.value[0] ?? null);
const secondaryNews = computed(() => storyItems.value.slice(1, 5));
const hasSecondaryNews = computed(() => secondaryNews.value.length > 0);
const renderableMediaItems = computed(() =>
  sortedMediaItems.value.filter(
    (item): item is RenderableMediaCenterItem =>
      !!item.image && !!item.title && !!item.description && ['story', 'image'].includes(item.type ?? 'story'),
  ),
);
const visibleMedia = computed(() => renderableMediaItems.value.slice(0, visibleMediaCount.value));
const canLoadMoreMedia = computed(() => visibleMediaCount.value < renderableMediaItems.value.length);

const getMediaCenterLink = (item: MediaCenterItem) =>
  item.slug
    ? item.slug.startsWith('/media-center/')
      ? item.slug
      : `/media-center/${item.slug}`
    : item.path;

useSeoMeta({
  title: 'Media Center',
  ogTitle: 'Media Center',
  description:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogDescription:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const loadMore = () => {
  visibleMediaCount.value = Math.min(visibleMediaCount.value + 2, renderableMediaItems.value.length);
};
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.14),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-14 px-5 pb-16 pt-34 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div class="page-reveal reveal-delay-1 space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Media Center
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Stories shaping Africa's electric mobility transition.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Stay updated with EV rollouts, charging infrastructure progress, and key moments from
            Metropolitan Electric.
          </p>
        </div>

        <div
          class="page-reveal reveal-delay-2 overflow-hidden rounded-4xl border border-[#d8dfd5] bg-brand shadow-[0_28px_90px_rgba(16,32,39,0.14)]"
        >
          <div class="relative h-75 sm:h-90">
            <video
              src="/metro_motion.webm"
              autoplay
              muted
              loop
              playsinline
              class="absolute inset-0 h-full w-full object-cover opacity-65"
            />
            <div class="absolute inset-0 bg-linear-to-t from-brand via-brand/35 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Signal
              </p>
              <h2
                class="max-w-md font-opensans text-3xl font-semibold tracking-[-0.045em] text-white"
              >
                Powering the next electric mobility chapter.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section
        class="grid gap-6"
        :class="hasSecondaryNews ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''"
      >
        <MediaNews
          v-if="featuredNews"
          :title="featuredNews.title!"
          :description="featuredNews.description"
          :slug="getMediaCenterLink(featuredNews)"
          :image="featuredNews.image!"
          class="page-reveal reveal-delay-3"
        />

        <div v-if="hasSecondaryNews" class="grid content-start gap-4 self-start">
          <NuxtLink
            v-for="(newsItem, index) in secondaryNews"
            :key="getMediaCenterLink(newsItem)"
            :to="getMediaCenterLink(newsItem)"
            class="page-reveal page-reveal-soft group flex gap-4 overflow-hidden rounded-3xl border border-[#d8dfd5] bg-white/92 p-4 shadow-[0_14px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(16,32,39,0.08)]"
            :style="{ '--reveal-delay': `${260 + index * 70}ms` }"
          >
            <img
              :src="newsItem.image"
              :alt="newsItem.title!"
              class="h-28 w-28 rounded-[1.2rem] object-cover transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
            />
            <div class="flex flex-1 flex-col gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6b8177]">
                Latest News
              </p>
              <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                {{ newsItem.title }}
              </h3>
              <p class="line-clamp-2 text-sm leading-7 text-[#41555d]">
                {{ newsItem.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section class="space-y-6">
        <div
          class="page-reveal reveal-delay-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Visual Archive
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
              EV moments and campaign visuals.
            </h2>
          </div>
          <p class="max-w-lg text-sm leading-7 text-[#41555d]">
            A cleaner gallery treatment for launch material, milestone snapshots, and branded
            mobility narratives.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <MediaItem
            v-for="(mediaItem, index) in visibleMedia"
            :key="`${mediaItem.title}-${index}`"
            :title="mediaItem.title"
            :description="mediaItem.description"
            :image="mediaItem.image"
            :type="mediaItem.type"
            :slug="mediaItem.type === 'story' ? getMediaCenterLink(mediaItem) : undefined"
            class="page-reveal page-reveal-soft"
            :style="{ '--reveal-delay': `${320 + index * 65}ms` }"
          />
        </div>

        <button
          v-if="canLoadMoreMedia"
          @click="loadMore"
          class="page-reveal reveal-delay-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Load More Visuals
          <ArrowRightIcon class="size-4" />
        </button>
      </section>
    </section>
  </div>
</template>
