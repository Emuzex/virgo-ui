import Floating from './Floating.vue'

export * from './meta'
export { sameWidth as sameWidthFloatingUIMiddleware } from './middlewares'
export { Floating }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Floating = InstanceType<typeof Floating>
