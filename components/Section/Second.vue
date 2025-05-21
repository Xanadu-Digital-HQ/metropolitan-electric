<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col py-20 justify-between items-start gap-10"
      :class="container"
    >
      <div class="flex w-full flex-col gap-y-2.5">
        <h3
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-[#1C6220]"
        >
          What We Offer
        </h3>
        <h1
          v-motion
          :initial="{ opacity: 1, y: 50 }"
          :enter="{ opacity: 1, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-2xl lg:text-3xl text-[#113912]"
        >
          360 Of EV Solutions
        </h1>
        <p
          v-motion
          :initial="{ opacity: 1, y: 150 }"
          :enter="{ opacity: 1, y: 150 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="600"
          class="font-noto w-full lg:w-3/4 text-base lg:text-lg text-[#505050] tracking-wide"
        >
          At Metropolitan Electric Limited, we provide a comprehensive range of
          Electric Vehicles (EV) solutions to meet all your transportation
          needs. From corporate EV fleets to fleet renewal for public
          transportation, ride-hailing services, and charging infrastructure, we
          deliver innovative and sustainable mobility solutions tailored for the
          African market. Our commitment to excellence ensures that you receive
          reliable, efficient, and eco-friendly services every step of the way.
          Explore our diverse offerings and join us in driving the future of
          sustainable mobility in Africa.
        </p>
      </div>
      <div
        class="relative flex flex-wrap w-full justify-center md:justify-around lg:justify-between gap-y-10"
      >
        <SectionCard
          v-for="(card, index) in data"
          :key="index"
          v-motion-fade-visible-once
          :duration="800"
          :delay="400 + 50 * index"
          class="card w-full md:w-80 bg-white hover:!scale-105 transition-all duration-200"
          :ref="card.title"
          :data="card"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
import type { Card } from "~/types/types.js";
defineProps<{ data: Card[] }>();
</script>
