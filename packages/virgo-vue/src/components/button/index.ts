import VirgoButton from './virgo-button.vue'

export * from './meta'
export { VirgoButton }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VirgoButton = InstanceType<typeof VirgoButton>
