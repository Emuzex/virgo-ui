<script lang="ts" setup>
import type { virgoButtonSlots } from './meta'
import { virgoButtonProps } from './meta'
import { useVirgo } from '@/composables/use-virgo'

const _props = defineProps(virgoButtonProps)

defineSlots<typeof virgoButtonSlots>()

defineOptions({
	name: 'VirgoButton'
})

const { props, inlineStyle, attributes, classList } = useVirgo(_props)
</script>

<template>
	<button
		v-bind="attributes"
		:tabindex="props.disabled ? -1 : 0"
		:style="inlineStyle"
		type="button"
		:class="[classList.button, classList?.inheritedClass]"
		:disabled="props.disabled ? true : undefined"
	>
		<!-- ℹ️ Don't render spinner if not using loading -->
		<div
			v-if="typeof props.loading === 'boolean'"
			:class="classList.loader"
		>
			Loading
		</div>
		<div
			data-no-reference
			:class="classList.content"
		>
			<i
				v-if="props.icon"
				:class="props.icon"
			/>
			<slot />
			<i
				v-if="props.appendIcon"
				:class="props.appendIcon"
			/>
		</div>
	</button>
</template>
