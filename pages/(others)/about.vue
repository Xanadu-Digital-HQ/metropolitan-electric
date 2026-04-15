<script lang="ts" setup>
import {
  PhBatteryCharging,
  PhBuildings,
  PhGlobeHemisphereWest,
  PhLeaf,
  PhLightning,
  PhShieldCheck,
  PhStrategy,
  PhUsersThree,
  PhWrench,
} from '@phosphor-icons/vue';

useSeoMeta({
  title: 'About Metropolitan Electric',
  ogTitle: 'About Metropolitan Electric',
  description:
    'Learn how Metropolitan Electric is building a cleaner EV ecosystem across Africa through fleets, charging infrastructure, assembly, and long-term mobility support.',
  ogDescription:
    'Learn how Metropolitan Electric is building a cleaner EV ecosystem across Africa through fleets, charging infrastructure, assembly, and long-term mobility support.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const pillars = [
  {
    title: 'System-Level Thinking',
    description:
      'We do not treat electric mobility as a single vehicle sale. We design around fleets, charging access, service support, and operational continuity.',
    icon: PhStrategy,
  },
  {
    title: 'African Operating Context',
    description:
      'Our approach is shaped by real transport conditions, infrastructure realities, and the economic logic required for adoption across African markets.',
    icon: PhGlobeHemisphereWest,
  },
  {
    title: 'Long-Term Reliability',
    description:
      'From rollout to maintenance, the goal is durable performance, cleaner operations, and a more dependable mobility stack over time.',
    icon: PhShieldCheck,
  },
] as const;

const valueCards = [
  {
    title: 'Electrification With Purpose',
    copy: 'Every EV deployment should create cleaner movement, lower friction, and better operational outcomes for the people using it.',
    icon: PhLeaf,
  },
  {
    title: 'Infrastructure Matters',
    copy: 'Vehicle adoption only scales when charging, maintenance, and support systems are considered from the start.',
    icon: PhBatteryCharging,
  },
  {
    title: 'Built For Operators',
    copy: 'We design around institutions, fleet owners, transport systems, and real-world operators instead of abstract innovation claims.',
    icon: PhUsersThree,
  },
  {
    title: 'Modern Mobility Discipline',
    copy: 'The EV future is not just cleaner. It should also be more structured, more resilient, and easier to run at scale.',
    icon: PhLightning,
  },
] as const;

const operatingModel = [
  {
    label: 'Fleet Deployment',
    detail:
      'Corporate and institutional EV rollout designed around usage patterns and operational fit.',
    icon: PhBuildings,
  },
  {
    label: 'Charging Access',
    detail: 'Infrastructure planning that supports adoption instead of becoming a bottleneck.',
    icon: PhBatteryCharging,
  },
  {
    label: 'Assembly Growth',
    detail:
      'Local capability building to reduce cost, improve delivery speed, and expand market readiness.',
    icon: PhWrench,
  },
] as const;
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-14 px-5 pb-16 pt-34 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div class="page-reveal reveal-delay-1 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(21rem,0.85fr)] lg:items-start">
        <div class="space-y-8 z-20 bg-white/90">
          <div class="space-y-6">
            <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
              About Metropolitan Electric
            </p>
            <h1
              class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
            >
              Building Africa's electric mobility future.
            </h1>
            <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
              Metropolitan Electric is shaping a practical EV ecosystem—combining vehicles,
              infrastructure, fleet solutions, and service support to make electric mobility work
              at scale.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl">
            <div
              class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
            >
              <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Mission</p>
              <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV Access</p>
            </div>
            <div
              class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
            >
              <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Approach</p>
              <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Systems</p>
            </div>
            <div
              class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
            >
              <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Direction</p>
              <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV-Centric</p>
            </div>
          </div>
        </div>

        <div class="absolute right-0 flex items-start justify-center lg:justify-end z-0">
          <img
            src="/car_image.png"
            alt="Electric vehicle"
            class="w-full max-w-120 object-contain sm:max-w-136"
          />
        </div>
      </div>

      <section class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          class="page-reveal reveal-delay-2 overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm"
        >
          <div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="relative overflow-hidden bg-brand p-6 text-white sm:p-8">
              <div
                class="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />
              <div
                class="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#719f63]/25 blur-3xl"
              />

              <div class="relative space-y-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Brand Thesis
                </p>
                <h2
                  class="max-w-6xl font-opensans text-3xl font-semibold tracking-[-0.045em] sm:text-4xl"
                >
                  The future of electric mobility is operational, regional, and built for scale.
                </h2>
                <p class="max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                  We are focused on translating EV ambition into structured deployment across
                  corporate fleets, public transport systems, charging networks, local assembly, and
                  long-term aftercare.
                </p>
              </div>
            </div>

            <div class="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div class="space-y-4">
                <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                  Why We Exist
                </p>
                <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                  Transport systems across Africa need cleaner, more resilient alternatives. But
                  transition only works when vehicles, charging, maintenance, local capability, and
                  business logic are treated as one connected system.
                </p>
                <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                  Metropolitan Electric is built around that integration. We combine EV products,
                  service layers, and infrastructure thinking into a more durable path for adoption.
                </p>
              </div>

              <div class="rounded-3xl bg-[#fbfdfb] p-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#73867d]">
                  Operating Lens
                </p>
                <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                  Cleaner mobility should also be easier to deploy, finance, and maintain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <article
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-5 shadow-[0_16px_50px_rgba(16,32,39,0.05)] backdrop-blur-sm"
            :style="{ '--reveal-delay': `${220 + index * 70}ms` }"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#7ca78d,#26414d_72%)] text-white shadow-[0_14px_30px_rgba(16,32,39,0.12)]"
              >
                <component :is="pillar.icon" class="size-5" weight="fill" />
              </div>
              <div class="space-y-2">
                <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                  {{ pillar.title }}
                </h3>
                <p class="text-sm leading-7 text-[#41555d]">
                  {{ pillar.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="space-y-6">
        <div
          class="page-reveal reveal-delay-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              What Defines Us
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
              EV values translated into operating principles.
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-[#41555d]">
            The brand is grounded in sustainability, reliability, infrastructure awareness, and
            practical deployment logic.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="(card, index) in valueCards"
            :key="card.title"
            class="page-reveal page-reveal-soft group rounded-[1.85rem] border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-transform duration-300 hover:-translate-y-1"
            :style="{ '--reveal-delay': `${280 + index * 65}ms` }"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eff4eb,#dce6d7_55%,#cad8ca_100%)] text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <component :is="card.icon" class="size-6" weight="fill" />
            </div>
            <h3 class="mt-5 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-[#41555d]">
              {{ card.copy }}
            </p>
          </article>
        </div>
      </section>

      <section class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div
          class="page-reveal reveal-delay-4 rounded-4xl border border-[#d8dfd5] bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8"
        >
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            Operating Model
          </p>
          <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.045em]">
            One mobility company, multiple EV layers.
          </h2>
          <p class="mt-4 text-sm leading-7 text-white/72 sm:text-base">
            The company is structured around the broader EV ecosystem. Each layer reinforces the
            others, creating a more complete route to adoption across private, institutional, and
            public transport use cases.
          </p>
        </div>

        <div class="grid gap-4">
          <article
            v-for="(item, index) in operatingModel"
            :key="item.label"
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-5 shadow-[0_16px_50px_rgba(16,32,39,0.05)] backdrop-blur-sm"
            :style="{ '--reveal-delay': `${350 + index * 70}ms` }"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fbfdfb] text-brand"
              >
                <component :is="item.icon" class="size-5" weight="fill" />
              </div>
              <div>
                <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                  {{ item.label }}
                </h3>
                <p class="mt-2 text-sm leading-7 text-[#41555d]">
                  {{ item.detail }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        class="overflow-hidden rounded-[2.25rem] border border-[#d3dbd0] bg-[linear-gradient(135deg,#0f181f_0%,#17332a_55%,#50654f_100%)] px-6 py-10 text-white shadow-[0_28px_90px_rgba(16,32,39,0.16)] sm:px-10 sm:py-14"
      >
        <div class="pointer-events-none absolute" />
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
              Next Step
            </p>
            <h2
              class="font-opensans text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
            >
              See how the brand translates into vehicles, services, and deployment pathways.
            </h2>
            <p class="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              Browse the vehicle gallery, explore the EV service stack, or contact the team to
              discuss a specific mobility plan.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </NuxtLink>
            <NuxtLink
              to="/gallery"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Gallery
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
