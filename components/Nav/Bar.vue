<script lang="ts" setup>
import { routes } from '~/utils/routes';
import { URLS } from '~/utils/constants';
import { PhList, PhX } from '@phosphor-icons/vue';
const menuToggled = ref(false);
const route = useRoute();

const mobilePrimaryLinks = [
  { label: 'Home', href: URLS.HOME },
  { label: 'Gallery', href: URLS.GALLERY },
  { label: 'Services', href: URLS.SERVICES },
  { label: 'About', href: URLS.ABOUT },
  { label: 'Media Center', href: URLS.MEDIA },
  { label: 'Blog', href: URLS.BLOG },
  { label: 'FAQ', href: URLS.FAQ },
] as const;

watch(
  () => route.fullPath,
  () => {
    menuToggled.value = false;
  },
);
</script>

<template>
  <header class="py-2.5 px-5">
    <nav
      class="group/overall relative bg-accent/35 hover:bg-accent/55 sm:max-w-xl md:max-w-2xl h-fit backdrop-blur-sm mx-auto transition-all duration-300 rounded-3xl sm:rounded-full"
    >
      <div class="flex justify-center items-center z-20 h-full py-2 px-4 sm:px-6 md:px-12 w-full">
        <div class="hidden sm:flex justify-between items-center gap-8 w-full">
          <NavLink
            v-for="route in routes"
            :key="route.name"
            :class="route.pos >= 2 ? 'order-last' : 'order-first'"
            :item="route"
          />
          <NuxtLink to="/" class="order-2 mx-4" aria-label="Navigate to Home Page">
            <img class="h-8 aspect-square" src="/wheel.svg" alt="Metropolitan Logo" />
          </NuxtLink>
        </div>

        <div class="flex items-center justify-between  sm:hidden z-10 w-full px-2">
          <NuxtLink to="/" class="mx-4" aria-label="Navigate to Home Page">
            <img class="h-8 aspect-square" src="/wheel.svg" alt="Metropolitan Logo" />
          </NuxtLink>
          <transition mode="out-in" name="buttonSwap">
            <button
              v-if="!menuToggled"
              class="outline-white active:outline rounded-md outline-1 p-0.5 z-20 mr-2"
              @click="menuToggled = !menuToggled"
            >
              <PhList class="size-5 text-white" />
            </button>
            <button
              v-else
              class="outline-white active:outline rounded-md outline-1 p-0.5 z-20 mr-2"
              @click="menuToggled = !menuToggled"
            >
              <PhX class="size-5 text-white" />
            </button>
          </transition>
        </div>
      </div>

      <!-- Mobile Nav -->

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 max-h-0"
        enter-to-class="opacity-100 translate-y-0 max-h-[520px]"
        leave-active-class="transition-all duration-240 ease-in"
        leave-from-class="opacity-100 translate-y-0 max-h-[520px]"
        leave-to-class="opacity-0 -translate-y-2 max-h-0"
      >
        <div v-if="menuToggled" class="relative lg:hidden w-full overflow-hidden px-4 pb-4 pt-2">
          <div class="flex flex-col w-full pt-16 pb-6 text-right items-center">
            <NuxtLink
              v-for="link in mobilePrimaryLinks"
              :key="link.href"
              :to="link.href"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-white/10 px-5 py-2.5 text-white/90 transition-colors hover:text-white active:text-white w-full"
              exact-active-class="text-white"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="relative z-10 py-2.5 px-7 mt-5 text-sm font-medium font-main bg-accent/90 text-white rounded-full transition duration-300 hover:bg-accent/80"
              @click="menuToggled = !menuToggled"
            >
              Contact
            </NuxtLink
            >
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
}

@keyframes scale-small {
  0% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes scale-large {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.2);
  }
}
</style>
