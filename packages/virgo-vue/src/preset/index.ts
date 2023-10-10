import type { Preset } from '@unocss/core'
import { defu } from 'defu'

export const virgoDefaultThemeColors = ['primary', 'success', 'info', 'warning', 'danger']

export const presetDefaults = {
  colors: virgoDefaultThemeColors,
}

export type PresetVirgoOptions = typeof presetDefaults

export function presetvirgo(options: Partial<PresetVirgoOptions> = {}): Preset {
  const _options: typeof presetDefaults = defu(options, presetDefaults)

  return {
    name: '@virgo-vue/preset-core',
    theme: {
      colors: Object.fromEntries(
        _options.colors.map(c => [c, `hsl(var(--a-${c}))`]),
      ),
    },
    safelist: [
      ..._options.colors.map(c => `bg-${c}`),
      ..._options.colors.map(c => `border-${c}`),
      ..._options.colors.map(c => `text-${c}`),
      ..._options.colors.map(c => `after:bg-${c}`),

      // Typography
      ..._options.colors.map(c => `a-title-${c}`),
      ..._options.colors.map(c => `a-subtitle-${c}`),
      ...['top', 'right', 'bottom', 'left'].map(dir => `a-drawer-anchor-${dir}`),
    ],
    variants: [
      (matcher: string) => {
        if (!matcher.startsWith('i:'))
          return matcher

        return {
          // slice `i:` prefix and passed to the next variants and rules
          matcher: matcher.slice(2),
          selector: (s: string) => `${s} > i`,
        }
      },
    ],
  }
}
