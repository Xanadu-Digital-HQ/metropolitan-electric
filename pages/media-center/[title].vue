<template>
  <div class="w-full">
    <MediaNewsPage v-if="data" :current-news="data" :news="news ?? []" />
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
const route = useRoute();
type MediaCenterItem = Collections["mediaCenter"] & {
  path: string;
  slug?: string;
  type?: "story" | "image";
};
const routeTitle = computed(() => String(route.params.title ?? ""));

const { data: news } = await useAsyncData<MediaCenterItem[]>("media-center-posts", () =>
  queryCollection("mediaCenter").all()
);

const { data } = await useAsyncData<MediaCenterItem | null>(`content-${route.path}`, async () => {
  const items = await queryCollection("mediaCenter").all() as MediaCenterItem[];

  return (
    items.find(
      (item) =>
        item.slug === routeTitle.value ||
        item.path === route.path ||
        item.path === `/media-center/${routeTitle.value}`
    ) ?? null
  );
});
</script>
