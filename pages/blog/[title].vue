<template>
  <div :class="container">
    <BlogPage v-if="data" :current-blog="data" />
    <BlogRelatedPage />
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
const { container } = useTailwindConfig();

const route = useRoute();
type BlogItem = Collections["blog"];

const { data } = await useAsyncData<BlogItem | null>(`content-${route.path}`, () =>
  queryCollection("blog").path(route.path).first()
);
</script>
