import type { ExtractPublicPropTypes } from 'vue'
import { configurable as configurableProp, disabled as disabledProp } from '@/composables/use-props'
import { allComponentsProps } from '@/all-components-props'

// ℹ️ Make sure to check out meta definition rules

// 👉 Props
export const virgoButtonProps = {
	...allComponentsProps,

	/**
	 * Render icon before virgo-button text
	 */
	icon: configurableProp,

	/**
	 * Append icon after virgo-button text
	 */
	appendIcon: configurableProp,

	/**
	 * Mark virgo-button as icon only virgo-button to apply square styling
	 */
	iconOnly: Boolean,

	/**
	 * Set component in disabled state
	 */
	disabled: disabledProp,

	/**
	 * Set virgo-button loading state.
	 * Although, `loading` prop accepts boolean value, we set default value to `undefined` to indicate virgo-button won't ever use loading (show/hide) and won't render `Loading` component.
	 * However, if `loading` prop is set to any boolean value (`false`/`true`) it will always render `Loading` component.
	 */
	loading: {
		type: Boolean,
		default: undefined
	}
} as const
export type virgoButtonProps = ExtractPublicPropTypes<typeof virgoButtonProps>

// 👉 Slots
export const virgoButtonSlots = {

	/**
	 * Default slot for rendering virgoButton content
	 */
	default: (_: any) => null as any
} as const
