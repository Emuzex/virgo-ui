import type { InjectionKey, MaybeRef, Ref } from 'vue'
import type { PluginOptions } from '@/plugin'

export const VIRGO_CONFIG = Symbol('VIRGO_CONFIG') as InjectionKey<PluginOptions>
export const VIRGO_DEFAULT_PROPS = Symbol('VIRGO_DEFAULT_PROPS') as InjectionKey<MaybeRef<PluginOptions['defaultProps']>>
export const VIRGO_CLASSES = Symbol('VIRGO_CLASSES') as InjectionKey<MaybeRef<PluginOptions['classes']>>
export const VIRGO_Z_INDEX = Symbol('VIRGO_Z_INDEX') as InjectionKey<Ref<number | undefined>>
