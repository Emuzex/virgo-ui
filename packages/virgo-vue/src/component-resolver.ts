import type { ComponentResolver } from 'unplugin-vue-components'

export function VirgoComponentResolver(): ComponentResolver {
	return {
		type: 'component',
		resolve: (name: string) => {
			if (name.match(/^A[A-Z]/)) return { name, from: '@virgo-ui/vue' } // TODO: check resolver works
		}
	}
}
