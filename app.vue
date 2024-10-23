<template>
  <div>
    <NavBar class="sticky top-0 bg-white w-full z-30" />
    <NuxtPage :data="cards" :news="posts" :media="mediaItems" />
    <Footer class="p-5" />
  </div>
</template>

<script lang="ts" setup>
import type { Card, Media } from "~/types/types";

const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/media-center").find()
);

const cards: Card[] = [
  {
    link: "corporate-ev-fleet",
    image: "corporate.webp",
    title: "Fleet360: Corporate Electric Vehicles (EV) Fleet",
    description:
      "We offer comprehensive Electric Vehicles (EV) solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
  },
  {
    link: "green-fleet",
    image: "greenfleet.webp",
    title: "GreenFleet: Public Transportation Renewal ",
    description:
      "GreenFleet is our Electric Vehicles (EV) Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles (EV) into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.",
  },
  {
    link: "metro-charge",
    image: "metro.webp",
    title: "Metro Charge: Electric Vehicles (EV) Charging Infrastructure ",
    description:
      "Recognising the importance of supporting infrastructure, Metro Charge is our network of Electric Vehicles (EV) charging stations in partnership with Sunphos, dedicated to ensuring seamless and convenient charging for all Electric Vehicles (EV) users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.",
  },
  {
    link: "ryde",
    image: "ryde.webp",
    title: "RYDE: Ride-Hailing And Sharing Services ",
    description:
      "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned Electric Vehicles (EV) assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa",
  },
  {
    link: "assembli",
    image: "assembli.webp",
    title: "ASSEMBLI: Electric Vehicles (EV) Assembly Network ",
    description:
      "ASSEMBLI is our extensive network of Electric Vehicles (EV) Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.",
  },
  {
    link: "ev-care",
    image: "evCare.webp",
    title:
      "Electric Vehicles (EV) Care: Electric Vehicles (EV) Maintenance Services ",
    description:
      "Electric Vehicles (EV) Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
  },
];

const mediaItems: Media[] = [
  {
    title: "Electric Vehicle Revolution in Africa",
    description:
      "An overview of how electric vehicles are reshaping transportation across African nations.",
    image: "https://utfs.io/f/3VcV2KI5zmFpOcuKWNy9z1hrGfodksTLgApeIXyCRMKxwJiZ",
  },
  {
    title: "MetroCharge Charging Stations Launch",
    description:
      "Highlights from the grand opening of MetroCharge EV charging stations in Lagos.",
    image: "https://utfs.io/f/3VcV2KI5zmFp61iEAa3XCTs2yNM35wcUnzDgS0eah7vGxrtB",
  },
  {
    title: "Sustainable Mobility: A Global Perspective",
    description:
      "Exploring the global impact of sustainable transportation initiatives.",
    image: "https://utfs.io/f/3VcV2KI5zmFpSjLdMRruzCJ8psB7v4MOYXomiyIbtTdQn9Zr",
  },
];
</script>
<style>
html {
  font-family: "Varela Round", sans-serif;
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
