export const virgoInputConfig = {
	classes:{
		root: 'virgo-input-root',
		fileType: 'file:[&_.virgo-base-input-child]-rounded-lg file:[&_.virgo-base-input-child]-border-none file:[&_.virgo-base-input-child]-mr-4 file:[&_.virgo-base-input-child]-px-4 file:[&_.virgo-base-input-child]-py-3 file:[&_.virgo-base-input-child]-text-gray-500 file:[&_.virgo-base-input-child]-rounded-r-none file:[&_.virgo-base-input-child]-bg-[hsla(var(--a-base-c),0.05)] !all-[.a-base-input-input-wrapper]-px-0',
		input: 'virgo-input-input',
	}
}

export type virgoInputClassesValidKeys = keyof typeof virgoInputConfig.classes

export type virgoInputClasses = Record<virgoInputClassesValidKeys, string>
