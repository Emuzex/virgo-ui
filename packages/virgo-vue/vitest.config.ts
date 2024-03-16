import { presetIcons, presetUno, presetWebFonts } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig, mergeConfig } from 'vitest/config'
import vitestBaseConfig from '../../vitest.config'

import { presetIconExtraProperties } from './src'

import { presetVirgo } from './src'
import viteConfig from './vite.config'

const vitestConfig = mergeConfig(
	vitestBaseConfig,
	defineConfig({
		plugins: [
			Unocss({
				presets: [
					presetUno(),
					presetIcons({
						scale: 1.2,
						unit: 'em',
						extraProperties: presetIconExtraProperties
					}),
					presetWebFonts({
						fonts: {
							sans: 'Inter',
							mono: 'Jet Brains Mono'
						}
					}),

					// @virgo-ui/vue presets
					presetVirgo()
				],
				include: [/.*\/virgo-vue\.js(.*)?$/, './**/*.{vue,md,ts}']
			})
		],
		test: {
			browser: {
				enabled: true,

				// @ts-expect-error ignore, we don't have the type here
				enableUI: true,
				name: 'chrome',
				headless: !!process.env.HEADLESS,
				provider: 'webdriverio'
			}
		}
	})
)

export default mergeConfig(viteConfig, vitestConfig)
