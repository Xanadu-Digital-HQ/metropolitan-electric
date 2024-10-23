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
  image: "metro.webp",
  title: "Metro Charge: Electric Vehicles (EV) Charging Infrastructure ",
  description:
    "Recognising the importance of supporting infrastructure, Metro Charge is our network of Electric Vehicles (EV) charging stations in partnership with Sunphos, dedicated to ensuring seamless and convenient charging for all Electric Vehicles (EV) users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.",
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
