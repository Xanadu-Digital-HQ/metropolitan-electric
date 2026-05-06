<template>
  <section
    :class="[container, 'page-reveal reveal-delay-4 relative overflow-hidden py-12 sm:py-16']"
  >
    <div>
      <div class="relative overflow-hidden rounded-4xl border border-[#cfd8cb] bg-[linear-gradient(135deg,#0f181f_0%,#17332a_55%,#50654f_100%)] px-6 py-10 shadow-[0_28px_90px_rgba(16,25,32,0.18)] sm:px-10 sm:py-14">
        <div class="pointer-events-none absolute -right-12 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div class="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#b7cca9]/20 blur-3xl" />

        <div class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
              EV Mobility Support
            </p>
            <h2 class="font-opensans text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              Build the right electric mobility stack for your operation.
            </h2>
            <p class="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              From deployment planning to charging, fleet support, and maintenance,
              we can help you shape a cleaner mobility system around real operating conditions.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Sales
            </NuxtLink>
            <NuxtLink
              to="/gallery"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Vehicles
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
