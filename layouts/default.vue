<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    <NuxtPage />
    <Footer v-show="route.path !== '/'" class="p-5" />
  </div>
</template>
