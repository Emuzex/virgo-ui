<script lang="ts" setup>
import type { tooltipSlots } from './meta'
import { tooltipProps } from './meta'
import { Floating } from '@/components/floating'
import { useParent } from '@/composables'
import { useDefaults } from '@/composables/useDefaults'

// import { arrow } from '@floating-ui/vue'

// SECTION Meta
const _props = defineProps(tooltipProps)
defineSlots<typeof tooltipSlots>()

defineOptions({
  name: 'Tooltip',
})
const { props, defaultsClass, defaultsStyle, defaultsAttrs } = useDefaults(_props)

// !SECTION

const parentEl = useParent()

// const arrowEl = ref()
</script>

<template>
  <floating
    v-bind="{ ...props, ...defaultsAttrs }"
    :reference-el="parentEl"
    class="a-tooltip-wrapper"
    :class="defaultsClass"
    :style="defaultsStyle"
  >
    <div class="a-tooltip">
      <span class="a-tooltip-text">
        <slot>
          {{ props.text }}
        </slot>
      </span>
      <!-- <div
        ref="arrowEl"
        class="a-tooltip-arrow absolute"
      /> -->
    </div>
  </floating>
</template>
