import BaseInput from './base-input.vue'

export * from './meta'
export { BaseInput }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BaseInput = InstanceType<typeof BaseInput>
