<script lang="ts" setup>
type ShowcaseVehicle = {
  name: string;
  image: string;
};

defineProps<{
  vehicle: ShowcaseVehicle;
}>();

const isOpen = ref(false);
</script>
<template>
  <article
    class="flex-1 w-full cursor-pointer px-5"
    tabindex="0"
    :aria-label="`${vehicle.name} showcase card`"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    @focusin="isOpen = true"
    @focusout="isOpen = false"
  >
    <div class="relative h-110 w-full overflow-hidden border-accent shadow-md drop-shadow-xl sm:h-140 lg:h-170">
      <img
        :src="vehicle.image"
        :alt="vehicle.name"
        class="h-full w-full object-cover transition-[filter,scale,transform] duration-700 ease-out"
        :class="isOpen ? 'grayscale-0 scale-100' : 'grayscale scale-90'"
      >
      <HeroVehicleCardSlider :is-open="isOpen" />
    </div>
  </article>
</template>
