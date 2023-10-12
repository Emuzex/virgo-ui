import { fileURLToPath } from 'node:url'
import Container from 'markdown-it-container'
import Unocss from 'unocss/vite'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

const isDev = process.env.NODE_ENV !== 'production'

const nav: DefaultTheme.Config['nav'] = [{ text: 'Guide', link: '/guide/getting-started/installation', activeMatch: '/guide/' }]

if (isDev) nav.push({ text: 'Playground', link: '/playground' })

export default defineConfig({
	title: 'Virgo',
	description: 'Offering a collection of reusable components and a unique headless mode for enhanced customization.',
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
			{ icon: 'github', link: 'https://github.com/emuzex/virgo-ui' }

			// { icon: 'discord', link: 'https://discord.gg/8MTQuasmZf' },
		],
		nav,
		sidebar: {
			'/guide/': [
				{
					text: '🚀&nbsp;&nbsp; Getting Started',
					collapsed: false,
					items: [
						{ text: 'Introduction', link: '/guide/getting-started/' },
						{ text: 'Installation', link: '/guide/getting-started/installation' },
						{ text: 'Customization', link: '/guide/getting-started/customization' },
						{ text: 'FAQ', link: '/guide/getting-started/faq' }
						// { text: 'Edge Releases', link: '/guide/getting-started/edge-releases' },
					]
				},
				{
					text: '🛠️&nbsp;&nbsp; Integrations',
					collapsed: true,
					items: [
						{ text: 'Vue', link: '/guide/getting-started/integrations/vue' },
						{ text: 'Nuxt', link: '/guide/getting-started/integrations/nuxt' }
					]
				},
				{
					text: '✨&nbsp;&nbsp; Features',
					collapsed: false,
					items: [
						{ text: 'Presets', link: '/guide/features/presets' },
						{ text: 'Dynamic Props', link: '/guide/features/dynamic-props' },
						{ text: 'Component Aliases', link: '/guide/features/component-aliases' },
						{ text: 'Theme', link: '/guide/features/theme' },
						{ text: 'DX Focused', link: '/guide/features/dx-focused' },
						{ text: 'Arbitrary Sizes', link: '/guide/features/arbitrary-sizes' },
						{ text: 'Spacing', link: '/guide/features/spacing' },
						{ text: 'Icons', link: '/guide/features/icons' }
					]
				},
				{
					text: '📦&nbsp;&nbsp; Components',
					collapsed: false,
					items: [{ text: 'Button', link: '/guide/components/button' }]
				},
				{
					text: '🎛&nbsp;&nbsp; Composables',
					collapsed: false,
					items: [
						{ text: 'useSearch', link: '/guide/composables/useSearch' },
						{ text: 'useSort', link: '/guide/composables/useSort' },
						{ text: 'useVirgo', link: '/guide/composables/useVirgo' },
						{ text: 'useSelection', link: '/guide/composables/useSelection' },
						{ text: 'useIndeterminateCheckbox', link: '/guide/composables/useIndeterminateCheckbox' }
					]
				}
			]
		}
	},
	markdown: {
		// ℹ️ We only enabled this in development so that we can highlight code lines by seeing line number without calculating it in our editor.
		lineNumbers: isDev,
		theme: 'dracula',
		config: (md) => {
			md.use(Container, 'card', {
				render: (tokens, idx) => {
					const token = tokens[idx]

					const title = token.info.trim().slice(5).trim()

					const isCardBordered = token.attrs && token.attrs.some(([key, _]) => key === 'bordered')

					const titleHtml = md.render(`## ${title}`)
					const demoContent = title ? `<template #title>${titleHtml}</template>` : ''

					return token.nesting === 1 ? `<Demo :class="[${isCardBordered} && 'vp-demo-bordered']">${demoContent}` : '</Demo>\n'
				}
			})

			md.use(Container, 'code', {
				render: (tokens, idx) => {
					const token = tokens[idx]

					// console.log('token :>> ', token)
					const demoName = token.info.trim().slice(5).trim()

					return token.nesting === 1 ? `<template #demo><${demoName} /></template><template #code>` : '</template>\n'
				}
			})

			md.use(Container, 'after-demo', {
				render: (tokens, idx) => {
					const token = tokens[idx]

					return token.nesting === 1 ? '<template #after-demo>' : '</template>\n'
				}
			})
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
