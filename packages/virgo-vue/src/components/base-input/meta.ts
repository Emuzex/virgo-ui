import type { ExtractPublicPropTypes, HTMLAttributes, PropType } from 'vue'
import { configurable, disabled, readonly } from '@/composables/use-props'

// 👉 Props
export const baseInputProps = ({
  /**
   * Input wrapper attributes
   */
  inputWrapperAttrs: Object as PropType<HTMLAttributes>,

  /**
   * Add hint below the form component
   */
  hint: String,

  /**
   * Error text to render. This will replace hint text if provided.
   */
  error: String,

  /**
   * Label of the form component
   */
  label: configurable,

  /**
   * Prepend icon
   */
  prependIcon: String,

  /**
   * Append icon
   */
  appendIcon: String,

  /**
   * Prepend icon inside input
   */
  prependInnerIcon: String,

  /**
   * Append icon inside input
   */
  appendInnerIcon: String,

  /**
   * Set component in disabled state
   */
  disabled,

  /**
   * Set component in readonly mode
   */
  readonly,

  /**
   * Set loading state
   */
  loading: Boolean,
} as const)

export type baseInputProps = ExtractPublicPropTypes<typeof baseInputProps>

// 👉 Slots
export const baseInputSlots = {
  'label': (_: any) => null as any,
  'prepend': (_: any) => null as any,
  'prepend-inner': (_: any) => null as any,
  'append-inner': (_: any) => null as any,
  'append': (_: any) => null as any,
  'bottom': (_: any) => null as any,
  'default': (_: {
    id: string | undefined
    readonly: boolean
    disabled: boolean
    class: any
  }) => null as any,
} as const

// 👉 Events
export interface BaseInputEvents {
  (e: 'click:inputWrapper'): void
}
