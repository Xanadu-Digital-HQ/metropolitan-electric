<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section :class="[container, 'flex flex-col gap-10 pb-14 pt-34 lg:pb-20 lg:pt-40']">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div class="page-reveal reveal-delay-1 space-y-6">
          <p
            class="text-xs font-bold font-opensans uppercase tracking-[0.34em]"
            :style="{ color: accent }"
          >
            {{ eyebrow }}
          </p>
          <h1
            class="max-w-4xl font-elemental text-3xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
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
            :style="{ '--reveal-delay': `${140 + index * 70}ms` }"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#73867d]">{{ metric.label }}</p>
            <p class="mt-3 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ metric.value }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          class="page-reveal reveal-delay-3 overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm"
        >
          <div class="flex flex-col gap-8 p-5 sm:p-8">
            <div
              class="rounded-[1.8rem] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6"
              :style="{
                background: `radial-gradient(circle at top, #ffffff, ${accent}22 62%, #dbe4dc 100%)`,
              }"
            >
              <NuxtImg
                class="h-70 w-full object-cover rounded-[1.3rem] sm:h-105 lg:h-130"
                :src="`/card/${image}`"
                :alt="title"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8 ">
          <section
            class="page-reveal reveal-delay-4 relative overflow-hidden rounded-4xl bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8"
          >
            <div
              class="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full opacity-20 blur-3xl"
              :style="{ backgroundColor: accent }"
            />
            <div class="relative flex items-start gap-4">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8"
              >
                <PhBatteryCharging class="size-6" weight="fill" />
              </div>
              <div>
                <h2 class="font-opensans text-3xl font-semibold tracking-[-0.045em]">
                  EV-first planning, deployment and long-term support.
                </h2>
              </div>
            </div>
            <p class="relative mt-5 text-sm leading-7 text-white/72 sm:text-base">
              This service is positioned as part of a broader electric mobility ecosystem, combining
              infrastructure thinking, operational fit, and practical implementation support.
            </p>
            <div class="relative mt-6 grid gap-3 sm:grid-cols-3">
              <span
                v-for="lens in serviceLens"
                :key="lens"
                class="rounded-2xl border border-white/10 bg-white/7 px-3 py-2.5 text-xs leading-5 text-white/76"
              >
                {{ lens }}
              </span>
            </div>
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

      <div class="grid gap-8 lg:grid-cols-[1fr]">
        <section
          v-if="detailGroups.length"
          class="page-reveal reveal-delay-5 space-y-5 sm:space-y-6"
        >
          <div
            class="relative overflow-hidden rounded-4xl border border-[#d8dfd5] bg-[linear-gradient(135deg,#fbfdfb_0%,#f0f6ef_100%)] p-6 shadow-[0_18px_60px_rgba(16,32,39,0.05)] sm:p-8 lg:p-10"
          >
            <div
              class="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-45 bg-[linear-gradient(rgba(16,32,39,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.045)_1px,transparent_1px)] bg-size-[28px_28px]"
            />
            <div class="relative grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div class="flex items-start gap-4">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-[0_16px_36px_rgba(16,32,39,0.14)]"
                  :style="{ background: `linear-gradient(145deg, ${accent}, #101920)` }"
                >
                  <PhPlugCharging class="size-6" weight="fill" />
                </div>
                <div>
                  <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                    {{ detailEyebrow }}
                  </p>
                  <h3
                    class="mt-3 max-w-2xl font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand sm:text-3xl"
                  >
                    {{ detailHeading }}
                  </h3>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-3">
                <div
                  v-for="group in detailGroups"
                  :key="group.key"
                  class="rounded-2xl border border-[#d8dfd5] bg-white/82 p-4 shadow-[0_10px_28px_rgba(16,32,39,0.04)]"
                >
                  <div class="flex items-center justify-between gap-3">
                    <p class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                      {{ group.items.length }}
                    </p>
                    <component :is="group.icon" class="size-5 text-[#6b8177]" weight="fill" />
                  </div>
                  <p class="mt-2 text-[11px] uppercase tracking-[0.18em] leading-5 text-[#6b8177]">
                    {{ group.summary }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-5 lg:grid-cols-3">
            <article
              v-for="(group, groupIndex) in detailGroups"
              :key="group.key"
              class="group relative flex min-h-full flex-col overflow-hidden rounded-[1.65rem] border border-[#d8dfd5] bg-white/94 shadow-[0_18px_58px_rgba(16,32,39,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_72px_rgba(16,32,39,0.1)]"
            >
              <div
                class="absolute inset-x-0 top-0 h-1"
                :style="{ background: `linear-gradient(90deg, ${accent}, #101920)` }"
              />
              <div class="flex items-start gap-4 border-b border-[#e3eae0] p-5 sm:p-6">
                <div
                  class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eef5eb,#dce7d8_58%,#cad8ca_100%)] text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                >
                  <component :is="group.icon" class="size-5" weight="fill" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b8177]">
                    {{ group.eyebrow }}
                  </p>
                  <h4
                    class="mt-2 font-opensans text-lg font-semibold tracking-[-0.03em] text-brand"
                  >
                    {{ group.title }}
                  </h4>
                  <p class="mt-2 text-sm leading-6 text-[#52666d]">
                    {{ group.description }}
                  </p>
                </div>
                <span
                  class="hidden shrink-0 rounded-full border border-[#d8dfd5] bg-[#f6f9f5] px-3 py-1.5 text-[11px] font-semibold text-[#6b8177] sm:inline-flex"
                >
                  0{{ groupIndex + 1 }}
                </span>
              </div>

              <div
                class="flex flex-1 flex-col divide-y divide-[#e6ece3] bg-[#fbfdfb]"
              >
                <div
                  v-for="item in group.items"
                  :key="`${group.key}-${item.label}`"
                  class="group/item flex gap-3 px-5 py-4 transition-colors duration-300 hover:bg-white sm:px-6"
                >
                  <div
                    class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-white text-xs font-semibold text-brand shadow-[0_8px_18px_rgba(16,32,39,0.06)]"
                    :style="{ backgroundColor: `${accent}22` }"
                  >
                    <component
                      v-if="group.key !== 'applications'"
                      :is="group.bulletIcon"
                      class="size-4"
                      weight="fill"
                    />
                    <span v-else>{{ item.index + 1 }}</span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium leading-6 text-[#22343b]">
                      {{ item.label }}
                    </p>
                    <p v-if="item.detail" class="mt-1 text-xs leading-6 text-[#60756c]">
                      {{ item.detail }}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>

    <CTA />
  </div>
</template>

<script lang="ts" setup>
import {
  PhBatteryCharging,
  PhChargingStation,
  PhCheckCircle,
  PhCircuitry,
  PhListChecks,
  PhMapPinArea,
  PhPlugCharging,
} from '@phosphor-icons/vue';
import type { Component, PropType } from 'vue';
import type { ServiceDetailSection, ServiceItem, ServiceMetric } from '~/utils/serviceCatalog';

const { container } = useTailwindConfig();

const props = defineProps({
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
    type: Array as PropType<ServiceItem['pillars']>,
    required: true,
  },
  serviceLens: {
    type: Array as PropType<ServiceItem['serviceLens']>,
    required: true,
  },
  detailEyebrow: {
    type: String,
    required: true,
  },
  detailHeading: {
    type: String,
    required: true,
  },
  detailSections: {
    type: Array as PropType<ServiceItem['detailSections']>,
    required: true,
  },
});

const sectionIcons = {
  scope: {
    icon: PhChargingStation,
    bulletIcon: PhBatteryCharging,
  },
  capabilities: {
    icon: PhCircuitry,
    bulletIcon: PhCheckCircle,
  },
  applications: {
    icon: PhMapPinArea,
    bulletIcon: PhListChecks,
  },
} satisfies Record<ServiceDetailSection['key'], { icon: Component; bulletIcon: Component }>;

const detailGroups = computed(() =>
  props.detailSections
    .map((section) => ({
      ...section,
      icon: sectionIcons[section.key].icon,
      bulletIcon: sectionIcons[section.key].bulletIcon,
      items: section.items.map((item, index) => ({ ...item, index })),
    }))
    .filter((group) => group.items.length > 0),
);
</script>
