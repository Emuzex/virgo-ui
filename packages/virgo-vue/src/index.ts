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
export type { PluginOptions/*, ThemeColors, ThemeOptions as ThemeOption */} from './plugin'

// Other
export * from './symbols'
export { numRange } from './utils/helpers'
