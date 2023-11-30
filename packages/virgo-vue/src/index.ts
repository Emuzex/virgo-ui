import '@/scss/index.scss'

// Components
export { VirgoComponentResolver } from './component-resolver'
export * from './components'
export * as components from './components'

// Composables
export * from './composables'
export * as composables from './composables'

// Plugin
export { plugin as virgo } from './plugin'
export type { PluginOptions, ThemeColors, ThemeOptions as ThemeOption } from './plugin'

// Preset
export { virgoDefaultThemeColors as defaultThemeColors, presetVirgo } from './preset'
export type { PresetVirgoOptions } from './preset'
export { presetIconExtraProperties } from './preset/icons'

// Other
export * from './symbols'
export { numRange } from './utils/helpers'
