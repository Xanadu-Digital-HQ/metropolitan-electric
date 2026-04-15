<template>
  <div class="flex w-full flex-col gap-6">
    <section
      class="page-reveal page-reveal-soft overflow-hidden rounded-[2rem] border border-[#d8dfd5] bg-white/94 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
    >
      <div class="border-b border-[#e4ebe1] px-5 py-5 sm:px-6">
        <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
          Related News
        </p>
        <h2 class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
          More signals from the EV transition.
        </h2>
      </div>

      <div v-if="latestNews" class="p-5 sm:p-6">
        <NuxtLink
          :to="getMediaCenterLink(latestNews)"
          class="group block overflow-hidden rounded-[1.6rem] border border-[#d9e2d7] bg-[#f7faf6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(16,32,39,0.08)]"
        >
          <div class="relative overflow-hidden">
            <img
              class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              :src="latestNews.image"
              :alt="latestNews.title"
            />
            <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-brand/45 via-transparent to-transparent" />
            <div
              class="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm"
            >
              Media Story
            </div>
          </div>

          <div class="space-y-4 p-5">
            <div class="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6f8379]">
              <span>{{ latestNews.date ?? 'EV Update' }}</span>
              <span class="h-1 w-1 rounded-full bg-[#719f63]" />
              <span>Electric Mobility</span>
            </div>
            <div class="space-y-2.5">
              <h3 class="font-opensans text-[1.35rem] font-semibold leading-[1.1] tracking-[-0.035em] text-brand">
                {{ latestNews.title }}
              </h3>
              <p class="line-clamp-3 text-sm leading-7 text-[#41555d]">
                {{ latestNews.description }}
              </p>
            </div>
            <div class="inline-flex items-center gap-2 text-sm font-medium text-brand">
              View Story
              <ArrowRightIcon class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </NuxtLink>

        <div v-if="remainingNews.length" class="mt-5 space-y-3">
          <NuxtLink
            v-for="newItem in remainingNews"
            :key="getMediaCenterLink(newItem)"
            :to="getMediaCenterLink(newItem)"
            class="group flex items-start gap-4 rounded-[1.35rem] border border-[#e1e8de] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d1dbcd] hover:bg-[#fbfdfb] hover:shadow-[0_14px_34px_rgba(16,32,39,0.05)]"
          >
            <div class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf4ea] text-brand">
              <PhLightning class="h-4 w-4" weight="fill" />
            </div>
            <div class="min-w-0 space-y-2">
              <p class="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#73867d]">
                {{ newItem.date ?? 'EV Update' }}
              </p>
              <h4 class="line-clamp-2 font-opensans text-lg font-semibold leading-[1.15] tracking-[-0.03em] text-brand">
                {{ newItem.title }}
              </h4>
              <p class="line-clamp-2 text-sm leading-6 text-[#4c6068]">
                {{ newItem.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-else class="p-5 sm:p-6">
        <div class="rounded-[1.6rem] border border-[#d9e2d7] bg-[#f7faf6] p-5">
          <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#73867d]">
            Story Queue
          </p>
          <p class="mt-3 font-opensans text-xl font-semibold tracking-[-0.03em] text-brand">
            No additional media stories yet.
          </p>
          <p class="mt-3 text-sm leading-7 text-[#41555d]">
            New EV coverage will appear here as more media stories are published.
          </p>
        </div>
      </div>
    </section>

    <section
      class="page-reveal page-reveal-soft reveal-delay-1 rounded-[2rem] border border-[#d8dfd5] bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-6"
    >
      <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/52">
        Follow Us
      </p>
      <h2 class="mt-3 max-w-xs font-opensans text-2xl font-semibold tracking-[-0.04em] text-white">
        Stay close to the next EV signal.
      </h2>
      <p class="mt-3 text-sm leading-7 text-white/72">
        Follow Metropolitan Electric across our social channels for product launches, fleet
        milestones, and charging infrastructure updates.
      </p>

      <div class="mt-6 flex flex-wrap items-center gap-4">
        <a
          v-for="item in socialMedia"
          :key="item.label"
          :href="item.url"
          :aria-label="item.label"
          target="_blank"
          rel="noreferrer"
          class="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7e4d1] text-brand transition-transform duration-300 hover:-translate-y-1 hover:bg-[#e3edde]"
        >
          <component :is="item.icon" class="h-5 w-5" weight="fill" />
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import { ArrowRightIcon } from "@heroicons/vue/20/solid";
import {
  PhFacebookLogo,
  PhInstagramLogo,
  PhLightning,
  PhLinkedinLogo,
  PhXLogo,
} from "@phosphor-icons/vue";

type MediaCenterItem = Collections["mediaCenter"] & {
  path: string;
  slug?: string;
  type?: "story" | "image";
};

type RelatedStoryItem = MediaCenterItem & {
  title: string;
  description: string;
  image: string;
  type: "story";
};

const route = useRoute();

const { data: relatedNews } = await useAsyncData<MediaCenterItem[]>("related-media-center-posts", () =>
  queryCollection("mediaCenter").all()
);

const getMediaCenterLink = (item: MediaCenterItem) =>
  item.slug ? `/media-center/${item.slug}` : item.path;

const orderedNews = computed(() => [...(relatedNews.value ?? [])].reverse());
const storyItems = computed(() =>
  orderedNews.value.filter(
    (item): item is RelatedStoryItem =>
      (item.type ?? "story") === "story" &&
      !!item.image &&
      !!item.title &&
      !!item.description
  )
);
const filteredNews = computed(() =>
  storyItems.value.filter((item) => getMediaCenterLink(item) !== route.path)
);
const latestNews = computed(() => filteredNews.value[0] ?? null);
const remainingNews = computed(() => filteredNews.value.slice(1, 5));

const socialMedia = [
  { label: "X", url: "https://x.com/MetroElectricEV", icon: PhXLogo },
  { label: "LinkedIn", url: "https://linkedin.com", icon: PhLinkedinLogo },
  { label: "Instagram", url: "https://www.instagram.com/metroelectricev", icon: PhInstagramLogo },
  { label: "Facebook", url: "https://www.facebook.com/people/Metropolitan-Electric/61562743835022/", icon: PhFacebookLogo },
] as const;
</script>
