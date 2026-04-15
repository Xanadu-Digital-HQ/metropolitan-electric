<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/20/solid";
import type { vehicle } from "~/types/types";
import { vehicles } from "~/utils/vehicles";
import { getVehicleSlug } from "~/utils/vehicleCatalog";

useSeoMeta({
  title: "Vehicle Gallery",
  ogTitle: "Vehicle Gallery",
  description:
    "Browse Metropolitan Electric's vehicle lineup through a modern gallery built for growing electric fleets.",
  ogDescription:
    "Browse Metropolitan Electric's vehicle lineup through a modern gallery built for growing electric fleets.",
  ogImage: "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});

const categories = ["all", ...new Set(vehicles.map((item) => item.category))] as const;

const activeCategory = ref<(typeof categories)[number]>("all");
const activeVehicleName = ref(vehicles[0]?.name ?? "");

const filteredVehicles = computed(() => {
  if (activeCategory.value === "all") {
    return vehicles;
  }

  return vehicles.filter((item) => item.category === activeCategory.value);
});

const activeVehicle = computed<vehicle | undefined>(() => {
  const fromFilter = filteredVehicles.value.find((item) => item.name === activeVehicleName.value);
  return fromFilter ?? filteredVehicles.value[0] ?? vehicles[0];
});

const activeVehicleSlug = computed(() =>
  activeVehicle.value ? getVehicleSlug(activeVehicle.value.name) : ""
);

const openActiveVehicleDetails = async () => {
  if (!activeVehicleSlug.value) {
    return;
  }

  await navigateTo(`/gallery/${activeVehicleSlug.value}`);
};

watch(
  filteredVehicles,
  (list) => {
    if (!list.length) {
      activeVehicleName.value = "";
      return;
    }

    const stillVisible = list.some((item) => item.name === activeVehicleName.value);
    if (!stillVisible) {
      const firstVisibleVehicle = list[0];
      if (firstVisibleVehicle) {
        activeVehicleName.value = firstVisibleVehicle.name;
      }
    }
  },
  { immediate: true }
);

const selectCategory = (category: (typeof categories)[number]) => {
  activeCategory.value = category;
};

const selectVehicle = (name: string) => {
  activeVehicleName.value = name;
};
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-[#102027]">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,151,116,0.12),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]" />
    <div class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]" />

    <section class="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-16 pt-34 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="page-reveal reveal-delay-1 max-w-4xl space-y-5">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Electric Vehicle Gallery
          </p>
          <h1 class="font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl">
            Sleek catalog browsing for a growing fleet.
          </h1>
          <p class="max-w-2xl text-sm leading-7 text-[#41555d] sm:text-base">
            Designed as a scalable gallery rather than a one-off product page. Browse vehicles,
            switch categories, inspect details, and keep the interface clean even as the lineup grows.
          </p>
        </div>

        <div class="page-reveal reveal-delay-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm">
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Total</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">{{ vehicles.length }}</p>
          </div>
          <div class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm">
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Filtered</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">{{ filteredVehicles.length }}</p>
          </div>
          <div class="col-span-2 rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)] sm:col-span-1">
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Active</p>
            <p class="mt-3 truncate font-opensans text-2xl font-semibold tracking-[-0.04em]">
              {{ activeVehicle?.name ?? "None" }}
            </p>
          </div>
        </div>
      </div>

      <div class="page-reveal reveal-delay-3 rounded-4xl border border-[#d8dfd5] bg-white/86 p-4 shadow-[0_24px_80px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-5">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="rounded-full px-4 py-2.5 text-sm font-medium capitalize transition-all duration-300"
            :class="
              activeCategory === category
                ? 'bg-brand text-white shadow-[0_10px_30px_rgba(16,32,39,0.18)]'
                : 'bg-[#f4f7f2] text-[#31464d] hover:bg-[#e9eee7]'
            "
            @click="selectCategory(category)"
          >
            {{ category === "all" ? "All Vehicles" : category }}
          </button>
        </div>
      </div>

      <div class="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_380px]">
        <div class="grid gap-8">
          <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <button
              v-for="(vehicleItem, index) in filteredVehicles"
              :key="vehicleItem.name"
              type="button"
              class="page-reveal page-reveal-soft group rounded-4xl border p-5 text-left transition-all duration-300"
              :class="
                activeVehicle?.name === vehicleItem.name
                  ? 'border-brand bg-brand text-white shadow-[0_26px_80px_rgba(16,32,39,0.18)]'
                  : 'border-[#d8dfd5] bg-white/92 text-brand shadow-[0_16px_50px_rgba(16,32,39,0.05)] hover:-translate-y-1 hover:border-[#a6b7a0]'
              "
              :style="{ '--reveal-delay': `${240 + (index * 65)}ms` }"
              @click="selectVehicle(vehicleItem.name)"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="space-y-3">
                  <p
                    class="text-[11px] uppercase tracking-[0.28em]"
                    :class="activeVehicle?.name === vehicleItem.name ? 'text-white/50' : 'text-[#6b8177]'"
                  >
                    {{ vehicleItem.category }}
                  </p>
                  <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em]">
                    {{ vehicleItem.name }}
                  </h2>
                </div>

                <div
                  class="flex size-10 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-1"
                  :class="activeVehicle?.name === vehicleItem.name ? 'border-white/15 bg-white/8' : 'border-[#d5ddd2] bg-[#fcfefc]'"
                >
                  <ArrowRightIcon class="size-4" />
                </div>
              </div>

              <div class="mt-6 rounded-3xl bg-[radial-gradient(circle_at_top,#ffffff,#edf2eb_62%,#e1e8e1_100%)] p-4">
                <img
                  :src="vehicleItem.images[0]"
                  :alt="vehicleItem.name"
                  class="h-40 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div class="mt-5 flex items-end justify-between gap-4">
                <p
                  class="line-clamp-2 text-sm leading-6"
                  :class="activeVehicle?.name === vehicleItem.name ? 'text-white/68' : 'text-[#475a61]'"
                >
                  {{ vehicleItem.description }}
                </p>
              </div>

              <div class="mt-5 flex items-center justify-between gap-4 border-t pt-4"
                :class="activeVehicle?.name === vehicleItem.name ? 'border-white/10' : 'border-[#e4ebe1]'"
              >
                <span
                  class="text-xs uppercase tracking-[0.24em]"
                  :class="activeVehicle?.name === vehicleItem.name ? 'text-white/45' : 'text-[#72877d]'"
                >
                  Starting Price
                </span>
                <span class="text-sm font-medium">
                  {{ vehicleItem.price }}
                </span>
              </div>
            </button>
          </section>

        </div>

        <aside
          v-if="activeVehicle"
          class="page-reveal reveal-delay-4 h-fit rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_24px_80px_rgba(16,32,39,0.07)] backdrop-blur-sm xl:sticky xl:top-32"
        >
          <p class="text-[11px] uppercase tracking-[0.28em] text-[#6b8177]">Selected Vehicle</p>
          <h2 class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand">
            {{ activeVehicle.name }}
          </h2>
          <p class="mt-2 text-sm capitalize text-[#547067]">{{ activeVehicle.category }}</p>

          <div class="mt-8 space-y-4">
            <div class="rounded-3xl bg-[#fbfdfb] p-4">
              <p class="text-[11px] uppercase tracking-[0.24em] text-[#73867d]">Price</p>
              <p class="mt-2 text-lg font-medium text-brand">{{ activeVehicle.price }}</p>
            </div>

            <div class="rounded-3xl bg-[#fbfdfb] p-4">
              <p class="text-[11px] uppercase tracking-[0.24em] text-[#73867d]">Range</p>
              <p class="mt-2 text-lg font-medium text-brand">
                {{ activeVehicle.specification.find((item) => item.label === "RANGE")?.value ?? "Available on request" }}
              </p>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <NuxtLink
              to="/contact"
              class="flex items-center justify-between rounded-full bg-brand px-5 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Sales
              <ArrowRightIcon class="size-4" />
            </NuxtLink>
            <button
              type="button"
              @click="openActiveVehicleDetails"
              class="flex items-center justify-between rounded-full border border-[#dce4d9] bg-[#fbfdfb] px-5 py-4 text-sm font-medium text-brand transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Details
              <ArrowRightIcon class="size-4" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
