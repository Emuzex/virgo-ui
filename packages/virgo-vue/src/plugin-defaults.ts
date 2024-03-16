import type { LiteralUnion, Simplify } from 'type-fest'
import type { StyleValue } from 'vue'

import type { virgoButtonProps } from '@/components/button'
import type { floatingProps } from '@/components/floating'
import type { tooltipProps } from '@/components/tooltip'
import type { baseInputProps } from '@/components/base-input'
import type { virgoInputProps } from '@/components/input'

interface ComponentProps {
	BaseInput: typeof baseInputProps
	VirgoButton: typeof virgoButtonProps
	Floating: typeof floatingProps
	Tooltip: typeof tooltipProps
	VirgoInput: typeof virgoInputProps
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
