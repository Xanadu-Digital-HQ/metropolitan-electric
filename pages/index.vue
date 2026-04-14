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
          class="absolute top-0 left-0 size-full bg-center bg-cover z-0 will-change-transform"
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
import { ScrollTrigger } from 'gsap/all';

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
let removeHeroScrollTrigger: (() => void) | null = null;
let heroScrollTrigger: ScrollTrigger | null = null;
const route = useRoute();

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
  gsap.registerPlugin(ScrollTrigger);
}

const onSplashVideoEnded = () => {
  hasSplashVideoFinished.value = true;
};

const phaseScrollProgress = {
  intro: 0,
  gallery: 0.22,
  why: 0.55,
  contact: 0.7,
} as const;
const phaseScrollPositions = ref<Partial<Record<keyof typeof phaseScrollProgress, number>>>({});

const getPhaseQueryValue = (phase: typeof route.query.phase) => {
  if (Array.isArray(phase)) {
    return typeof phase[0] === 'string' ? phase[0] : undefined;
  }

  return typeof phase === 'string' ? phase : undefined;
};

const scrollToPhase = (phase: string | null | undefined) => {
  if (!import.meta.client || !heroSection.value || !phase) {
    return;
  }

  const mappedScrollTop = phaseScrollPositions.value[phase as keyof typeof phaseScrollPositions.value];

  window.scrollTo({
    top: typeof mappedScrollTop === 'number'
      ? mappedScrollTop
      : (() => {
          const progress = phaseScrollProgress[phase as keyof typeof phaseScrollProgress];

          if (typeof progress !== 'number') {
            return window.scrollY;
          }

          const rect = heroSection.value!.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const scrollableDistance = Math.max(0, heroSection.value!.offsetHeight - window.innerHeight);
          return sectionTop + (scrollableDistance * progress);
        })(),
    behavior: 'smooth',
  });
};

const handlePhaseNavigation = (event: Event) => {
  const phase = (event as CustomEvent<string>).detail;
  scrollToPhase(phase);
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

  const initialPhase = getPhaseQueryValue(route.query.phase);

  if (typeof initialPhase === 'string') {
    setTimeout(() => {
      scrollToPhase(initialPhase);
    }, 150);
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
      const heroGalleryTrack = page.querySelector<HTMLElement>('.js-phase-three-gallery-track');
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
      const closingTrack = page.querySelector<HTMLElement>('.js-home-closing-track');
      const cards = gsap.utils.toArray<HTMLElement>('.js-hero-card');
      const heroFades = gsap.utils.toArray<HTMLElement>('.js-hero-fade');
      const phaseThreePanels = gsap.utils.toArray<HTMLElement>('.js-phase-three-panel');
      const phaseThreeCopies = gsap.utils.toArray<HTMLElement>('.js-phase-three-copy');
      const phaseThreeImageWrappers = gsap.utils.toArray<HTMLElement>('.js-phase-three-image-wrapper');
      const phaseThreeImages = gsap.utils.toArray<HTMLElement>('.js-phase-three-image');
      const isMobile = window.matchMedia('(max-width: 639px)').matches;
      const dur = (value: number) => (isMobile ? Math.max(0.7, value * 0.8) : value);
      const sectionEnterOffset = isMobile ? 6 : 8;
      const panelEnterOffset = isMobile ? 6 : 8;
      const headingEnterY = isMobile ? 22 : 32;
      const cardEnterY = isMobile ? 50 : 70;
      const closingItemEnterY = isMobile ? 40 : 54;
      const closingFooterEnterY = isMobile ? 26 : 34;
      const heroIntroShift = isMobile ? -8 : -12;

      const getGalleryScrollDistance = () => {
        if (!heroGalleryScroll || !heroGalleryTrack) {
          return 0;
        }
        const total = heroGalleryTrack.scrollHeight - heroGalleryScroll.clientHeight;
        const endPadding = isMobile ? 200 : 120;
        return Math.max(0, total + endPadding);
      };
      const galleryScrollDistance = () => {
        return getGalleryScrollDistance();
      };
      const getClosingScrollDistance = () => {
        if (!closingScroll || !closingTrack) {
          return 0;
        }
        const total = closingTrack.scrollHeight - closingScroll.clientHeight;
        const endPadding = isMobile ? 40 : 220;
        return Math.max(0, total - endPadding);
      };

      gsap.set(heroShowcase.value, { autoAlpha: 0 });
      gsap.set(heroButton.value, { autoAlpha: 0, y: 28 });
      gsap.set(heroGallery, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(heroGalleryTrack, { y: 0 });
      gsap.set(whyChooseSection, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(whyChooseHeading, { autoAlpha: 0, y: headingEnterY });
      gsap.set(whyChooseCards, { autoAlpha: 0, y: cardEnterY, scale: 0.95 });
      gsap.set(whyChoosePanels, { autoAlpha: 0, yPercent: panelEnterOffset, scale: 0.98 });
      gsap.set(closingSection, { autoAlpha: 0, yPercent: sectionEnterOffset });
      gsap.set(closingTrack, { y: 0 });
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
        defaults: { ease: isMobile ? 'power2.out' : 'power2.inOut' },
      });
      const syncPhaseScrollPositions = () => {
        if (!heroScrollTrigger) {
          return;
        }

        const duration = masterTimeline.duration();
        const start = Number(heroScrollTrigger.start);
        const end = Number(heroScrollTrigger.end);

        if (!Number.isFinite(duration) || !Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
          return;
        }

        const getLabelScroll = (label: string) => {
          const time = masterTimeline.labels[label];

          if (typeof time !== 'number') {
            return undefined;
          }

          return start + (((end - start) * time) / duration);
        };

        phaseScrollPositions.value = {
          intro: start,
          gallery: getLabelScroll('phase1Nav') ?? getLabelScroll('phase1'),
          why: getLabelScroll('phase3Nav') ?? getLabelScroll('phase3'),
          contact: getLabelScroll('phase4Nav') ?? getLabelScroll('phase4'),
        };
      };

      const galleryScrollDuration = isMobile ? 7.8 : 4.2;
      const closingScrollDuration = isMobile ? 7.2 : 5.2;
      const imageSetters = phaseThreeImages.map((image) => gsap.quickTo(image, 'yPercent', {
        duration: 0.28,
        ease: 'power2.out',
      }));

      const syncGalleryParallax = () => {
        if (!heroGalleryScroll) {
          return;
        }
        const containerRect = heroGalleryScroll.getBoundingClientRect();
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

      masterTimeline.addLabel('phase0', 0);
      masterTimeline
        .to(heroOverlay.value, { opacity: 0.08, duration: dur(1.2) }, 0)
        .to(heroIntro.value, { autoAlpha: 0, yPercent: heroIntroShift, duration: dur(1.1) }, 0)
        .to(heroShowcase.value, { autoAlpha: 1, duration: dur(0.9) }, 0.5)
        .to(cards, {
          autoAlpha: 1,
          yPercent: 0,
          rotationY: 0,
          rotation: 0,
          scale: 1,
          duration: dur(1.1),
          stagger: 0.16,
        }, 0.7)
        .to(heroButton.value, { autoAlpha: 1, y: 0, duration: dur(0.95) }, 0.7)
        .addLabel('phase1', 2.35)
        .addLabel('phase1Nav', 1.9)
        .addLabel('phase2', 3.55)
        .to(heroBackdrop.value, { autoAlpha: 0.2, scale: 1.12, yPercent: 6, duration: dur(1.4) }, 'phase2')
        .to(heroOverlay.value, { opacity: 0.35, duration: dur(1.15) }, 'phase2')
        .to(heroShowcase.value, { autoAlpha: 0, yPercent: heroIntroShift, duration: dur(1.1) }, 'phase2')
        .to(heroButton.value, { autoAlpha: 0, y: -24, duration: dur(0.95) }, 'phase2')
        .to(heroGallery, { autoAlpha: 1, yPercent: 0, duration: dur(1.2) }, 'phase2+=0.08')
        .addLabel('phase2Nav', 'phase2+=0.85')
        .to(phaseThreeCopies, { autoAlpha: 1, y: 0, duration: dur(1.1), stagger: 0.16 }, 'phase2+=0.2')
        .to(phaseThreePanels, { yPercent: 0, duration: dur(1.2), stagger: 0.12 }, 'phase2+=0.14')
        .to(phaseThreeImageWrappers, { autoAlpha: 1, yPercent: 0, duration: dur(1.15), stagger: 0.14 }, 'phase2+=0.08')
        .to(heroGalleryTrack, {
          y: () => -galleryScrollDistance(),
          duration: galleryScrollDuration,
          ease: 'none',
        }, 'phase2+=0.3')
        .addLabel('phase3', `phase2+=${galleryScrollDuration + 1.4}`)
        .to(heroGallery, { autoAlpha: 0, yPercent: -sectionEnterOffset, duration: dur(1.05) }, 'phase3')
        .to(whyChooseSection, { autoAlpha: 1, yPercent: 0, duration: dur(1.05) }, 'phase3+=0.02')
        .addLabel('phase3Nav', 'phase3+=0.95')
        .to(whyChooseHeading, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase3+=0.16')
        .to(whyChoosePanels, { autoAlpha: 1, yPercent: 0, scale: 1, duration: dur(1), stagger: 0.12 }, 'phase3+=0.08')
        .to(whyChooseCards, { autoAlpha: 1, y: 0, scale: 1, duration: dur(0.95), stagger: 0.16 }, 'phase3+=0.22')
        .addLabel('phase4', 'phase3+=1.9')
        .to(whyChooseSection, { autoAlpha: 0, yPercent: -sectionEnterOffset, duration: dur(1) }, 'phase4')
        .to(closingSection, { autoAlpha: 1, yPercent: 0, duration: dur(1.05) }, 'phase4+=0.02')
        .addLabel('phase4Nav', 'phase4+=1.05')
        .to(closingHeading, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase4+=0.16')
        .to([closingMap, closingForm], { autoAlpha: 1, y: 0, scale: 1, duration: dur(0.95), stagger: 0.14 }, 'phase4+=0.22')
        .to(closingFooter, { autoAlpha: 1, y: 0, duration: dur(0.85) }, 'phase4+=0.34')
        .to(closingCar, { autoAlpha: 1, xPercent: 0, scale: 1, duration: dur(1.2) }, 'phase4+=0.18')
        .to(closingTrack, {
          y: () => -getClosingScrollDistance(),
          duration: closingScrollDuration,
          ease: 'none',
        }, 'phase4+=0.5');

      phaseThreeImages.forEach((image) => {
        masterTimeline.to(image, {
          scale: 1.06,
          duration: 1.6,
        }, 'phase2');
      });

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

      heroScrollTrigger = ScrollTrigger.create({
        trigger: heroSection.value,
        start: 'top top',
        end: () => {
          const sectionHeight = heroSection.value?.offsetHeight ?? window.innerHeight;
          const scrollDistance = Math.max(sectionHeight - window.innerHeight, window.innerHeight * 7.4);
          return `+=${scrollDistance}`;
        },
        pin: heroSticky.value,
        scrub: isMobile ? 0.6 : 0.9,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: masterTimeline,
        onUpdate: () => {
          syncGalleryParallax();
        },
        onRefresh: () => {
          gsap.set(heroGalleryTrack, { y: 0 });
          gsap.set(closingTrack, { y: 0 });
          masterTimeline.invalidate();
          syncGalleryParallax();
          syncPhaseScrollPositions();
        },
      });

      removeHeroScrollTrigger = () => {
        heroScrollTrigger?.kill();
        heroScrollTrigger = null;
      };

      syncPhaseScrollPositions();
    }, page);

    ScrollTrigger.refresh();

    return () => {
      removeHeroScrollTrigger?.();
      removeHeroScrollTrigger = null;
      ctx.revert();
    };
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    removeHeroScrollTrigger?.();
    removeHeroScrollTrigger = null;
    gsap.set([heroShowcase.value, heroButton.value, heroIntro.value], { clearProps: 'all' });
    gsap.set('.js-hero-card', { clearProps: 'all' });
    gsap.set(['.js-why-choose-us', '.js-why-choose-heading', '.js-why-choose-card', '.js-why-choose-panel'], { clearProps: 'all' });
    gsap.set(['.js-home-closing', '.js-home-closing-heading', '.js-home-closing-map', '.js-home-closing-form', '.js-home-closing-car', '.js-home-closing-footer'], { clearProps: 'all' });
  });
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('home-phase-nav', handlePhaseNavigation as EventListener);
  }

  removeHeroScrollTrigger?.();
  removeHeroScrollTrigger = null;
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

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('home-phase-nav', handlePhaseNavigation as EventListener);
  }
});

watch(
  () => route.query.phase,
  (phase) => {
    const normalizedPhase = getPhaseQueryValue(phase);

    if (typeof normalizedPhase !== 'string') {
      return;
    }

    setTimeout(() => {
      scrollToPhase(normalizedPhase);
    }, 50);
  },
);
</script>
