<script lang="ts" setup>
import { aConfigProps } from './meta'
import { mergePropsDefaults } from '@/composables/useDefaults'
import { virgo_PROPS_DEFAULTS } from '@/symbols'

const props = defineProps(aConfigProps)
defineOptions({
  name: 'AConfig',
})

const defaults = inject(virgo_PROPS_DEFAULTS)

// ℹ️ Pass new reactive value to avoid updates in upward tree
provide(
  virgo_PROPS_DEFAULTS,
  computed(() => mergePropsDefaults(defaults, props.props)),
)
</script>

<template>
  <slot />
</template>
