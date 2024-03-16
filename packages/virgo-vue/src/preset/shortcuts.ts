import type { Preset, StaticShortcutMap } from '@unocss/core'

const shortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  {
    'kbd': 'outline-1 outline-solid outline-a-border p-[0.2em_0.45em] rounded-lg min-w-[33px] opacity-60',
  },
]

export { shortcuts }
