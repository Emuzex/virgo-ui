export const baseInputConfig = {
	classes:{
		root: 'virgo-base-input-root em:spacing:gap-y-1 children:focus-within:text-primary flex flex-col flex-grow flex-shrink-0',
		inputContainer: 'virgo-base-input-container w-full em:w-6 em:h-6 em:spacing:gap-x-3 flex items-center',
		inputWrapper: 'virgo-base-input-input-wrapper w-full cursor-text em:spacing:px-4 spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full transition duration-250 ease-out flex em:w-5 em:h-5 em:[&_>_.virgo-spinner]-w-5 em:spacing:h-12 em:spacing:rounded-lg',
		inputWrapperError: 'border-danger',
		inputWrapperValid: 'focus-within:border-primary',
		prependInnerIcon: 'z-1',
		appendInnerIcon: 'ms-auto',
		disabledOrReadonly: 'pointer-events-none',
		disabled: '!all-[.virgo-base-input-input-wrapper]-bg-[hsla(var(--virgo-base-color),0.12)] opacity-50',
		interactive: 'all-[.virgo-base-input-child]-placeholder:transition all-[.virgo-base-input-child]-placeholder:duration-250 all-[.virgo-base-input-child]-placeholder:ease all-[.virgo-base-input-child:focus]-placeholder-translate-x-1',
		label: 'virgo-base-input-label',
		labelError: 'text-danger',
		inputChild: 'virgo-base-input-child w-full h-full inset-0 rounded-inherit bg-transparent',
		inputChildWithPrependInner: 'em:spacing:pl-10',
		inputChildWithAppendInner: 'em:spacing:pr-10',
		inputChildWithoutPrependInner: 'em:spacing:pl-4',
		inputChildWithoutAppendInner: 'em:spacing:pr-4',
		messageContainer: 'h-8',// hint and errors
		messageError: 'text-danger',
		messageHint: 'text-light-emphasis'
	}
}

export type baseInputClassesValidKeys = keyof typeof baseInputConfig.classes

export type baseInputClasses = Record<baseInputClassesValidKeys, string>
