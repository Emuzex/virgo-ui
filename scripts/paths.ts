import * as path from 'node:path'
import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const repoRoot = path.join(__dirname, '..')
export const packagesDir = path.join(repoRoot, 'packages')

export const virgoVuePkgRoot = path.join(packagesDir, 'virgo-vue')
export const virgoVueSrc = path.join(virgoVuePkgRoot, 'src')
export const virgoVueComponentsDir = path.join(virgoVuePkgRoot, 'src', 'components')
