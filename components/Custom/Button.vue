<script lang="ts" setup>
import type { ComponentCustomElementInterface } from 'vue';
import { PhMinus } from "@phosphor-icons/vue";

withDefaults(defineProps<{
  text?: string;
  isIcon?: boolean;
  icon?: typeof PhMinus;
}>(), {
  text: 'Learn More',
  isIcon: true,
  icon: PhMinus
});
</script>
<template>
  <button class="group flex gap-2 items-center w-auto py-3 px-8 bg-accent rounded-full text-white font-medium hover:bg-accent-hover transition-all duration-500 cursor-pointer">
    <span v-if="isIcon" class="">
        <component :is="icon ?? PhMinus " class="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
    </span>
    {{ text ?? 'Learn More' }}
  </button>
</template>
