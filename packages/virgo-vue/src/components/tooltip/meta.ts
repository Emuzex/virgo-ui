import { flip, offset, shift } from '@floating-ui/vue'
import type { ExtractPublicPropTypes } from 'vue'
import type { FloatingMiddlewareFunc } from '@/components/floating'
import { floatingProps } from '@/components/floating'

// ℹ️ Make sure to checkout meta definition rules

// 👉 Props
const { referenceEl: _, ...floatingRestProps } = floatingProps
export const middlewareFunc: FloatingMiddlewareFunc = () => [
	offset(10),
	flip(),
	shift({ padding: 10 })

	// arrow({
	//   element: arrowEl,
	// }),
]

export const tooltipProps = {
	// Variant and bare inherited from FloatingProps
	...{
		...floatingRestProps,
		trigger: {
			...floatingRestProps.trigger,
			default: 'hover'
		},
		placement: {
			...floatingRestProps.placement,
			default: 'bottom'
		},
		middleware: {
			...floatingRestProps.middleware,
			default: middlewareFunc
		}
	},

	/**
	 * Text to render in tooltip
	 */
	text: String
} as const
export type tooltipProps = ExtractPublicPropTypes<typeof tooltipProps>

// 👉 Slots
export const tooltipSlots = {

	/**
	 * Default slot for rendering tooltip content. If default slot is used `text` prop will be discarded.
	 */
	default: (_: any) => null as any
} as const
