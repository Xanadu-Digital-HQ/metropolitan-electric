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
  image: "assembli.webp",
  title: "ASSEMBLI: Electric Vehicles (EV) Assembly Network ",
  description:
    "ASSEMBLI is our extensive network of Electric Vehicles (EV) Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.",
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
