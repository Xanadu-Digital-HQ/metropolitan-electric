<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/20/solid";
import type { Blog } from "~/types/types";

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

const filteredBlogs = ref<Blog[] | null>(null);
const activeTag = ref("All");
const { data: blogItems } = await useAsyncData<Blog[]>("blog-posts", () =>
  queryCollection("blog").all()
);

const blogs = computed(() => [...(blogItems.value ?? [])].reverse());
const featuredBlog = computed(() =>
  blogs.value[0] ?? null
);
const secondaryBlogs = computed(() => blogs.value.slice(1, 4));

const items: Ref<Blog[]> = ref([]);

const filterBlogs = async (tag: string) => {
  filteredBlogs.value = null;

  items.value = blogs.value;
  filteredBlogs.value =
    tag === "All"
      ? items.value
      : items.value.filter((item) => item.tags?.includes(tag));
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
  <div class="min-h-screen bg-[#fbfdfb] text-[#101920]">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]" />
    <div class="pointer-events-none fixed inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />

    <section :class="container" class="flex flex-col gap-14 py-28 md:py-32">
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Blog & Articles
          </p>
          <h1 class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-[#101920] sm:text-5xl lg:text-6xl">
            A cleaner editorial layer for EV thinking, operations and strategy.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Explore articles on electric fleets, charging, sustainability and the business logic shaping mobility in Africa.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl lg:ml-auto">
          <div class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm">
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Articles</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">{{ blogs.length }}</p>
          </div>
          <div class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm">
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Focus</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV Trends</p>
          </div>
          <div class="rounded-[1.75rem] border border-[#101920]/8 bg-[#101920] p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]">
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">View</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Editorial</p>
          </div>
        </div>
      </div>

      <section class="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <NuxtLink
          v-if="featuredBlog"
          :to="featuredBlog._path!"
          class="page-reveal reveal-delay-2 group overflow-hidden rounded-[2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_24px_80px_rgba(16,32,39,0.08)] transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative h-[420px] sm:h-[520px]">
            <img
              :src="featuredBlog.image"
              :alt="featuredBlog.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#101920] via-[#101920]/28 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in featuredBlog.tags.slice(0, 3)"
                  :key="tag"
                  class="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/86 backdrop-blur-sm"
                >
                  #{{ tag }}
                </span>
              </div>
              <h2 class="max-w-3xl font-opensans text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                {{ featuredBlog.title }}
              </h2>
              <p class="max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
                {{ featuredBlog.description }}
              </p>
              <div class="inline-flex items-center gap-2 text-sm font-medium text-white">
                Read Article
                <ArrowRightIcon class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </NuxtLink>

        <div class="grid gap-4">
          <NuxtLink
            v-for="(blog, index) in secondaryBlogs"
            :key="blog._path"
            :to="blog._path!"
            class="page-reveal page-reveal-soft group flex gap-4 overflow-hidden rounded-[1.5rem] border border-[#d8dfd5] bg-white/92 p-4 shadow-[0_14px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(16,32,39,0.08)]"
            :style="{ '--reveal-delay': `${210 + (index * 75)}ms` }"
          >
            <img
              :src="blog.image"
              :alt="blog.title!"
              class="h-28 w-28 rounded-[1.2rem] object-cover transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
            />
            <div class="flex flex-1 flex-col gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6b8177]">
                {{ blog.minutesRead }} mins
              </p>
              <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-[#101920]">
                {{ blog.title }}
              </h3>
              <p class="line-clamp-2 text-sm leading-7 text-[#41555d]">
                {{ blog.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section class="space-y-6">
        <div class="page-reveal reveal-delay-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">Browse by Theme</p>
            <h2 class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-[#101920] sm:text-4xl">
              Filter the EV editorial stream.
            </h2>
          </div>

          <div class="tag-container-scroll flex gap-3 overflow-x-auto">
            <button
              v-for="tag in tags"
              :key="tag"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300"
              :class="
                activeTag === tag
                  ? 'bg-[#101920] text-white shadow-[0_10px_30px_rgba(16,32,39,0.18)]'
                  : 'bg-white/92 text-[#31464d] hover:bg-[#e9eee7]'
              "
              @click="filter(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <BlogItem
            v-for="(blog, index) in filteredBlogs ?? []"
            :key="blog._path"
            :title="blog.title!"
            :description="blog.description"
            :content="blog.content"
            :slug="blog._path!"
            :image="blog.image"
            :tags="blog.tags"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
            class="page-reveal page-reveal-soft cursor-pointer"
            :style="{ '--reveal-delay': `${260 + (index * 65)}ms` }"
          />
        </div>

        <div v-if="filteredBlogs && filteredBlogs.length === 0" class="page-reveal reveal-delay-4 rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-8 text-center text-[#41555d]">
          No blogs found for this theme.
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.tag-container-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tag-container-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
