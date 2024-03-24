import type { PluginOptions } from '@/plugin'
import type { PartialDeep } from 'type-fest'
import { defu } from 'defu'
import * as ComponentsConfig from '../../virgo-vue/src/components/configs'

export const defaultClasses = {
	BaseInput: ComponentsConfig.baseInputConfig.classes,
	VirgoButton: ComponentsConfig.virgoButtonConfig.classes,
	Tooltip: ComponentsConfig.tooltipConfig.classes,
	Floating: ComponentsConfig.floatingConfig.classes,
	VirgoInput: ComponentsConfig.virgoInputConfig.classes
}

const configDefaults: PartialDeep<PluginOptions> = {
	registerComponents: true,
	classes: {}
}

export const themeBase = (options: PartialDeep<PluginOptions> = {}) : PartialDeep<PluginOptions> => {
	return defu(options, configDefaults)
}
