import '@virgo-ui/preset-theme-default/dist/style.css'
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
import './style.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.use(virgo)

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
