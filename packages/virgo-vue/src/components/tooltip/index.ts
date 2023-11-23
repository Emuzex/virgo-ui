import Tooltip from './Tooltip.vue'

export * from './meta'
export { Tooltip }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Tooltip = InstanceType<typeof Tooltip>
