export const virgoButtonConfig = {
	classes:{
		buttonBase: 'inline-flex whitespace-nowrap justify-center items-center relative text-white bg-purple-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none',
		buttonIconOnly: 'px-2 font-medium rounded-lg aspect-square min-w-10 focus-visible:ring-2 ring-offset-2 uno-layer-base-i:em:[&_.virgo-buttonn-content]-text-lg',
		button: 'px-6 font-medium rounded-lg h-10 focus-visible:ring-2 ring-offset-2 ',
		disabled: 'opacity-50 pointer-events-none shadow-none',
		loader: 'absolute',
		loading: 'opacity-0',
		content: 'virgo-button-content flex items-center justify-center gap-x-2'
	}
}

export type virgoButtonClassesValidKeys = keyof typeof virgoButtonConfig.classes

export type virgoButtonClasses = Record<virgoButtonClassesValidKeys, string>
