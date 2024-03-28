import type { PropType } from 'vue'

export type StringVariant = string; // For simple string variants
export type ObjectVariant<T extends Record<string, unknown>> = T; // For object variants with generic typing
export type ArrayVariant<T extends Record<string, unknown>> = (StringVariant | ObjectVariant<T>)[];

// Using generics to allow any string key in object variants
export type RawVariant<T extends Record<string, unknown> = Record<string, any>> = StringVariant | ObjectVariant<T> | ArrayVariant<T>;

export const allComponentsProps = {
	/**
	 * Useful when used in the component config `classes` option, to style it conditionally. Can be a string, object, or an array of string or/and object.
	 * @type {string|array|object}
	 */
	variant: {
		type: [String, Array, Object] as PropType<RawVariant>,
		default: undefined as undefined
	},

	/**
	 * Disable class inheritance from the Virgo plugin classes config. Only for this component.
	 */
	bare: {
		type: Boolean,
		default: false as boolean
	}
}
