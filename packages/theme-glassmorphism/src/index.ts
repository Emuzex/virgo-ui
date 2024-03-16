import type { PluginOptions } from '@/plugin'
import type { PartialDeep } from 'type-fest'
import { defu } from 'defu'

const configDefaults: PartialDeep<PluginOptions> = {
	registerComponents: true,
	classes: {
		baseInput: {
			root: 'glassmorphism'
		},
		virgoButton: {}
	}
}

export const glassmorphism = (options: PartialDeep<PluginOptions> = {}) : PartialDeep<PluginOptions> => {
	return defu(options, configDefaults)
}
