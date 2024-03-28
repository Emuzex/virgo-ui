<script lang="ts" setup>
import type { tooltipSlots } from './meta'
import { tooltipProps } from './meta'
import { Floating } from '@/components/floating'
import { useParent } from '@/composables'
import { useVirgo } from '@/composables/use-virgo'

// import { arrow } from '@floating-ui/vue'

const _props = defineProps(tooltipProps)
defineSlots<typeof tooltipSlots>()

defineOptions({
  name: 'Tooltip',
})
const { props, inlineStyle, attributes, classList } = useVirgo(_props)

const parentEl = useParent()

// const arrowEl = ref()
</script>

<template>
	<floating
		v-bind="{ ...props, ...attributes }"
		:reference-el="parentEl"
		:class="classList.wrapper"
		:style="inlineStyle"
	>
		<div :class="classList.content">
			<span :class="classList.contentText">
				<slot>
					{{ props.text }}
				</slot>
			</span>
			<!-- <div
        ref="arrowEl"
        class="virgo-tooltip-arrow absolute"
      /> -->
		</div>
	</floating>
</template>
