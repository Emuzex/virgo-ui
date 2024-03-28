import type { ComponentClasses } from '@/plugin'
import type { tooltipProps } from '@/components/tooltip/meta'

export const tooltipClasses: ComponentClasses<tooltipProps> = {
		wrapper: 'z-[54]',
		content: 'bg-[hsl(var(--virgo-tooltip-bg-color))] px-2 py-1 rounded-lg',
		contentText: 'text-sm text-white text-center'
}

export type tooltipClassesValidKeys = keyof typeof tooltipClasses
