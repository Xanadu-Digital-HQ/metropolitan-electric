<template>
  <span>
    <NuxtLink
      style="font-family: 'Noto Serif'"
      :class="[navLinkStyle]"
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
    require: false,
  },
});
</script>
