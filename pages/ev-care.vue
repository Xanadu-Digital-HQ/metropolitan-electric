<template>
  <Service
    :image="data.image"
    :title="data.title"
    :description="data.description"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const data = {
  image: "evCare.webp",
  title:
    "Electric Vehicles (EV) Care: Electric Vehicles (EV) Maintenance Services ",
  description:
    "Electric Vehicles (EV) Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
};

useSeoMeta({
  title: data.title,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: data.image,
  twitterCard: "summary_large_image",
});
</script>
