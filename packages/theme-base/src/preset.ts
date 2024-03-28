import type { Preset } from '@unocss/core'
import { defu } from 'defu'
import { variants } from './variants'

export const virgoDefaultThemeColors = ['primary', 'success', 'info', 'warning', 'danger']

export const presetDefaults = {
	colors: virgoDefaultThemeColors
}

export type PresetVirgoOptions = typeof presetDefaults

export function presetVirgo(options: Partial<PresetVirgoOptions> = {}): Preset {
	const _options: typeof presetDefaults = defu(options, presetDefaults)

	return {
		name: '@virgo-ui/preset-core',
		theme: {
			colors: {
				a: { border: 'hsla(var(--virgo-base-color),var(--virgo-border-opacity))' },
				...Object.fromEntries(_options.colors.map(c => [c, `hsl(var(--virgo-${c}))`]))
			},
			boxShadow: {
				'sm': '0 1px 2px 0 hsla(0, 0%, 0%, 0.1)',
				'DEFAULT': '0 4px 24px 0 hsla(0, 0%, 0%, 0.1)',
				'md': '0 8px 16px 0 hsla(0, 0%, 0%, 0.1)',
				'lg': '0 16px 32px 0 hsla(0, 0%, 0%, 0.1)',
				'xl': '0 24px 48px 0 hsla(0, 0%, 0%, 0.1)',
				'2xl': '0 40px 64px 0 hsla(0, 0%, 0%, 0.1)'
			}
		},
		safelist: [
			..._options.colors.map(c => `bg-${c}`),
			..._options.colors.map(c => `border-${c}`),
			..._options.colors.map(c => `text-${c}`),
			..._options.colors.map(c => `after:bg-${c}`),
			..._options.colors.map(c => `before:bg-${c}`)
		],
		variants
	}
}
