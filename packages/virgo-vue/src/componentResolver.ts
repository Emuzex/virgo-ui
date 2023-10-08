import type { ComponentResolver } from 'unplugin-vue-components'

export function virgoComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^A[A-Z]/))
        return { name, from: 'virgo-vue' }
    },
  }
}
