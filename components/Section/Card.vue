<template>
  <NuxtLink
    v-if="data"
    class="group p-0 shadow-2xl"
    :to="data.link"
    :aria-label="`Navigate to the ${data.title}`"
  >
    <div class="h-fit">
      <div class="flex flex-col">
        <div class="w-full h-96 md:h-64 lg:h-56 overflow-clip">
          <img
            class="w-full h-full object-cover"
            :src="`card/${data.image}`"
            :alt="data.title"
          />
        </div>
        <div class="p-5 space-y-5">
          <div class="flex items-center gap-2.5">
            <p
              class="text-[#113912] break-after-right group-hover:text-[#1C6220] text-lg lg:text-xl font-semibold"
            >
              {{ data.title }}
            </p>
            <ChevronRightIcon
              class="text-[#113912] group-hover:text-[#1C6220] min-w-5 max-w-5 min-h-5 mzx-h-5"
            />
          </div>
          <p
            class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
          >
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

import type { Card } from "~/types/types.js";
const props = defineProps<{ data: Card }>();
</script>
