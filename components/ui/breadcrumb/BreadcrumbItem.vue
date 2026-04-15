<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<PrimitiveProps & { class?: string }>()
</script>

<template>
  <Primitive :as="props.as || 'li'" :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot />
  </Primitive>
</template>
