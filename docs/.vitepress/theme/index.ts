import '@virgo-ui/preset-theme-default/dist/style.css'
import { virgo } from '@virgo-ui/vue'
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

import 'uno.css'

import '@virgo-ui/vue/dist/style.css'

import Api from '../../components/Api.vue'
import Demo from '../../components/Demo.vue'
import LinkGrid from '../../components/LinkGrid.vue'
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

		// Register UI as components
		const ui = import.meta.glob('../../components/ui/**/*.vue', { eager: true })

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		for (const path in ui) app.component(extractFileNameFromPath(path) as string, (ui[path] as any).default)

		// Other component registration
		/* eslint-disable vue/multi-word-component-names */
		app.component('Demo', Demo)
		app.component('Api', Api)
		app.component('LinkGrid', LinkGrid)
		/* eslint-enable */
	}
}
