<template>
  <div :class="container">
    <BlogPage v-if="data" :current-blog="data" />
    <BlogRelatedPage />
  </div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();

const route = useRoute();

const { data }: any = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
