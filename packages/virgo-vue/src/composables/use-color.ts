
import type { ComputedRef } from 'vue'
import { useVirgo } from '@/composables/use-virgo'
import type { ColorProp } from '@/composables/use-props'

export function isThemeColor(color: ColorProp | null): ComputedRef<boolean> {
	return computed(() => {
		let activeThemeColors: string[] = []

		const { activeTheme } = useVirgo()
		activeThemeColors = Object.keys(activeTheme.value.theme.colors)

		return !!(color && (activeThemeColors as ColorProp[]).includes(color))
	})
}

/*export function useColor(color: MaybeRef<ColorProp>, cssVarName: MaybeRef<string>, as: 'text' | 'bg' = 'text') {
	const styles = computed(() => {
		const _color = unref(color)
		const cssVar = computed(() => `--virgo-${unref(cssVarName)}`)

		const property = as === 'bg' ? 'background-color' : 'color'
		const _isThemeColor = isThemeColor(_color)

		const _styles = {
			[cssVar.value]: _isThemeColor.value ? `var(--virgo-${_color})` : _color,
			[property]: `hsla(var(${cssVar.value}), var(${cssVar.value}-opacity, 1))`
		} as StyleValue

		return _styles
	})

	return {
		styles
	}
}*/
