import type { virgoButtonProps } from '@/components/button/meta'
import type { ComponentClasses } from '@/plugin'

export const virgoButtonClasses: ComponentClasses<virgoButtonProps> = {
		button: ({ iconOnly, disabled, variant }) => {
			return [
				'inline-flex whitespace-nowrap justify-center items-center relative text-white bg-purple-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none',
				iconOnly ? 'px-2 font-medium rounded-lg aspect-square min-w-10 focus-visible:ring-2 ring-offset-2 uno-layer-base-i:[&_.virgo-buttonn-content]-text-lg' : 'px-6 font-medium rounded-lg h-10 focus-visible:ring-2 ring-offset-2',
				{
					'opacity-50 pointer-events-none shadow-none': disabled,
					'its-block': variant?.block,
					'large-size': variant?.large,
					'its-outline': variant?.outline,
					'its-primary': variant?.primary,
				}
			]
		},
		loader: ({ loading }) => {
			return [
				'absolute',
				loading ? 'opacity-100' : 'opacity-0'
			]
		},
		content: ({ loading }) => {
			return [
				'virgo-button-content flex items-center justify-center gap-x-2',
				{
					'opacity-0': loading
				}
			]
		},
		something: 'asdasd'
}

export type virgoButtonClassesValidKeys = keyof typeof virgoButtonClasses
