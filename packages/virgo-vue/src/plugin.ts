import { defu } from 'defu'
import type { PartialDeep } from 'type-fest'
import type { App } from 'vue'
import { defineComponent } from 'vue'
import type { PluginOptionDefaults } from './plugin-defaults'
import * as components from '@/components'
import { useVirgo } from '@/composables/use-virgo'
import { useConfiguration } from '@/composables/use-configuration'
import { useZIndex } from '@/composables'
import { VIRGO_CLASSES, VIRGO_CONFIG, VIRGO_PROPS_DEFAULTS } from '@/symbols'
import * as ComponentsConfig from '@/components/configs'

export type ThemeColors = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type DefaultThemes = 'light' | 'dark'

export interface ComponentsClasses {
	BaseInput: ComponentsConfig.baseInputClasses
	VirgoButton: ComponentsConfig.virgoButtonClasses
	Tooltip: ComponentsConfig.tooltipClasses
	Floating: ComponentsConfig.floatingClasses
	VirgoInput: ComponentsConfig.virgoInputClasses
}

export const defaultClasses = {
	BaseInput: ComponentsConfig.baseInputConfig.classes,
	VirgoButton: ComponentsConfig.virgoButtonConfig.classes,
	Tooltip: ComponentsConfig.tooltipConfig.classes,
	Floating: ComponentsConfig.floatingConfig.classes,
	VirgoInput: ComponentsConfig.virgoInputConfig.classes
}

export interface ThemeOptions {
	class: string
	colors: Record<ThemeColors, string>
	cssVars: Record<string, string>
}

export type ConfigThemes = Record<DefaultThemes, ThemeOptions>

export interface PluginOptions {
	registerComponents: boolean
	initialTheme: keyof ConfigThemes
	classes: PartialDeep<ComponentsClasses>
	themes: ConfigThemes
	componentAliases: Record<string, any>
	propsDefaults: PartialDeep<PluginOptionDefaults>
	baseZIndex: number
}

// ℹ️ We are exporting this so that we can use it in tests
export const defaultBaseZIndex = 2000

const configDefaults: PluginOptions = {
	registerComponents: true,
	initialTheme: 'light',
	themes: {
		light: {
			class: '',
			colors: {
				primary: '265, 97.7%, 66.3%',
				success: '94.5, 100%, 39.6%',
				info: '200.1, 100%, 54.3%',
				warning: '42.4, 100%, 50%',
				danger: '358.3, 100%, 64.9%'
			},
			cssVars: {
				'body-color': 'hsla(var(--virgo-base-c), 0.68)',
				'body-bg-color': '0,4.8%,95.9%',

				// ℹ️ Used for background on body like select options, card, etc
				'surface-color': '0, 0%, 100%'
			}
		},
		dark: {
			class: 'dark',
			colors: {
				primary: '261, 73%, 66.3%',
				success: '94.5, 73%, 39.6%',
				info: '200.1, 73%, 54.3%',
				warning: '42.4, 73%, 50%',
				danger: '358.3, 73%, 64.9%'
			},
			cssVars: {
				'body-color': 'hsla(var(--virgo-base-c), 0.68)',
				'body-bg-color': 'var(--virgo-primary-hue), 15%, 5%',
				'surface-color': 'var(--virgo-primary-hue), 7%, 10%'
			}
		}
	},
	classes: defaultClasses,
	componentAliases: {},
	propsDefaults: {},
	baseZIndex: defaultBaseZIndex
}

const registerComponents = (app: App, components: Record<string, any>) => {
	for (const prop in components) {
		const component = components[prop]
		app.component(component?.name, component)
	}
}

const handleComponentAliases = (app: App, config: PluginOptions) => {
	for (const aliasComponentName in config.componentAliases) {
		const baseComponent = config.componentAliases[aliasComponentName]
		app.component(
			aliasComponentName,
			defineComponent({
				...baseComponent,
				name: aliasComponentName,

				// TODO: (types) Why we have to use ts-expect-error here?
				// @ts-expect-error: TS/Vue unable to get types correctly
				setup(props, ctx) {
					const {
						props: modifiedProps,
						defaultsClass,
						defaultsStyle,
						defaultsAttrs,
						classList
					} = useConfiguration(props)

return () => h(baseComponent, {
						...modifiedProps,
						defaultsClass,
						defaultsStyle,
						defaultsAttrs,
						classList
					}, ctx.slots)
				}
			})
		)
	}
}

export const plugin = {
	install(app: App, options: PartialDeep<PluginOptions> = {}) {
		const config: PluginOptions = defu(options, configDefaults)

		if (config.registerComponents) {
			registerComponents(app, components)
		}
		handleComponentAliases(app, config)

		app.provide(VIRGO_CONFIG, config)
		app.provide(VIRGO_PROPS_DEFAULTS, config.propsDefaults)
		app.provide(VIRGO_CLASSES, config.classes)

		useVirgo({ initialTheme: config.initialTheme, themes: config.themes })
		useZIndex(config.baseZIndex, app)
	}
}
