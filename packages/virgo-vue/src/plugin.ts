import { defu } from 'defu'
import type { PartialDeep } from 'type-fest'
import type {
	App,
	AllowedComponentProps,
	Component,
	VNodeProps
} from 'vue'
import {
	defineComponent,
	h
} from 'vue'
import type { PluginOptionDefaults } from './plugin-defaults'
import * as components from '@/components'
import { useVirgo } from '@/composables/use-virgo'
import { useZIndex } from '@/composables'
import { VIRGO_CLASSES, VIRGO_CONFIG, VIRGO_DEFAULT_PROPS } from '@/symbols'
import * as ComponentsConfig from '@/components/configs'

export interface ComponentsClasses {
	VirgoButton: Record<ComponentsConfig.virgoButtonClassesValidKeys, ComponentClass<typeof components.VirgoButton>>;
	BaseInput: Record<ComponentsConfig.baseInputClassesValidKeys, ComponentClass<typeof components.BaseInput>>;
	Tooltip: Record<ComponentsConfig.tooltipClassesValidKeys, ComponentClass<typeof components.Tooltip>>;
	VirgoInput: Record<ComponentsConfig.virgoInputClassesValidKeys, ComponentClass<typeof components.VirgoInput>>;

	// Floating: Record<ComponentsConfig.floatingClassesValidKeys, ComponentClass<typeof components.Floating>>; Not configurable yet
}

export const defaultClasses = {
	BaseInput: ComponentsConfig.baseInputClasses,
	VirgoButton: ComponentsConfig.virgoButtonClasses,
	Tooltip: ComponentsConfig.tooltipClasses,
	VirgoInput: ComponentsConfig.virgoInputClasses

	// Floating: ComponentsConfig.floatingConfig, Not configurable yet
}

export type ClassGenerator<T> = (ctx: T) => VueClassBinding;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentProps<C extends Component> = C extends new (...args: any) => any
	? Omit<
		InstanceType<C>['$props'],
		keyof VNodeProps | keyof AllowedComponentProps
	>
	: never;

export type VueClassBinding = string | Record<string, unknown> | Array<Record<string, unknown> | string>;

export type NormalizedVariant = Record<string, boolean>;

export type configFunction<T> = (params: Omit<T, 'variant'> & { variant?: NormalizedVariant }) => VueClassBinding;

export type ComponentClasses<T> = Record<string, configFunction<T> | string>

export type ToNormalizedVariant<T> = Omit<T, 'variant'> & {
	variant?: NormalizedVariant;
};

export type ComponentClass<C extends Component> =
	| VueClassBinding
	| ClassGenerator<ToNormalizedVariant<ComponentProps<C>>>;

export interface PluginOptions {
	registerComponents: boolean
	classes: PartialDeep<ComponentsClasses>
	componentAliases: Record<string, any>
	defaultProps: PartialDeep<PluginOptionDefaults>
	baseZIndex: number
}

export const defaultBaseZIndex = 2000

const configDefaults: PluginOptions = {
	registerComponents: true,
	classes: defaultClasses,
	componentAliases: {},
	defaultProps: {},
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

export const defineVirgoConfig = (options: PartialDeep<PluginOptions>) : PartialDeep<PluginOptions> => {
	return options
}

export const plugin = {
	install(app: App, options: PartialDeep<PluginOptions> = {}) {
		const config: PluginOptions = defu(options, configDefaults)

		if (config.registerComponents) {
			registerComponents(app, components)
		}
		handleComponentAliases(app, config)

		app.provide(VIRGO_CONFIG, config)
		app.provide(VIRGO_DEFAULT_PROPS, config.defaultProps)
		app.provide(VIRGO_CLASSES, config.classes)

		useZIndex(config.baseZIndex, app)
	}
}
