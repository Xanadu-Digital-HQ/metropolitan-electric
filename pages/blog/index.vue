<script lang="ts" setup>
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";

const { container } = useTailwindConfig();

const tags = [
  "All",
  "Electric Vehicles",
  "EV Maintenance",
  "Zero Emissions",
  "Electric Buses",
  "Charging Stations",
  "Renewable Energy",
  "Sustainability",
  "Technology",
  "Nigeria",
];

const filteredBlogs = ref();
const loadingBlogs = ref(false);
const activeTag = ref("All");
const items: Ref<Record<string, any>[]> = ref([]);

const filterBlogs = async (tag: string) => {
  loadingBlogs.value = true;
  filteredBlogs.value = null;

  await new Promise((resolve) => setTimeout(resolve, 500));

  const { data } = await useAsyncData("filtered-blogs", async () => {
    items.value = queryCollection("blog").all();
    if (tag === "All") {
      return items.value;
    } else {
      return items.value.filter((item: object) => item.tags?.includes(tag));
    }
  });

  filteredBlogs.value = data.value;
  loadingBlogs.value = false;
};

const filter = (tag: string) => {
  activeTag.value = tag;
  filterBlogs(activeTag.value);
};

onMounted(() => {
  filterBlogs("All");
});

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
        <ContentRenderer v-if="blogs" path="/blog" :value="blogs">
          <div class="relative flex flex-col h-[500px] w-full justify-end">
            <NuxtLink
              :to="blogs[blogs.length - 1].path"
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
                        class="text-white text-sm sm:text-base md:text-lg font-noto line-clamp-2"
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
                            alt="Logo Wheel Image"
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
        </ContentRenderer>
      </div>
    </div>

    <div class="space-y-10">
      <div class="flex">
        <div class="tag-container-scroll flex gap-5 overflow-x-auto">
          <button
            v-for="tag in tags"
            class="text-nowrap text-sm md:text-base hover:text-accentHovered focus:text-accentHovered py-1.5 px-5 w-fit rounded-full transition-all duration-300"
            :class="
              activeTag === tag
                ? 'text-accent bg-accent/20'
                : 'text-brand bg-accent/5'
            "
            @click="filter(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center min-h-[700px] md:min-h-96">
        <div v-if="filteredBlogs" class="flex flex-wrap size-full">
          <BlogItem
            v-if="filteredBlogs.length > 0"
            v-for="blog in filteredBlogs.slice(0).reverse()"
            :key="blog.id"
            :title="blog.title!"
            :description="blog.description"
            :content="blog.content"
            :slug="blog._path!"
            :image="blog.image"
            :tags="blog.tags"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
            class="cursor-pointer"
          />

          <div v-else class="flex size-full justify-center items-center">
            <p class="text-brand text-lg md:text-xl">No Blogs Found</p>
          </div>
        </div>

        <div v-else class="flex my-auto justify-center items-center">
          <div class="animate-spin">
            <IconsLoadingWheel class="animate-ping size-16 fill-[#101920]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body::-webkit-scrollbar {
  display: none;
}

.tag-container-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tag-container-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
