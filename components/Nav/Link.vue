<template>
  <span>
    <NuxtLink
      style="font-family: 'Noto Serif'"
      exact-active-class="relative border-b border-b-2 border-b-[#1C6220]"
      :class="navLinkStyle"
      :to="toUrl"
      ><slot />
    </NuxtLink>
  </span>
</template>

<script lang="ts" setup>
const { navLinkStyle } = useTailwindConfig();
const props = defineProps({
  toUrl: {
    type: String,
    require: true,
  },
});
</script>
