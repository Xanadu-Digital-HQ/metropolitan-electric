<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { partnerOffers } from '~/utils/offers';

const { container } = useTailwindConfig();
const config = useRuntimeConfig();

const totalOfferVehicles = computed(() =>
  partnerOffers.reduce((total, offer) => total + offer.vehicles.length, 0),
);

useSeoMeta({
  title: 'Partner Offers',
  ogTitle: 'Partner Offers',
  description:
    'Explore Metropolitan Electric partner offers and selected EV discounts from our financing and mobility partners.',
  ogDescription:
    'Explore Metropolitan Electric partner offers and selected EV discounts from our financing and mobility partners.',
  ogImage: `${config.baseUrl}/og/gallery_ogImage.png`,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-[#102027]">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,151,116,0.12),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section :class="[container, 'flex flex-col gap-10 pb-16 pt-34 lg:pb-24 lg:pt-40']">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div class="page-reveal reveal-delay-1 max-w-4xl space-y-5">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Partner Offers
          </p>
          <h1
            class="max-w-6xl font-elemental text-3xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Current EV offers.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Browse active partner programmes from Metropolitan Electric. Select an offer to view
            eligible vehicles, pricing notes, and next steps.
          </p>
        </div>

        <div class="page-reveal reveal-delay-2 grid grid-cols-2 gap-4">
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Partners</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              {{ partnerOffers.length }}
            </p>
          </div>
          <div
            class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Eligible Vehicles</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              {{ totalOfferVehicles }}
            </p>
          </div>
        </div>
      </div>

      <section class="flex flex-col gap-5">
        <NuxtLink
          v-for="(offer, offerIndex) in partnerOffers"
          :key="offer.slug"
          :to="`/offers/${offer.slug}`"
          class="page-reveal page-reveal-soft group overflow-hidden rounded-4xl border border-[#d8dfd5] bg-white/92 shadow-[0_24px_80px_rgba(16,32,39,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a6b7a0] hover:shadow-[0_32px_90px_rgba(16,32,39,0.1)]"
          :style="{ '--reveal-delay': `${220 + offerIndex * 90}ms` }"
        >
          <div class="grid gap-0 lg:grid-cols-[360px_minmax(0,1fr)_auto] lg:items-stretch">
            <div class="relative min-h-64 overflow-hidden bg-brand text-white">
              <NuxtImg
                :src="offer.heroImage"
                :alt="offer.headline"
                class="absolute inset-0 h-full w-full object-cover object-[70%_30%]"
              />
              <div
                class="relative flex h-full flex-col justify-between bg-linear-to-t from-[#102027d9] to-[#1020278c] p-6 lg:p-8"
              >
                <div
                  class="flex h-24 w-40 items-center justify-center rounded-3xl border border-[#e0e7dd] bg-white/95 p-5 shadow-[0_16px_45px_rgba(16,32,39,0.08)]"
                >
                  <NuxtImg
                    :src="offer.partnerLogo"
                    :alt="`${offer.partnerName} logo`"
                    class="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Partner Programme
                  </p>
                  <p class="mt-2 text-lg font-medium text-white">{{ offer.partnerName }}</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between gap-8 p-6 sm:p-8">
              <div class="space-y-4">
                <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Active Offer</p>
                <h2 class="font-opensans text-3xl font-semibold tracking-[-0.04em] text-brand">
                  {{ offer.headline }}
                </h2>
                <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
                  {{ offer.summary }}
                </p>
              </div>

              <div class="grid gap-3 sm:grid-cols-3">
                <div
                  v-for="highlight in offer.highlights"
                  :key="highlight.label"
                  class="rounded-[1.2rem] bg-[#fbfdfb] p-4"
                >
                  <p class="text-[11px] uppercase tracking-[0.2em] text-[#72877d]">
                    {{ highlight.label }}
                  </p>
                  <p class="mt-2 text-sm font-medium text-brand">{{ highlight.value }}</p>
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-between gap-4 border-t border-[#e3eadf] p-6 lg:flex-col lg:items-end lg:justify-center lg:border-l lg:border-t-0"
            >
              <span class="text-sm font-medium text-brand">{{ offer.vehicles.length }} models</span>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white"
              >
                View Offer
                <ArrowRightIcon
                  class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </NuxtLink>
      </section>
    </section>

    <CTA />
  </div>
</template>
