<template>
  <div class="flex-1 bg-[#f5f5f5] relative h-fit">
    <div class="google-map relative top-0 left-0 size-full md:w-full h-[450px]">
      <iframe
        class="absolute size-full top-0 left-0 md:w-full h-[450px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.730220431644!2d3.433507975679751!3d6.428694524256389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf535ed0cc7ab%3A0x4601420b48fe9092!2s77%20Sinari%20Daranijo%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720609776367!5m2!1sen!2sng"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div
      v-motion-slide-visible-once-bottom
      :duration="400"
      :delay="600"
      class="flex flex-col relative p-5 sm:p-10 gap-y-8"
    >
      <div class="flex flex-col gap-y-2">
        <p class="text-[#113912] text-sm font-bold">Contact Us</p>
        <span class="flex gap-2.5 items-center">
          <div class="size-fit">
            <PhoneIcon class="size-5 text-gray-600" />
          </div>
          <NuxtLink
            to="tel:+2349041595102"
            class="border-b-2 border-b-black hover:border-b-[#113912] text-sm hover:text-[#113912] font-semibold"
            >+234
          </NuxtLink>
        </span>
        <span class="flex gap-2.5 items-center">
          <div class="size-fit">
            <EnvelopeIcon class="size-5 text-gray-600" />
          </div>
          <NuxtLink
            to="mailto:ev@metropolitanelectricng.com"
            class="border-b-2 border-b-black hover:border-b-[#113912] text-sm hover:text-[#113912] font-semibold"
            >ev@metropolitanelectricng.com
          </NuxtLink>
        </span>
      </div>
      <div class="flex flex-col gap-y-2">
        <p class="text-[#113912] text-sm font-bold">Location</p>
        <span class="flex gap-2.5 items-center">
          <div class="size-fit">
            <MapPinIcon class="size-5 text-gray-600" />
          </div>
          <NuxtLink
            to="https://maps.app.goo.gl/uqnb6dCGvyMbGXiC9"
            class="border-b-2 border-b-black hover:border-b-[#113912] text-sm hover:text-[#113912] font-semibold"
            >Metropolitan Electric Limited, 77 Sinari Daranijo St, Victoria
            Island, Lagos 106104, Lagos
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
