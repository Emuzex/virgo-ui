import type { ConfigurableValue } from '@/composables/use-configurable'
import type { Transitions } from '@/transitions'
import type { LiteralUnion } from 'type-fest'
import type { PropType } from 'vue'


export const disabled = { type: Boolean } as const

export const readonly = { type: Boolean } as const

export const configurable = {
  type: [Array, String, Number, Object, undefined] as PropType<ConfigurableValue>,
} as const

export const transition = {
  type: [String, null] as PropType<LiteralUnion<Transitions, string> | null>,
} as const
