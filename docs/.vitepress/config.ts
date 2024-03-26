import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins'

const isDev = process.env.NODE_ENV !== 'production'

const nav: DefaultTheme.Config['nav'] = [
	{ text: 'Guide', link: '/guide/getting-started/installation', activeMatch: '/guide/' },]

if (isDev) nav.push({ text: 'Playground', link: '/playground' })

export default defineConfig({
	title: 'Virgo',
	description: 'Better, than yesterday.',
	head: [
		['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }]
	],
	themeConfig: {
		logo: '/logo.svg',
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present Futó Mirkó & Péli Ferenc'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/emuzex/virgo-ui' },
			{ icon: 'discord', link: 'https://discord.gg/KagVX4VE' }
		],
		nav,
		sidebar: {
			'/guide/': [
				{
					text: 'Getting Started',
					collapsed: false,
					items: [
						{ text: 'Introduction', link: '/guide/getting-started/' },
						{ text: 'Installation', link: '/guide/getting-started/installation' },
						{ text: 'Customization', link: '/guide/getting-started/customization' },
					]
				},
				{
					text: 'Features',
					collapsed: false,
					items: [
						{ text: 'Theme', link: '/guide/features/theme' },
						{ text: 'Transitions', link: '/guide/features/transitions' }
					]
				},
				{
					text: 'Components',
					collapsed: false,
					items: [
						/*{ text: 'Base Input', link: '/guide/components/base-input'},*/
						{ text: 'Button', link: '/guide/components/button' },
						{ text: 'Tooltip', link: '/guide/components/tooltip' },
						{ text: 'Input', link: '/guide/components/input'}
					]
				},
				{
					text: 'Composables',
					collapsed: false,
					items: [
						{ text: 'useVirgo', link: '/guide/composables/use-virgo' },
						// { text: 'useSearch', link: '/guide/composables/use-search' },
						// { text: 'useSort', link: '/guide/composables/use-sort' },
						// { text: 'useSelection', link: '/guide/composables/use-selection' },
					]
				},
			],
		}
	},
	markdown: {
		// ℹ️ We only enabled this in development so that we can highlight code lines by seeing line number without calculating it in our editor.
		lineNumbers: isDev,
		theme: {
			light: 'one-dark-pro',
			dark: 'one-dark-pro',
		},
		config: (md) => {
			applyPlugins(md)
		}
	},
	vite: {
		plugins: [
			Unocss({
				configFile: '../../uno.config.ts'
			})
		],
		resolve: {
			alias: {
				'@virgo-ui/vue': fileURLToPath(new URL('../../packages/virgo-vue', import.meta.url))
			}
		}
	}
})
