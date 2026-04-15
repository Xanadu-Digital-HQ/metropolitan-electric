<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<PrimitiveProps & { class?: string }>()
</script>

<template>
  <Primitive :as="props.as || 'a'" :class="cn('transition-colors hover:text-foreground', props.class)">
    <slot />
  </Primitive>
</template>
