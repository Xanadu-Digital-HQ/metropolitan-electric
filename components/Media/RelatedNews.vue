<template>
  <div class="flex flex-col gap-20 w-full">
    <div
      class="flex flex-col gap-5 w-full order-last md:order-first p-0 md:p-2 bg-accent/5"
    >
      <h2 class="text-xl font-semibold">Related News</h2>
      <ContentList path="/media-center" v-slot="{ list }">
        <div class="flex flex-col gap-3.5">
          <NuxtLink
            :to="list[list.length - 1].slug"
            class="hover:opacity-80 transition-opacity duration-200"
          >
            <div class="flex flex-col gap-2.5 w-full">
              <div class="h-32 w-full overflow-hidden">
                <img
                  class="w-full object-cover h-32"
                  :src="list[list.length - 1].image"
                  alt=""
                />
              </div>
              <p class="px-2.5 py-1.5 text-xs bg-[#1C6220]/10 w-fit">
                {{ list[list.length - 1].date }}
              </p>
              <h5 class="text-sm font-semibold line-clamp-3">
                {{ list[list.length - 1].description }}
              </h5>
            </div>
          </NuxtLink>
          <NuxtLink
            v-for="newItem in list.slice(-5, -1).reverse()"
            :key="newItem.id"
            :to="newItem.slug"
            class="hover:opacity-80 duration-200"
          >
            <div class="flex flex-col gap-2.5 w-full">
              <p class="px-2.5 py-1.5 text-xs bg-[#1C6220]/10 w-fit">
                {{ newItem.date }}
              </p>
              <h5 class="text-sm font-semibold line-clamp-2">
                {{ newItem.description }}
              </h5>
            </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>

    <div class="flex flex-col gap-2.5 order-first md:order-last p-0 md:p-2">
      <h2 class="text-lg font-semibold">Follow Us</h2>
      <div class="flex gap-2">
        <NuxtLink
          v-for="item in socialMedia"
          :key="item.name"
          :to="item.url"
          :aria-label="item.name"
        >
          <SocialIcon :name="item.name" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const socialMedia = [
  {
    name: "Twitter",
    url: "https://x.com/metroelectricev?s=11&t=nCUbk__j-vLsa1g_ZfB7gA",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/wBtPyLoZrgBWKzbW/?mibextid=JRoKGi",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/metroelectricev?igsh=ZWR4d2hmY2MxY2M3",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/metropolitan-electric/",
  },
];
</script>
