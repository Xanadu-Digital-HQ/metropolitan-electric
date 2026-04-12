  <template>
  <section
    :class="[
      overlay
        ? 'js-why-choose-us absolute inset-0 isolate overflow-hidden bg-[#f5f6f7] px-5 py-18 sm:px-8 sm:py-24 lg:px-12 lg:py-28'
        : 'js-why-choose-us relative isolate overflow-hidden bg-[#f5f6f7] px-5 py-18 sm:px-8 sm:py-24 lg:px-12 lg:py-28',
    ]"
  >
    <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0.86),rgba(255,255,255,0))]" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,rgba(255,255,255,0.86),rgba(255,255,255,0))]" />
    <div class="pointer-events-none absolute inset-y-0 left-0 w-full opacity-50 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.75)_0,rgba(255,255,255,0.75)_2px,transparent_2px,transparent_18px)]" />

    <div class="panel-float-slow pointer-events-none absolute inset-x-[15%] top-20 h-[72%] bg-white/30 blur-3xl" />

    <div
      class="js-why-choose-panel panel-float-fast pointer-events-none absolute left-[14%] top-24 hidden h-[70%] w-[33%] bg-[#edf1f4] md:block"
    />
    <div
      class="js-why-choose-panel panel-float-slow pointer-events-none absolute right-[10%] top-40 hidden h-[54%] w-[22%] border-l border-r border-white/55 bg-white/18 md:block"
    />

    <div :class="overlay ? 'relative flex h-full items-center' : 'relative mx-auto max-w-7xl'">
      <div :class="overlay ? 'mx-auto w-full max-w-7xl' : 'w-full'">
        <div class="js-why-choose-heading">
          <h2 class="font-opensans text-4xl font-semibold tracking-[-0.04em] text-brand sm:text-5xl">
            Why Choose Us?
          </h2>
        </div>

        <div class="relative mt-10 min-h-[30rem] sm:min-h-[32rem] lg:min-h-[24rem]">
          <Transition name="why-choose-stage" mode="out-in">
            <div
              :key="activePairIndex"
              class="absolute inset-0 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
            >
              <article
                v-for="item in visibleItems"
                :key="item.title"
                class="js-why-choose-card group relative flex min-h-88 items-center justify-center px-6 py-10 transition-transform duration-500 will-change-transform hover:-translate-y-2 sm:px-8"
              >
                <div class="absolute inset-x-5 inset-y-0 bg-white/18 backdrop-blur-[1px] transition-all duration-500 group-hover:bg-white/25" />

                <div class="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-brand/80 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                <div class="pointer-events-none absolute right-0 bottom-0 h-8 w-8 border-b-2 border-r-2 border-brand/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

                <div class="relative z-10 mx-auto flex max-w-md flex-col items-center text-center">
                  <div
                    class="icon-float mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#5a7693,#243b4f_72%)] text-white shadow-[0_18px_36px_rgba(36,59,79,0.22)] transition-transform duration-500 group-hover:scale-110"
                  >
                    <component :is="item.icon" class="h-7 w-7" weight="fill" />
                  </div>

                  <h3 class="font-opensans text-2xl font-medium tracking-[-0.03em] text-brand transition-transform duration-500 group-hover:-translate-y-1">
                    {{ item.title }}
                  </h3>
                  <p class="mt-4 max-w-sm font-poppins text-base leading-7 text-brand/65 transition-colors duration-500 group-hover:text-brand/80">
                    {{ item.description }}
                  </p>
                </div>
              </article>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  PhCpu,
  PhHeadset,
  PhLeaf,
  PhLightning,
  PhShieldCheck,
  PhWrench,
} from '@phosphor-icons/vue';

withDefaults(defineProps<{
  overlay?: boolean;
}>(), {
  overlay: false,
});

const activePairIndex = ref(0);
let cycleInterval: ReturnType<typeof setInterval> | null = null;

const items = [
  {
    title: 'Advanced Vehicle Intelligence',
    description:
      'Integrated vehicle systems, clean digital controls, and smart diagnostics work together to deliver a more refined and dependable electric driving experience.',
    icon: PhCpu,
  },
  {
    title: 'Responsive Aftercare',
    description:
      'From onboarding to ongoing support, our team stays close to your operation with maintenance guidance, technical help, and proactive service.',
    icon: PhWrench,
  },
  {
    title: 'Safety-Led Engineering',
    description:
      'Every vehicle is selected and supported with reliability, system integrity, and practical road readiness in mind for daily commercial and private use.',
    icon: PhShieldCheck,
  },
  {
    title: 'Fast-Charge Ecosystem',
    description:
      'We think beyond the vehicle itself by aligning charging access, operational planning, and infrastructure support for smoother day-to-day adoption.',
    icon: PhLightning,
  },
  {
    title: 'Sustainable Mobility Vision',
    description:
      'Our solutions are built around long-term urban impact, helping organisations move toward cleaner transport without sacrificing usability or quality.',
    icon: PhLeaf,
  },
  {
    title: 'Human-Centered Partnership',
    description:
      'We work closely with clients, institutions, and operators to shape practical EV solutions around real mobility challenges, not abstract promises.',
    icon: PhHeadset,
  },
] as const;

const itemPairs = computed(() => {
  const pairs = [];

  for (let index = 0; index < items.length; index += 2) {
    pairs.push(items.slice(index, index + 2));
  }

  return pairs;
});

const visibleItems = computed(() => itemPairs.value[activePairIndex.value] ?? itemPairs.value[0] ?? []);

onMounted(() => {
  cycleInterval = window.setInterval(() => {
    activePairIndex.value = (activePairIndex.value + 1) % itemPairs.value.length;
  }, 4200);
});

onBeforeUnmount(() => {
  if (cycleInterval) {
    clearInterval(cycleInterval);
    cycleInterval = null;
  }
});
</script>

<style scoped>
.panel-float-slow {
  animation: panel-float-slow 9s ease-in-out infinite;
}

.panel-float-fast {
  animation: panel-float-fast 7.5s ease-in-out infinite;
}

.icon-float {
  animation: icon-float 4.2s ease-in-out infinite;
}

.why-choose-stage-enter-active,
.why-choose-stage-leave-active {
  transition:
    opacity 0.55s ease,
    transform 0.55s ease,
    filter 0.55s ease;
}

.why-choose-stage-enter-from {
  opacity: 0;
  transform: translate3d(0, 22px, 0);
  filter: blur(8px);
}

.why-choose-stage-leave-to {
  opacity: 0;
  transform: translate3d(0, -12px, 0);
  filter: blur(8px);
}

@keyframes panel-float-slow {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -18px, 0);
  }
}

@keyframes panel-float-fast {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, 14px, 0);
  }
}

@keyframes icon-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -6px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel-float-slow,
  .panel-float-fast,
  .icon-float {
    animation: none;
  }

  .why-choose-stage-enter-active,
  .why-choose-stage-leave-active {
    transition: none;
  }
}
</style>
