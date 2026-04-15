<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<PrimitiveProps & { class?: string }>()
</script>

<template>
  <Primitive :as="props.as || 'li'" aria-hidden="true" :class="cn('[&>svg]:size-3.5', props.class)">
    <slot>
      <ChevronRight />
    </slot>
  </Primitive>
</template>
