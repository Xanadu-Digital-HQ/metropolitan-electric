<template>
  <div ref="pageRoot" class="h-fit w-full overflow-x-clip bg-white">
    <HomeSplashOverlay
      :show="showSplash"
      :show-video="showSplashVideo"
      @video-ended="onSplashVideoEnded"
    />

    <section ref="heroSection" class="relative h-[140vh] bg-brand md:h-[220vh]">
      <div ref="heroSticky" class="sticky top-0 h-screen overflow-hidden">
        <div
          ref="heroBackdrop"
          class="absolute inset-0 z-0 bg-cover bg-center"
          style="background-image: url('/homeBg.png')"
        />
        <div
          ref="heroOverlay"
          class="absolute inset-0 z-10 bg-linear-to-b from-[#10192088] via-[#101920bb] to-brand"
        />

        <div
          class="relative z-20 flex h-full flex-col items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8"
        >
          <div ref="heroIntro" class="flex flex-col items-center gap-16">
            <div class="js-hero-fade">
              <Hero id="index" />
            </div>
          </div>

          <div
            ref="heroShowcase"
            class="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-y-8 px-4 pb-8 sm:gap-y-10 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12"
          >
            <div
              :class="[
                container,
                'relative flex items-end justify-start gap-4 overflow-x-auto pb-4 md:justify-center md:overflow-visible md:pb-0 md:gap-4 lg:gap-6 snap-x snap-mandatory md:perspective-[1600px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              ]"
            >
              <div
                v-for="vehicle in vehicles"
                :key="vehicle.name"
                class="js-hero-card flex-none shrink-0 w-[88vw] max-w-[24rem] snap-center md:flex-1 md:w-auto md:max-w-none"
              >
                <HeroVehicleCard :vehicle="vehicle" />
              </div>
            </div>
            <div ref="heroButton" class="js-hero-button">
              <NuxtLink :to="URLS.GALLERY">
                <CustomButton text="Go to Gallery" class="mt-5 md:mt-0" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomePhaseThreeGallery ref="gallerySection" :features="phaseThreeFeatures" />
    <HomeWhyChooseUs ref="whyChooseSection" />
    <HomeClosingContactFooter ref="closingSection" />
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
const { container } = useTailwindConfig();
const heroSection = ref<HTMLElement | null>(null);
const heroSticky = ref<HTMLElement | null>(null);
const gallerySection = ref<{ $el: Element } | null>(null);
const whyChooseSection = ref<{ $el: Element } | null>(null);
const closingSection = ref<{ $el: Element } | null>(null);
const heroBackdrop = ref<HTMLElement | null>(null);
const heroOverlay = ref<HTMLElement | null>(null);
const heroIntro = ref<HTMLElement | null>(null);
const heroShowcase = ref<HTMLElement | null>(null);
const heroButton = ref<HTMLElement | null>(null);

let mm: gsap.MatchMedia | null = null;
const route = useRoute();

const hasClientLoadedAssets = ref(false);
const hasSplashVideoFinished = ref(false);
const showSplash = computed(() => !hasClientLoadedAssets.value || !hasSplashVideoFinished.value);
const showSplashVideo = computed(() => !hasSplashVideoFinished.value);

const vehicles = [
  { name: 'Metro Electric Car', image: '/showcase/car_front_resized.png' },
  { name: 'Metro Charge', image: '/showcase/charger_resized.png' },
  { name: 'Metro Electric Bus', image: '/showcase/bus_resized.png' },
] as const;

const phaseThreeFeatures = [
  {
    title: 'Fleet 360',
    subTitle: 'Corporate EV Fleet',
    description:
      'Offers comprehensive electric vehicle solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of electric vehicles such ad cars, buses, tricycle, and pickups, this facilitates employee mobility and dispatch.',
    image: '/fleet.png',
    reverse: true,
  },
  {
    title: 'Metro Charge',
    subTitle: 'EV Charging Infrastructure',
    description:
      'Recognizing the importance of supporting infrastructure, metro charge is our network of electric vehicle charging station in partnership with Sunphos, dedicating to ensure seamless and convenient charging for all electric vehicles’ users. Our stations will be strategically located to provide easily access and reliability, supporting the growing adoption of EVs across the continent.',
    image: '/charger.png',
    reverse: false,
  },
  {
    title: 'EV Care',
    subTitle: 'EV Maintenance Services',
    description:
      'Electric Vehicle care offers comprehensive maintenance services to ensure your EV fleets longevity and optimal performance. Our network of specialized service and maintenance garages are equipped with the latest technology and staffed by trained professionals. From routine maintenance to advance repairs, we provide support to keep your electric vehicles running smoothly and efficiently.',
    image: '/maintenance.jpg',
    reverse: true,
  },
] as const;

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const onSplashVideoEnded = () => {
  hasSplashVideoFinished.value = true;
};

const phaseScrollPositions = ref<Record<string, number>>({});

const getElementPageTop = (element: Element | null | undefined) => {
  if (!import.meta.client || !element) {
    return undefined;
  }

  return window.scrollY + (element as HTMLElement).getBoundingClientRect().top;
};

const syncPhaseScrollPositions = () => {
  const heroTop = getElementPageTop(heroSection.value) ?? 0;

  phaseScrollPositions.value = {
    intro: heroTop,
    vehicles: heroTop + window.innerHeight * 0.7,
    gallery: getElementPageTop(gallerySection.value?.$el ?? null) ?? 0,
    why: getElementPageTop(whyChooseSection.value?.$el ?? null) ?? 0,
    contact: getElementPageTop(closingSection.value?.$el ?? null) ?? 0,
  };
};

const getPhaseQueryValue = (phase: typeof route.query.phase) => {
  if (Array.isArray(phase)) {
    return typeof phase[0] === 'string' ? phase[0] : undefined;
  }

  return typeof phase === 'string' ? phase : undefined;
};

const scrollToPhase = (phase: string | null | undefined) => {
  if (!import.meta.client || !phase) {
    return;
  }

  const target = phaseScrollPositions.value[phase];

  if (typeof target !== 'number') {
    return;
  }

  window.scrollTo({
    top: target,
    behavior: 'smooth',
  });
};

const handlePhaseNavigation = (event: Event) => {
  scrollToPhase((event as CustomEvent<string>).detail);
};

const waitForWindowLoad = () =>
  new Promise<void>((resolve) => {
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

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

const waitForClientAssets = async () => {
  const fontReady =
    'fonts' in document
      ? (document as Document & { fonts: FontFaceSet }).fonts.ready.catch(() => undefined)
      : Promise.resolve();

  await Promise.all([
    waitForWindowLoad(),
    preloadImage('/wheel.svg'),
    ...vehicles.map((vehicle) => preloadImage(vehicle.image)),
    fontReady,
  ]);

  hasClientLoadedAssets.value = true;
};

onMounted(async () => {
  void waitForClientAssets();
  await nextTick();

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
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const cards = gsap.utils.toArray<HTMLElement>('.js-hero-card');
      const heroFades = gsap.utils.toArray<HTMLElement>('.js-hero-fade');
      const phaseThreePanels = gsap.utils.toArray<HTMLElement>('.js-phase-three-panel');
      const phaseThreeImageWrappers = gsap.utils.toArray<HTMLElement>(
        '.js-phase-three-image-wrapper',
      );
      const phaseThreeImages = gsap.utils.toArray<HTMLElement>('.js-phase-three-image');
      const phaseThreeTextItems = gsap.utils.toArray<HTMLElement>(
        '.js-phase-three-title, .js-phase-three-subtitle, .js-phase-three-description',
      );
      const phaseThreeCta = page.querySelector<HTMLElement>('.js-phase-three-cta');
      const whyHeading = page.querySelector<HTMLElement>('.js-why-choose-heading');
      const whyCards = gsap.utils.toArray<HTMLElement>('.js-why-choose-card');
      const whyPanels = gsap.utils.toArray<HTMLElement>('.js-why-choose-panel');
      const whySection = page.querySelector<HTMLElement>('.js-why-choose-us');
      const closingSectionEl = page.querySelector<HTMLElement>('.js-home-closing');
      const closingHeading = page.querySelector<HTMLElement>('.js-home-closing-heading');
      const closingMap = page.querySelector<HTMLElement>('.js-home-closing-map');
      const closingForm = page.querySelector<HTMLElement>('.js-home-closing-form');
      const closingCar = page.querySelector<HTMLElement>('.js-home-closing-car');
      const closingFooter = page.querySelector<HTMLElement>('.js-home-closing-footer');

      gsap.set(heroShowcase.value, { autoAlpha: 0, y: 12 });
      gsap.set(heroButton.value, { autoAlpha: 0, y: 24 });
      gsap.set(cards, {
        autoAlpha: 0,
        yPercent: 14,
        transformOrigin: 'center center',
        force3D: true,
      });
      if (cards[0]) {
        gsap.set(cards[0], { xPercent: -8, rotationY: 0, rotation: 0, scale: 0.96 });
      }
      if (cards[1]) {
        gsap.set(cards[1], { yPercent: 0, scale: 1.04 });
      }
      if (cards[2]) {
        gsap.set(cards[2], { xPercent: 8, rotationY: 0, rotation: 0, scale: 0.96 });
      }
      gsap.set(phaseThreeImageWrappers, { autoAlpha: 0, y: 36 });
      gsap.set(phaseThreeTextItems, { autoAlpha: 0, y: 24 });
      gsap.set(phaseThreeCta, { autoAlpha: 0, y: 28 });
      phaseThreeImages.forEach((image, index) => {
        gsap.set(image, { yPercent: 28 + index * 3, scale: 1.14 });
      });
      gsap.set(whyHeading, { autoAlpha: 0, y: 24 });
      gsap.set(whyCards, { autoAlpha: 0, y: 28 });
      gsap.set(whyPanels, { autoAlpha: 0, yPercent: 8 });
      gsap.set(closingHeading, { autoAlpha: 0, y: 24 });
      gsap.set([closingMap, closingForm], { autoAlpha: 0, y: 30 });
      gsap.set(closingFooter, { autoAlpha: 0, y: 24 });
      gsap.set(closingCar, { autoAlpha: 0, xPercent: 8, scale: 0.96 });

      gsap.from(heroFades, {
        y: 48,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });

      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: heroSection.value,
          start: 'top top',
          end: isMobile ? '+=35%' : 'bottom bottom',
          scrub: isMobile ? 0.12 : 0.7,
          snap: {
            snapTo: [0, 1],
            duration: { min: 0.16, max: 0.32 },
            delay: 0.04,
            ease: 'power1.inOut',
          },
          invalidateOnRefresh: true,
        },
      });

      heroTimeline
        .to(heroOverlay.value, { opacity: isMobile ? 0.2 : 0.1, duration: isMobile ? 0.3 : 1.1 }, 0)
        .to(
          heroBackdrop.value,
          {
            scale: isMobile ? 1 : 1.08,
            yPercent: isMobile ? 0 : 5,
            duration: isMobile ? 0.01 : 1.2,
          },
          0,
        )
        .to(
          heroIntro.value,
          { autoAlpha: 0, yPercent: isMobile ? -4 : -10, duration: isMobile ? 0.3 : 1 },
          0.02,
        )
        .to(
          heroShowcase.value,
          { autoAlpha: 1, y: 0, duration: isMobile ? 0.28 : 0.85 },
          isMobile ? 0.12 : 0.45,
        )
        .to(
          cards,
          {
            autoAlpha: 1,
            yPercent: (index) => (index === 1 ? -5 : 0),
            duration: isMobile ? 0.28 : 0.95,
            stagger: isMobile ? 0.04 : 0.14,
          },
          isMobile ? 0.16 : 0.58,
        )
        .to(
          heroButton.value,
          { autoAlpha: 1, y: 0, duration: isMobile ? 0.24 : 0.75 },
          isMobile ? 0.2 : 0.7,
        );

      phaseThreePanels.forEach((panel, index) => {
        const imageWrapper = phaseThreeImageWrappers[index];
        const image = phaseThreeImages[index];
        const textItems = gsap.utils.toArray<HTMLElement>(
          panel.querySelectorAll(
            '.js-phase-three-title, .js-phase-three-subtitle, .js-phase-three-description',
          ),
        );

        if (imageWrapper || textItems.length) {
          const panelReveal = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: 'top 82%',
              once: true,
            },
            defaults: {
              ease: 'power2.out',
            },
          });

          if (imageWrapper) {
            panelReveal.to(
              imageWrapper,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.78,
              },
              0,
            );
          }

          if (textItems.length) {
            panelReveal.to(
              textItems,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.68,
                stagger: 0.08,
              },
              0.12,
            );
          }
        }

        if (image) {
          gsap.to(image, {
            yPercent: -28,
            scale: 1.04,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });

      if (phaseThreeCta) {
        gsap.to(phaseThreeCta, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: phaseThreeCta,
            start: 'top 88%',
            once: true,
          },
        });
      }

      if (whySection) {
        ScrollTrigger.create({
          trigger: whySection,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.to(whyHeading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to(whyPanels, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
            });
            gsap.to(whyCards, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power2.out',
            });
          },
        });
      }

      if (closingSectionEl) {
        ScrollTrigger.create({
          trigger: closingSectionEl,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.to(closingHeading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' });
            gsap.to([closingMap, closingForm], {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: 'power2.out',
            });
            gsap.to(closingFooter, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              delay: 0.1,
              ease: 'power2.out',
            });
            gsap.to(closingCar, {
              autoAlpha: 1,
              xPercent: 0,
              scale: 1,
              duration: 0.95,
              ease: 'power2.out',
            });
          },
        });
      }

      ScrollTrigger.create({
        trigger: page,
        start: 'top top',
        end: 'bottom bottom',
        onRefresh: syncPhaseScrollPositions,
      });

      syncPhaseScrollPositions();
    }, page);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set([heroShowcase.value, heroButton.value, heroIntro.value], { clearProps: 'all' });
    gsap.set('.js-hero-card', { clearProps: 'all' });
    gsap.set(
      [
        '.js-phase-three-title',
        '.js-phase-three-subtitle',
        '.js-phase-three-description',
        '.js-phase-three-image-wrapper',
        '.js-phase-three-image',
        '.js-phase-three-cta',
      ],
      { clearProps: 'all' },
    );
    gsap.set(['.js-why-choose-heading', '.js-why-choose-card', '.js-why-choose-panel'], {
      clearProps: 'all',
    });
    gsap.set(
      [
        '.js-home-closing-heading',
        '.js-home-closing-map',
        '.js-home-closing-form',
        '.js-home-closing-car',
        '.js-home-closing-footer',
      ],
      { clearProps: 'all' },
    );
    syncPhaseScrollPositions();
  });

  const initialPhase = getPhaseQueryValue(route.query.phase);

  if (typeof initialPhase === 'string') {
    setTimeout(() => {
      syncPhaseScrollPositions();
      scrollToPhase(initialPhase);
    }, 150);
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('home-phase-nav', handlePhaseNavigation as EventListener);
    document.body.style.overflow = '';
  }

  mm?.revert();
  mm = null;
});

watch(
  showSplash,
  (isVisible) => {
    if (!import.meta.client) {
      return;
    }

    document.body.style.overflow = isVisible ? 'hidden' : '';
  },
  { immediate: true },
);

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
      syncPhaseScrollPositions();
      scrollToPhase(normalizedPhase);
    }, 50);
  },
);
</script>
