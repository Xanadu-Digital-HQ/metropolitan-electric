<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

interface BusSpecification {
  label: string;
  value: string;
}

interface BusFeature {
  id: number;
  name: string;
}

const specifications: BusSpecification[] = [
  { label: "NAME", value: "Metro Electric" },
  { label: "MODEL", value: "Mass Transit" },
  { label: "BATTERY SIZE", value: "160kwh" },
  { label: "RANGE", value: "265 km" },
  { label: "COLOR", value: "WHITE" },
];

const features: BusFeature[] = [
  { id: 1, name: "Eco-Friendly Powertrain" },
  { id: 2, name: "Impressive Range" },
  { id: 3, name: "Spacious & Passenger Focused Design" },
  { id: 4, name: "Energy Efficiency" },
  { id: 5, name: "Smart Technology Integration" },
  { id: 6, name: "Safety Features" },
  { id: 7, name: "Quick Charging Capability" },
  { id: 8, name: "Durability and Reliability" },
];

const busPrice = "₦310,000,000";
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
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[76px] pb-16">
    <h1
      class="text-xl lg:text-2xl font-varela font-semibold text-gray-800 mb-4 sm:mb-6 lg:mb-8 mt-[180px]"
    >
      E-Bus
    </h1>

    <div class="bg-white rounded-lg overflow-hidden mt-[30px]">
      <div class="hidden lg:flex lg:flex-row w-full h-[1601px] mt-[100px]">
        <div class="w-1/2">
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
                :src="busImages[currentImageIndex]"
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
                v-for="(image, index) in busImages"
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

          <div class="mt-[100px]">
            <h3
              class="font-normal font-varela text-[#113912] uppercase text-[30px]"
            >
              Description
            </h3>
            <p
              class="mt-3 text-[18px] font-noto font-normal text-[#505050] leading-[27px]"
            >
              The Metro Electric Mass Transit E-Bus is a state-of-the-art
              electric vehicle designed to redefine sustainable urban
              transportation. Equipped with a robust 160 kWh battery, it boasts
              an impressive range of 265 km per charge, making it ideal for
              city-wide transit systems. Engineered for efficiency and
              eco-friendliness, the Metro Electric offers smooth, quiet rides
              while significantly reducing carbon emissions. This advanced mass
              transit solution combines innovation, reliability, and
              environmental consciousness to meet the growing demands for
              sustainable public transportation. Perfect for modern urban
              settings, it exemplifies the future of green mobility.
            </p>
          </div>

          <div class="mt-20">
            <h3
              class="text-[30px] font-normal leading-[37.5px] text-[#113912] uppercase"
            >
              Features
            </h3>
            <div class="mt-4 grid grid-cols-2 gap-y-3 gap-x-4">
              <div
                v-for="feature in features.slice(0, 4)"
                :key="feature.id"
                class="flex items-center font-noto font-[18px] leading-[1.4em] space-x-[10px]"
              >
                <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4" />
                <span class="text-[18px] text-[#505050] leading-[1.4em]">
                  {{ feature.name }}
                </span>
              </div>
              <div
                v-for="feature in features.slice(4, 8)"
                :key="feature.id"
                class="flex items-center font-noto font-normal text-[18px] leading-[1.4em] space-x-[10px]"
              >
                <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4" />
                <span class="text-[18px] text-[#505050] leading-[1.4em]">
                  {{ feature.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-[80px] pt-0 w-1/2">
          <p class="text-[28px] leading-[1.2em] font-normal text-[#000000]">
            ELECTRIC BUS
          </p>
          <p
            class="text-[28px] leading-[1.2em] font-normal text-[#000000] mt-5"
          >
            {{ busPrice }}
          </p>

          <div class="mt-16 space-y-3">
            <div
              v-for="(spec, index) in specifications"
              :key="index"
              class="flex py-2"
            >
              <span class="w-1/3 text-md font-noto text-[#505050]">{{
                spec.label
              }}</span>
              <span class="w-2/3 text-md font-noto text-[#505050]">{{
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

      <div class="hidden md:block lg:hidden">
        <div
          class="relative mt-[90px] w-full h-auto overflow-hidden"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div class="relative w-full h-[600px] no-select">
            <img
              :key="currentImageIndex"
              :src="busImages[currentImageIndex]"
              alt="Electric Bus Tablet View"
              class="w-full h-full object-cover rounded-[15px] transition-transform duration-500 ease-spring"
              :style="{ transform: slideTransform }"
            />

            <div
              v-if="isSwiping"
              class="absolute inset-0 flex items-center justify-between px-6 pointer-events-none"
            >
              <div
                class="bg-black bg-opacity-30 text-white rounded-full p-3 transform transition-opacity"
                :class="
                  touchEndX - touchStartX > 20 ? 'opacity-70' : 'opacity-30'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              </div>
              <div
                class="bg-black bg-opacity-30 text-white rounded-full p-3 transform transition-opacity"
                :class="
                  touchStartX - touchEndX > 20 ? 'opacity-70' : 'opacity-30'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 p-2 rounded-full"
          >
            <button
              v-for="(image, index) in busImages"
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
        </div>

        <div class="mt-[100px]">
          <h3
            class="text-[30px] leading-[28px] font-normal font-varela text-[#113912] uppercase"
          >
            Description
          </h3>
          <p class="mt-5 text-[18px] font-noto text-[#505050] leading-[27px]">
            The Metro Electric Mass Transit E-Bus is a state-of-the-art electric
            vehicle designed to redefine sustainable urban transportation.
            Equipped with a robust 160 kWh battery, it boasts an impressive
            range of 265 km per charge, making it ideal for city-wide transit
            systems. Engineered for efficiency and eco-friendliness, the Metro
            Electric offers smooth, quiet rides while significantly reducing
            carbon emissions. This advanced mass transit solution combines
            innovation, reliability, and environmental consciousness to meet the
            growing demands for sustainable public transportation. Perfect for
            modern urban settings, it exemplifies the future of green mobility.
          </p>
        </div>

        <div class="mt-[80px]">
          <h3
            class="text-[30px] leading-[28px] font-varela font-normal text-[#113912] uppercase"
          >
            Features
          </h3>
          <div class="mt-5 grid grid-cols-2 gap-y-3 gap-x-4">
            <div
              v-for="feature in features.slice(0, 4)"
              :key="feature.id"
              class="flex items-center space-x-[10px]"
            >
              <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4" />
              <span
                class="text-[18px] font-normal font-noto text-[#333333] leading-[1.4em]"
              >
                {{ feature.name }}
              </span>
            </div>
            <div
              v-for="feature in features.slice(4, 8)"
              :key="feature.id"
              class="flex items-center space-x-[10px]"
            >
              <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4" />
              <span
                class="text-[18px] font-normal font-noto text-[#333333] leading-[1.4em]"
              >
                {{ feature.name }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-[360px]">
          <h3
            class="text-[28px] leading-[1.2em] font-normal font-varela text-[#000000] uppercase mb-5"
          >
            Electric Bus
          </h3>
          <p
            class="text-[28px] leading-[1.2em] font-normal font-varela text-[#000000]"
          >
            {{ busPrice }}
          </p>

          <div class="mt-16 space-y-[30px]">
            <div
              v-for="(spec, index) in specifications"
              :key="index"
              class="flex items-center space-x-[200px] py-2"
            >
              <span
                class="w-1/3 text-md font-noto text-[18px] leading-[1.4em] font-normal text-[#333333]"
                >{{ spec.label }}</span
              >
              <span
                class="w-2/3 text-md font-noto text-[18px] leading-[1.4em] font-normal text-[#505050]"
                >{{ spec.value }}</span
              >
            </div>
          </div>

          <div class="flex flex-col items-center mt-16">
            <p class="text-lg text-black font-sans text-center mb-6">
              Call Us:
              <a :href="`tel:${contactNumber}`" class="hover:underline">
                {{ contactNumber }}
              </a>
            </p>
            <button
              class="bg-black h-[50px] font-noto font-bold text-white py-[15px] px-[32px] rounded-full text-[16px] leading-[20px] hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div class="block md:hidden">
        <div
          class="relative mt-[90px] w-full h-auto overflow-hidden"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div class="relative w-full no-select">
            <img
              :key="currentImageIndex"
              :src="busImages[currentImageIndex]"
              alt="Electric Bus Mobile View"
              class="w-full h-auto object-contain rounded-[15px] transition-transform duration-500 ease-spring"
              :style="{ transform: slideTransform }"
            />

            <div
              v-if="isSwiping"
              class="absolute inset-0 flex items-center justify-between px-4 pointer-events-none"
            >
              <div
                class="bg-black bg-opacity-30 text-white rounded-full p-2 transform transition-opacity"
                :class="
                  touchEndX - touchStartX > 20 ? 'opacity-70' : 'opacity-30'
                "
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
              </div>
              <div
                class="bg-black bg-opacity-30 text-white rounded-full p-2 transform transition-opacity"
                :class="
                  touchStartX - touchEndX > 20 ? 'opacity-70' : 'opacity-30'
                "
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
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-400 bg-opacity-50 p-2 rounded-full"
          >
            <button
              v-for="(image, index) in busImages"
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

          <div class="absolute inset-x-0 bottom-12 flex justify-center">
            <div
              class="bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full animate-fade-out"
            >
              Swipe to navigate
            </div>
          </div>
        </div>

        <div class="mt-[100px]">
          <h3
            class="text-[30px] leading-[24px] font-varela font-normal text-[#113912] uppercase"
          >
            Description
          </h3>
          <p class="mt-5 text-[16px] font-noto leading-[27px] text-[#505050]">
            The Metro Electric Mass Transit E-Bus is a state-of-the-art electric
            vehicle designed to redefine sustainable urban transportation.
            Equipped with a robust 160 kWh battery, it boasts an impressive
            range of 265 km per charge, making it ideal for city-wide transit
            systems. Engineered for efficiency and eco-friendliness, the Metro
            Electric offers smooth, quiet rides while significantly reducing
            carbon emissions. This advanced mass transit solution combines
            innovation, reliability, and environmental consciousness to meet the
            growing demands for sustainable public transportation. Perfect for
            modern urban settings, it exemplifies the future of green mobility.
          </p>
        </div>

        <div class="mt-20">
          <h3
            class="text-[30px] leading-[24px] font-norrmal font-varela text-[#113912] uppercase"
          >
            Features
          </h3>
          <div class="mt-5 space-y-2">
            <div
              v-for="feature in features"
              :key="feature.id"
              class="flex items-center space-x-[10px]"
            >
              <img src="/MetroIcon.svg" alt="Icon" class="w-4 h-4" />
              <span
                class="text-[18px] leading-[1.4em] font-noto text-[#333333]"
              >
                {{ feature.name }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-[360px]">
          <h3
            class="text-[28px] leading-[1.2em] font-normal font-varela text-[#000000] uppercase mb-5"
          >
            Electric Bus
          </h3>
          <p
            class="text-[28px] leading-[1.2em] font-normal font-varela text-[#000000]"
          >
            {{ busPrice }}
          </p>

          <div
            class="mt-16 w-full grid grid-cols-[max-content_auto] gap-y-[30px]"
          >
            <template v-for="(spec, index) in specifications" :key="index">
              <span class="text-md text-[#505050] font-noto text-left pr-16">
                {{ spec.label }}
              </span>

              <span class="text-md font-medium font-noto text-[#505050]">
                {{ spec.value }}
              </span>
            </template>
          </div>

          <div class="flex flex-col items-center mt-16">
            <p class="text-lg text-black font-sans text-center mb-6">
              Call Us:
              <a :href="`tel:${contactNumber}`" class="hover:underline">
                {{ contactNumber }}
              </a>
            </p>
            <button
              class="bg-black h-[50px] font-noto font-bold text-white py-[15px] px-[32px] rounded-full text-[16px] leading-[20px] hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
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
