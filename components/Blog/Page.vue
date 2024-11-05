<template>
  <div v-if="currentBlog" class="py-20 space-y-20 w-full">
    <div class="relative flex flex-col gap-5 md:gap-10 w-full">
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
      <div class="grid grid-cols-6 md:grid-cols-12 w-full gap-8 items-start">
        <div
          class="md:sticky md:top-24 flex flex-col gap-10 col-span-6 md:col-span-4"
        >
          <div class="flex flex-col gap-2.5">
            <p class="font-semibold text-lg">Table of Content</p>
            <div class="flex gap-2">
              <ul
                class="mt-1 space-y-3.5 font-noto text-black/80 md:text-black/60 text-sm w-full"
              >
                <li v-for="item in currentBlog.body.toc.links" :key="item.id">
                  <NuxtLink
                    :href="`#${item.id}`"
                    class="transition-all duration-300"
                    :class="{
                      'md:text-green-500 md:font-bold md:text-lg md:pl-2':
                        activeSection === item.id,
                    }"
                    >{{ item.text }}</NuxtLink
                  >
                  <ul
                    v-if="item.children && item.children.length"
                    class="space-y-2 mt-2"
                  >
                    <li
                      v-for="child in item.children"
                      :key="child.id"
                      class="pl-2 transition-all duration-300"
                      :class="{
                        'md:text-green-500 md:pl-4': activeSection === child.id,
                      }"
                    >
                      <NuxtLink :href="`#${child.id}`" active-class="text-">
                        {{ child.text }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

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
        <div class="col-span-6 md:col-span-8">
          <ProseWrapper v-if="currentBlog">
            <ContentRenderer :value="currentBlog" />
          </ProseWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeSection = ref<string | null>(null);
const props = defineProps(["currentBlog"]);

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

const setupScrollWatcher = () => {
  const sections = document.querySelectorAll("[id]");
  console.log("Sections", sections);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.9 }
  );

  sections.forEach((section) => observer.observe(section));

  onBeforeUnmount(() => {
    sections.forEach((section) => observer.unobserve(section));
  });
};

onMounted(setupScrollWatcher);
</script>
