<template>
  <div class="flex flex-col h-fit">
    <div class="relative w-full h-[60vh]">
      <img
        class="size-full object-cover"
        :src="currentNews.image"
        :alt="currentNews.title"
      />
    </div>

    <div class="w-full space-y-2.5 py-20" :class="container">
      <p class="text-base md:text-lg text-[#1C6220] w-full">
        {{ currentNews.title }}
      </p>
      <div
        class="grid grid-cols-6 lg:grid-cols-12 grid-flow-row-dense justify-center w-full gap-16"
      >
        <div class="flex flex-col col-span-6 lg:col-span-9 gap-5 w-full">
          <div class="flex flex-col gap-2.5 w-full">
            <h1
              class="text-2xl md:text-[28px] leading-tight w-full font-semibold md:font-medium"
            >
              {{ currentNews.description }}
            </h1>
            <div class="w-full">
              <p class="px-2.5 py-1.5 text-xs bg-[#1C6220]/10 w-fit">
                {{ currentNews.date }}
              </p>
            </div>
          </div>
          <ProseWrapper v-if="currentNews">
            <ContentRenderer :value="currentNews" />
          </ProseWrapper>
          <BottomNavigation />
        </div>

        <div
          class="flex flex-col items-start col-span-6 lg:col-span-3 gap-5 w-full"
        >
          <MediaRelatedNews />
        </div>
      </div>
    </div>

    <CTA />
  </div>
</template>

<script lang="ts" setup>
import type { NewsItem } from "~/types/types";
import { ProseWrapper } from "#components";

const { container } = useTailwindConfig();
const props = defineProps<{ currentNews: NewsItem; news: NewsItem[] }>();

useSeoMeta({
  title: props.currentNews.title,
  ogTitle: props.currentNews.title,
  description: props.currentNews.description,
  ogDescription: props.currentNews.description,
  ogImage: props.currentNews.image,
  twitterCard: "summary_large_image",
});
</script>
