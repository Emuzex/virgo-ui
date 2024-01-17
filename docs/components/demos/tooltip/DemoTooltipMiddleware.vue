<script lang="ts" setup>
import type { FloatingMiddlewareFunc } from '@virgo-ui/vue'

const middleware: FloatingMiddlewareFunc = (referenceEl, floatingEl) => {
  // console.log('referenceEl :>> ', referenceEl)
  // console.log('floatingEl :>> ', floatingEl)

  // We aren't adding any middleware
  return []
}
</script>

<template>
  <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
    <tooltip
      :middleware="middleware"
      text="Cotton candy"
    />

    Button
  </button>
</template>
