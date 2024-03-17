import type { ComponentResolver } from 'unplugin-vue-components'
import * as components from './components'

const componentList : string[] = []

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components: Record<string, any> = components

for (const component in _components) {
	const _component = _components[component]
	if(_component?.name)
		componentList.push(_component.name)
}
export function VirgoComponentResolver(): ComponentResolver {
	return {
		type: 'component',
		resolve: (name: string) => {
			if (componentList.includes(name)) return { name, from: '@virgo-ui/vue' } // TODO: check resolver works
		}
	}
}
