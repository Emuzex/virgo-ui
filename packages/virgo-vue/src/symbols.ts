import type { InjectionKey, MaybeRef, Ref } from 'vue'
import type { PluginOptions } from '@/plugin'

export const VIRGO_CONFIG = Symbol('VIRGO_CONFIG') as InjectionKey<PluginOptions>
export const VIRGO_PROPS_DEFAULTS = Symbol('VIRGO_PROPS_DEFAULTS') as InjectionKey<MaybeRef<PluginOptions['propsDefaults']>>
export const VIRGO_Z_INDEX = Symbol('VIRGO_Z_INDEX') as InjectionKey<Ref<number | undefined>>
