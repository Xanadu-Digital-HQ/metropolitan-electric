<template>
  <article v-if="currentNews" class="min-h-screen text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.14),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_56%,#eff5ee_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-45 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      :class="[container, 'flex flex-col gap-12 pb-16 pt-34 lg:pb-24 lg:pt-40']"
    >
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-7">
          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full border border-[#cbd7c5] bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5d7368] shadow-[0_10px_30px_rgba(16,32,39,0.05)]"
            >
              Media Story
            </span>
            <span
              class="rounded-full border border-[#d9e3d6] bg-[#f4f8f3] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-[#6f8379]"
            >
              EV News Signal
            </span>
          </div>

          <div class="space-y-5">
            <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
              Media Center
            </p>
            <h1
              class="w-full font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-7xl"
            >
              {{ currentNews.title }}
            </h1>
            <p class="max-w-4xl text-sm leading-7 text-[#41555d] sm:text-base">
              {{ currentNews.description }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4 text-sm text-[#5a6f66]">
            <div
              class="rounded-full border border-[#d8e1d5] bg-white/88 px-4 py-2 shadow-[0_10px_24px_rgba(16,32,39,0.04)]"
            >
              Published {{ currentNews.date ?? 'Metropolitan Electric Update' }}
            </div>
            <div
              class="rounded-full border border-[#d8e1d5] bg-white/88 px-4 py-2 shadow-[0_10px_24px_rgba(16,32,39,0.04)]"
            >
              Sustainable Mobility Coverage
            </div>
          </div>
        </div>

        <div class="page-reveal reveal-delay-2 grid gap-4 sm:grid-cols-3">
          <div
            class="rounded-[1.8rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Category</p>
            <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              Electric Mobility
            </p>
          </div>
          <div
            class="rounded-[1.8rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Coverage</p>
            <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              Market Update
            </p>
          </div>
          <div
            class="rounded-[1.8rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Perspective</p>
            <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em]">EV-Centric</p>
          </div>
        </div>
      </div>

      <div
        class="page-reveal reveal-delay-2 relative overflow-hidden rounded-[2.5rem] border border-[#d8dfd5] bg-brand shadow-[0_30px_100px_rgba(16,32,39,0.14)]"
      >
        <img
          class="h-104 w-full object-cover opacity-80 sm:h-110 lg:h-140"
          :src="currentNews.image"
          :alt="currentNews.title"
        />
        <div
          class="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,39,0.04)_0%,rgba(16,32,39,0.18)_38%,rgba(16,32,39,0.82)_100%)] sm:bg-[linear-gradient(180deg,rgba(16,32,39,0.08)_0%,rgba(16,32,39,0.32)_42%,rgba(16,32,39,0.92)_100%)]"
        />
        <div class="absolute inset-x-0 bottom-0 flex flex-col p-5 sm:p-8 lg:p-10">
          <div class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div class="flex flex-col gap-3">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in storyTags"
                  :key="tag"
                  class="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-xxs font-medium text-white/88 backdrop-blur-sm sm:text-[11px]"
                >
                  #{{ tag }}
                </span>
              </div>
              <div class="max-w-3xl">
                <p class="text-xxs font-semibold uppercase tracking-[0.28em] text-white/52 sm:text-[11px] sm:tracking-[0.32em]">
                  News Focus
                </p>
                <p class="mt-2 max-w-2xl text-[0.92rem] leading-6 text-white/76 sm:mt-3 sm:max-w-3xl sm:text-base sm:leading-7">
                  Timely EV coverage shaped around deployment progress, fleet adoption, charging
                  infrastructure, and the operational signals moving electric mobility forward.
                </p>
              </div>
            </div>

            <div
              class="hidden rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:block"
            >
              <p class="text-[11px] uppercase tracking-[0.26em] text-white/46">Why It Matters</p>
              <p class="mt-3 text-sm leading-7 text-white/80">
                Strong EV transition stories are not just announcements. They clarify execution,
                infrastructure readiness, institutional adoption, and market confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]">
        <aside class="page-reveal reveal-delay-3 lg:sticky lg:top-28 lg:self-start">
          <div class="space-y-6">
            <section
              class="rounded-4xl border border-[#d8dfd5] bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)]"
            >
              <p class="text-[11px] uppercase tracking-[0.28em] text-white/46">Share Story</p>
              <div class="mt-5 flex flex-wrap items-center gap-4">
                <SocialShareButton
                  v-for="item in socialMedia"
                  :key="item"
                  :platform="item"
                  :url="shareUrl"
                  :title="currentNews.title"
                  :aria-label="item"
                  class="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7e4d1] text-brand transition-transform duration-300 hover:-translate-y-1 hover:bg-[#e3edde]"
                >
                  <component :is="socialIcons[item]" class="h-5 w-5" weight="fill" />
                </SocialShareButton>
              </div>
            </section>

            <section
              class="rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
            >
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                Story Snapshot
              </p>
              <div class="mt-5 space-y-4">
                <div class="rounded-3xl bg-[#f7faf6] p-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#73867d]">Published</p>
                  <p class="mt-2 text-sm leading-6 text-brand">
                    {{ currentNews.date ?? 'Metropolitan Electric Media Coverage' }}
                  </p>
                </div>
                <div class="rounded-3xl bg-[#f7faf6] p-4">
                  <p class="text-[11px] uppercase tracking-[0.22em] text-[#73867d]">Coverage Lens</p>
                  <p class="mt-2 text-sm leading-6 text-brand">
                    EV deployment, infrastructure maturity, and real operating progress.
                  </p>
                </div>
              </div>
            </section>

            <div class="rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm">
              <MediaRelatedNews />
            </div>
          </div>
        </aside>

        <div class="page-reveal reveal-delay-4 space-y-8">
          <section
            class="overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_22px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm"
          >
            <div class="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div class="p-6 sm:p-8">
                <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                  EV News Note
                </p>
                <h2
                  class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand"
                >
                  Media coverage is most useful when it explains the operational meaning behind the
                  headline.
                </h2>
              </div>

              <div
                class="border-t border-[#e5ece2] bg-[#f7faf6] p-6 sm:p-8 lg:border-l lg:border-t-0"
              >
                <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                  This story sits inside Metropolitan Electric&apos;s EV media layer, where product
                  rollout, transport systems, and infrastructure progress are framed with practical
                  context instead of generic press language.
                </p>
              </div>
            </div>
          </section>

          <section
            class="rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_24px_80px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-8 lg:p-10"
          >
            <ProseWrapper v-if="currentNews">
              <ContentRenderer :value="currentNews" />
            </ProseWrapper>
          </section>

          <section
            class="rounded-[2.2rem] border border-[#d8dfd5] bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8"
          >
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div class="max-w-2xl">
                <p class="text-[11px] uppercase tracking-[0.28em] text-white/48">Next Signal</p>
                <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.045em]">
                  Explore more EV stories shaping the regional mobility transition.
                </h2>
              </div>
              <BottomNavigation />
            </div>
          </section>
        </div>
      </div>

      <CTA />
    </section>
  </article>
</template>

<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import { ProseWrapper } from "#components";
import {
  PhFacebookLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhWhatsappLogo,
  PhXLogo,
} from "@phosphor-icons/vue";

type MediaCenterItem = Collections["mediaCenter"];
const props = defineProps<{ currentNews: MediaCenterItem; news: MediaCenterItem[] }>();
const route = useRoute();
const { container } = useTailwindConfig();

const socialMedia = ["Twitter", "Facebook", "Linkedin", "Whatsapp", "Instagram"] as const;

const socialIcons = {
  Twitter: PhXLogo,
  Facebook: PhFacebookLogo,
  Linkedin: PhLinkedinLogo,
  Whatsapp: PhWhatsappLogo,
  Instagram: PhInstagramLogo,
} as const;

const shareUrl = computed(() => `https://metropolitanelectricng.com${route.path}`);
const storyTags = computed(() =>
  props.currentNews.tags?.length
    ? props.currentNews.tags.slice(0, 4)
    : ["electric mobility", "media", "infrastructure"],
);

useSeoMeta({
  title: props.currentNews.title,
  ogTitle: props.currentNews.title,
  description: props.currentNews.description,
  ogDescription: props.currentNews.description,
  ogImage: props.currentNews.image,
  twitterCard: "summary_large_image",
});
</script>
