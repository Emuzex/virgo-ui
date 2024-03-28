<script setup lang="ts">
	import { VirgoTable, VirgoTbody, VirgoTd, VirgoTh, VirgoThead, VirgoTr } from '../virgo-table-elements'

	type KeyboardDef = {
		keys: string[]
		description: string
	}

	interface DataAttributesTableProps {
		data: KeyboardDef[]
	}

	const props = defineProps<DataAttributesTableProps>()
</script>

<template>
	<virgo-table>
		<virgo-thead>
			<virgo-tr>
				<virgo-th class="">
					<span>Key</span>
				</virgo-th>
				<virgo-th class="">
					<span>Description</span>
				</virgo-th>
			</virgo-tr>
		</virgo-thead>
		<virgo-tbody>
			<virgo-tr v-for="(prop, index) in props.data" :key="`${prop}-${index}`">
				<virgo-td>
					<div class="flex items-center gap-1">
						<kbd
							v-for="(key, propIndex) in prop.keys"
							:key="`${key}-${propIndex}`"
							class="kbd"
						>
							{{ key }}
						</kbd>
					</div>
				</virgo-td>
				<virgo-td class="">
					<div class="flex items-center gap-1">
						<span v-html="prop.description" />
					</div>
				</virgo-td>
			</virgo-tr>
		</virgo-tbody>
	</virgo-table>
</template>
