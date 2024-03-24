export const tooltipConfig = {
	classes:{
		wrapper: 'z-[54]',
		content: 'bg-[hsl(var(--virgo-tooltip-bg-color))] px-2 py-1 rounded-lg',
		contentText: 'text-sm text-white text-center'
	}
}

export type tooltipClassesValidKeys = keyof typeof tooltipConfig.classes

export type tooltipClasses = Record<tooltipClassesValidKeys, string>
