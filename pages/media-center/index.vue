<script lang="ts" setup>
import { ArrowDownIcon, ArrowPathIcon } from "@heroicons/vue/20/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import type { Media } from "~/types/types";

const { container } = useTailwindConfig();
const isLoading = ref(false);
const progressCircle = ref();
const progressContent = ref<HTMLElement | null>(null);
const loadMoreActive = ref(false);
const gallerySize = ref(1020);
const gallerySizeIncrement = ref();

let windowWidth = 0;
const numberOfGalleryItems = ref(0);

onMounted(() => {
  windowWidth = window.innerWidth;
  gallerySizeIncrement.value = Size.value;
  updateGalleryItemCount();
});

const itemsPerPage = computed(() => {
  return windowWidth <= 768 ? 2 : 3;
});
const Size = computed(() => {
  return windowWidth <= 768 ? 510 : 1020;
});

const props = defineProps<{ media: Media[] }>();

const updateGalleryItemCount = () => {
  numberOfGalleryItems.value = itemsPerPage.value;
  if (numberOfGalleryItems.value >= props.media.length) {
    loadMoreActive.value = false;
  } else {
    loadMoreActive.value = true;
  }
};

const onAutoplayTimeLeft = (s: any, time: number, progress: any) => {
  if (progressCircle.value) {
    progressCircle.value.style.setProperty("--progress", 1 - progress);
  }
  if (progressContent.value) {
    progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
  }
};

useSeoMeta({
  title: "Media Center",
  ogTitle: "Media Center",
  description:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogDescription:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogImage: "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});

const loadMore = () => {
  isLoading.value = true;
  setTimeout(() => {
    if (numberOfGalleryItems.value >= props.media.length) {
      loadMoreActive.value = false;
    } else {
      gallerySize.value += gallerySizeIncrement.value;
      numberOfGalleryItems.value =
        numberOfGalleryItems.value + itemsPerPage.value;
      if (numberOfGalleryItems.value >= props.media.length) {
        loadMoreActive.value = false;
      }
    }
    isLoading.value = false;
  }, 500);
};
</script>

<template>
  <div :class="container" class="py-20 space-y-20">
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-3xl md:text-4xl">MEDIA Center</h1>
        <p class="text-[#1C6220] text-lg sm:text-xl">
          Discover Our Latest News, Updates, and Visual Highlights
        </p>
      </div>

      <div class="flex flex-col gap-2.5">
        <div class="relative flex flex-col h-[500px] w-full justify-end">
          <video
            src="/metro_motion.webm"
            autoplay
            muted
            class="absolute top-0 left-0 size-full object-cover"
          ></video>
          <div class="p-5 bg-black/20 backdrop-blur-sm gap-2.5">
            <p class="text-white text-base md:text-lg font-noto">
              Powering the Future
            </p>
            <h2
              class="text-white text-2xl md:text-[28px] font-main font-semibold md:font-bold"
            >
              Next-gen EVs for a cleaner tomorrow.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-2xl md:text-3xl">Latest News</h1>
        <p class="text-[#1C6220]">
          Stay Informed with the Latest News and Updates
        </p>
      </div>

      <div class="flex flex-col items-center gap-2.5">
        <ContentList path="/media-center" v-slot="{ list: news }">
          <MediaNews
            v-if="news"
            class="w-full"
            :title="news[news.length - 1].title!"
            :description="news[news.length - 1].description"
            :slug="news[news.length - 1]._path!"
            :image="news[news.length - 1].image"
          />
          <div class="flex w-full">
            <Swiper
              :modules="[Autoplay, Navigation]"
              class="size-full"
              :direction="'horizontal'"
              :space-between="0"
              :navigation="true"
              :slidesPerView="1"
              :loop="true"
              :grabCursor="true"
              :autoplay="{
                delay: 10000,
                disableOnInteraction: false,
              }"
              @autoplayTimeLeft="onAutoplayTimeLeft"
              :breakpoints="{
                '640': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }"
            >
              <SwiperSlide
                v-if="news.length >= 2"
                v-for="(newsItem, index) in news"
                :key="index"
                class="size-full"
              >
                <MediaNews
                  :title="newsItem.title!"
                  :description="newsItem.description"
                  :slug="newsItem._path!"
                  :image="newsItem.image"
                />
              </SwiperSlide>
              <template v-if="news.length >= 4" #container-end>
                <div class="autoplay-progress">
                  <svg class="size-6" viewBox="0 0 48 48" ref="progressCircle">
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref="progressContent"></span>
                </div>
              </template>
            </Swiper>
          </div>
        </ContentList>
      </div>
    </div>
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-2xl md:text-3xl">Gallery</h1>
        <p class="text-[#1C6220]">
          Explore Our Collection of Moments and Visual Highlights
        </p>
      </div>

      <div class="flex flex-col items-center gap-2.5">
        <div
          class="relative grid grid-flow-row-dense justify-center w-full gap-2.5 overflow-hidden transition-all duration-300 ease-in h-fit"
          :style="`height:${gallerySize}px`"
        >
          <MediaItem
            v-for="(mediaItem, index) in media"
            :key="index"
            class="col-span-12"
            :class="
              index == 0 || index % 3 == 0 ? 'md:col-span-12' : 'md:col-span-6'
            "
            :title="mediaItem.title"
            :description="mediaItem.description"
            :image="mediaItem.image"
          />
        </div>

        <button
          v-if="loadMoreActive"
          @click="loadMore"
          class="mt-5 flex justify-center items-center py-3 px-8 text-white bg-brand/80 hover:bg-brand gap-2.5 w-fit disabled:opacity-10"
          :disabled="!loadMoreActive"
        >
          Load More
          <ArrowDownIcon
            v-if="!isLoading"
            class="size-6 text-white font-main"
          />
          <ArrowPathIcon class="animate-spin size-6 mx-auto" v-if="isLoading" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.autoplay-progress {
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #10b526;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: #10b526;
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper-button-next,
.swiper-button-prev {
  width: 32px;
  height: 32px;
  background-color: #0a8210;
  border-radius: 50%;
  box-shadow: 4px 10px 10.770329614269007px -3.75px rgba(0, 0, 0, 0.0625);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-weight: bold;
  font-size: 18px;
  left: 16px;
  color: white;
}
</style>
