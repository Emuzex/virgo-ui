import type { Preset } from '@unocss/core'

const rules: Preset['rules'] = [
  // Spacing
  [
    /^spacing-(\d+)$/,
    ([, d]) => ({ '--virgo-spacing': (Number(d) / 100) }),
  ]
]

export { rules }
