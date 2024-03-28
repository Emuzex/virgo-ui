import type { LiteralUnion, Simplify } from 'type-fest'
import type { StyleValue } from 'vue'

import type { virgoButtonProps } from '@/components/button'
import type { tooltipProps } from '@/components/tooltip'
import type { baseInputProps } from '@/components/base-input'
import type { virgoInputProps } from '@/components/input'

// import type { floatingProps } from '@/components/floating' Not configurable yet

interface ComponentProps {
	BaseInput: typeof baseInputProps
	VirgoButton: typeof virgoButtonProps
	Tooltip: typeof tooltipProps
	VirgoInput: typeof virgoInputProps

	// Floating: typeof floatingProps Not Confugrable yet
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PluginOptionDefaultsKeys = LiteralUnion<keyof ComponentProps, string>

export type PluginOptionDefaults = {
	[key in keyof ComponentProps]: Simplify<ComponentProps[key]>
	& PluginOptionDefaults
	& {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	class: any
	style: StyleValue
	attrs: Record<string, unknown>
}
}
