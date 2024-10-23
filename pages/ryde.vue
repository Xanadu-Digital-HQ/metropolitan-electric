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
  image: "ryde.webp",
  title: "RYDE: Ride-Hailing And Sharing Services ",
  description:
    "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned Electric Vehicles (EV) assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa",
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
