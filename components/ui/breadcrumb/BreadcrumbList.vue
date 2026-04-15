<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<PrimitiveProps & { class?: string }>()
</script>

<template>
  <Primitive
    :as="props.as || 'ol'"
    :class="cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </Primitive>
</template>
