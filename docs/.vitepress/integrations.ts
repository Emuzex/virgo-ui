export interface Integration {
	icon: string
	name: string
	link: string
}

// @unocss-include

export const integrations: Integration[] = [
	{ name: 'Vue', link: '/guide/getting-started/integrations/vue', icon: 'i-logos-vue' },
	{ name: 'Nuxt', link: '/guide/getting-started/integrations/nuxt', icon: 'i-logos-nuxt-icon' }
]
