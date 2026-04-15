<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]" />
    <div class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]" />

    <section class="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-14 pt-34 sm:px-8 lg:px-12 lg:pb-20 lg:pt-40">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div class="page-reveal reveal-delay-1 space-y-6">
          <p
            class="text-xs font-bold font-opensans uppercase tracking-[0.34em]"
            :style="{ color: accent }"
          >
            {{ eyebrow }}
          </p>
          <h1 class="max-w-4xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl">
            {{ title }}
          </h1>
          <p class="max-w-2xl text-sm leading-7 text-[#41555d] sm:text-base">
            {{ description }}
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="(metric, index) in metrics"
            :key="metric.label"
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
            :style="{ '--reveal-delay': `${140 + (index * 70)}ms` }"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#73867d]">{{ metric.label }}</p>
            <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ metric.value }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="page-reveal reveal-delay-3 overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm">
          <div class="p-5 sm:p-8">
            <div
              class="rounded-[1.8rem] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6"
              :style="{
                background: `radial-gradient(circle at top, #ffffff, ${accent}22 62%, #dbe4dc 100%)`,
              }"
            >
              <img
                class="h-70 w-full object-cover rounded-[1.3rem] sm:h-105 lg:h-130"
                :src="`/card/${image}`"
                :alt="title"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <section class="page-reveal reveal-delay-4 rounded-4xl bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8">
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Service Lens</p>
            <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.045em]">
              EV-first planning, deployment and long-term support.
            </h2>
            <p class="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              This service is positioned as part of a broader electric mobility ecosystem,
              combining infrastructure thinking, operational fit, and practical implementation support.
            </p>
          </section>

          <section class="page-reveal reveal-delay-5 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_20px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-8">
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Key Pillars</p>
            <div class="mt-5 flex flex-wrap gap-3">
              <span
                v-for="pillar in pillars"
                :key="pillar"
                class="rounded-full border border-[#d8dfd5] bg-[#fbfdfb] px-4 py-3 text-sm text-[#22343b]"
              >
                {{ pillar }}
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>

    <CTA />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ServiceItem, ServiceMetric } from "~/utils/serviceCatalog";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    required: true,
  },
  accent: {
    type: String,
    required: true,
  },
  metrics: {
    type: Array as PropType<ServiceMetric[]>,
    required: true,
  },
  pillars: {
    type: Array as PropType<ServiceItem["pillars"]>,
    required: true,
  },
});
</script>
