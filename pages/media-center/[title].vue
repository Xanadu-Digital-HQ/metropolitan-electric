<template>
  <div class="w-full">
    <MediaNewsPage v-if="data" :current-news="data" :news="news ?? []" />
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
const route = useRoute();
type MediaCenterItem = Collections["mediaCenter"];

const { data: news } = await useAsyncData<MediaCenterItem[]>("media-center-posts", () =>
  queryCollection("mediaCenter").all()
);

const { data } = await useAsyncData<MediaCenterItem | null>(`content-${route.path}`, () =>
  queryCollection("mediaCenter").path(route.path).first()
);
</script>
