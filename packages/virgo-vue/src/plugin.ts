import { defu } from 'defu'
import type { PartialDeep } from 'type-fest'
import type { App } from 'vue'
import { defineComponent } from 'vue'
import type { PluginOptionDefaults } from './plugin-defaults'
import * as components from '@/components'
import { useVirgo } from '@/composables/use-virgo'
import { useZIndex } from '@/composables'
import { VIRGO_CLASSES, VIRGO_CONFIG, VIRGO_PROPS_DEFAULTS } from '@/symbols'
import * as ComponentsConfig from '@/components/configs'
import VirgoButton from '@/components/button'
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

export type VueClassBinding =
	| string
	| Record<string, unknown>
	| Array<Record<string, unknown> | string>;

type ComponentOptionClass<C extends Component, P = {}> =
	| VueClassBinding
	| ClassGenerator<ToNormalizedVariant<ComponentProps<C>> & P>;


export interface PluginOptions {
	registerComponents: boolean
	classes: PartialDeep<ComponentsClasses>
	componentAliases: Record<string, any>
	propsDefaults: PartialDeep<PluginOptionDefaults>
	baseZIndex: number,
	config?: {
		VirgoButton? : never
	}
}

export const defaultBaseZIndex = 2000

const configDefaults: PluginOptions = {
	registerComponents: true,
	classes: defaultClasses,
	componentAliases: {},
	propsDefaults: {},
	baseZIndex: defaultBaseZIndex,
	config: {}

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
						inlineStyle,
						attributes,
						classList
					} = useVirgo(props)

return () => h(baseComponent, {
						...modifiedProps,
						inlineStyle,
						attributes,
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

		useZIndex(config.baseZIndex, app)
	}
}
