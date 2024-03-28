<script lang="ts" setup>
	import { ref } from 'vue'

	const isTooltipVisible = ref(false)
</script>

<template>
	<div class="flex flex-wrap gap-12">
		<virgo-button>
			<tooltip
				v-model="isTooltipVisible"
				text="Cotton candy"
			/>

			Button
		</virgo-button>

		<div class="flex flex-wrap gap-4">
			<virgo-button
				:disabled="isTooltipVisible"
				@click="isTooltipVisible = true"
			>
				Show tooltip
			</virgo-button>
			<virgo-button
				:disabled="!isTooltipVisible"
				@click="isTooltipVisible = false"
			>
				Hide tooltip
			</virgo-button>
		</div>
	</div>
</template>
