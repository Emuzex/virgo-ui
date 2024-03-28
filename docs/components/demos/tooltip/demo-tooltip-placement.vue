<script lang="ts" setup>
import type { Placement } from '@floating-ui/vue'
import { ref } from 'vue'
const placementOptions: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]

const tooltipPlacement = ref<Placement>('top')
</script>

<template>
	<div class="flex items-center justify-between flex-wrap gap-4 w-full">
		<virgo-button>
			<tooltip
				:model-value="true"
				:placement="tooltipPlacement"
				text="Cotton candy"
			/>
			Button
		</virgo-button>
		<select
			v-model="tooltipPlacement"
			class="w-24 grow-0 ms-auto"
		>
			<option
				v-for="option in placementOptions"
				:value="option"
			>
				{{ option }}
			</option>
		</select>
	</div>
</template>
