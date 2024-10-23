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
  title: "Fleet360: Corporate Electric Vehicles (EV) Fleet",
  description:
    "We offer comprehensive Electric Vehicles (EV) solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
  image: "corporate.webp",
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
