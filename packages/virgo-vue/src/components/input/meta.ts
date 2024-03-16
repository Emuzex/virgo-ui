import type { ExtractPublicPropTypes } from 'vue'
import { baseInputProps, baseInputSlots } from '@/components/base-input'

// ℹ️ Make sure to checkout meta definition rules

// 👉 Props
export const virgoInputProps = {
  ...baseInputProps,
  modelValue: [String, Number] as PropType<string | number>,
} as const
export type VirgoInputProps = ExtractPublicPropTypes<typeof virgoInputProps>

// 👉 Slots
const { default: _, ...textareaBaseInputSlots } = baseInputSlots

export { textareaBaseInputSlots }
export const virgoInputSlots = {
  ...textareaBaseInputSlots,
} as const

// 👉 Events
export interface VirgoInputEvents {
  (e: 'update:modelValue', value: VirgoInputProps['modelValue']): void
}
