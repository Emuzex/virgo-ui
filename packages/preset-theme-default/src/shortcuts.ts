import type { Preset, StaticShortcutMap } from '@unocss/core'

const shortcuts: Exclude<Preset['shortcuts'], undefined | StaticShortcutMap> = [
  // 👉 States
  [/^states:?(\d+)?$/, ([, op]) => `\
      relative \
      before:pointer-events-none \
      before:content-empty \
      before:absolute \
      before:inset-0 \
      before:rounded-inherit \
      before:bg-current-color \
      before:opacity-0 \
      \
      before:transition \
      before:duration-200 \
      before:ease-in-out \
      \
      hover:before:opacity-${op || 15}`,
  ],
  {
    // 👉 Tooltip
    'virgo-tooltip-wrapper': 'z-[54]',
    'virgo-tooltip': 'bg-[hsl(var(--virgo-tooltip-bg-c))] em:px-2 em:py-1 em:rounded-lg',
    'virgo-tooltip-text': 'em:text-sm text-white text-center',

    'overlay': 'absolute inset-0 content-empty bg-[hsla(var(--a-loader-overlay-bg-c),var(--a-loader-overlay-bg-opacity))] opacity-0 rounded-inherit transition-opacity transition-duration-250',

    'kbd': 'outline-1 outline-solid outline-a-border p-[0.2em_0.45em] rounded-lg min-w-[33px] opacity-60',
  },
]

export { shortcuts }
