import type { ExtractPublicPropTypes } from 'vue'
import { configurable as configurableProp, disabled as disabledProp } from '@/composables/use-props'

// ℹ️ Make sure to checkout meta definition rules

// 👉 Props
export const virgoButtonProps = {
  /**
   * Render icon before virgoButton text
   */
  icon: configurableProp,

  /**
   * Append icon after virgoButton text
   */
  appendIcon: configurableProp,

  /**
   * Mark virgoButton as icon only virgoButton to apply square styling
   */
  iconOnly: Boolean,

  /**
   * Set component in disabled state
   */
  disabled: disabledProp,

  /**
   * Set virgoButton loading state.
   * Although, `loading` prop accepts boolean value, we set default value to `undefined` to indicate virgoButton won't ever use loading (show/hide) and won't render `ASpinner` component.
   * However, if `loading` prop is set to any boolean value (`false`/`true`) it will always render `ASpinner` component.
   */
  loading: {
    type: Boolean,
    default: undefined,
  },
} as const
export type virgoButtonProps = ExtractPublicPropTypes<typeof virgoButtonProps>

// 👉 Slots
export const virgoButtonSlots = {

  /**
   * Default slot for rendering virgoButton content
   */
  default: (_: any) => null as any,
} as const
