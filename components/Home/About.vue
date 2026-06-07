<template>
  <section
    class="js-home-about relative isolate overflow-hidden bg-[#f5f6f7] py-20 sm:py-24 lg:py-28"
  >
    <!-- ambient background -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(rgba(16,32,39,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.035)_1px,transparent_1px)] bg-size-[34px_34px]"
    />
    <div
      class="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#719f63]/12 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand/8 blur-3xl"
    />

    <div :class="[container, 'relative z-10']">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <p class="font-opensans text-xs font-bold uppercase tracking-[0.34em] text-[#5d7368]">
            Who We Are
          </p>
          <h2
            class="js-home-about-heading mt-5 max-w-2xl font-elemental text-3xl font-medium leading-tight tracking-[-0.02em] text-brand sm:text-4xl lg:text-5xl"
          >
            Driving Africa's shift to clean, connected mobility.
          </h2>
          <p
            class="js-home-about-copy mt-6 max-w-xl font-poppins text-sm leading-7 text-brand/65 sm:text-base"
          >
            Metropolitan Electric is building the backbone of electric mobility across the
            continent — pairing innovative EVs with charging infrastructure, financing, and expert
            aftercare, so the switch to electric is practical for individuals, businesses, and
            cities alike.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NuxtLink
              :to="URLS.ABOUT"
              class="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3 font-opensans text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5"
            >
              Learn more about us
              <ArrowUpRight
                class="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </NuxtLink>
            <NuxtLink
              :to="URLS.SOLUTIONS"
              class="inline-flex min-h-12 items-center justify-center rounded-full border border-brand/15 bg-white/70 px-6 py-3 font-opensans text-sm font-semibold text-brand transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Explore solutions
            </NuxtLink>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="pillar in pillars"
            :key="pillar.title"
            class="js-home-about-card group rounded-[1.6rem] border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              class="flex size-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#7ca78d,#26414d_72%)] text-white shadow-[0_14px_30px_rgba(16,32,39,0.12)]"
            >
              <component :is="pillar.icon" class="size-5" weight="fill" />
            </div>
            <h3 class="mt-4 font-opensans text-lg font-semibold tracking-[-0.03em] text-brand">
              {{ pillar.title }}
            </h3>
            <p class="mt-2 font-poppins text-sm leading-6 text-brand/60">
              {{ pillar.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  PhBatteryCharging,
  PhGlobeHemisphereWest,
  PhLeaf,
  PhShieldCheck,
} from '@phosphor-icons/vue';
import { ArrowUpRight } from 'lucide-vue-next';

const { container } = useTailwindConfig();

const pillars = [
  {
    title: 'Sustainable by design',
    description: 'Zero-emission vehicles built for African roads, climate, and everyday journeys.',
    icon: PhLeaf,
  },
  {
    title: 'One connected ecosystem',
    description: 'Vehicles, charging, financing, and aftercare brought together under one roof.',
    icon: PhBatteryCharging,
  },
  {
    title: 'Reliability you can trust',
    description: 'Engineered and supported for dependable daily commercial and private use.',
    icon: PhShieldCheck,
  },
  {
    title: 'Continental impact',
    description: 'Cleaner cities, lower emissions, and green jobs created across the continent.',
    icon: PhGlobeHemisphereWest,
  },
] as const;
</script>
