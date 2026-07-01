<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    <NuxtPage :key="route.fullPath" />
    <Footer v-if="route.path !== '/'" class="p-5" />
  </div>
</template>
