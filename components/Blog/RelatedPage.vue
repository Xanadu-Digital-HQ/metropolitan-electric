<script lang="ts" setup>
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/20/solid";
const route = useRoute();

const { transition } = useTailwindConfig();

const { data: list } = await useAsyncData(route.path, () => {
  return queryCollection("blog").limit(10).all();
});

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
<template>
  <div class="py-20 space-y-10">
    <div
      v-if="list"
      class="relative flex flex-col justify-center w-full gap-y-10"
    >
      <button
        @click="scrollLeft"
        class="group absolute -left-8 active:outline outline-[#1c6220] rounded-2xl hidden [@media(min-width:800px)]:inline"
      >
        <ArrowLeftIcon
          v-if="!(list.length < 4)"
          class="group-hover:text-[#1c6220] w-6 h-6"
          :class="transition"
        />
      </button>
      <button
        @click="scrollRight"
        class="group absolute -right-8 active:outline outline-[#1c6220] rounded-2xl hidden [@media(min-width:800px)]:inline"
      >
        <ArrowRightIcon
          v-if="!(list.length < 4)"
          class="group-hover:text-[#1c6220] w-6 h-6"
          :class="transition"
        />
      </button>
      <h2 class="page-reveal reveal-delay-1 text-accent-hovered text-xl md:text-2xl">Related Blogs</h2>
      <div
        ref="scrollContainer"
        class="blog-container-scroll flex gap-5 overflow-x-auto"
      >
        <ContentRenderer v-for="blog in list" :value="blog">
          <BlogItem
            :key="blog.id"
            class="page-reveal page-reveal-soft min-w-77.5 max-w-77.5"
            :title="blog.title!"
            :description="blog.description"
            :content="blog.content"
            :slug="blog.path!"
            :image="blog.image"
            :tags="blog.tags"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
            :style="{ '--reveal-delay': `${120 + ((list.findIndex((item) => item.id === blog.id)) * 60)}ms` }"
          />
        </ContentRenderer>
      </div>
    </div>
  </div>
</template>

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
