import { defineNuxtConfig } from 'nuxt/config'

import virgo from '../src/module'

export default defineNuxtConfig({
	modules: [virgo, '@unocss/nuxt', '@nuxt/devtools'],
	virgo: {
		themes: {
			light: {
				colors: {
					primary: '350, 73%, 66.3%'
				}
			}
		}
	}
})
