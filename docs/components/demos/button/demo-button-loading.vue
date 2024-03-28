<script lang="ts" setup>
	import { ref } from 'vue'

	const loading = ref(false)
	const loadingIcon = ref(false)
	const iconOnlyLoading = ref(false)
</script>

<template>
	<div class="flex gap-4">
		<virgo-button
			:loading="loading"
			@click="loading = !loading"
		>
			Click to load
		</virgo-button>
		<virgo-button @click="iconOnlyLoading = !iconOnlyLoading">
			<i
				v-if="iconOnlyLoading"
				class="i-bx-cloud-upload"
			/>
			<span>Upload</span>
		</virgo-button>
		<virgo-button
			:loading="loadingIcon"
			icon-only
			icon="i-bx-heart"
			@click="loadingIcon = !loadingIcon"
		/>
	</div>
</template>
