<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<PrimitiveProps & { class?: string }>()
</script>

<template>
  <Primitive :as="props.as || 'nav'" :class="cn('', props.class)" aria-label="breadcrumb">
    <slot />
  </Primitive>
</template>
