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
console.log('VirgoButton', { props, inlineStyle, attributes, classList })
</script>

<template>
	<button
		v-bind="attributes"
		:tabindex="props.disabled ? -1 : 0"
		:style="inlineStyle"
		type="button"
		:class="[
			classList.buttonBase,
			props.iconOnly ? classList.buttonIconOnly : classList.button,
			props.disabled && classList.disabled,
		]"
		:disabled="props.disabled ? true : undefined"
	>
		<!-- ℹ️ Don't render spinner if not using loading -->
		<div
			v-if="typeof props.loading === 'boolean'"
			:class="[classList.loader,!props.loading && classList.loading]"
		>
			Loading
		</div>
		<div
			data-no-reference
			:class="[classList.content,props.loading && classList.loading]"
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
