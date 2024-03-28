<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
const isRequired = (val: string) => (val.trim() ? true : 'This is required')
</script>

<template>
	<div class="grid-row sm:grid-cols-2 place-items-stretch">
		<div>
			<virgo-input
				v-model="username"
				:error="username.length < 1 ? isRequired(username) : undefined"
				label="Username"
				hint="Error message will get displayed here"
			/>
		</div>
	</div>
</template>
