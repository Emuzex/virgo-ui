export const tooltipConfig = {
	classes:{
		wrapper: 'z-[54]',
		content: 'bg-[hsl(var(--virgo-tooltip-bg-c))] em:px-2 em:py-1 em:rounded-lg',
		contentText: 'em:text-sm text-white text-center'
	}
}

export type tooltipClassesValidKeys = keyof typeof tooltipConfig.classes

export type tooltipClasses = Record<tooltipClassesValidKeys, string>
