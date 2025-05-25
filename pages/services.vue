<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronRight } from "lucide-vue-next";

const serviceContents = [
  "At Metropolitan Electric Limited, we provide a comprehensive range of Electric Vehicle(EV) solutions to meet all your transportation needs.",
  "From corporate EV fleets to fleet renewal for public transportation, ride-hailing services, and charging infrastructure, we deliver innovative and sustainable mobility solutions tailored for the African market.",
  "Our commitment to excellence ensures that you receive reliable, efficient, and eco-friendly services every step of the way.",
  "Explore our diverse offerings and join us in driving the future of sustainable mobility in Africa.",
];

const evSolutions = [
  {
    id: 1,
    image: "/card/corporate.webp",
    title: "Corporate EV Fleet",
    description:
      "We offer comprehensive electric vehicles solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
  },
  {
    id: 2,
    image: "/card/greenfleet.webp",
    title: "GreenFleet: Public Transportation Renewal",
    description:
      "GreenFleet is our EV Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.",
  },
  {
    id: 3,
    image: "/card/metro.webp",
    title: "MetroCharge: EV Charging Infrastructure",
    description:
      "Recognising the importance of supporting infrastructure, Metro Charge is our network of EV charging stations in partnership with SOLATLANTINC Ltd., dedicated to ensuring seamless and convenient charging for all Electric Vehicles users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.",
  },
  {
    id: 4,
    image: "/card/ryde.webp",
    title: "RYDE: Ride-Hailing And Sharing Services",
    description:
      "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned EV assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa.",
  },
  {
    id: 5,
    image: "/card/assembli.webp",
    title: "ASSEMBLI: Electric Vehicles (EV) Assembly Network",
    description:
      "ASSEMBLI is our extensive network of EV Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.",
  },
  {
    id: 6,
    image: "/card/evCare.webp",
    title: "EV Care: Electric Vehicle Maintenance Services ",
    description:
      "EV Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
  },
];

const currentContentIndex = ref(0);
const isAnimating = ref(false);
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const setContentIndex = (index: number) => {
  if (index !== currentContentIndex.value && !isAnimating.value) {
    isAnimating.value = true;

    setTimeout(() => {
      currentContentIndex.value = index;
      isAnimating.value = false;
    }, 600);

    resetAutoplay();
  }
};

const nextContent = () => {
  if (!isAnimating.value) {
    isAnimating.value = true;

    setTimeout(() => {
      currentContentIndex.value =
        (currentContentIndex.value + 1) % serviceContents.length;
      isAnimating.value = false;
    }, 600);
  }
};

const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer);

  autoplayTimer = setInterval(() => {
    nextContent();
  }, 5000);
};

const resetAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer);
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer);
});
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="px-10 mt-[210px] lg:mt-24 md:mt-[200px] lg:py-12 flex flex-col md:flex-row"
    >
      <div class="w-full md:w-1/2 z-10 h-[438px] lg:mt-[155px] md:mt-[130px]">
        <h1
          class="text-[36px] lg:text-[44px] md:text-[36px] text-[#101920] leading-[1.4em] tracking-[-0.04em] md:font-normal font-medium font-poppins mt-20 mb-8"
        >
          Our Services
        </h1>
        <div class="relative overflow-hidden mb-4 h-[7rem] max-w-md">
          <div class="relative w-full h-full">
            <transition-group
              name="slideshow"
              tag="div"
              class="relative w-full h-full"
            >
              <p
                v-for="(content, index) in serviceContents"
                :key="index"
                v-show="currentContentIndex === index"
                class="absolute font-[18px] font-sora leading-[1.2em] top-0 left-0 w-full h-full py-5 px-[5px] text-[#000000] text-justify transition-all duration-[600ms] ease-spring"
              >
                {{ content }}
              </p>
            </transition-group>
          </div>
        </div>

        <div class="flex justify-center space-x-[10px] mb-16 max-w-md">
          <button
            v-for="(content, index) in serviceContents"
            :key="index"
            @click="setContentIndex(index)"
            class="w-[10px] h-[10px] rounded-full transition-colors duration-300"
            :class="currentContentIndex === index ? 'bg-black' : 'bg-gray-300'"
            :aria-label="`View content ${index + 1}`"
            :aria-current="currentContentIndex === index ? 'true' : 'false'"
          ></button>
        </div>
      </div>

      <div
        class="w-[468px] lg:h-[1009px] mt-[60px] lg:mt-[15px] lg:-right-0 -right-[210px] md:-right-24 md:h-auto md:w-1/2 absolute md:relative"
      >
        <img
          src="/car_image.png"
          alt="Electric vehicle top view"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>
    <div
      class="w-full px-5 lg:px-10 md:px-10 h-auto mt-[520px] lg:mt-[110px] md:mt-[-50px]"
    >
      <div class="max-w-7xl mx-auto mb-[100px]">
        <div
          class="text-[#000000] font-normal font-poppins leading-[1.4em] text-[22px]"
        >
          What We Offer
        </div>
        <h2
          class="lg:text-[56px] md:text-[36px] text-[36px] font-poppins text-[#101920] tracking-[-0.04em] lg:font-medium md:font-medium leading-[1.4em] mb-12 mt-[10px]"
        >
          360 of EV Solutions
        </h2>

        <div class="w-full h-auto mt-8">
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px]"
          >
            <div
              v-for="solution in evSolutions"
              :key="solution.id"
              class="card-container relative h-[400px] rounded-[20px] overflow-hidden cursor-pointer"
            >
              <div
                class="card-front absolute inset-0 transition-all duration-200"
              >
                <img
                  :src="solution.image"
                  :alt="solution.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <a href="/">
                <div
                  class="card-back absolute inset-0 bg-transparent rounded-[20px] lg:p-6 p-3 transform scale-95 opacity-0 transition-all duration-500 ease-out"
                >
                  <div
                    class="absolute top-8 left-5 right-6 lg:p-5 md:p-4 p-2 flex justify-between items-center"
                  >
                    <div class="text-flip">
                      <h3
                        class="lg:text-[18px] md:text-md text-sm font-normal font-poppins text-black"
                      >
                        {{ solution.title }}
                      </h3>
                    </div>
                    <div class="icon-flip">
                      <ChevronRight
                        class="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4 text-black font-medium"
                      />
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-center lg:mt-3 mt-6 h-full lg:px-6 px-4"
                  >
                    <div class="text-flip max-w-md">
                      <p
                        class="text-black text-sm lg:text-[16px] md:text-md font-normal text-center font-noto leading-relaxed"
                      >
                        {{ solution.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ease-spring {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.slideshow-enter-active,
.slideshow-leave-active {
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.slideshow-enter-from {
  opacity: 0;
  transform: translateX(1200px);
}

.slideshow-leave-to {
  opacity: 0;
  transform: translateX(-1200px);
}

.slideshow-enter-to,
.slideshow-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.card-container {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s;
}

.card-container:hover {
  transform: scale(1.05);
}

.card-container:hover .card-front {
  opacity: 0;
  transform: scale(1.05);
}

.card-container:hover .card-back {
  opacity: 1;
  transform: scale(1);
}
.card-container:hover .icon-flip {
  animation: flipIn 0.3s ease 0.1s forwards;
}

.card-container:hover .text-flip {
  animation: flipIn 0.3s ease 0.1s forwards;
}

@keyframes flipIn {
  0% {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  50% {
    transform: rotateY(-45deg);
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

.icon-flip,
.text-flip {
  opacity: 0;
  transform: rotateY(-90deg);
}
</style>
