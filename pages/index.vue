<template>
  <div ref="pageRoot" class="h-fit w-full overflow-x-clip bg-white">
    <section ref="heroSection" class="relative h-[220vh] bg-brand">
      <div ref="heroSticky" class="sticky top-0 h-screen overflow-hidden">
        <div
          ref="heroBackdrop"
          class="absolute top-0 left-0 size-full bg-cover bg-center z-0 will-change-transform"
          style="background-image: url('/homeBg.png')"
        />
        <div
          ref="heroOverlay"
          class="absolute inset-0 z-20 bg-linear-to-b from-[#10192066] via-[#10192099] to-brand backdrop-blur-[3px]"
        />

        <div
          ref="heroContent"
          class="relative z-30 flex h-full flex-col justify-center items-center px-4 pb-12 pt-24 sm:px-6 lg:px-8"
        >
          <div ref="heroIntro" class="flex flex-col gap-16 items-center">
            <div class="js-hero-fade">
              <Hero id="index" />
            </div>
          </div>

          <div
            ref="heroShowcase"
            class="absolute inset-x-0 bottom-10 z-40 flex flex-col items-center gap-y-8 px-4 pb-6 sm:gap-y-10 sm:px-6 lg:px-8"
          >
            <div
              ref="vehicleDeck"
              class="relative flex w-full max-w-7xl items-end justify-center gap-3 sm:gap-4 lg:gap-6 [perspective:1600px]"
            >
              <div
                v-for="vehicle in vehicles"
                :key="vehicle.name"
                class="js-hero-card origin-center flex-1 will-change-transform"
                :class="vehicle.rotation"
              >
                <HeroVehicleCard />
              </div>
            </div>
            <div ref="heroButton" class="js-hero-button">
              <CustomButton text="Go to Gallery" class="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      ref="contentStack"
      class="relative z-40 -mt-[18vh] rounded-t-4xl bg-white pt-6 shadow-[0_-40px_120px_rgba(16,25,32,0.22)]"
    >
      <SectionFirst id="about" class="relative min-h-screen max-h-fit scroll-smooth z-20" />
      <SectionSecond
        :data="data"
        id="services"
        class="relative min-h-screen max-h-fit z-20 before:content-[''] before:absolute before:bg-[#EEEFED] before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
      <SectionFAQ
        class="relative min-h-screen max-h-fit z-20 before:content-[''] before:absolute before:bg-brand/50 before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
      <SectionThird
        id="contact"
        class="relative min-h-screen max-h-fit z-20 before:content-[''] before:absolute before:bg-white before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import type { Card } from '~/types/types.js';

defineProps<{ data: Card[] }>();

useSeoMeta({
  title: 'Leading the Electric Vehicles (EV) Revolution across the Continent',
  ogTitle: 'Leading the Electric Vehicles (EV) Revolution across the Continent',
  description:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogDescription:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const pageRoot = ref<HTMLElement | null>(null);
const heroSection = ref<HTMLElement | null>(null);
const heroSticky = ref<HTMLElement | null>(null);
const heroBackdrop = ref<HTMLElement | null>(null);
const heroOverlay = ref<HTMLElement | null>(null);
const heroContent = ref<HTMLElement | null>(null);
const heroIntro = ref<HTMLElement | null>(null);
const heroShowcase = ref<HTMLElement | null>(null);
const heroButton = ref<HTMLElement | null>(null);
const vehicleDeck = ref<HTMLElement | null>(null);
const contentStack = ref<HTMLElement | null>(null);

let mm: gsap.MatchMedia | null = null;
let removeHeroWheelSnap: (() => void) | null = null;

const vehicles = [
  {
    name: 'Vehicle 1',
    image: '/images/vehicle1.png',
    rotation: '[transform:perspective(1200px)_rotateY(20deg)_rotateX(0deg)]',
  },
  {
    name: 'Vehicle 2',
    image: '/images/vehicle2.png',
    rotation: '[transform:perspective(1200px)_rotateY(0deg)]',
  },
  {
    name: 'Vehicle 3',
    image: '/images/vehicle3.png',
    rotation: '[transform:perspective(1200px)_rotateY(-20deg)_rotateX(0deg)]',
  },
];

if (import.meta.client) {
  gsap.registerPlugin(Observer, ScrollToPlugin);
}

onMounted(async () => {
  await nextTick();

  if (!pageRoot.value || !heroSection.value || !contentStack.value) {
    return;
  }

  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.js-hero-card');
      const heroFades = gsap.utils.toArray<HTMLElement>('.js-hero-fade');
      let activePhase = 0;
      let isTransitioning = false;

      gsap.set(contentStack.value, { y: 160 });
      gsap.set(heroShowcase.value, { autoAlpha: 0 });
      gsap.set(heroButton.value, { autoAlpha: 0, y: 28 });
      gsap.set(cards, {
        transformPerspective: 1600,
        transformOrigin: 'center center',
        autoAlpha: 0,
        yPercent: 14,
      });

      gsap.from(heroFades, {
        y: 48,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });

      const masterTimeline = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } });

      masterTimeline.addLabel('phase0', 0);
      masterTimeline
        .to(heroOverlay.value, { opacity: 0.08 }, 0)
        .to(heroIntro.value, { autoAlpha: 0, yPercent: -12 }, 0)
        .to(heroShowcase.value, { autoAlpha: 1, duration: 0.35 }, 0.15)
        .to(cards, {
          autoAlpha: 1,
          yPercent: 0,
          rotationY: 0,
          rotation: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
        }, 0.15)
        .to(cards[0], { xPercent: -6, z: -40, duration: 0.45 }, 0.15)
        .to(cards[1], { yPercent: -4, z: 80, scale: 1.04, duration: 0.45 }, 0.15)
        .to(cards[2], { xPercent: 6, z: -40, duration: 0.45 }, 0.15)
        .to(heroButton.value, { autoAlpha: 1, y: 0, duration: 0.32 }, 0.32)
        .addLabel('phase1', 1.05)
        .to(heroBackdrop.value, { scale: 1.18, yPercent: 8, duration: 0.65 }, 'phase1')
        .to(heroShowcase.value, { autoAlpha: 0.32, yPercent: -10, duration: 0.55 }, 'phase1')
        .to(heroButton.value, { autoAlpha: 0, y: -24, duration: 0.35 }, 'phase1')
        .to(contentStack.value, { y: 0, duration: 0.6 }, 'phase1+=0.08');

      if (cards[0]) {
        masterTimeline.to(cards[0], { xPercent: -42, yPercent: 14, rotationY: 32, rotation: -8, scale: 0.88, duration: 0.6 }, 'phase1');
      }

      if (cards[1]) {
        masterTimeline.to(cards[1], { yPercent: -8, scale: 1.08, duration: 0.6 }, 'phase1');
      }

      if (cards[2]) {
        masterTimeline.to(cards[2], { xPercent: 42, yPercent: 14, rotationY: -32, rotation: 8, scale: 0.88, duration: 0.6 }, 'phase1');
      }

      masterTimeline.addLabel('phase2');

      const phaseLabels = ['phase0', 'phase1', 'phase2'] as const;
      const phaseOffsets = [0, 0.38, 1];

      const goToPhase = (nextPhase: number) => {
        if (!heroSection.value || nextPhase === activePhase || isTransitioning) {
          return;
        }

        const heroStart = heroSection.value.offsetTop;
        const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
        const totalDistance = heroEnd - heroStart;

        if (totalDistance <= 0) {
          return;
        }

        const targetY = heroStart + (totalDistance * phaseOffsets[nextPhase]);
        const targetLabel = phaseLabels[nextPhase];

        isTransitioning = true;

        const syncScroll = gsap.to(window, {
          scrollTo: targetY,
          duration: 0.7,
          ease: 'power3.inOut',
          overwrite: true,
        });

        gsap.to(masterTimeline, {
          time: masterTimeline.labels[targetLabel],
          duration: 0.7,
          ease: 'power3.inOut',
          overwrite: true,
          onComplete: () => {
            activePhase = nextPhase;
            isTransitioning = false;
          },
          onInterrupt: () => {
            syncScroll.kill();
            isTransitioning = false;
          },
        });
      };

      const onWheel = (event: WheelEvent) => {
        if (!heroSection.value) {
          return;
        }

        const heroStart = heroSection.value.offsetTop;
        const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
        const currentY = window.scrollY;
        const withinHero = currentY >= heroStart && currentY <= heroEnd;

        if (!withinHero || Math.abs(event.deltaY) < 4 || isTransitioning) {
          return;
        }

        const direction = event.deltaY > 0 ? 1 : -1;
        const nextPhase = Math.max(0, Math.min(2, activePhase + direction));

        if (nextPhase === activePhase) {
          return;
        }

        event.preventDefault();
        goToPhase(nextPhase);
      };

      window.addEventListener('wheel', onWheel, { passive: false });
      removeHeroWheelSnap = () => {
        window.removeEventListener('wheel', onWheel);
      };
    }, pageRoot.value);

    return () => {
      removeHeroWheelSnap?.();
      removeHeroWheelSnap = null;
      ctx.revert();
    };
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    removeHeroWheelSnap?.();
    removeHeroWheelSnap = null;
    gsap.set(contentStack.value, { clearProps: 'transform' });
    gsap.set([heroShowcase.value, heroButton.value, heroIntro.value], { clearProps: 'all' });
    gsap.set('.js-hero-card', { clearProps: 'all' });
  });
});

onBeforeUnmount(() => {
  removeHeroWheelSnap?.();
  removeHeroWheelSnap = null;
  mm?.revert();
  mm = null;
});
</script>
