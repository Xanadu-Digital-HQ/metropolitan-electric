<template>
  <section
    class="js-phase-three-gallery relative isolate overflow-hidden bg-[#08131f] text-white"
    @mouseenter="pauseCycle"
    @mouseleave="resumeCycle"
    @focusin="pauseCycle"
    @focusout="resumeCycle"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-[#75f5cf]/60 to-transparent"
    />
    <div class="showroom-grid pointer-events-none absolute inset-0 z-0 opacity-70" />

    <div :class="[container, 'relative z-10 py-16 sm:py-20 lg:py-24']">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-xl">
          <p class="font-opensans text-xs font-semibold uppercase tracking-[0.3em] text-[#7fe8cd]">
            Showroom
          </p>
          <h2
            class="mt-4 font-elemental text-3xl font-medium leading-tight tracking-[-0.01em] text-white sm:text-4xl lg:text-5xl"
          >
            Meet the electric lineup.
          </h2>
        </div>
        <p class="max-w-xs font-poppins text-sm leading-7 text-white/55">
          A closer look at the Metropolitan Electric range.
        </p>
      </div>

      <div class="relative mt-10 lg:mt-12">
        <div class="relative min-h-[58vh] overflow-hidden sm:min-h-[64vh] lg:min-h-[78vh]">
          <Transition name="vehicle" appear>
            <div
              :key="activeVehicle.name"
              class="absolute inset-0"
              :style="{ '--panel-accent': activeVehicle.accent }"
            >
              <span
                class="pointer-events-none absolute left-0 top-1 z-0 select-none font-elemental text-[6rem] leading-none text-white/[0.045] sm:text-[9rem] lg:text-[13rem]"
              >
                {{ activeVehicle.indexLabel }}
              </span>
              <div class="vehicle-spot pointer-events-none absolute inset-x-0 top-0 z-0 h-[72%]" />

              <div
                class="absolute inset-x-0 top-0 bottom-30 z-10 flex items-center justify-center px-10 sm:bottom-32 sm:px-16 lg:bottom-36 lg:px-20"
              >
                <NuxtImg
                  :src="activeVehicle.image"
                  :alt="activeVehicle.name"
                  sizes="xs:100vw sm:100vw lg:70vw"
                  class="h-full w-full object-contain drop-shadow-[0_50px_70px_rgba(0,0,0,0.6)]"
                />
                <div
                  class="vehicle-base pointer-events-none absolute inset-x-[14%] bottom-3 h-8 opacity-70"
                />
              </div>

              <div class="absolute inset-x-0 bottom-0 z-10">
                <p
                  class="vehicle-accent font-opensans text-[11px] font-semibold uppercase tracking-[0.28em]"
                >
                  {{ activeVehicle.category }}
                </p>
                <h3
                  class="mt-2 truncate font-opensans text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
                >
                  {{ activeVehicle.name }}
                </h3>
                <NuxtLink
                  :to="`/gallery/${activeVehicle.slug}`"
                  class="mt-3 inline-flex items-center gap-1.5 font-opensans text-sm font-semibold text-white/70 transition duration-300 hover:text-white"
                >
                  View model
                  <ArrowUpRight class="size-4" aria-hidden="true" />
                </NuxtLink>
              </div>
            </div>
          </Transition>

          <button
            type="button"
            aria-label="Previous vehicle"
            class="group absolute left-1 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-brand sm:left-3 lg:size-12"
            @click="showPrev"
          >
            <ChevronLeft
              class="size-5 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            aria-label="Next vehicle"
            class="group absolute right-1 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-brand sm:right-3 lg:size-12"
            @click="showNext"
          >
            <ChevronRight
              class="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        <div class="mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div class="flex items-center gap-2.5">
            <button
              v-for="(vehicleItem, index) in showcaseVehicles"
              :key="vehicleItem.name"
              type="button"
              :aria-label="`Show ${vehicleItem.name}`"
              :aria-current="index === activeIndex ? 'true' : undefined"
              class="h-2 rounded-full transition-all duration-500"
              :class="index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/50'"
              @click="selectVehicle(index)"
            />
          </div>
          <p class="font-opensans text-xs font-semibold tracking-[0.2em] text-white/45">
            <span class="text-white">{{ activeVehicle.indexLabel }}</span> / {{ totalLabel }}
          </p>
        </div>
      </div>

      <div class="mt-10 flex justify-center lg:justify-start">
        <NuxtLink
          :to="URLS.GALLERY"
          class="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition duration-300 hover:-translate-y-0.5 hover:bg-[#75f5cf]"
        >
          Open vehicle gallery
          <ArrowUpRight
            class="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { URLS } from '~/utils/constants';
import { vehicles as vehicleCatalog } from '~/utils/vehicles';
import { getVehicleSlug } from '~/utils/vehicleCatalog';

const { container } = useTailwindConfig();

const showroomAccents = ['#75f5cf', '#5fb6f7', '#69e0d0', '#8fb8ff', '#5ad1e6', '#9fd6ff'];

const formatIndex = (index: number) => String(index + 1).padStart(2, '0');

// Background-removed cut-outs (public/showcase) generated one-per-vehicle by
// scripts/remove_bg_showcase.py. These transparent PNGs suit the dark showroom
// stage far better than the catalogue photos, which carry their own backgrounds.
const showcaseImages: Record<string, string> = {
  'E-Bus': '/showcase/Bus1.png',
  'Hongqi E-QM5': '/showcase/hongqi2.png',
  'Xiaomi SU7': '/showcase/xiaomi_su7_2.png',
  'Leapmotor B01': '/showcase/leanmotors_b01_1.png',
  'Leapmotor C16': '/showcase/leapmotor_c16_1.png',
  'Leapmotor C10': '/showcase/leapmotor_c10_1.png',
  'Wuling Starlight S (SUV)': '/showcase/wuling_starlight _s_1.png',
  'Wuling Starlight (Sedan)': '/showcase/wuling_starlight_sedan_1.png',
};

const showcaseVehicles = vehicleCatalog
  .filter((vehicleItem) => showcaseImages[vehicleItem.name])
  .map((vehicleItem, index) => ({
    name: vehicleItem.name,
    category: vehicleItem.category,
    image: showcaseImages[vehicleItem.name]!,
    slug: getVehicleSlug(vehicleItem.name),
    accent: showroomAccents[index % showroomAccents.length],
    indexLabel: formatIndex(index),
  }));

const totalLabel = String(showcaseVehicles.length).padStart(2, '0');

const activeIndex = ref(0);
const activeVehicle = computed(() => showcaseVehicles[activeIndex.value] ?? showcaseVehicles[0]!);

const isPaused = ref(false);
let cycleTimer: number | null = null;
const cycleDelay = 5200;

const goTo = (index: number) => {
  const total = showcaseVehicles.length;
  activeIndex.value = ((index % total) + total) % total;
};

const stopCycle = () => {
  if (cycleTimer) {
    clearInterval(cycleTimer);
    cycleTimer = null;
  }
};

const startCycle = () => {
  if (cycleTimer || showcaseVehicles.length < 2) {
    return;
  }

  cycleTimer = window.setInterval(() => {
    if (!isPaused.value) {
      goTo(activeIndex.value + 1);
    }
  }, cycleDelay);
};

const restartCycle = () => {
  stopCycle();
  startCycle();
};

const showNext = () => {
  goTo(activeIndex.value + 1);
  restartCycle();
};

const showPrev = () => {
  goTo(activeIndex.value - 1);
  restartCycle();
};

const selectVehicle = (index: number) => {
  goTo(index);
  restartCycle();
};

const pauseCycle = () => {
  isPaused.value = true;
};

const resumeCycle = () => {
  isPaused.value = false;
};

onMounted(startCycle);

onBeforeUnmount(stopCycle);
</script>

<style scoped>
.showroom-grid {
  background-image:
    linear-gradient(rgba(126, 200, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(117, 245, 207, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, transparent 0, #000 10%, #000 90%, transparent 100%);
}

.vehicle-spot {
  background: radial-gradient(
    58% 62% at 50% 40%,
    color-mix(in srgb, var(--panel-accent, #75f5cf) 24%, transparent),
    transparent 70%
  );
}

.vehicle-base {
  background: radial-gradient(
    50% 120% at 50% 0,
    color-mix(in srgb, var(--panel-accent, #75f5cf) 42%, transparent),
    transparent 72%
  );
  filter: blur(8px);
}

.vehicle-accent {
  color: var(--panel-accent, #75f5cf);
}

.vehicle-enter-active {
  transition:
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.vehicle-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.6s ease;
}

.vehicle-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.985);
}

.vehicle-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.99);
}

@media (prefers-reduced-motion: reduce) {
  .vehicle-enter-active,
  .vehicle-leave-active {
    transition: opacity 0.2s ease;
  }

  .vehicle-enter-from,
  .vehicle-leave-to {
    transform: none;
  }
}
</style>
