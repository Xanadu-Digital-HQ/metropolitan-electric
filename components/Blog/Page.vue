<template>
  <div v-if="currentBlog" class="py-20 space-y-20 w-full">
    <div class="flex flex-col gap-5 md:gap-10 w-full">
      <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl text-center max-w-2xl w-full text-[#113a13]">
          {{ currentBlog.title }}
        </h1>
        <div class="flex items-center gap-2.5">
          <p class="italic">{{ currentBlog.date }}</p>
          <span class="size-1.5 bg-[#113912] rounded-full"></span>
          <p class="italic">{{ currentBlog.minutesRead }} minutes</p>
        </div>
      </div>
      <div class="relative w-full h-[500px]">
        <img
          class="size-full object-cover"
          :src="currentBlog.image"
          :alt="currentBlog.title"
        />
      </div>
      <div class="grid grid-cols-6 md:grid-cols-12 w-full gap-5">
        <div
          class="flex flex-col gap-10 col-span-6 md:col-span-4 order-last md:order-first"
        >
          <div class="flex flex-col gap-2.5">
            <p class="font-semibold">Share Article</p>
            <div class="flex gap-2">
              <SocialShareButton
                v-for="item in socialMedia"
                :key="item"
                :platform="item"
                :url="`https://metropolitanelectricng.com/blog/${currentBlog?.slug}`"
                :title="currentBlog.title"
              >
                <SocialIcon :name="item" />
              </SocialShareButton>
            </div>
          </div>

          <div class="flex flex-col gap-2.5">
            <p class="font-semibold">Tags</p>
            <div class="flex flex-wrap gap-2">
              <p
                v-for="tag in currentBlog.tags"
                :key="tag"
                class="text-xs p-2.5 bg-[#113912]/10"
              >
                #{{ tag }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-6 md:col-span-8 order-first md:order-last">
          <ProseWrapper v-if="currentBlog">
            <ContentRenderer :value="currentBlog" />
          </ProseWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Blog } from "~/types/types";
const props = defineProps<{ currentBlog: Blog }>();

const socialMedia = [
  "Twitter",
  "Facebook",
  "Linkedin",
  "Whatsapp",
  "Instagram",
];

useSeoMeta({
  title: props.currentBlog.title,
  ogTitle: props.currentBlog.title,
  description: props.currentBlog.description,
  ogDescription: props.currentBlog.description,
  ogImage: props.currentBlog.image,
  twitterCard: "summary_large_image",
});
</script>
