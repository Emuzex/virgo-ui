import type { LiteralUnion, Simplify } from 'type-fest'
import type { StyleValue } from 'vue'

import type { FloatingProps } from '@/components/floating'
import type { TooltipProps } from '@/components/tooltip'

interface ComponentProps {
  Floating: FloatingProps
  Tooltip: TooltipProps
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
