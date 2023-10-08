import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetIconExtraProperties, presetvirgo } from 'virgo-vue'
import { presetThemeDefault } from '../packages/preset-theme-default/src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      unit: 'em',
      extraProperties: presetIconExtraProperties,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'Jet Brains Mono',
      },
    }),

    // virgo-vue presets
    presetvirgo(),
    presetThemeDefault(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  configDeps: [
    '../packages/preset-theme-default/src/shortcuts.ts',
    '../packages/preset-theme-default/src/rules.ts',
    '../packages/preset-theme-default/src/variants.ts',
    '../packages/preset-theme-default/src/index.ts',
  ],
  include: [/.*\/virgo-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
})
