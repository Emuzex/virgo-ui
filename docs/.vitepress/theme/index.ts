//import '@virgo-ui/preset-theme-default/dist/style.css'
import { virgo } from '@virgo-ui/vue'
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

import 'uno.css'

import '@virgo-ui/vue/dist/style.css'

import Api from '../../components/Api.vue'
import DemoBlock from '../components/demo-block'
import WarnBadge from '../components/warn-badge'
import ComingBadge from '../components/coming-badge'
import UpdateBadge from '../components/update-badge'
import NewBadge from '../components/new-badge'

import { extractFileNameFromPath } from '../../utils'
import './style.scss'

export default {
	...DefaultTheme,
	// 'kbd': 'outline-1 outline-solid outline-a-border p-[0.2em_0.45em] rounded-lg min-w-[33px] opacity-60',
	enhanceApp({ app }: { app: App }) {
		app.use(virgo, {
			classes: {
				tooltip:{
					wrapper: 'z-[54]',
					content: 'bg-[hsl(var(--virgo-tooltip-bg-color))] em:px-2 em:py-1 em:rounded-lg',
					contentText: 'em:text-sm text-white text-center'
				}
			}
		})

		// Register demos as components
		const demos = import.meta.glob('../../components/demos/**/*.vue', { eager: true })


		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		for (const path in demos) app.component(extractFileNameFromPath(path) as string, (demos[path] as any).default)

		// Other component registration
		/* eslint-disable vue/multi-word-component-names */
		app.component('Api', Api)
		app.component('Demo', DemoBlock)
		app.component('WarnBadge', WarnBadge)
		app.component('ComingBadge', ComingBadge)
		app.component('UpdateBadge', UpdateBadge)
		app.component('NewBadge', NewBadge)
		/* eslint-enable */
	}
}
