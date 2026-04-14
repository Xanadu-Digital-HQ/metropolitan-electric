<template>
  <div class="overflow-visible">
    <NavBar class="fixed top-4 w-full z-30" />
    <NavPhaseWheelMenu v-if="route.name === 'index'" />
    <NuxtLayout  />

  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Metropolitan Electric Limited",
        url: "https://metropolitanelectricng.com",
      }),
    },
  ],
});
</script>


<style>
html {
  font-family:  var(--font-poppins);
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, filter 0.35s ease, transform 0.35s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
  transform: translateY(0.5rem);
}

.page-reveal {
  --reveal-delay: 0ms;
  --reveal-distance: 22px;
  --reveal-duration: 760ms;
  opacity: 0;
  filter: blur(14px);
  transform: translateY(var(--reveal-distance)) scale(0.985);
  animation: page-reveal var(--reveal-duration) cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--reveal-delay);
  will-change: opacity, transform, filter;
}

.page-reveal-soft {
  --reveal-distance: 14px;
  --reveal-duration: 680ms;
}

.reveal-delay-1 { --reveal-delay: 70ms; }
.reveal-delay-2 { --reveal-delay: 140ms; }
.reveal-delay-3 { --reveal-delay: 210ms; }
.reveal-delay-4 { --reveal-delay: 280ms; }
.reveal-delay-5 { --reveal-delay: 350ms; }

@keyframes page-reveal {
  0% {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(var(--reveal-distance)) scale(0.985);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active,
  .page-reveal {
    transition: none !important;
    animation: none !important;
  }

  .page-enter-from,
  .page-leave-to,
  .page-reveal {
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
  }
}

</style>
