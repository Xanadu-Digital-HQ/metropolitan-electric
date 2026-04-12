<template>
  <footer
    :class="overlay
      ? 'js-home-footer absolute inset-0 bg-brand text-white'
      : 'js-home-footer bg-brand text-white'"
  >
    <div
      :class="[
        container,
        overlay
          ? 'flex h-full items-center py-16 sm:py-18 lg:py-24'
          : 'py-14 sm:py-16 lg:py-20',
      ]"
    >
      <div class="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] lg:gap-16">
        <div class="js-home-footer-copy max-w-md">
          <div class="flex items-center gap-4">
            <img src="/logo.svg" alt="Metropolitan Electric" class="h-12 w-auto invert" />
          </div>

          <p class="mt-8 max-w-sm font-noto text-base leading-8 text-white/76">
            We are committed to revolutionizing transportation in Africa by delivering cutting-edge electric vehicles and sustainable mobility solutions.
          </p>

          <div class="mt-8 flex items-center gap-4">
            <a
              v-for="item in socials"
              :key="item.label"
              :href="item.href"
              :aria-label="item.label"
              target="_blank"
              rel="noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              <component :is="item.icon" class="h-5 w-5" weight="fill" />
            </a>
          </div>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div class="js-home-footer-column">
            <p class="font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Explore
            </p>
            <div class="mt-5 flex flex-col gap-4">
              <NuxtLink
                v-for="link in exploreLinks"
                :key="link.label"
                :to="link.href"
                :class="footerLinkStyle"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <div class="js-home-footer-column">
            <p class="font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Other
            </p>
            <div class="mt-5 flex flex-col gap-4">
              <NuxtLink
                v-for="link in otherLinks"
                :key="link.label"
                :to="link.href"
                :class="footerLinkStyle"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <div class="js-home-footer-column">
            <p class="font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Vehicles
            </p>
            <div class="mt-5 flex flex-col gap-4">
              <NuxtLink
                v-for="link in vehicleLinks"
                :key="link.label"
                :to="link.href"
                :class="footerLinkStyle"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <div class="js-home-footer-column">
            <p class="font-sora text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Contact Info
            </p>
            <div class="mt-5 space-y-5 font-poppins leading-8 text-white/84">
              <p>77 Sinari Daranijo St,Victoria Island, Lagos 106104, Lagos.</p>
              <a href="mailto:ev@metropolitanelectricng.com" :class="footerLinkStyle">
                ev@metropolitanelectricng.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  PhFacebookLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhXLogo,
} from '@phosphor-icons/vue';

withDefaults(defineProps<{
  overlay?: boolean;
}>(), {
  overlay: false,
});

const { container, footerLinkStyle } = useTailwindConfig();

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/#contact' },
] as const;

const otherLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Media Center', href: '/media-center' },
  { label: 'Blog', href: '/blog' },
] as const;

const vehicleLinks = [
  { label: 'E-Bus', href: '/green-fleet' },
  { label: 'E-Car', href: '/ryde' },
] as const;

const socials = [
  { label: 'X', href: 'https://x.com/', icon: PhXLogo },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: PhLinkedinLogo },
  { label: 'Instagram', href: 'https://instagram.com/', icon: PhInstagramLogo },
  { label: 'Facebook', href: 'https://facebook.com/', icon: PhFacebookLogo },
] as const;
</script>
