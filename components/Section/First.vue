<script lang="ts" setup>
import { PhQuotes } from "@phosphor-icons/vue";
import { ref, onMounted, onUnmounted } from "vue";

const texts = [
  "At Metropolitan Electric, we are building an eco-friendly future by redefining transportation. Our electric vehicles offer a cleaner, smarter, and more sustainable way to move.",
  "Our electric vehicles combine cutting-edge technology with exceptional design, ensuring you experience unmatched performance and driving comfort on every journey.",
  "Step into our showroom to explore our electric vehicle lineup, engage with our expert team, and discover how sustainable driving can transform your journey.",
];
let count = 0;
const activeText = ref(texts[count]);
const activeTextKey = ref(`text${count + 1}`);
let intervalId: ReturnType<typeof setInterval>;

const startTextCycle = () => {
  intervalId = setInterval(() => {
    count = (count + 1) % texts.length;
    activeText.value = texts[count];
    activeTextKey.value = `text${count + 1}`;
  }, 5000);
};

onMounted(() => {
  startTextCycle();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div
    class="flex justify-center items-center py-5 px-2.5 sm:px-5 md:px-10 w-full"
  >
    <div class="absolute top-0 left-0 size-full bg-white/90 z-10"></div>

    <div class="absolute top-0 left-0 size-full z-0">
      <img class="object-cover size-full" src="/building.png" alt="building" />
    </div>

    <div class="flex flex-col p-0 sm:p-10 z-20 max-w-5xl">
      <div class="flex gap-2.5 md:gap-5">
        <PhQuotes
          class="size-12 md:size-14 lg:size-16 text-primary shrink-0"
          weight="duotone"
        />
        <div class="flex flex-col gap-10">
          <p
            :key="activeTextKey"
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-primary transition-all duration-200"
          >
            {{ activeText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
