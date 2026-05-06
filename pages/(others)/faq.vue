<script lang="ts" setup>
import { PhBatteryCharging, PhLeaf, PhLightning, PhShieldCheck } from '@phosphor-icons/vue';
import { faqItems } from '~/utils/faq';

const { container } = useTailwindConfig();

useSeoMeta({
  title: 'EV FAQ',
  ogTitle: 'EV FAQ',
  description:
    'Answers to common questions about electric vehicles, charging, maintenance, infrastructure and EV adoption in Nigeria.',
  ogDescription:
    'Answers to common questions about electric vehicles, charging, maintenance, infrastructure and EV adoption in Nigeria.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const highlights = [
  {
    label: 'Charging',
    value: 'Home + Public',
    icon: PhBatteryCharging,
  },
  {
    label: 'Impact',
    value: 'Cleaner Mobility',
    icon: PhLeaf,
  },
  {
    label: 'Performance',
    value: 'Daily Ready',
    icon: PhLightning,
  },
  {
    label: 'Support',
    value: 'Long-Term Reliability',
    icon: PhShieldCheck,
  },
] as const;

const groupedFaqs = [
  {
    title: 'Charging & Infrastructure',
    items: faqItems.filter((item) =>
      ['item-2', 'item-3', 'item-4', 'item-7', 'item-9'].includes(item.value),
    ),
  },
  {
    title: 'Vehicle Use & Ownership',
    items: faqItems.filter((item) =>
      ['item-1', 'item-5', 'item-6', 'item-10', 'item-11'].includes(item.value),
    ),
  },
  {
    title: 'Environmental Context',
    items: faqItems.filter((item) => ['item-8'].includes(item.value)),
  },
] as const;
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      :class="[container, 'flex flex-col gap-14 pb-16 pt-34 lg:pb-24 lg:pt-40']"
    >
      <div class="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div class="page-reveal reveal-delay-1 space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            EV FAQ
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Understanding electric mobility made simple.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Explore practical answers on charging, performance, maintenance, and the realities of EV
            adoption in Nigeria.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(item, index) in highlights"
            :key="item.label"
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
            :style="{ '--reveal-delay': `${150 + index * 65}ms` }"
          >
            <div
              class="flex size-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eff4eb,#dce6d7_55%,#cad8ca_100%)] text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <component :is="item.icon" class="size-6" weight="fill" />
            </div>
            <p class="mt-5 text-[11px] uppercase tracking-[0.26em] text-[#73867d]">
              {{ item.label }}
            </p>
            <p class="mt-2 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ item.value }}
            </p>
          </div>
        </div>
      </div>

      <section
        class="page-reveal reveal-delay-3 overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm"
      >
        <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div class="bg-brand p-6 text-white sm:p-8">
            <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Why This Matters
            </p>
            <h2 class="mt-4 font-opensans text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              EV adoption works better when uncertainty is reduced.
            </h2>
            <p class="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              Most hesitation around electric mobility comes from a small set of practical
              questions: charging access, battery lifespan, maintenance, range, and infrastructure
              reliability. This page is structured to answer those clearly and directly.
            </p>
          </div>

          <div class="flex flex-col justify-between gap-6 p-6 sm:p-8">
            <div class="space-y-4">
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                FAQ Structure
              </p>
              <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                Instead of one long undifferentiated list, the questions are grouped into charging,
                ownership, and environmental context. That makes the page easier to scan and gives
                it a stronger EV-specific editorial shape.
              </p>
            </div>

            <div class="rounded-3xl bg-[#fbfdfb] p-5">
              <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#73867d]">
                Total Questions
              </p>
              <p class="mt-3 font-opensans text-4xl font-semibold tracking-[-0.05em] text-brand">
                {{ faqItems.length }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-6 xl:grid-cols-3">
        <article
          v-for="(group, index) in groupedFaqs"
          :key="group.title"
          class="page-reveal page-reveal-soft rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm sm:p-8"
          :style="{ '--reveal-delay': `${240 + index * 85}ms` }"
        >
          <div class="mb-6 space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Category
            </p>
            <h2 class="font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand">
              {{ group.title }}
            </h2>
          </div>

          <Accordion type="single" collapsible class="w-full">
            <AccordionItem
              v-for="item in group.items"
              :key="item.value"
              :value="item.value"
              class="border-b border-[#e4ebe1] py-1"
            >
              <AccordionTrigger
                class="text-left text-base font-medium leading-7 text-brand hover:no-underline hover:text-[#31464d]"
              >
                {{ item.item }}
              </AccordionTrigger>
              <AccordionContent class="text-sm leading-7 text-[#41555d] sm:text-base">
                {{ item.content }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      <section
        class="page-reveal reveal-delay-5 overflow-hidden rounded-[2.25rem] border border-[#d3dbd0] bg-[linear-gradient(135deg,#0f181f_0%,#17332a_55%,#50654f_100%)] px-6 py-10 text-white shadow-[0_28px_90px_rgba(16,32,39,0.16)] sm:px-10 sm:py-14"
      >
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
              Still Need Clarity?
            </p>
            <h2
              class="font-opensans text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
            >
              Move from questions to a real EV conversation.
            </h2>
            <p class="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              If your question relates to fleet planning, charging infrastructure, maintenance
              support, or vehicle selection, contact the team directly and we will point you to the
              right next step.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </NuxtLink>
            <NuxtLink
              to="/gallery"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Vehicles
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
