<template>
  <div class="bg-white">
    <div class="relative" :class="container">
      <div
        class="flex justify-between bg-white items-center z-20 h-full p-4 md:px-0"
      >
        <NuxtLink to="/" aria-label="Navigate to Home Page">
          <img class="h-10" src="/logo.svg" alt="Metropolitan Logo" />
        </NuxtLink>
        <div class="hidden lg:flex gap-5 items-center">
          <NavLink to-url="/">Home</NavLink>
          <NavLink to-url="/#about">About</NavLink>
          <NavLink to-url="/#services">Services</NavLink>
          <NavLink to-url="/#index">Sustainability</NavLink>
          <NavLink to-url="/media-center">Media Center</NavLink>
          <NavLink to-url="/blog">Blog</NavLink>
          <NuxtLink
            to="/#contact"
            class="relative z-10 py-2.5 px-7 font-medium font-main border-2 border-[#113912] hover:bg-[#1C6220] hover:border-[#1C6220] hover:text-white focus:bg-[#30a336] transition-all duration-200 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 focus:before:border-2 focus:text-white before:border-[#30a336] before:rounded-md before:-z-10 focus:before:-top-1.5 focus:before:-right-1.5 focus:before:-left-1.5 focus:before:-bottom-1.5"
            >Contact</NuxtLink
          >
        </div>
        <div class="inline lg:hidden z-10">
          <transition mode="out-in" name="buttonSwap">
            <button
              v-if="!menuToggled"
              class="outline-white active:outline rounded-md outline-2 p-0.5 z-20"
              @click="menuToggled = !menuToggled"
            >
              <Bars3Icon class="w-6 h-6" />
            </button>
            <button
              v-else
              class="outline-white active:outline rounded-md outline-2 p-0.5 z-20"
              @click="menuToggled = !menuToggled"
            >
              <XMarkIcon class="w-6 h-6 ttext-[#1C6220]" />
            </button>
          </transition>
        </div>
      </div>
      <Transition mode="in-out" name="menu">
        <div
          v-if="menuToggled"
          class="absolute lg:hidden h-fit bg-white/95 right-0 w-full top-0 backdrop-blur-sm -z-50 p-4"
        >
          <div class="flex flex-col w-full pt-24 pb-10 text-right items-center">
            <NuxtLink
              to="/"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/#about"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >About</NuxtLink
            >
            <NuxtLink
              to="/#services"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Services</NuxtLink
            >
            <NuxtLink
              to="/#index"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Sustainability</NuxtLink
            >
            <NuxtLink
              to="/media-center"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Media Center</NuxtLink
            >
            <NuxtLink
              to="/blog"
              @click="menuToggled = !menuToggled"
              class="text-sm sm:text-base border-y border-black/5 px-5 py-2.5 text-black active:text-[#1C6220] w-full"
              exact-active-class="text-[#1C6220]"
              >Blog</NuxtLink
            >
            <NuxtLink
              to="/#contact"
              class="relative text-sm sm:text-base text-center w-fit lg:w-auto z-10 py-2.5 px-7 mt-5 font-medium font-main border-2 border-[#113912] hover:bg-[#1C6220] hover:border-[#1C6220] hover:text-white focus:bg-[#30a336] transition-all duration-200 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 focus:before:border-2 focus:text-white before:border-[#30a336] before:rounded-md before:-z-10 focus:before:-top-1.5 focus:before:-right-1.5 focus:before:-left-1.5 focus:before:-bottom-1.5"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
const { container } = useTailwindConfig();
const menuToggled = ref(false);
</script>

<style scoped>
.menu-enter-active {
  animation: slide-in 0.25s ease-in-out 0s 1 normal;
}

.menu-leave-active {
  animation: slide-out 0.25s ease-in-out 0s 1 normal none;
}

.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
    transform-origin: top;
    opacity: 1;
  }

  100% {
    transform: translateY(0%);
    transform-origin: top;
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0%);
    transform-origin: top;
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    transform-origin: top;
    opacity: 1;
  }
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
