export const baseInputConfig = {
	classes:{
		root: 'virgo-base-input-root i:children:focus-within:text-primary flex flex-col flex-grow flex-shrink-0 gap-y-1',
		inputContainer: 'virgo-base-input-input-container flex items-center i:w-6 i:h-6 gap-x-3',
		inputWrapper: 'virgo-base-input-input-wrapper transition duration-250 ease-out flex i:w-5 i:h-5 [&_>_.virgo-spinner]-w-5 h-10 rounded-lg cursor-text px-4 spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full',
		inputWrapperError: 'border-danger',
		inputWrapperValid: 'focus-within:border-primary',
		prependInnerIcon: 'z-1',
		appendInnerIcon: 'ms-auto',
		disabledOrReadonly: 'pointer-events-none',
		disabled: '!all-[.virgo-base-input-input-wrapper]-bg-[hsla(var(--virgo-base-c),0.12)] opacity-50',
		interactive: 'all-[.virgo-base-input-child]-placeholder:transition all-[.virgo-base-input-child]-placeholder:duration-250 all-[.virgo-base-input-child]-placeholder:ease all-[.virgo-base-input-child:focus]-placeholder-translate-x-1',
		label: 'virgo-base-input-label',
		labelError: 'text-danger',
		inputChild: 'virgo-base-input-child w-full h-full inset-0 rounded-inherit bg-transparent',
		inputChildWithPrependInner: '',
		inputChildWithAppendInner: '',
		inputChildWithoutPrependInner: '',
		inputChildWithoutAppendInner: '',
		messageContainer: 'h-8', // hint and errors
		messageError: 'text-danger',
		messageHint: 'text-light-emphasis'
	}
}

export type baseInputClassesValidKeys = keyof typeof baseInputConfig.classes

export type baseInputClasses = Record<baseInputClassesValidKeys, string>
