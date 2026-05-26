<script lang="ts" setup>
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/20/solid';
import { findPartnerOfferBySlug } from '~/utils/offers';

const { container } = useTailwindConfig();
const route = useRoute();
const config = useRuntimeConfig();
const vehiclesCarousel = ref<HTMLElement | null>(null);
const eligibleVehiclesSection = ref<HTMLElement | null>(null);
const hasAnimatedVehicleCards = ref(false);

const slug = Array.isArray(route.params.slug)
  ? (route.params.slug[0] ?? '')
  : String(route.params.slug ?? '');
const activeOffer = findPartnerOfferBySlug(slug);

if (!activeOffer) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Offer not found',
  });
}

const heroImage = activeOffer.heroImage;

useSeoMeta({
  title: `${activeOffer.headline} | Partner Offers`,
  ogTitle: `${activeOffer.headline} | Partner Offers`,
  description: activeOffer.description,
  ogDescription: activeOffer.description,
  ogImage: `${config.baseUrl}${heroImage}`,
  twitterCard: 'summary_large_image',
});

const scrollVehicles = (direction: -1 | 1) => {
  const carousel = vehiclesCarousel.value;

  if (!carousel) {
    return;
  }

  carousel.scrollBy({
    left: direction * Math.min(carousel.clientWidth * 0.88, 560),
    behavior: 'smooth',
  });
};

let vehicleCardsObserver: IntersectionObserver | undefined;

onMounted(() => {
  if (!eligibleVehiclesSection.value) {
    return;
  }

  vehicleCardsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        hasAnimatedVehicleCards.value = true;
        vehicleCardsObserver?.disconnect();
      }
    },
    { threshold: 0.28 },
  );

  vehicleCardsObserver.observe(eligibleVehiclesSection.value);
});

onBeforeUnmount(() => {
  vehicleCardsObserver?.disconnect();
});
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-[#102027]">
    <section id="overview" class="relative min-h-[86vh] overflow-hidden bg-brand text-white">
      <NuxtImg
        :src="heroImage"
        :alt="activeOffer.headline"
        class="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div class="absolute inset-0 bg-linear-to-t from-brand via-brand/64 to-brand/10" />

      <div :class="[container, 'relative flex min-h-[86vh] flex-col justify-end gap-8 pb-12 pt-34 lg:pb-16 lg:pt-40']">
        <NuxtLink
          to="/offers"
          class="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
        >
          <ArrowLeftIcon class="size-4" />
          Back to Offers
        </NuxtLink>

        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div class="max-w-5xl space-y-6">
            <div
              class="flex h-24 w-40 items-center justify-center rounded-3xl border border-white/14 bg-white/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
            >
              <NuxtImg
                :src="activeOffer.partnerLogo"
                :alt="`${activeOffer.partnerName} logo`"
                class="max-h-full max-w-full object-contain"
              />
            </div>
            <p class="text-xs font-bold uppercase tracking-[0.34em] text-white/58">
              {{ activeOffer.partnerName }} Partnership
            </p>
            <h1
              class="font-elemental text-4xl font-medium tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              {{ activeOffer.headline }}
            </h1>
            <p class="max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              {{ activeOffer.description }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                href="#eligible-vehicles"
                class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-brand"
              >
                View Eligible Vehicles
                <ArrowRightIcon class="size-4" />
              </a>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm"
              >
                Contact Sales
                <ArrowRightIcon class="size-4" />
              </NuxtLink>
            </div>
          </div>

          <div class="grid gap-3 rounded-4xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <div
              v-for="highlight in activeOffer.highlights"
              :key="highlight.label"
              class="rounded-[1.25rem] bg-white/10 p-4"
            >
              <p class="text-[11px] uppercase tracking-[0.24em] text-white/48">
                {{ highlight.label }}
              </p>
              <p class="mt-2 text-lg font-medium text-white">{{ highlight.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="sticky top-0 z-20 border-b border-[#dfe7dc] bg-[#fbfdfb]/92 backdrop-blur-md">
      <nav
        :class="[container, 'flex gap-5 overflow-x-auto py-4 text-sm font-medium text-[#52666d] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden']"
      >
        <a class="shrink-0 hover:text-brand" href="#overview">Overview</a>
        <a class="shrink-0 hover:text-brand" href="#offer-details">Offer Details</a>
        <a class="shrink-0 hover:text-brand" href="#eligible-vehicles">Eligible Vehicles</a>
        <a class="shrink-0 hover:text-brand" href="#next-steps">Next Steps</a>
      </nav>
    </div>

    <main :class="[container, 'flex flex-col gap-12 py-14 lg:py-20']">
      <section id="offer-details" class="grid gap-5 lg:grid-cols-3">
        <div
          class="page-reveal reveal-delay-1 rounded-4xl bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] lg:col-span-2 sm:p-8"
        >
          <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Programme Overview</p>
          <h2 class="mt-4 font-opensans text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Partner-backed support for selected EV purchases.
          </h2>
          <p class="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
            {{ activeOffer.summary }}
          </p>
        </div>

        <div
          class="page-reveal reveal-delay-2 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_18px_60px_rgba(16,32,39,0.06)] sm:p-8"
        >
          <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Partner</p>
          <div class="mt-5 flex h-24 w-40 items-center justify-center rounded-3xl border border-[#e0e7dd] bg-white p-5">
            <NuxtImg
              :src="activeOffer.partnerLogo"
              :alt="`${activeOffer.partnerName} logo`"
              class="max-h-full max-w-full object-contain"
            />
          </div>
          <p class="mt-5 text-sm leading-7 text-[#41555d]">{{ activeOffer.terms }}</p>
        </div>
      </section>

      <section class="grid items-start gap-3 md:grid-cols-3">
        <div
          class="page-reveal page-reveal-soft rounded-2xl border border-[#d8dfd5] bg-white/92 p-4 shadow-[0_12px_34px_rgba(16,32,39,0.04)]"
        >
          <p class="text-xxs uppercase tracking-[0.24em] text-[#6b8177]">Eligibility</p>
          <h3 class="mt-2 font-opensans text-xl font-semibold tracking-[-0.04em] text-brand">
            Selected models
          </h3>
          <p class="mt-2 text-xs leading-6 text-[#52666d]">
            The offer applies only to vehicles listed in the eligible vehicle section.
          </p>
        </div>
        <div
          class="page-reveal page-reveal-soft rounded-2xl border border-[#d8dfd5] bg-white/92 p-4 shadow-[0_12px_34px_rgba(16,32,39,0.04)]"
          style="--reveal-delay: 280ms"
        >
          <p class="text-xxs uppercase tracking-[0.24em] text-[#6b8177]">Financing Overview</p>
          <h3 class="mt-2 font-opensans text-xl font-semibold tracking-[-0.04em] text-brand">
            Structured for staff
          </h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <p
              v-for="item in activeOffer.financingOverview"
              :key="item"
              class="rounded-full bg-[#f4f7f2] px-3 py-2 text-xs leading-5 text-[#52666d]"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div
          class="page-reveal page-reveal-soft rounded-2xl border border-[#d8dfd5] bg-white/92 p-4 shadow-[0_12px_34px_rgba(16,32,39,0.04)]"
          style="--reveal-delay: 350ms"
        >
          <p class="text-xxs uppercase tracking-[0.24em] text-[#6b8177]">What This Means</p>
          <h3 class="mt-2 font-opensans text-xl font-semibold tracking-[-0.04em] text-brand">
            Practical EV access
          </h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <p
              v-for="benefit in activeOffer.benefits"
              :key="benefit"
              class="rounded-full bg-[#f4f7f2] px-3 py-2 text-xs leading-5 text-[#52666d]"
            >
              {{ benefit }}
            </p>
          </div>
        </div>
      </section>

      <section
        id="eligible-vehicles"
        ref="eligibleVehiclesSection"
        class="overflow-hidden rounded-4xl bg-brand text-white shadow-[0_28px_90px_rgba(16,32,39,0.16)]"
      >
        <div class="grid gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_112px]">
          <div class="min-w-0 space-y-6">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Eligible Vehicles
                </p>
                <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  The offer lineup.
                </h2>
                <p class="mt-3 max-w-2xl text-sm leading-7 text-white/64">
                  Use the controls to move through selected vehicles and compare core specifications
                  before opening the full vehicle profile.
                </p>
              </div>

              <div class="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 p-2 lg:hidden">
                <button
                  type="button"
                  class="flex size-12 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 active:scale-95"
                  aria-label="Scroll eligible vehicles left"
                  @click="scrollVehicles(-1)"
                >
                  <ChevronLeftIcon class="size-5" />
                </button>
                <span class="px-2 text-[11px] uppercase tracking-[0.24em] text-white/48">
                  Slide
                </span>
                <button
                  type="button"
                  class="flex size-12 items-center justify-center rounded-full bg-[#9fc58b] text-brand transition-transform duration-300 active:scale-95"
                  aria-label="Scroll eligible vehicles right"
                  @click="scrollVehicles(1)"
                >
                  <ChevronRightIcon class="size-5" />
                </button>
              </div>
            </div>

            <div
              ref="vehiclesCarousel"
              class="offer-scroll flex snap-x gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <article
                v-for="(vehicle, index) in activeOffer.vehicles"
                :key="vehicle.name"
                class="offer-vehicle-card group grid min-w-[90%] snap-start overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#17242b]/92 text-white shadow-[0_22px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:min-w-160 lg:min-w-230 lg:grid-cols-[1.25fr_0.95fr]"
                :class="{ 'offer-vehicle-card-visible': hasAnimatedVehicleCards }"
                :style="{ '--card-delay': `${index * 110}ms` }"
              >
                <div class="relative min-h-97.5 bg-[#0f1b22] p-4 lg:min-h-117.5">
                  <p
                    class="absolute left-5 top-5 z-10 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </p>
                  <NuxtImg
                    :src="vehicle.image"
                    :alt="vehicle.name"
                    class="h-full min-h-89.5 w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:min-h-109.5"
                  />
                </div>

                <div class="flex flex-col gap-6 p-5 sm:p-6">
                  <div>
                    <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">
                      {{ vehicle.category }} offer model
                    </p>
                    <h3 class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.04em] text-white">
                      {{ vehicle.name }}
                    </h3>
                    <p class="mt-3 text-sm leading-7 text-white/62">{{ vehicle.offerNote }}</p>
                    <div
                      class="mt-4 inline-flex flex-col rounded-2xl border border-white/10 bg-white/8 px-4 py-3"
                    >
                      <span class="text-xxs uppercase tracking-[0.22em] text-white/40">
                        Starting from
                      </span>
                      <span class="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#9fc58b]">
                        {{ vehicle.startingPrice }}
                      </span>
                    </div>
                  </div>

                  <div class="spec-scroll flex max-h-97.5 flex-col gap-3 overflow-y-auto pr-2">
                    <div
                      v-for="specification in vehicle.keySpecifications"
                      :key="`${vehicle.name}-${specification.label}`"
                      class="rounded-[1.15rem] border border-white/10 bg-white/8 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                    >
                      <p class="text-xxs uppercase tracking-[0.2em] leading-5 text-white/40">
                        {{ specification.label }}
                      </p>
                      <p class="mt-2 text-sm font-medium leading-6 text-white">
                        {{ specification.value }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-auto flex flex-wrap gap-4">
                    <a
                      v-if="vehicle.document"
                      :href="vehicle.document"
                      download
                      class="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white px-5 py-3 text-sm font-medium text-brand"
                    >
                      Spec Sheet
                      <ArrowDownTrayIcon class="size-4" />
                    </a>
                    <NuxtLink
                      :to="`/gallery/${vehicle.slug}`"
                      class="inline-flex w-fit items-center gap-2 rounded-full bg-[#9fc58b] px-5 py-3 text-sm font-medium text-brand"
                    >
                      View details
                      <ArrowRightIcon class="size-4" />
                    </NuxtLink>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="hidden lg:flex">
            <div
              class="flex min-h-full w-full flex-col items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/6 p-3"
            >
              <button
                type="button"
                class="flex size-17 items-center justify-center rounded-full bg-white text-brand shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1"
                aria-label="Scroll eligible vehicles left"
                @click="scrollVehicles(-1)"
              >
                <ChevronLeftIcon class="size-7" />
              </button>
              <div class="flex flex-col items-center gap-3">
                <span class="h-18 w-px bg-white/18" />
                <span class="[writing-mode:vertical-rl] text-[11px] uppercase tracking-[0.3em] text-white/48">
                  Vehicle Lineup
                </span>
                <span class="h-18 w-px bg-white/18" />
              </div>
              <button
                type="button"
                class="flex size-17 items-center justify-center rounded-full bg-[#9fc58b] text-brand shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:translate-y-1"
                aria-label="Scroll eligible vehicles right"
                @click="scrollVehicles(1)"
              >
                <ChevronRightIcon class="size-7" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="next-steps"
        class="rounded-4xl bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8 lg:p-10"
      >
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Next Steps</p>
            <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              Confirm eligibility and vehicle availability.
            </h2>
            <p class="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
              Send our team a request and we will confirm partner terms, applicable vehicle options,
              and the current purchase path. For Access enquiries, contact
              {{ activeOffer.contactEmail }}.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-brand"
          >
            Contact Sales
            <ArrowRightIcon class="size-4" />
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.offer-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.offer-vehicle-card {
  opacity: 0;
  clip-path: inset(0 18% 0 0 round 1.75rem);
}

.offer-vehicle-card-visible {
  animation: offer-card-enter 680ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--card-delay);
}

.spec-scroll {
  scrollbar-color: rgba(255, 255, 255, 0.26) transparent;
  scrollbar-width: thin;
}

.spec-scroll::-webkit-scrollbar {
  width: 6px;
}

.spec-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.26);
  border-radius: 999px;
}

@keyframes offer-card-enter {
  0% {
    opacity: 0;
    clip-path: inset(0 18% 0 0 round 1.75rem);
  }

  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0 round 1.75rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .offer-vehicle-card {
    opacity: 1;
    clip-path: inset(0 0 0 0 round 1.75rem);
  }

  .offer-vehicle-card-visible {
    animation: none;
  }
}
</style>
