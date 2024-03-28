import type { ExtractPublicPropTypes, PropType } from 'vue'
import { baseInputProps, baseInputSlots } from '@/components/base-input'

// 👉 Props
export const virgoInputProps = {
	// Variant and bare inherited from BaseInputProps
	...baseInputProps,
	modelValue: [String, Number] as PropType<string | number>
} as const
export type virgoInputProps = ExtractPublicPropTypes<typeof virgoInputProps>

// 👉 Slots
const { default: _, ...textareaBaseInputSlots } = baseInputSlots

export { textareaBaseInputSlots }
export const virgoInputSlots = {
	...textareaBaseInputSlots
} as const

// 👉 Events
export interface VirgoInputEvents {
	(e: 'update:modelValue', value: virgoInputProps['modelValue']): void
}
