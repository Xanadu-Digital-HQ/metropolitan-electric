<template>
  <div :class="container" class="py-20 space-y-20">
    <div class="space-y-10">
      <div class="flex flex-col gap-2.5">
        <h1 class="text-[#113912] text-3xl md:text-4xl">Blog & Articles</h1>
        <p class="text-[#1C6220] text-lg sm:text-xl">
          Insights, Stories, and Expert Opinions on Industry Trends
        </p>
      </div>

      <div class="flex flex-col gap-2.5">
        <ContentList path="/blog" v-slot="{ list: blogs }">
          <div class="relative flex flex-col h-[500px] w-full justify-end">
            <NuxtLink
              :to="blogs[blogs.length - 1]._path"
              class="group relative flex flex-col h-[500px] w-full"
            >
              <div class="relative flex overflow-clip h-full items-end">
                <img
                  class="absolute top-0 left-0 size-full object-cover group-hover:scale-110 transition-all duration-200"
                  :src="blogs[blogs.length - 1].image"
                  alt="Green Drive Image"
                />
                <div
                  class="relative flex flex-col gap-4 md:gap-6 p-2.5 md:p-5 bg-black/40 backdrop-blur-sm overflow-hidden h-fit"
                >
                  <div
                    class="flex gap-2.5 w-full justify-between items-start transition-all duration-500 ease-in-out"
                  >
                    <div class="flex flex-col gap-1.5 md:gap-2.5">
                      <h1
                        class="text-white text-xl md:text-2xl font-main font-semibold md:font-bold max-w-[80%]"
                      >
                        {{ blogs[blogs.length - 1].title }}
                      </h1>
                      <p
                        class="text-white text-sm sm:text-base md:text-lg font-noto"
                      >
                        {{ blogs[blogs.length - 1].description }}
                      </p>
                    </div>
                    <div
                      class="flex items-center justify-center p-1.5 size-fit bg-black/80 rounded-full"
                    >
                      <ArrowUpRightIcon
                        class="size-4 md:size-6 text-white shrink-0"
                      />
                    </div>
                  </div>

                  <div
                    class="flex flex-wrap gap-2.5 justify-between items-center"
                  >
                    <div class="flex justify-between items-center gap-2">
                      <div class="flex gap-2.5 items-center">
                        <div
                          class="flex justify-center items-center rounded-full bg-[#101920] p-1.5 size-fit"
                        >
                          <img
                            class="size-4 md:size-5"
                            src="/wheel.svg"
                            alt=""
                          />
                        </div>
                        <p class="text-white text-sm sm:text-base md:text-lg">
                          Metropolitan Electric
                        </p>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div
                          class="flex justify-center items-center border rounded-full border-white size-7 p-1"
                        >
                          <CalendarDaysIcon class="size-fit text-white" />
                        </div>
                        <p class="text-white text-sm md:text-lg">
                          {{ blogs[blogs.length - 1].date }}
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-1.5 items-center">
                      <p
                        v-for="tag in blogs[blogs.length - 1].tags"
                        :key="tag"
                        class="text-white hover:underline text-sm md:text-base"
                      >
                        #{{ tag }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </div>

    <div class="space-y-10">
      <!-- Sub Navbar and Search Button to be added here -->
      <!-- <div class="flex">
        <div class="flex">
          <span>All</span>
        </div>
      </div> -->

      <div class="flex flex-wrap justify-between">
        <ContentList path="/blog" v-slot="{ list: blogs }">
          <BlogItem
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title!"
            :description="blog.description"
            :content="blog.content"
            :slug="blog._path!"
            :image="blog.image"
            :tags="blog.tags"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
          />
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";

const { container } = useTailwindConfig();

useSeoMeta({
  title: "Blogs & Articles",
  ogTitle: "Blogs & Articles",
  description:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogDescription:
    "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
  ogImage: "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});
</script>
