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
	<virgo-button>
		<tooltip
			:middleware="middleware"
			text="Cotton candy"
		/>
		Button
	</virgo-button>
</template>
