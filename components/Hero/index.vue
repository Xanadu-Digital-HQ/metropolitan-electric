<template>
  <div
    class="relative flex flex-col h-[80vh] justify-center"
    :class="container"
  ></div>
</template>

<script lang="ts" setup>
const { container } = useTailwindConfig();
</script>
