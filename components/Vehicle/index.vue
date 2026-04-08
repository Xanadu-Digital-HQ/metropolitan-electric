<script lang="ts" setup>
import type { vehicle } from "~/types/types";

const actualVehicle = ref<vehicle | null>(null);
const vehicleItem = defineProps({
  vehicle: {
    type: Object as PropType<vehicle>,
    required: true,
  },
});

const getVehicle = (vehicleItem: vehicle) => {
  const item = ref();
  switch (vehicleItem.category) {
    case "car":
      item.value = vehicleItem;
      break;
    case "bus":
      item.value = vehicleItem;
      break;
    default:
      item.value = vehicleItem;
  }
  return item.value;
};

const contactNumber = "+23408126630682";

const currentImageIndex = ref(0);
const isImageLoading = ref(true);
const slideDirection = ref("left");
const isAnimating = ref(false);

const touchStartX = ref(0);
const touchEndX = ref(0);
const isSwiping = ref(false);

const busImages = ["/Bus1.png", "/Bus2.png", "/Bus3.png"];

let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const slideTransform = computed(() => {
  if (slideDirection.value === "left") {
    return isAnimating.value ? "translateX(-1200px)" : "translateX(0)";
  } else {
    return isAnimating.value ? "translateX(1200px)" : "translateX(0)";
  }
});

const nextImage = () => {
  if (isAnimating.value) return;

  slideDirection.value = "left";
  isAnimating.value = true;
  isImageLoading.value = true;

  setTimeout(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % busImages.length;
    isAnimating.value = false;
  }, 500);
};

const prevImage = () => {
  if (isAnimating.value) return;

  slideDirection.value = "right";
  isAnimating.value = true;
  isImageLoading.value = true;

  setTimeout(() => {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + busImages.length) % busImages.length;
    isAnimating.value = false;
  }, 500);
};

const setImageIndex = (index: number) => {
  if (index !== currentImageIndex.value && !isAnimating.value) {
    slideDirection.value = index > currentImageIndex.value ? "left" : "right";
    isAnimating.value = true;
    isImageLoading.value = true;

    setTimeout(() => {
      currentImageIndex.value = index;
      isAnimating.value = false;
    }, 500);
  }
};

const handleImageLoad = () => {
  isImageLoading.value = false;
};

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX;
  isSwiping.value = true;

  stopAutoplay();
};

const handleTouchMove = (e: TouchEvent) => {
  if (!isSwiping.value) return;

  e.preventDefault();
};

const handleTouchEnd = (e: TouchEvent) => {
  if (!isSwiping.value) return;

  touchEndX.value = e.changedTouches[0].screenX;
  const swipeDistance = touchEndX.value - touchStartX.value;

  const swipeThreshold = 50;

  if (swipeDistance < -swipeThreshold) {
    nextImage();
  } else if (swipeDistance > swipeThreshold) {
    prevImage();
  }

  isSwiping.value = false;

  startAutoplay();
};

const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer);

  autoplayTimer = setInterval(() => {
    nextImage();
  }, 3000);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

const isMobile = ref(false);
const isTablet = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 640;
  isTablet.value = window.innerWidth >= 640 && window.innerWidth < 1024;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "ArrowLeft") {
    prevImage();
  } else if (e.key === "ArrowRight") {
    nextImage();
  }
};

onMounted(() => {
  actualVehicle.value = getVehicle(vehicleItem.vehicle);
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  window.addEventListener("keydown", handleKeyDown);

  busImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  startAutoplay();
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  window.removeEventListener("keydown", handleKeyDown);

  stopAutoplay();
});
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[76px] pb-16">
    <h1
      class="text-2xl md:text-3xl lg:text-4xl font-varela font-medium text-gray-800 mb-4 sm:mb-6 lg:mb-8 mt-[180px]"
    >
      {{ actualVehicle?.name }}
    </h1>

    <div class="overflow-hidden">
      <div class="flex flex-col lg:flex-row w-full h-fit mt-10 gap-20">
        <div class="flex flex-col gap-20 basis-3/5 mt-5">
          <div class="relative h-auto w-full overflow-hidden">
            <div
              v-if="isImageLoading"
              class="absolute inset-0 flex items-center justify-center bg-gray-100 z-10"
            >
              <svg
                class="animate-spin h-8 w-8 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>

            <div class="relative w-full h-full">
              <img
                :key="currentImageIndex"
                :src="actualVehicle?.images[currentImageIndex]"
                :alt="`Electric Bus Image ${currentImageIndex + 1}`"
                class="w-full h-full object-contain transition-transform duration-500 ease-spring"
                :style="{ transform: slideTransform }"
                @load="handleImageLoad"
              />
            </div>

            <div
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 p-2 rounded-full z-20"
            >
              <button
                v-for="(image, index) in actualVehicle?.images"
                :key="index"
                @click="setImageIndex(index)"
                class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="
                  currentImageIndex === index
                    ? 'bg-white'
                    : 'bg-gray-300 bg-opacity-50'
                "
                :aria-label="`View image ${index + 1}`"
                :aria-current="currentImageIndex === index ? 'true' : 'false'"
              ></button>
            </div>

            <button
              @click="prevImage"
              class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1 hover:bg-opacity-50 transition"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click="nextImage"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1 hover:bg-opacity-50 transition"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div class="flex flex-col gap-5">
            <h3
              class="font-normal font-varela text-[#113912] uppercase text-3xl"
            >
              Description
            </h3>
            <p
              class="text-base md:text-lg font-noto font-normal text-black/60 leading-[27px]"
            >
              {{ actualVehicle?.description }}
            </p>
          </div>

          <div class="flex flex-col gap-5">
            <h3 class="text-3xl text-[#113912] uppercase">Features</h3>
            <div class="columns-2 gap-5 max-h-96 space-y-2.5">
              <div
                v-for="feature in actualVehicle?.features"
                :key="feature"
                class="flex font-noto text-lg space-x-2.5 break-inside-avoid"
              >
                <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4 mt-2" />
                <span class="text-base md:text-lg text-black/60">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="basis-2/5">
          <p class="text-[28px] leading-[1.2em] font-normal text-[#000000]">
            ELECTRIC BUS
          </p>
          <p
            class="text-[28px] leading-[1.2em] font-normal text-[#000000] mt-5"
          >
            {{ vehicle.price }}
          </p>

          <div class="mt-16 space-y-3">
            <div
              v-for="(spec, index) in actualVehicle?.specification"
              :key="index"
              class="flex gap-20 py-2"
            >
              <span class="w-2/5 text-md font-noto text-[#505050]">{{
                spec.label
              }}</span>
              <span class="w-3/5 text-md font-noto text-[#505050]">{{
                spec.value
              }}</span>
            </div>
          </div>

          <div class="flex flex-col items-start mt-16 ml-[65px]">
            <p class="text-md text-gray-700 font-sans text-center mb-6">
              Call Us:
              <a :href="`tel:${contactNumber}`" class="hover:underline">
                {{ contactNumber }}
              </a>
            </p>
            <button
              class="bg-black font-noto font-bold h-[50px] ml-14 text-white py-[15px] px-[32px] rounded-full text-[16px] leading-[20px] hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
