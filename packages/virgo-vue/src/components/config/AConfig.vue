<script lang="ts" setup>
	import { aConfigProps } from './meta'
	import { mergePropsDefaults } from '@/composables/useDefaults'
	import { VIRGO_PROPS_DEFAULTS } from '@/symbols'

	const props = defineProps(aConfigProps)
	defineOptions({
		name: 'AConfig'
	})

	const defaults = inject(VIRGO_PROPS_DEFAULTS)

	// ℹ️ Pass new reactive value to avoid updates in upward tree
	provide(
		VIRGO_PROPS_DEFAULTS,
		computed(() => mergePropsDefaults(defaults, props.props))
	)
</script>

<template>
	<slot />
</template>
