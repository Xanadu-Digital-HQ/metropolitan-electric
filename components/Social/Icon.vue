<template>
  <div>
    <img
      class="size-7 object-cover"
      :src="`/${name}.png`"
      alt="`A Social Media Icon"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
