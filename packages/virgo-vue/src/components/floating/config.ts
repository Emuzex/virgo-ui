import type { ComponentClasses } from '@/plugin'
import type { floatingProps } from '@/components/floating/meta'

export const floatingClasses: ComponentClasses<floatingProps> = {
		transitionBody: 'transform'
}

export type floatingClassesValidKeys = keyof typeof floatingClasses
