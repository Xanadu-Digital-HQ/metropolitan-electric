<script lang="ts" setup>
import gsap from 'gsap';

const { container } = useTailwindConfig();

const headingText = 'driving the future of Sustainable Mobility in Africa';
const subheadingText = 'Leading the Electric Vehicle Revolution across the Continent';

const rootRef = ref<HTMLElement | null>(null);
const headingRef = ref<HTMLElement | null>(null);
const subheadingRef = ref<HTMLElement | null>(null);
let visibilityObserver: IntersectionObserver | null = null;
let visibilityFrame = 0;

const splitText = (value: string) => value.split(' ').map(word => ({
  word,
  chars: [...word],
}));

const headingWords = splitText(headingText);
const subheadingWords = splitText(subheadingText);

onMounted(async () => {
  if (!import.meta.client) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  await nextTick();

  const root = rootRef.value;
  const headingChars = headingRef.value?.querySelectorAll<HTMLElement>('[data-split-char]');
  const subheadingChars = subheadingRef.value?.querySelectorAll<HTMLElement>('[data-split-char]');

  if (!root || (!headingChars?.length && !subheadingChars?.length)) {
    return;
  }

  if (headingChars?.length) {
    gsap.set(headingChars, {
      yPercent: 48,
      opacity: 0,
      willChange: 'transform, opacity',
    });
  }

  if (subheadingChars?.length) {
    gsap.set(subheadingChars, {
      yPercent: 42,
      opacity: 0,
      willChange: 'transform, opacity',
    });
  }

  const playReveal = () => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    if (headingChars?.length) {
      timeline.to(headingChars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.78,
        stagger: 0.018,
        clearProps: 'willChange',
      });
    }

    if (subheadingChars?.length) {
      timeline.to(subheadingChars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.62,
        stagger: 0.01,
        clearProps: 'willChange',
      }, '-=0.42');
    }
  };

  let hasPlayed = false;

  const startWhenVisible = () => {
    if (hasPlayed) {
      return;
    }

    if (document.body.style.overflow === 'hidden') {
      visibilityFrame = window.requestAnimationFrame(startWhenVisible);
      return;
    }

    visibilityObserver = new IntersectionObserver((entries) => {
      const isVisible = entries.some(entry => entry.isIntersecting);

      if (!isVisible || hasPlayed) {
        return;
      }

      hasPlayed = true;
      visibilityObserver?.disconnect();
      visibilityObserver = null;
      playReveal();
    }, {
      threshold: 0.45,
    });

    visibilityObserver.observe(root);
  };

  startWhenVisible();
});

onBeforeUnmount(() => {
  if (visibilityFrame) {
    window.cancelAnimationFrame(visibilityFrame);
  }

  visibilityObserver?.disconnect();
  visibilityObserver = null;
});
</script>

<template>
  <div ref="rootRef" class="relative flex h-full flex-col items-center justify-center" :class="container">
    <div class="flex flex-col items-center gap-2.5">
      <h1
        ref="headingRef"
        :aria-label="headingText"
        class="text-3xl text-center text-white font-elemental md:text-4xl md:leading-14 lg:text-5xl"
      >
        <template v-for="(word, wordIndex) in headingWords" :key="`${word.word}-${wordIndex}`">
          <span aria-hidden="true" class="mr-[0.28em] inline-flex overflow-hidden align-top last:mr-0">
            <span
              v-for="(char, charIndex) in word.chars"
              :key="`${word.word}-${wordIndex}-${charIndex}`"
              data-split-char
              class="inline-block"
            >
              {{ char }}
            </span>
          </span>
        </template>
      </h1>
      <p
        ref="subheadingRef"
        :aria-label="subheadingText"
        class="mt-4 text-base text-center text-white/90 md:text-lg lg:text-xl"
      >
        <template v-for="(word, wordIndex) in subheadingWords" :key="`${word.word}-${wordIndex}`">
          <span aria-hidden="true" class="mr-[0.28em] inline-flex overflow-hidden align-top last:mr-0">
            <span
              v-for="(char, charIndex) in word.chars"
              :key="`${word.word}-${wordIndex}-${charIndex}`"
              data-split-char
              class="inline-block"
            >
              {{ char }}
            </span>
          </span>
        </template>
      </p>
    </div>
  </div>
</template>
