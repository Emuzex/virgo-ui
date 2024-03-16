import VirgoInput from './virgo-input.vue'

export * from './meta'
export { VirgoInput }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VirgoInput = InstanceType<typeof VirgoInput>
