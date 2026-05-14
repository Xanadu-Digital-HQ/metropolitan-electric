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
    :service-lens="service.serviceLens"
    :detail-eyebrow="service.detailEyebrow"
    :detail-heading="service.detailHeading"
    :detail-sections="service.detailSections"
  />
</template>

<script lang="ts" setup>
import { getServiceBySlug } from '~/utils/serviceCatalog';

definePageMeta({
  layout: 'default',
});

const route = useRoute();
const config = useRuntimeConfig();
const slug = computed(() => {
  const value = route.params.slug;
  return Array.isArray(value) ? (value[0] ?? '') : String(value ?? '');
});

const service = computed(() => getServiceBySlug(slug.value));

if (!slug.value || !service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
  });
}

useSeoMeta({
  title: () => service.value?.title ?? 'Solution',
  ogTitle: () => service.value?.title ?? 'Solution',
  description: () => service.value?.description ?? 'Solution details',
  ogDescription: () => service.value?.description ?? 'Solution details',
  ogImage: () => service.value?.image ?? `${config.baseUrl}/og/solutions_ogImage.png`,
  twitterCard: 'summary_large_image',
});
</script>
