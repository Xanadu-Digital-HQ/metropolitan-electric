<template>
  <div>
    <div
      class="bg-fixed bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-black/40 after:to-black/80 after:z-10"
      style="background-image: url('/bgImage.png')"
    >
      <Hero id="index" />
      <SectionFirst
        id="about"
        class="relative scroll-smooth z-20 before:content-[''] before:absolute before:bg-[#fefefe] before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
      <SectionSecond
        :data="data"
        id="services"
        class="relative z-20 before:content-[''] before:absolute before:bg-[#EEEFED] before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
      <SectionFAQ
        class="relative z-20 before:content-[''] before:absolute before:bg-brand/50 before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
      <SectionThird
        id="contact"
        class="relative z-20 before:content-[''] before:absolute before:bg-white before:top-0 before:right-0 before:left-0 before:bottom-0 before:-z-10"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Card } from "~/types/types.js";
defineProps<{ data: Card[] }>();
useSeoMeta({
  title: "Leading the Electric Vehicles (EV) Revolution across the Continent",
  ogTitle: "Leading the Electric Vehicles (EV) Revolution across the Continent",
  description:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogDescription:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogImage: "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});
</script>
