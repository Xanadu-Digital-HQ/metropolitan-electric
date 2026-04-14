<template>
  <Service
    v-if="service"
    :image="service.image"
    :title="service.title"
    :description="service.description"
    :eyebrow="service.eyebrow"
    :accent="service.accent"
    :metrics="service.metrics"
    :pillars="service.pillars"
  />
</template>

<script lang="ts" setup>
import { getServiceBySlug } from "~/utils/serviceCatalog";

definePageMeta({
  layout: "default",
});

const route = useRoute();
const slug = computed(() => {
  const value = route.params.slug;
  return Array.isArray(value) ? value[0] ?? "" : String(value ?? "");
});

const service = computed(() => getServiceBySlug(slug.value));

if (!slug.value || !service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Service not found",
  });
}

useSeoMeta({
  title: () => service.value?.title ?? "Service",
  ogTitle: () => service.value?.title ?? "Service",
  description: () => service.value?.description ?? "Service details",
  ogDescription: () => service.value?.description ?? "Service details",
  ogImage: () => service.value?.image ?? "https://metropolitanelectricng.com/logo.svg",
  twitterCard: "summary_large_image",
});
</script>
