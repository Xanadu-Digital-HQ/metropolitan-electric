<template>
  <div class="pointer-events-none fixed inset-0 z-120">
      <div
        class="absolute inset-0 bg-[#071018]/72 transition-opacity duration-300 md:hidden"
      :class="isMobileActive ? 'pointer-events-auto opacity-100' : 'opacity-0'"
      @click="closeWheel"
    />

    <div
      ref="wheelRoot"
      class="absolute right-5 bottom-5 drop-shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto sm:right-28 sm:bottom-20"
      :style="wheelRootStyle"
    >
      <div class="relative flex items-center justify-center">
      <div
        class="pointer-events-none absolute rounded-full border border-brand/18 bg-white/35 transition-all duration-500"
        :class="
          radialVisible
            ? 'size-58 scale-100 opacity-100 shadow-[0_28px_70px_rgba(16,25,32,0.18)] backdrop-blur-md sm:h-64 sm:w-64'
            : 'size-20 scale-75 opacity-0'
        "
      />

      <button
        v-for="link in phaseLinks"
        :key="link.phase"
        type="button"
        class="absolute transition-all duration-500 ease-out"
        :class="radialVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
        :style="getItemStyle(link)"
        :aria-label="`Go to ${link.label} phase`"
        @click="handlePhaseClick(link.phase)"
      >
        <span
          class="group relative flex h-16 w-16 items-center justify-center rounded-full border border-brand/12 bg-white/92 text-center shadow-[0_18px_45px_rgba(16,25,32,0.15)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
        >
          <span class="px-2 font-opensans text-xxs font-bold leading-tight tracking-[0.14em] text-brand uppercase">
            {{ link.shortLabel }}
          </span>
        </span>
      </button>

      <div
        v-for="link in phaseLinks"
        :key="`${link.phase}-spoke`"
        class="pointer-events-none absolute left-1/2 top-1/2 h-px origin-left bg-brand/18 transition-all duration-500"
        :class="radialVisible ? 'opacity-100' : 'opacity-0'"
        :style="getSpokeStyle(link)"
      />

      <button
        ref="wheelButton"
        type="button"
        class="relative cursor-pointer z-10 flex p-2 md:p-4 items-center justify-center rounded-full border border-white/60 bg-[radial-gradient(circle_at_30%_30%,#fefefe,#dbe4eb_60%,#b9c8d4)] shadow-[0_22px_55px_rgba(16,25,32,0.24)] transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-brand/30"
        :class="radialVisible ? 'rotate-270' : ''"
        :aria-expanded="isOpen"
        aria-label="Toggle phase navigation"
        @click="toggleWheel"
      >
        <img src="/wheel.svg" alt="" class="relative z-10 size-5 md:size-8 object-contain invert" />
      </button>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const isOpen = ref(false);
const isClosing = ref(false);
const wheelRoot = ref<HTMLElement | null>(null);
const wheelButton = ref<HTMLElement | null>(null);
const isMobileViewport = ref(false);
const mobileTranslate = ref({ x: 0, y: 0 });
const wheelRadius = 94;
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const phaseLinks = [
  { phase: 'intro', label: 'Intro', shortLabel: 'Intro', angle: -90, radius: wheelRadius },
  { phase: 'gallery', label: 'Gallery', shortLabel: 'Gallery', angle: 0, radius: wheelRadius },
  { phase: 'why', label: 'Why Choose Us', shortLabel: 'Why Us', angle: 90, radius: wheelRadius },
  { phase: 'contact', label: 'Contact', shortLabel: 'Contact', angle: 180, radius: wheelRadius },
] as const;

const getCoordinates = (angle: number, radius: number) => {
  const radians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
};

const getItemStyle = (link: (typeof phaseLinks)[number]) => {
  const { x, y } = getCoordinates(link.angle, radialVisible.value ? link.radius : 0);

  return {
    transform: `translate(${x}px, ${y}px)`,
  };
};

const getSpokeStyle = (link: (typeof phaseLinks)[number]) => {
  const { x, y } = getCoordinates(link.angle, radialVisible.value ? link.radius - 22 : 0);
  const length = Math.sqrt(x ** 2 + y ** 2);

  return {
    width: `${length}px`,
    transform: `translate(0, -50%) rotate(${link.angle}deg)`,
  };
};

const emitPhaseEvent = (phase: string) => {
  if (!import.meta.client) {
    return;
  }

  window.dispatchEvent(new CustomEvent('home-phase-nav', { detail: phase }));
};

const radialVisible = computed(() => isOpen.value || isClosing.value);
const isMobileOpen = computed(() => isMobileViewport.value && isOpen.value);
const isMobileActive = computed(() => isMobileViewport.value && radialVisible.value);
const wheelRootStyle = computed(() => {
  if (!isMobileViewport.value) {
    return { transform: 'translate3d(0, 0, 0)' };
  }

  return {
    transform: `translate3d(${mobileTranslate.value.x}px, ${mobileTranslate.value.y}px, 0)`,
  };
});

const updateMobileTranslate = () => {
  if (!import.meta.client || !wheelButton.value || !isMobileViewport.value) {
    mobileTranslate.value = { x: 0, y: 0 };
    return;
  }

  if (!isOpen.value) {
    mobileTranslate.value = { x: 0, y: 0 };
    return;
  }

  const buttonRect = wheelButton.value.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
  const buttonCenterY = buttonRect.top + (buttonRect.height / 2);

  mobileTranslate.value = {
    x: (window.innerWidth / 2) - buttonCenterX,
    y: (window.innerHeight / 2) - buttonCenterY,
  };
};

const closeWheel = () => {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }

  mobileTranslate.value = { x: 0, y: 0 };

  if (isMobileViewport.value && isOpen.value) {
    isClosing.value = true;
    isOpen.value = false;
    closeTimer = setTimeout(() => {
      isClosing.value = false;
      closeTimer = null;
    }, 260);
    return;
  }

  isClosing.value = false;
  isOpen.value = false;
};

const toggleWheel = () => {
  if (isClosing.value) {
    return;
  }

  if (isOpen.value) {
    closeWheel();
    return;
  }

  isClosing.value = false;
  isOpen.value = true;

  nextTick(() => {
    updateMobileTranslate();
  });
};

const handlePhaseClick = async (phase: string) => {
  closeWheel();

  if (route.path === '/' && route.query.phase === phase) {
    emitPhaseEvent(phase);
    return;
  }

  await navigateTo({
    path: '/',
    query: { phase },
  });

  if (route.path === '/') {
    setTimeout(() => {
      emitPhaseEvent(phase);
    }, 80);
  }
};

const updateViewportMode = () => {
  if (!import.meta.client) {
    return;
  }

  isMobileViewport.value = window.innerWidth < 768;
  updateMobileTranslate();
};

const handleDocumentClick = (event: MouseEvent) => {
  if (!isOpen.value || !wheelRoot.value) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !wheelRoot.value.contains(target)) {
    closeWheel();
  }
};

watch(
  () => route.fullPath,
  () => {
    closeWheel();
  },
);

watch(isOpen, () => {
  nextTick(() => {
    updateMobileTranslate();
  });
});

onMounted(() => {
  if (import.meta.client) {
    updateViewportMode();
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', updateViewportMode);
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.removeEventListener('click', handleDocumentClick);
    window.removeEventListener('resize', updateViewportMode);
  }

  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
});
</script>
