<template>
  <div class="py-20 space-y-10">
    <div class="relative flex flex-col justify-center w-full gap-y-10">
      <button
        @click="scrollLeft"
        class="group absolute -left-8 active:outline outline-[#1c6220] rounded-2xl hidden [@media(min-width:800px)]:inline"
      >
        <ArrowLeftIcon
          class="group-hover:text-[#1c6220] w-6 h-6"
          :class="transition"
        />
      </button>
      <button
        @click="scrollRight"
        class="group absolute -right-8 active:outline outline-[#1c6220] rounded-2xl hidden [@media(min-width:800px)]:inline"
      >
        <ArrowRightIcon
          class="group-hover:text-[#1c6220] w-6 h-6"
          :class="transition"
        />
      </button>
      <h2 class="text-[#113912] text-xl md:text-2xl">Related Blogs</h2>
      <div
        ref="scrollContainer"
        class="blog-container-scroll flex gap-5 overflow-x-auto"
      >
        <ContentList path="/blog" v-slot="{ list: blogs }">
          <BlogItem
            v-for="blog in blogs"
            :key="blog.id"
            class="min-w-[310px] max-w-[310px]"
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
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/20/solid";

const { transition } = useTailwindConfig();

const scrollContainer = ref<HTMLDivElement | null>(null);

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: "smooth" });
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: "smooth" });
  }
};
</script>
<style scoped>
body::-webkit-scrollbar {
  display: none;
}

.blog-container-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.blog-container-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
