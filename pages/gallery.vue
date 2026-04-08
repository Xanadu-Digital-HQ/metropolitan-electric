<script lang="ts" setup>
import { vehicles } from "~/utils/vehicles";
</script>

<template>
  <div
    class="flex flex-col gap-20 w-full h-fit bg-[url(/gallery_background.png)] bg-center bg-repeat-y"
  >
    <Vehicle v-for="vehicle in vehicles" :vehicle="vehicle" />
  </div>
</template>

<style scoped>
.ease-spring {
  transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@keyframes fadeOut {
  0% {
    opacity: 0.8;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-out {
  animation: fadeOut 3s forwards;
}
</style>
