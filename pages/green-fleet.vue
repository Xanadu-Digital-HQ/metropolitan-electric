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
  image: "greenfleet.webp",
  title: "GreenFleet: Public Transportation Renewal ",
  description:
    "GreenFleet is our Electric Vehicles (EV) Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles (EV) into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.",
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
