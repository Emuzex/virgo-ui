import { presetVirgo, presetIconExtraProperties } from '@virgo-ui/vue'
import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			unit: 'em',
			extraProperties: presetIconExtraProperties
		}),
		presetWebFonts({
			fonts: {
				sans: 'Inter',
				mono: 'Jet Brains Mono'
			}
		}),

		// @virgo-ui/vue presets
		presetVirgo(),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	include: [/.*\/virgo-vue\.js(.*)?$/, './**/*.{vue,md,ts}'],
	shortcuts: [
		{
			'fscw': 'flex justify-start items-center flex-wrap w-full',
			'virgo-demo_wrapper':
				'p-8 c-#282f38  border border-light-700 rounded-sm dark:bg-dark-700 dark:border-#4C4D4F flex',
			'virgo-demo_actions': 'flex justify-end pt-3 gap-2',
			'virgo-demo_action_item':
				'relative outline-none flex justify-center items-center w-7 h-7 p-0 rounded-full border border-light-900 dark:border-dark-900 bg-white dark:bg-#38383A cursor-pointer hover:bg-#E5E6EB dark:hover:bg-dark:300',
			'virgo-demo_action_icon': 'c-#4E5969 dark:c-white',
			'virgo-demo_tooltip':
				'opacity-0 h-7 bg-black px-2.5 py-1 box-border text-xs c-white inline-flex justify-center items-center  rounded absolute z-1 transition duration-600 whitespace-nowrap -top-8',
			'virgo-overview_card_wrapper': 'flex flex-col  items-center space-x-3 p-4 rounded border border-light-500 hover:bg-#F2F2F2 hover:-translate-y-2 !duration-400 dark:border-#4C4D4F dark:hover:bg-dark-300 !hover-b-emerald-300 !transition-all',
			'virgo-overview_cover': 'children-w-full children-aspect-video',
			'virgo-overview_body': 'flex p-4 !text-base flex-1 flex-col gap-2',
			'overview_body_title': 'mb-2 flex items-center gap-2 !text-lg font-bold',
		},
	],
})
