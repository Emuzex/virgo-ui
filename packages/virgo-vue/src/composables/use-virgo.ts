import { objectKeys, objectPick } from '@antfu/utils'
import { deepmergeCustom } from 'deepmerge-ts'
import type { Ref, StyleValue } from 'vue'
import { normalizeClass, toValue } from 'vue'
import { VIRGO_CLASSES, VIRGO_DEFAULT_PROPS } from '@/symbols'
import type { PluginOptionDefaults } from '@/plugin-defaults'
import type { PluginOptions, ToNormalizedVariant } from '@/plugin'

export const mergeDefaultProps = deepmergeCustom({
	mergeArrays: false
})

interface ReturnType<Props> {
	props: Props
	classList: Ref<Record<string, string> | undefined | any>
	inlineStyle: Ref<StyleValue | undefined>
	attributes: Ref<Record<string, unknown> | undefined>
}

export function useVirgo<Props extends Record<string, unknown>>(definitionProps: Props, componentName?: keyof PluginOptionDefaults): ReturnType<Props> {
	const vm = getCurrentInstance()
	const _componentName = (componentName ?? vm?.type.name ?? vm?.type.__name) as keyof PluginOptionDefaults | undefined

	if (!_componentName) throw new Error('Unable to identify the component name. Please define component name or use the `componentName` parameter while using `useVirgo` composable.')

	// Get defaults
	const defaultProps = inject(VIRGO_DEFAULT_PROPS, {})

	// New defaults
	const newDefaultProps = ref({}) as Ref<PluginOptions['defaultProps']>

	// ℹ️ Pass new reactive value to avoid updates in upward tree
	provide(VIRGO_DEFAULT_PROPS, newDefaultProps)

	// Return Values
	const propsRef = ref() as Ref<ReturnType<Props>['props']>
	const inlineStyle = ref() as ReturnType<Props>['inlineStyle']
	const attributes = ref() as ReturnType<Props>['attributes']

	const virgoClasses = toValue(inject(VIRGO_CLASSES, {}))
	const classList = ref({}) as ReturnType<Props>['classList']
	const unCompiledClassList = ref({}) as ReturnType<Props>['classList']
	unCompiledClassList.value = virgoClasses[_componentName]

	const calculateProps = () => {
		const _defaultProps = toValue(defaultProps)
		const { class: _class, style, attrs, ...restProps } = _defaultProps[_componentName] || {}
		if(_class) classList.value.inheritedClass = _class
		inlineStyle.value = style
		attributes.value = attrs

		/* eslint-disable @typescript-eslint/no-explicit-any */
		const componentProps = {} as any
		const otherProps = {} as any
		/* eslint-enable */

		Object.entries(restProps).forEach(([key, value]) => {
			if (key in definitionProps) componentProps[key] = value
			else otherProps[key] = value
		})

		// Provide subProps to the nested component
		// newDefaults.value = mergeDefaultProps(_defaultProps, otherProps)
		/**
		 * ℹ️ This line optimizes object by removing nested component's defaults from the current component tree
		 * Assume we have { card: { button: { color: 'info' } } } then below line will move 'button' on top and remove it from children of 'card'
		 * To see the difference log the result of `mergeDefaultProps(...)` of below line and comment line above
		 */
		newDefaultProps.value = mergeDefaultProps({ ..._defaultProps, [_componentName]: componentProps }, otherProps)

		const explicitPropsNames = objectKeys(vm?.vnode.props || {}) as unknown as (keyof Props)[]
		const explicitProps = objectPick(definitionProps, explicitPropsNames)

		propsRef.value = mergeDefaultProps(definitionProps, componentProps, explicitProps) as Props
	}

	const generateClasses = () => {
		const compiledClasses: Record<string, unknown> = {}

		for (const key in unCompiledClassList.value) {
			const currentConfig = unCompiledClassList.value[key]
			let compiledClass = undefined

			if (currentConfig && !propsRef.value.bare) {
				if (typeof currentConfig === 'function') {
					const configClassCtx: ToNormalizedVariant<Props> = Object.assign({}, propsRef.value, {
						variant: undefined
					})

					if (propsRef.value.variant) {
						const normalizedVariants = normalizeClass(propsRef.value.variant)
							.split(' ')
							.reduce((acc, v) => {
								acc[v] = true

								return acc
							}, {} as Record<string, boolean>)

						configClassCtx.variant = new Proxy(normalizedVariants, {
							get: (target, prop: string): boolean => {
								return target[prop] || false
							}
						})
					}

					compiledClass = currentConfig(configClassCtx)
				} else {
					compiledClass = currentConfig
				}
				compiledClasses[key] = compiledClass
			}
		}
		classList.value = {...classList.value, ...compiledClasses }
		console.log(classList.value)
	}


	watch([() => definitionProps, () => toValue(defaultProps)], () => {
			calculateProps()
			generateClasses()
		},
		{
			deep: true,
			immediate: true
		})


	return {
		props: toReactive(propsRef),
		classList,
		inlineStyle,
		attributes
	}
}
