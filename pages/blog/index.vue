<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid';

type BlogListItem = {
  path: string;
  title: string;
  description: string;
  image: string;
  date: string;
  minutesRead: number;
  tags: string[];
};

const tags = [
  'All',
  'Electric Vehicles',
  'EV Maintenance',
  'Zero Emissions',
  'Electric Buses',
  'Charging Stations',
  'Renewable Energy',
  'Sustainability',
  'Technology',
  'Nigeria',
];

const filteredBlogs = ref<BlogListItem[] | null>(null);
const activeTag = ref('All');
const { data: blogItems, pending: blogItemsPending } = await useLazyAsyncData<BlogListItem[]>(
  'blog-posts',
  () =>
    queryCollection('blog')
      .select('path', 'title', 'description', 'image', 'date', 'minutesRead', 'tags')
      .all(),
  {
    default: () => [],
  },
);

const blogs = computed(() => [...(blogItems.value ?? [])].reverse());
const featuredBlog = computed(() => blogs.value[0] ?? null);
const secondaryBlogs = computed(() => blogs.value.slice(1, 4));
const isInitialBlogLoading = computed(() => blogItemsPending.value || filteredBlogs.value === null);

const items: Ref<BlogListItem[]> = ref([]);

const filterBlogs = async (tag: string) => {
  filteredBlogs.value = null;

  items.value = blogs.value;
  filteredBlogs.value =
    tag === 'All' ? items.value : items.value.filter((item) => item.tags?.includes(tag));
};

const filter = (tag: string) => {
  activeTag.value = tag;
  filterBlogs(activeTag.value);
};

watch(
  [blogs, activeTag],
  () => {
    filterBlogs(activeTag.value);
  },
  { immediate: true },
);

useSeoMeta({
  title: 'Blogs & Articles',
  ogTitle: 'Blogs & Articles',
  description:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogDescription:
    'Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(16,25,32,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-14 px-5 pb-16 pt-34 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Blog & Articles
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Insights on electric mobility in Africa.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Explore articles on EV fleets, charging infrastructure, sustainability, and the systems
            shaping the future of transportation.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl lg:ml-auto">
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Articles</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              {{ blogs.length }}
            </p>
          </div>
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Focus</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV Trends</p>
          </div>
          <div
            class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">View</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Editorial</p>
          </div>
        </div>
      </div>

      <section class="grid gap-6 lg:items-start lg:grid-cols-[1.12fr_0.88fr]">
        <NuxtLink
          v-if="featuredBlog"
          :to="featuredBlog.path!"
          class="page-reveal reveal-delay-2 group overflow-hidden rounded-4xl border border-[#d8dfd5] bg-white/92 shadow-[0_24px_80px_rgba(16,32,39,0.08)] transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative h-136 sm:h-130">
            <img
              :src="featuredBlog.image"
              :alt="featuredBlog.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-linear-to-t from-brand via-brand/28 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:gap-4 sm:p-8">
              <div class="flex flex-wrap gap-2 max-sm:hidden">
                <span
                  v-for="tag in featuredBlog.tags.slice(0, 3)"
                  :key="tag"
                  class="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xxs font-medium uppercase tracking-[0.14em] text-white/86 backdrop-blur-sm"
                >
                  #{{ tag }}
                </span>
              </div>
              <h2
                class="max-w-3xl font-opensans text-[1.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[2.4rem] sm:tracking-[-0.045em]"
              >
                {{ featuredBlog.title }}
              </h2>
              <p class="max-w-xl line-clamp-3 text-[0.9rem] leading-6 text-white/76 sm:max-w-2xl sm:text-[0.95rem] sm:leading-7">
                {{ featuredBlog.description }}
              </p>
              <div class="inline-flex items-center gap-2 pt-1 text-sm font-medium text-white">
                Read Article
                <ArrowRightIcon
                  class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <div class="grid content-start gap-4 self-start">
          <NuxtLink
            v-for="(blog, index) in secondaryBlogs"
            :key="blog.path"
            :to="blog.path!"
            class="page-reveal page-reveal-soft group flex h-fit gap-3.5 self-start overflow-hidden rounded-[1.7rem] border border-[#d8dfd5] bg-white/92 p-3.5 shadow-[0_14px_50px_rgba(16,32,39,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(16,32,39,0.08)]"
            :style="{ '--reveal-delay': `${210 + index * 75}ms` }"
          >
            <img
              :src="blog.image"
              :alt="blog.title!"
              class="h-24 w-24 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 sm:h-28 sm:w-28"
            />
            <div class="flex flex-1 flex-col gap-2.5">
              <p class="text-xxs font-semibold uppercase tracking-[0.2em] text-[#6b8177]">
                {{ blog.minutesRead }} mins
              </p>
              <h3
                class="font-opensans text-[1.25rem] font-semibold leading-[1.12] tracking-[-0.03em] text-brand sm:text-[1.35rem]"
              >
                {{ blog.title }}
              </h3>
              <p class="line-clamp-2 text-[0.92rem] leading-6 text-[#41555d]">
                {{ blog.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section class="space-y-6">
        <div
          class="page-reveal reveal-delay-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Browse by Theme
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
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
                  ? 'bg-brand text-white shadow-[0_10px_30px_rgba(16,32,39,0.18)]'
                  : 'bg-white/92 text-[#31464d] hover:bg-[#e9eee7]'
              "
              @click="filter(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div
          v-if="isInitialBlogLoading && blogs.length === 0"
          class="page-reveal reveal-delay-4 flex min-h-88 flex-col items-center justify-center rounded-4xl border border-[#d8dfd5] bg-white/92 p-8 text-center shadow-[0_18px_60px_rgba(16,32,39,0.06)]"
        >
          <div
            class="flex h-28 w-28 items-center justify-center rounded-full bg-[#f4f8f3] shadow-[0_18px_50px_rgba(16,32,39,0.08)]"
          >
            <img src="/MetroIcon.svg" alt="Metropolitan Electric" class="h-16 w-16 animate-pulse" />
          </div>
          <p class="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
            Loading Articles
          </p>
          <p class="mt-2 max-w-sm text-sm leading-7 text-[#41555d]">
            Pulling in the latest EV stories and editorial insights.
          </p>
        </div>

        <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <BlogItem
            v-for="(blog, index) in filteredBlogs ?? []"
            :key="blog.path"
            :title="blog.title!"
            :description="blog.description"
            :slug="blog.path!"
            :image="blog.image"
            :tags="blog.tags"
            :date="blog.date"
            :minutes-read="blog.minutesRead"
            class="page-reveal page-reveal-soft cursor-pointer"
            :style="{ '--reveal-delay': `${260 + index * 65}ms` }"
          />
        </div>

        <div
          v-if="filteredBlogs && filteredBlogs.length === 0"
          class="page-reveal reveal-delay-4 rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-8 text-center text-[#41555d]"
        >
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
