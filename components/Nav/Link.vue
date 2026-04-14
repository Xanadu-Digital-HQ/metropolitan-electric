<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import type { PropType } from "vue";
import type { Link } from "~/types/types";
const { navLinkStyle } = useTailwindConfig();

defineProps({
  item: {
    type: Object as PropType<Link>,
    required: true,
  },
});
</script>

<template>
  <span class="group relative">
    <NuxtLink
      v-if="item.state === 'normal'"
      :to="item.path"
      :class="[navLinkStyle, 'inline-flex items-center']"
      style="font-family: 'Noto Serif'"
    >
      {{ item.name }}
    </NuxtLink>

    <span
      v-else-if="item.state === 'subnavLink'"
      :class="[navLinkStyle, 'inline-flex items-center']"
      style="font-family: 'Noto Serif'"
    >
      <span class="flex items-center gap-2 py-4 cursor-pointer">
        {{ item.name }} <PhCaretDown class="size-4" />
      </span>
      <div
        class="absolute pt-12 left-1/2 -translate-x-1/2 top-0 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 min-w-44 w-fit gap-2.5 py-6 px-4 z-20 transition-all duration-200 ease-out overflow-clip"
      >
        <div
          class="flex flex-col bg-accent/95 shadow-[0_18px_40px_rgba(15,23,29,0.28)] gap-4 py-4 rounded-2xl min-w-max px-2"
        >
          <NuxtLink
            v-for="subLink in item.subItems"
            :key="subLink.path"
            :to="subLink.path"
            class="py-2 px-5 text-secondary/90 hover:text-secondary transition-colors"
          >
            {{ subLink.name }}
          </NuxtLink>
        </div>
      </div>
    </span>

    <NuxtLink
      v-else-if="item.state === 'button'"
      :to="item.path"
      class="relative z-10 inline-flex items-center py-2.5 px-7 text-sm font-medium font-main bg-accent/90 group-hover/overall:bg-accent group-hover/overall:text-white text-white rounded-full transition duration-300 hover:bg-accent/80"
      style="font-family: 'Noto Serif'"
    >
      {{ item.name }}
    </NuxtLink>
  </span>
</template>
