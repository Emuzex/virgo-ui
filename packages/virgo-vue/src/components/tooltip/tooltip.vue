<script lang="ts" setup>
import type { tooltipSlots } from './meta'
import { tooltipProps } from './meta'
import { Floating } from '@/components/floating'
import { useParent } from '@/composables'
import { useConfiguration } from '@/composables/use-configuration'

// import { arrow } from '@floating-ui/vue'

const _props = defineProps(tooltipProps)
defineSlots<typeof tooltipSlots>()

defineOptions({
  name: 'Tooltip',
})
const { props, defaultsClass, defaultsStyle, defaultsAttrs, classList } = useConfiguration(_props)

const parentEl = useParent()

// const arrowEl = ref()
</script>

<template>
	<floating
		v-bind="{ ...props, ...defaultsAttrs }"
		:reference-el="parentEl"
		:class="[defaultsClass,classList.wrapper]"
		:style="defaultsStyle"
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
