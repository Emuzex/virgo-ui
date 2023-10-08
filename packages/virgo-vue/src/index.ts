import '@/scss/index.scss'

// Components
export { virgoComponentResolver } from './componentResolver'
export * from './components'
export * as components from './components'

// Composables
export * from './composables'
export * as composables from './composables'

// Plugin
export { plugin as virgo } from './plugin'
export type { PluginOptions, ThemeColors, ThemeOptions as ThemeOption } from './plugin'

// Preset
export { virgoDefaultThemeColors as defaultThemeColors, presetvirgo } from './preset'
export type { PresetvirgoOptions } from './preset'
export { presetIconExtraProperties } from './preset/icons'

// Other
export * from './symbols'
export { numRange } from './utils/helpers'
