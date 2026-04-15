<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { PhCircuitry, PhStrategy, PhStack } from '@phosphor-icons/vue';
import { serviceCatalog } from '~/utils/serviceCatalog';

useSeoMeta({
  title: 'Our Services',
  ogTitle: 'Our Services',
  description:
    "Explore Metropolitan Electric's EV-focused services across fleet deployment, public mobility, charging infrastructure, assembly, ride-hailing, and maintenance.",
  ogDescription:
    "Explore Metropolitan Electric's EV-focused services across fleet deployment, public mobility, charging infrastructure, assembly, ride-hailing, and maintenance.",
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const highlightStatements = [
  {
    text: 'Integrated EV deployment across fleet, charging, and aftercare.',
    icon: PhStack,
  },
  {
    text: 'Service architecture designed for operators, institutions, and public systems.',
    icon: PhCircuitry,
  },
  {
    text: 'Cleaner mobility with operational logic, not just product supply.',
    icon: PhStrategy,
  },
] as const;
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.14),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-16 pt-34 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            EV Services
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Powering every journey.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Discover the services that support our electric ecosystem—including EV care, charging
            solutions, and infrastructure designed for seamless performance.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl lg:ml-auto">
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Service Lines</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              {{ serviceCatalog.length }}
            </p>
          </div>
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Coverage</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">End-to-End</p>
          </div>
          <div
            class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Positioning</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV-Centric</p>
          </div>
        </div>
      </div>
      <div class="grid gap-4 lg:grid-cols-3">
        <div
          v-for="(statement, index) in highlightStatements"
          :key="statement.text"
          class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d8dfd5] bg-white/88 p-5 text-sm leading-7 text-[#31464d] shadow-[0_16px_50px_rgba(16,32,39,0.05)] backdrop-blur-sm"
          :style="{ '--reveal-delay': `${180 + index * 70}ms` }"
        >
          <div class="flex items-start gap-4">
            <div class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eef5eb,#dce7d8_58%,#cad8ca_100%)] text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <component :is="statement.icon" class="size-5" weight="fill" />
            </div>
            <p class="pt-1 text-sm leading-7 text-[#31464d]">
              {{ statement.text }}
            </p>
          </div>
        </div>
      </div>

      <section class="grid gap-5 lg:grid-cols-2">
        <NuxtLink
          v-for="(service, index) in serviceCatalog"
          :key="service.slug"
          :to="`/services/${service.slug}`"
          class="page-reveal page-reveal-soft group overflow-hidden rounded-4xl border border-[#d8dfd5] bg-white/92 shadow-[0_18px_60px_rgba(16,32,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,32,39,0.1)]"
          :style="{ '--reveal-delay': `${260 + index * 80}ms` }"
        >
          <div class="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div class="relative min-h-70 overflow-hidden">
              <div
                class="absolute inset-0 opacity-85"
                :style="{ background: `linear-gradient(160deg, ${service.accent}, #101920)` }"
              />
              <img
                :src="`/card/${service.image}`"
                :alt="service.title"
                class="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div class="relative flex h-full flex-col justify-between p-6">
                <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                  {{ service.eyebrow }}
                </p>
                <div
                  class="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/90 w-fit"
                >
                  {{ service.shortTitle }}
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between gap-6 p-6">
              <div class="space-y-4">
                <h2 class="font-opensans text-3xl font-semibold tracking-[-0.04em] text-brand">
                  {{ service.title }}
                </h2>
                <p class="text-sm leading-7 text-[#41555d]">
                  {{ service.description }}
                </p>
              </div>

              <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <div
                  v-for="metric in service.metrics"
                  :key="metric.label"
                  class="flex min-h-30 flex-col rounded-[1.25rem] bg-[#fbfdfb] p-4"
                >
                  <p class="text-[11px] uppercase tracking-[0.18em] leading-5 text-[#73867d] wrap-break-word">
                    {{ metric.label }}
                  </p>
                  <p class="mt-3 text-sm leading-6 font-medium text-brand wrap-break-word">
                    {{ metric.value }}
                  </p>
                </div>
              </div>

              <div class="inline-flex items-center gap-2 text-sm font-medium text-brand">
                View Service
                <ArrowRightIcon
                  class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </section>
    </section>

    <CTA />
  </div>
</template>
