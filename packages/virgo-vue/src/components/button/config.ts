export const virgoButtonConfig = {
	classes:{
		buttonBase: 'inline-flex whitespace-nowrap justify-center items-center relative text-white bg-purple-500',
		buttonIconOnly: 'em:spacing:px-2 font-medium em:spacing:rounded-lg aspect-square em:spacing:min-w-10 uno-layer-base-i:em:[&_.virgo-button-content]-text-lg focus-visible:ring-2 ring-offset-2',
		button: 'em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2 ',
		disabled: 'opacity-50 pointer-events-none',
		loader: 'absolute',
		loading: 'opacity-0',
		content: 'virgo-button-content text-white flex items-center justify-center em:spacing:gap-x-2'
	}
}

export type virgoButtonClassesValidKeys = keyof typeof virgoButtonConfig.classes

export type virgoButtonClasses = Record<virgoButtonClassesValidKeys, string>
0
