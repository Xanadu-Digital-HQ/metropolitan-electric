<template>
  <div ref="pageRoot" class="h-fit w-full overflow-x-clip bg-white">
    <HomeSplashOverlay
      :show="showSplash"
      :show-video="showSplashVideo"
      @video-ended="onSplashVideoEnded"
    />

    <section ref="heroSection" class="relative h-[400vh] bg-brand">
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
              class="relative flex w-full max-w-7xl items-end justify-start gap-4 overflow-x-auto pb-4 sm:justify-center sm:overflow-visible sm:pb-0 sm:gap-4 lg:gap-6 snap-x snap-mandatory perspective-none sm:perspective-[1600px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                v-for="vehicle in vehicles"
                :key="vehicle.name"
                class="js-hero-card origin-center flex-none shrink-0 w-[88vw] max-w-[24rem] snap-center sm:flex-1 sm:w-auto sm:max-w-none sm:will-change-transform"
                :class="vehicle.rotation"
              >
                <HeroVehicleCard />
              </div>
            </div>
            <div ref="heroButton" class="js-hero-button">
              <CustomButton text="Go to Gallery" class="mt-10" />
            </div>
          </div>

          <HomePhaseThreeGallery :features="phaseThreeFeatures" />
          <HomeWhyChooseUs overlay />
          <HomeClosingContactFooter overlay />
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { Observer, ScrollToPlugin } from 'gsap/all';
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

let mm: gsap.MatchMedia | null = null;
let removeHeroWheelSnap: (() => void) | null = null;
let removeHeroScrollSync: (() => void) | null = null;
let removeHeroTouchSnap: (() => void) | null = null;
let removeGalleryParallax: (() => void) | null = null;
let currentGalleryScrollTween: gsap.core.Tween | null = null;
let clearScrollSnap: () => void = () => {};
let clearTouchSnap: () => void = () => {};
const phaseTransitionDuration = 2.2;
const phaseTransitionDurationMobile = 0.9;
const wheelIntentCooldown = 180;
const queuedPhaseHandoffProgress = 0.58;
type PhaseIndex = 0 | 1 | 2 | 3 | 4;

const hasClientLoadedAssets = ref(false);
const hasSplashVideoFinished = ref(false);
const skipSplashVideo = ref(false);
const showSplash = computed(() => !hasClientLoadedAssets.value || !hasSplashVideoFinished.value);
const showSplashVideo = computed(() => !hasSplashVideoFinished.value && !skipSplashVideo.value);

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

const phaseThreeFeatures = [
  {
    title: 'Technology Meets Transportation',
    description:
      'A refined cabin, clean interface, and connected controls designed to make every journey feel deliberate, calm, and future-facing.',
    image: 'https://picsum.photos/id/1071/1400/900',
    reverse: false,
  },
  {
    title: 'Space To Share',
    description:
      'Flexible storage, generous proportions, and a practical layout that adapts to weekday movement and longer-distance travel with ease.',
    image: 'https://picsum.photos/id/1068/1400/900',
    reverse: true,
  },
  {
    title: 'Designed For The Long Run',
    description:
      'A composed driving experience, quiet cabin atmosphere, and balanced proportions that make every trip feel lighter, smoother, and more intentional.',
    image: 'https://picsum.photos/id/1050/1400/900',
    reverse: false,
  },
] as const;

if (import.meta.client) {
  gsap.registerPlugin(Observer, ScrollToPlugin);
}

const onSplashVideoEnded = () => {
  hasSplashVideoFinished.value = true;
};

const waitForWindowLoad = () => new Promise<void>((resolve) => {
  if (document.readyState === 'complete') {
    resolve();
    return;
  }

  const onLoad = () => {
    window.removeEventListener('load', onLoad);
    resolve();
  };

  window.addEventListener('load', onLoad, { once: true });
});

const preloadImage = (src: string) => new Promise<void>((resolve) => {
  const img = new Image();
  img.onload = () => resolve();
  img.onerror = () => resolve();
  img.src = src;
});

const waitForClientAssets = async () => {
  const fontReady = 'fonts' in document ? (document as Document & { fonts: FontFaceSet }).fonts.ready.catch(() => undefined) : Promise.resolve();

  await Promise.all([
    waitForWindowLoad(),
    preloadImage('/homeBg.png'),
    preloadImage('/building.png'),
    preloadImage('/wheel.svg'),
    fontReady,
  ]);

  hasClientLoadedAssets.value = true;
};

onMounted(async () => {
  void waitForClientAssets();
  await nextTick();

  if (import.meta.client) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.innerWidth < 768;
    if (prefersReducedMotion || isSmallScreen) {
      skipSplashVideo.value = true;
      hasSplashVideoFinished.value = true;
    }
  }

  if (!pageRoot.value || !heroSection.value) {
    return;
  }

  mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const page = pageRoot.value;

    if (!page) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroGallery = page.querySelector<HTMLElement>('.js-phase-three-gallery');
      const heroGalleryScroll = page.querySelector<HTMLElement>('.js-phase-three-gallery-scroll');
      const whyChooseSection = page.querySelector<HTMLElement>('.js-why-choose-us');
      const whyChooseHeading = page.querySelector<HTMLElement>('.js-why-choose-heading');
      const whyChooseCards = gsap.utils.toArray<HTMLElement>('.js-why-choose-card');
      const whyChoosePanels = gsap.utils.toArray<HTMLElement>('.js-why-choose-panel');
      const closingSection = page.querySelector<HTMLElement>('.js-home-closing');
      const closingHeading = page.querySelector<HTMLElement>('.js-home-closing-heading');
      const closingMap = page.querySelector<HTMLElement>('.js-home-closing-map');
      const closingForm = page.querySelector<HTMLElement>('.js-home-closing-form');
      const closingCar = page.querySelector<HTMLElement>('.js-home-closing-car');
      const closingFooter = page.querySelector<HTMLElement>('.js-home-closing-footer');
      const closingScroll = page.querySelector<HTMLElement>('.js-home-closing-scroll');
      const cards = gsap.utils.toArray<HTMLElement>('.js-hero-card');
      const heroFades = gsap.utils.toArray<HTMLElement>('.js-hero-fade');
      const phaseThreePanels = gsap.utils.toArray<HTMLElement>('.js-phase-three-panel');
      const phaseThreeCopies = gsap.utils.toArray<HTMLElement>('.js-phase-three-copy');
      const phaseThreeImageWrappers = gsap.utils.toArray<HTMLElement>('.js-phase-three-image-wrapper');
      const phaseThreeImages = gsap.utils.toArray<HTMLElement>('.js-phase-three-image');
      let activePhase: PhaseIndex = 0;
      let targetPhase: PhaseIndex = 0;
      let queuedPhase: PhaseIndex | null = null;
      let isTransitioning = false;
      let currentScrollTween: gsap.core.Tween | null = null;
      let currentPhaseTween: gsap.core.Tween | null = null;
      let ignoreWheelUntil = 0;
      let suppressSyncUntil = 0;
      let scrollSnapTimer: ReturnType<typeof setTimeout> | null = null;
      let touchSnapTimer: ReturnType<typeof setTimeout> | null = null;
      const isMobile = window.matchMedia('(max-width: 639px)').matches;
      const dur = (value: number) => (isMobile ? Math.max(0.7, value * 0.8) : value);
      const sectionEnterOffset = isMobile ? 6 : 8;
      const panelEnterOffset = isMobile ? 6 : 8;
      const headingEnterY = isMobile ? 22 : 32;
      const cardEnterY = isMobile ? 50 : 70;
      const closingItemEnterY = isMobile ? 40 : 54;
      const closingFooterEnterY = isMobile ? 26 : 34;
      const heroIntroShift = isMobile ? -8 : -12;
      const galleryScrollLockThreshold = isMobile ? 18 : 10;

      clearScrollSnap = () => {
        if (scrollSnapTimer) {
          clearTimeout(scrollSnapTimer);
          scrollSnapTimer = null;
        }
      };

      clearTouchSnap = () => {
        if (touchSnapTimer) {
          clearTimeout(touchSnapTimer);
          touchSnapTimer = null;
        }
      };

      const getNearestPhase = (progress: number) => {
        const offsets: Array<{ phase: PhaseIndex; offset: number }> = [
          { phase: 0, offset: phaseOffsets[0] },
          { phase: 1, offset: phaseOffsets[1] },
          { phase: 2, offset: phaseOffsets[2] },
          { phase: 3, offset: phaseOffsets[3] },
          { phase: 4, offset: phaseOffsets[4] },
        ];
        return offsets.reduce((best, candidate) => {
          return Math.abs(candidate.offset - progress) < Math.abs(best.offset - progress)
            ? candidate
            : best;
        }).phase;
      };

      const shouldForceSnap = (progress: number, phase: PhaseIndex) => {
        const threshold = isMobile ? 0.035 : 0.02;
        return Math.abs(progress - phaseOffsets[phase]) > threshold;
      };

      const getGalleryLock = (
        progress: number,
        galleryEl: HTMLElement | null,
        galleryMaxScrollTop: number,
      ) => {
        if (!galleryEl || galleryMaxScrollTop <= 0) {
          return false;
        }
        if (progress < galleryPhaseStartOffset || progress >= galleryPhaseTransitionOffset) {
          return false;
        }
        return galleryEl.scrollTop < (galleryMaxScrollTop - galleryScrollLockThreshold);
      };

      gsap.set(heroShowcase.value, { autoAlpha: 0 });
      gsap.set(heroButton.value, { autoAlpha: 0, y: 28 });
      gsap.set(heroGallery, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(heroGalleryScroll, { scrollTop: 0 });
      gsap.set(whyChooseSection, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(whyChooseHeading, { autoAlpha: 0, y: headingEnterY });
      gsap.set(whyChooseCards, { autoAlpha: 0, y: cardEnterY, scale: 0.95 });
      gsap.set(whyChoosePanels, { autoAlpha: 0, yPercent: panelEnterOffset, scale: 0.98 });
      gsap.set(closingSection, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(closingScroll, { scrollTop: 0 });
      gsap.set(closingHeading, { autoAlpha: 0, y: headingEnterY });
      gsap.set([closingMap, closingForm], { autoAlpha: 0, y: closingItemEnterY, scale: 0.98 });
      gsap.set(closingFooter, { autoAlpha: 0, y: closingFooterEnterY });
      gsap.set(closingCar, { autoAlpha: 0, xPercent: 8, scale: 0.96 });
      gsap.set(phaseThreeCopies, { autoAlpha: 0, y: 40 });
      gsap.set(phaseThreePanels, { yPercent: panelEnterOffset });
      gsap.set(phaseThreeImageWrappers, { autoAlpha: 0, yPercent: 10 });
      phaseThreeImages.forEach((image, index) => {
        gsap.set(image, {
          scale: 1.14,
          yPercent: 26 + (index * 3),
        });
      });
      gsap.set(cards, {
        transformPerspective: isMobile ? 0 : 1600,
        transformOrigin: 'center center',
        autoAlpha: 0,
        yPercent: 14,
        force3D: !isMobile,
      });

      gsap.from(heroFades, {
        y: 48,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });

      const masterTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: isMobile ? 'power2.out' : 'power2.inOut' },
      });

      masterTimeline.addLabel('phase0', 0);
      masterTimeline
        .to(heroOverlay.value, { opacity: 0.08, duration: dur(1.8) }, 0)
        .to(heroIntro.value, { autoAlpha: 0, yPercent: heroIntroShift, duration: dur(1.75) }, 0)
        .to(heroShowcase.value, { autoAlpha: 1, duration: dur(1.2) }, 0.78)
        .to(cards, {
          autoAlpha: 1,
          yPercent: 0,
          rotationY: 0,
          rotation: 0,
          scale: 1,
          duration: dur(1.8),
          stagger: 0.22,
        }, 0.95)
        .to(heroButton.value, { autoAlpha: 1, y: 0, duration: dur(1.15) }, 1.75)
        .addLabel('phase1', 2.35)
        .addLabel('phase2', 3.55)
        .to(heroBackdrop.value, { autoAlpha: 0.2, scale: 1.12, yPercent: 6, duration: dur(1.4) }, 'phase2')
        .to(heroOverlay.value, { opacity: 0.35, duration: dur(1.15) }, 'phase2')
        .to(heroShowcase.value, { autoAlpha: 0, yPercent: heroIntroShift, duration: dur(1.1) }, 'phase2')
        .to(heroButton.value, { autoAlpha: 0, y: -24, duration: dur(0.95) }, 'phase2')
        .to(heroGallery, { autoAlpha: 1, yPercent: 0, duration: dur(1.2) }, 'phase2+=0.08')
        .to(phaseThreeCopies, { autoAlpha: 1, y: 0, duration: dur(1.1), stagger: 0.16 }, 'phase2+=0.2')
        .to(phaseThreePanels, { yPercent: 0, duration: dur(1.2), stagger: 0.12 }, 'phase2+=0.14')
        .to(phaseThreeImageWrappers, { autoAlpha: 1, yPercent: 0, duration: dur(1.15), stagger: 0.14 }, 'phase2+=0.08')
        .addLabel('phase3', 5.45)
        .to(heroGallery, { autoAlpha: 0, yPercent: -sectionEnterOffset, duration: dur(1.05) }, 'phase3')
        .to(whyChooseSection, { autoAlpha: 1, yPercent: 0, duration: dur(1.05) }, 'phase3+=0.02')
        .to(whyChooseHeading, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase3+=0.16')
        .to(whyChoosePanels, { autoAlpha: 1, yPercent: 0, scale: 1, duration: dur(1), stagger: 0.12 }, 'phase3+=0.08')
        .to(whyChooseCards, { autoAlpha: 1, y: 0, scale: 1, duration: dur(0.95), stagger: 0.16 }, 'phase3+=0.22')
        .addLabel('phase4', 7.3)
        .to(whyChooseSection, { autoAlpha: 0, yPercent: -sectionEnterOffset, duration: dur(1) }, 'phase4')
        .to(closingSection, { autoAlpha: 1, yPercent: 0, duration: dur(1.05) }, 'phase4+=0.02')
        .to(closingHeading, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase4+=0.16')
        .to([closingMap, closingForm], { autoAlpha: 1, y: 0, scale: 1, duration: dur(0.95), stagger: 0.14 }, 'phase4+=0.22')
        .to(closingFooter, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase4+=0.34')
        .to(closingCar, { autoAlpha: 1, xPercent: 0, scale: 1, duration: dur(1.2) }, 'phase4+=0.18');

      phaseThreeImages.forEach((image) => {
        masterTimeline.to(image, {
          scale: 1.06,
          duration: 1.6,
        }, 'phase2');
      });

      const galleryScrollEl = heroGalleryScroll;

      if (galleryScrollEl && phaseThreeImages.length) {
        const imageSetters = phaseThreeImages.map((image) => gsap.quickSetter(image, 'yPercent'));

        const syncGalleryParallax = () => {
          const containerRect = galleryScrollEl.getBoundingClientRect();
          const containerCenter = containerRect.top + (containerRect.height / 2);

          phaseThreePanels.forEach((panel, index) => {
            const panelRect = panel.getBoundingClientRect();
            const panelCenter = panelRect.top + (panelRect.height / 2);
            const maxOffset = (containerRect.height + panelRect.height) / 2;
            const normalizedOffset = gsap.utils.clamp(-1, 1, (panelCenter - containerCenter) / maxOffset);
            const setImageYPercent = imageSetters[index];

            if (!setImageYPercent) {
              return;
            }

            setImageYPercent(-normalizedOffset * 34);
          });
        };

        syncGalleryParallax();
        galleryScrollEl.addEventListener('scroll', syncGalleryParallax, { passive: true });
        removeGalleryParallax = () => {
          currentGalleryScrollTween?.kill();
          currentGalleryScrollTween = null;
          galleryScrollEl.removeEventListener('scroll', syncGalleryParallax);
        };
      }

      if (!isMobile) {
        if (cards[0]) {
          masterTimeline.to(cards[0], { xPercent: -6, z: -40, duration: 1.8 }, 0.95);
        }

        if (cards[1]) {
          masterTimeline.to(cards[1], { yPercent: -4, z: 80, scale: 1.04, duration: 1.8 }, 0.95);
        }

        if (cards[2]) {
          masterTimeline.to(cards[2], { xPercent: 6, z: -40, duration: 1.8 }, 0.95);
        }
      }

      if (!isMobile) {
        if (cards[0]) {
          masterTimeline.to(cards[0], { xPercent: -42, yPercent: 14, rotationY: 32, rotation: -8, scale: 0.88, duration: 1.35 }, 'phase2');
        }

        if (cards[1]) {
          masterTimeline.to(cards[1], { yPercent: -8, scale: 1.08, duration: 1.35 }, 'phase2');
        }

        if (cards[2]) {
          masterTimeline.to(cards[2], { xPercent: 42, yPercent: 14, rotationY: -32, rotation: 8, scale: 0.88, duration: 1.35 }, 'phase2');
        }
      }

      const phaseLabels: Record<PhaseIndex, 'phase0' | 'phase1' | 'phase2' | 'phase3' | 'phase4'> = {
        0: 'phase0',
        1: 'phase1',
        2: 'phase2',
        3: 'phase3',
        4: 'phase4',
      };
      const phaseTargetTimes: Record<PhaseIndex, number> = {
        0: 0,
        1: 2.95,
        2: 5.0,
        3: 6.9,
        4: 8.7,
      };
      const phaseOffsets: Record<PhaseIndex, number> = {
        0: 0,
        1: 0.18,
        2: 0.5,
        3: 0.76,
        4: 0.88,
      };
      const galleryPhaseStartOffset = phaseOffsets[2];
      const galleryPhaseTransitionOffset = phaseOffsets[3];
      const closingPhaseStartOffset = phaseOffsets[4];
      const closingPhaseEndOffset = 1;
      const phaseThresholds: Array<{ phase: PhaseIndex; offset: number }> = [
        { phase: 4, offset: phaseOffsets[4] },
        { phase: 3, offset: phaseOffsets[3] },
        { phase: 2, offset: galleryPhaseStartOffset },
        { phase: 1, offset: 0.09 },
      ];

      const goToPhase = (nextPhase: PhaseIndex, force = false) => {
        if (!heroSection.value || (!force && nextPhase === targetPhase)) {
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
        const targetTime = phaseTargetTimes[nextPhase] ?? masterTimeline.labels[targetLabel];
        let handedOffToQueuedPhase = false;

        if (typeof targetTime !== 'number') {
          return;
        }

        isTransitioning = true;
        targetPhase = nextPhase;
        ignoreWheelUntil = Date.now() + wheelIntentCooldown;
        suppressSyncUntil = Date.now() + 120;
        currentScrollTween?.kill();
        currentPhaseTween?.kill();

        if (nextPhase !== 4 && closingScroll) {
          closingScroll.scrollTop = 0;
        }

        currentScrollTween = gsap.to(window, {
          scrollTo: { y: targetY, autoKill: false },
          duration: isMobile ? phaseTransitionDurationMobile : phaseTransitionDuration,
          ease: isMobile ? 'power1.out' : 'power2.out',
          overwrite: true,
        });

        currentPhaseTween = gsap.to(masterTimeline, {
          time: targetTime,
          duration: isMobile ? phaseTransitionDurationMobile : phaseTransitionDuration,
          ease: isMobile ? 'power1.out' : 'power2.out',
          overwrite: true,
          onUpdate: () => {
            const progress = currentPhaseTween?.progress() ?? 0;

            if (
              handedOffToQueuedPhase ||
              queuedPhase === null ||
              queuedPhase === nextPhase ||
              progress < queuedPhaseHandoffProgress
            ) {
              return;
            }

            handedOffToQueuedPhase = true;

            const nextQueuedPhase = queuedPhase;
            queuedPhase = null;
            activePhase = nextPhase;
            targetPhase = nextPhase;
            isTransitioning = false;

            currentScrollTween?.kill();
            currentScrollTween = null;
            currentPhaseTween?.kill();
            currentPhaseTween = null;

            goToPhase(nextQueuedPhase);
          },
          onComplete: () => {
            if (handedOffToQueuedPhase) {
              return;
            }

            if (nextPhase === 4 && closingScroll) {
              closingScroll.scrollTop = 0;
            }

            if (heroSection.value) {
              const heroStart = heroSection.value.offsetTop;
              const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
              const totalDistance = heroEnd - heroStart;
              if (totalDistance > 0) {
                const targetY = heroStart + (totalDistance * phaseOffsets[nextPhase]);
                if (Math.abs(window.scrollY - targetY) > 2) {
                  window.scrollTo({ top: targetY, behavior: 'auto' });
                }
              }
            }

            activePhase = nextPhase;
            targetPhase = nextPhase;
            isTransitioning = false;
            ignoreWheelUntil = Date.now() + 120;
            suppressSyncUntil = Date.now() + 220;
            currentScrollTween = null;
            currentPhaseTween = null;

            if (queuedPhase !== null && queuedPhase !== activePhase) {
              const nextQueuedPhase = queuedPhase;
              queuedPhase = null;
              goToPhase(nextQueuedPhase);
              return;
            }

            queuedPhase = null;
          },
          onInterrupt: () => {
            currentScrollTween?.kill();
            currentScrollTween = null;
            currentPhaseTween = null;
            isTransitioning = false;
            suppressSyncUntil = Date.now() + 120;
          },
        });
      };

      const syncTimelineToScroll = () => {
        if (!heroSection.value || isTransitioning || Date.now() < suppressSyncUntil) {
          return;
        }

        const heroStart = heroSection.value.offsetTop;
        const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
        const totalDistance = heroEnd - heroStart;
        const withinHero = window.scrollY >= heroStart && window.scrollY <= heroEnd;

        if (totalDistance <= 0) {
          return;
        }

        if (window.scrollY > heroEnd && activePhase < 4) {
          const boundedPhase = (activePhase + 1) as PhaseIndex;
          window.scrollTo({ top: heroStart + (totalDistance * phaseOffsets[activePhase]), behavior: 'auto' });
          goToPhase(boundedPhase);
          return;
        }

        if (window.scrollY < heroStart && activePhase > 0) {
          const boundedPhase = (activePhase - 1) as PhaseIndex;
          window.scrollTo({ top: heroStart + (totalDistance * phaseOffsets[activePhase]), behavior: 'auto' });
          goToPhase(boundedPhase);
          return;
        }

        const progress = gsap.utils.clamp(0, 1, (window.scrollY - heroStart) / totalDistance);
        const galleryEl = heroGalleryScroll;
        const galleryMaxScrollTop = galleryEl ? Math.max(0, galleryEl.scrollHeight - galleryEl.clientHeight) : 0;
        const closingEl = closingScroll;
        const closingMaxScrollTop = closingEl ? Math.max(0, closingEl.scrollHeight - closingEl.clientHeight) : 0;
        const galleryLocked = getGalleryLock(progress, galleryEl, galleryMaxScrollTop);
        let desiredPhase: PhaseIndex = 0;

        if (galleryLocked) {
          desiredPhase = 2;
        }
        else {
          for (const threshold of phaseThresholds) {
            if (progress >= threshold.offset) {
              desiredPhase = threshold.phase;
              break;
            }
          }
        }

        if (Math.abs(desiredPhase - activePhase) > 1) {
          const boundedPhase = (activePhase + Math.sign(desiredPhase - activePhase)) as PhaseIndex;
          goToPhase(boundedPhase);
          return;
        }

        if (closingEl && closingMaxScrollTop > 0 && progress >= closingPhaseStartOffset) {
          masterTimeline.time(phaseTargetTimes[4], false);
          closingEl.scrollTop = gsap.utils.mapRange(
            closingPhaseStartOffset,
            closingPhaseEndOffset,
            0,
            closingMaxScrollTop,
            progress,
          );
          if (galleryEl) {
            galleryEl.scrollTop = galleryMaxScrollTop;
          }
        }
        else if (galleryEl && galleryMaxScrollTop > 0 && progress >= galleryPhaseStartOffset) {
          if (progress < galleryPhaseTransitionOffset) {
            const galleryProgress = gsap.utils.mapRange(
              galleryPhaseStartOffset,
              galleryPhaseTransitionOffset,
              0,
              1,
              progress,
            );

            masterTimeline.time(phaseTargetTimes[2], false);
            galleryEl.scrollTop = galleryProgress * galleryMaxScrollTop;
          }
          else {
            masterTimeline.time(
              gsap.utils.mapRange(
                galleryPhaseTransitionOffset,
                1,
                phaseTargetTimes[3],
                phaseTargetTimes[4],
                progress,
              ),
              false,
            );
            galleryEl.scrollTop = galleryMaxScrollTop;
          }
        }
        else {
          if (galleryEl) {
            galleryEl.scrollTop = 0;
          }
          if (closingEl) {
            closingEl.scrollTop = 0;
          }

          let nextTime = phaseTargetTimes[0];

          if (progress < phaseOffsets[1]) {
            nextTime = gsap.utils.mapRange(
              phaseOffsets[0],
              phaseOffsets[1],
              phaseTargetTimes[0],
              phaseTargetTimes[1],
              progress,
            );
          }
          else if (progress < galleryPhaseStartOffset) {
            nextTime = gsap.utils.mapRange(
              phaseOffsets[1],
              galleryPhaseStartOffset,
              phaseTargetTimes[1],
              phaseTargetTimes[2],
              progress,
            );
          }

          masterTimeline.time(nextTime, false);
        }

        activePhase = desiredPhase;
        targetPhase = desiredPhase;

        clearScrollSnap();
        if (withinHero) {
          scrollSnapTimer = setTimeout(() => {
            if (isTransitioning) {
              return;
            }
            let nearestPhase = getNearestPhase(progress);
            if (galleryLocked && nearestPhase > 2) {
              nearestPhase = 2;
            }
            if (nearestPhase !== activePhase) {
              goToPhase(nearestPhase);
              return;
            }
            if (shouldForceSnap(progress, activePhase)) {
              goToPhase(activePhase, true);
            }
          }, isMobile ? 220 : 140);
        }
      };

      const onTouchEnd = () => {
        if (!heroSection.value || isTransitioning) {
          return;
        }
        const heroStart = heroSection.value.offsetTop;
        const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
        const withinHero = window.scrollY >= heroStart && window.scrollY <= heroEnd;
        if (!withinHero) {
          return;
        }
        const totalDistance = heroEnd - heroStart;
        if (totalDistance <= 0) {
          return;
        }
        clearTouchSnap();
        touchSnapTimer = setTimeout(() => {
          if (isTransitioning) {
            return;
          }
          const progress = gsap.utils.clamp(0, 1, (window.scrollY - heroStart) / totalDistance);
          const galleryEl = heroGalleryScroll;
          const galleryMaxScrollTop = galleryEl ? Math.max(0, galleryEl.scrollHeight - galleryEl.clientHeight) : 0;
          const galleryLocked = getGalleryLock(progress, galleryEl, galleryMaxScrollTop);
          let nearestPhase = getNearestPhase(progress);
          if (galleryLocked && nearestPhase > 2) {
            nearestPhase = 2;
          }
          if (nearestPhase !== activePhase) {
            goToPhase(nearestPhase);
            return;
          }
          if (shouldForceSnap(progress, activePhase)) {
            goToPhase(activePhase, true);
          }
        }, 120);
      };

      const onWheel = (event: WheelEvent) => {
        if (!heroSection.value) {
          return;
        }

        const heroStart = heroSection.value.offsetTop;
        const heroEnd = heroStart + heroSection.value.offsetHeight - window.innerHeight;
        const currentY = window.scrollY;
        const withinHero = currentY >= heroStart && currentY <= heroEnd;

        if (!withinHero || Math.abs(event.deltaY) < 4 || Date.now() < ignoreWheelUntil) {
          return;
        }

        const direction = event.deltaY > 0 ? 1 : -1;
        const phaseBase = isTransitioning ? targetPhase : activePhase;

        if (phaseBase === 2 && heroGalleryScroll) {
          const galleryEl = heroGalleryScroll;
          const maxScrollTop = galleryEl.scrollHeight - galleryEl.clientHeight;
          const atGalleryBottom = galleryEl.scrollTop >= (maxScrollTop - 2);
          const atGalleryTop = galleryEl.scrollTop <= 2;
          const canScrollGalleryDown = event.deltaY > 0 && !atGalleryBottom;
          const canScrollGalleryUp = event.deltaY < 0 && !atGalleryTop;

          if (canScrollGalleryDown || canScrollGalleryUp) {
            event.preventDefault();
            const nextScrollTop = Math.max(0, Math.min(maxScrollTop, galleryEl.scrollTop + (event.deltaY * 2.1)));
            currentGalleryScrollTween?.kill();
            currentGalleryScrollTween = gsap.to(galleryEl, {
              scrollTo: { y: nextScrollTop, autoKill: false },
              duration: 0.9,
              ease: 'expo.out',
              overwrite: true,
              onComplete: () => {
                currentGalleryScrollTween = null;
              },
              onInterrupt: () => {
                currentGalleryScrollTween = null;
              },
            });
            return;
          }
        }

        if (phaseBase === 4 && closingScroll) {
          const closingEl = closingScroll;
          const maxScrollTop = closingEl.scrollHeight - closingEl.clientHeight;
          const atBottom = closingEl.scrollTop >= (maxScrollTop - 2);
          const atTop = closingEl.scrollTop <= 2;
          const canScrollDown = event.deltaY > 0 && !atBottom;
          const canScrollUp = event.deltaY < 0 && !atTop;

          if (canScrollDown || canScrollUp) {
            event.preventDefault();
            const nextScrollTop = Math.max(0, Math.min(maxScrollTop, closingEl.scrollTop + (event.deltaY * 2.1)));
            gsap.to(closingEl, {
              scrollTo: { y: nextScrollTop, autoKill: false },
              duration: 0.9,
              ease: 'expo.out',
              overwrite: true,
            });
            return;
          }
        }
        const nextPhase = Math.max(0, Math.min(4, phaseBase + direction)) as PhaseIndex;

        if (nextPhase === phaseBase) {
          return;
        }

        event.preventDefault();

        if (isTransitioning) {
          queuedPhase = nextPhase;
          ignoreWheelUntil = Date.now() + wheelIntentCooldown;
          return;
        }

        goToPhase(nextPhase);
      };

      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('scroll', syncTimelineToScroll, { passive: true });
      window.addEventListener('touchend', onTouchEnd, { passive: true });
      removeHeroWheelSnap = () => {
        window.removeEventListener('wheel', onWheel);
      };
      removeHeroScrollSync = () => {
        window.removeEventListener('scroll', syncTimelineToScroll);
      };
      removeHeroTouchSnap = () => {
        window.removeEventListener('touchend', onTouchEnd);
      };

      syncTimelineToScroll();
    }, page);

    return () => {
      removeGalleryParallax?.();
      removeGalleryParallax = null;
      currentGalleryScrollTween?.kill();
      currentGalleryScrollTween = null;
      removeHeroWheelSnap?.();
      removeHeroWheelSnap = null;
      removeHeroScrollSync?.();
      removeHeroScrollSync = null;
      removeHeroTouchSnap?.();
      clearTouchSnap();
      clearScrollSnap();
      ctx.revert();
    };
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    removeGalleryParallax?.();
    removeGalleryParallax = null;
    currentGalleryScrollTween?.kill();
    currentGalleryScrollTween = null;
    removeHeroWheelSnap?.();
    removeHeroWheelSnap = null;
    removeHeroScrollSync?.();
    removeHeroScrollSync = null;
    removeHeroTouchSnap?.();
    removeHeroTouchSnap = null;
    clearTouchSnap();
    clearScrollSnap();
    gsap.set([heroShowcase.value, heroButton.value, heroIntro.value], { clearProps: 'all' });
    gsap.set('.js-hero-card', { clearProps: 'all' });
    gsap.set(['.js-why-choose-us', '.js-why-choose-heading', '.js-why-choose-card', '.js-why-choose-panel'], { clearProps: 'all' });
    gsap.set(['.js-home-closing', '.js-home-closing-heading', '.js-home-closing-map', '.js-home-closing-form', '.js-home-closing-car', '.js-home-closing-footer'], { clearProps: 'all' });
  });
});

onBeforeUnmount(() => {
  removeGalleryParallax?.();
  removeGalleryParallax = null;
  currentGalleryScrollTween?.kill();
  currentGalleryScrollTween = null;
  removeHeroWheelSnap?.();
  removeHeroWheelSnap = null;
  removeHeroScrollSync?.();
  removeHeroScrollSync = null;
  removeHeroTouchSnap?.();
  removeHeroTouchSnap = null;
  mm?.revert();
  mm = null;

  if (import.meta.client) {
    document.body.style.overflow = '';
  }
});

watch(showSplash, (isVisible) => {
  if (!import.meta.client) {
    return;
  }

  document.body.style.overflow = isVisible ? 'hidden' : '';
}, { immediate: true });
</script>
