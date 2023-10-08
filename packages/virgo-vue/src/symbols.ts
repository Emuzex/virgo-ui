import type { InjectionKey, MaybeRef, Ref } from 'vue'
import type { PluginOptions } from '@/plugin'

export const virgo_CONFIG = Symbol('virgo_CONFIG') as InjectionKey<PluginOptions>
export const virgo_PROPS_DEFAULTS = Symbol('virgo_PROPS_DEFAULTS') as InjectionKey<MaybeRef<PluginOptions['propsDefaults']>>
export const virgo_Z_INDEX = Symbol('virgo_Z_INDEX') as InjectionKey<Ref<number | undefined>>
