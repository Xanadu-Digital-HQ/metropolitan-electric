<template>
  <div class="w-full">
    <MediaNewsPage v-if="data" :current-news="data" :news="news" />
  </div>
</template>

<script lang="ts" setup>
import type { NewsItem } from "~/types/types.js";
defineProps<{ news: NewsItem[] }>();
const route = useRoute();

const { data }: any = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
