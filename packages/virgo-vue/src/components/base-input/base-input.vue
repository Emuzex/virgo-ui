<script lang="ts" setup>
import type { BaseInputEvents, baseInputSlots } from './meta'
import { baseInputProps } from './meta'
import { useConfigurable } from '@/composables/use-configurable'
import { useVirgo } from '@/composables/use-virgo'
import TransitionExpand from '@/transitions/transition-expand.vue'

// SECTION Meta

// TODO: Provide a way to attach classes to root element
const _props = defineProps(baseInputProps)

defineEmits<BaseInputEvents>()

defineSlots<typeof baseInputSlots>()

defineOptions({
  name: 'BaseInput',
})

const { props, inlineStyle, attributes, classList } = useVirgo(_props)

// !SECTION

const attrs = useAttrs()

const configurableLabel = useConfigurable(toRef(props, 'label'))

const iconTransition = 'transition duration-150 ease-in'

const _elementIdToken = attrs.id || props.label
const elementId = _elementIdToken ? `virgo-input-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : undefined

const refRoot = ref()
const refInputContainer = ref()
const refInputWrapper = ref()

defineExpose({
  refRoot,
  refInputContainer,
  refInputWrapper,
})
</script>

<template>
	<div
		ref="refRoot"
		:class="[
			classList.root,
			classList?.inheritedClass,
			props.disabled && classList.disabled,
			(props.disabled || props.readonly) && classList.disabledOrReadonly,
			!(props.disabled || props.readonly) && classList.interactive,
		]"
		:style="inlineStyle"
		v-bind="attributes"
	>
		<!-- 👉 Label -->
		<slot name="label">
			<label
				v-if="props.label"
				:for="elementId"
				v-bind="configurableLabel.attrs"
				:class="[props.error && classList.labelError, configurableLabel.classes, classList.label]"
			>
				{{ configurableLabel.content }}
			</label>
		</slot>

		<!-- SECTION Input Container -->
		<div
			ref="refInputContainer"
			:class="classList.inputContainer"
		>
			<!-- 👉 Slot: Prepend -->
			<slot name="prepend">
				<i
					v-if="props.prependIcon"
					:class="[iconTransition, props.prependIcon]"
				/>
			</slot>

			<!-- SECTION Input Wrapper -->
			<!-- ❗ relative class is required for loader on `.virgo-base-input-input-wrapper` -->
			<div
				ref="refInputWrapper"
				v-bind="props.inputWrapperAttrs"
				:class="[classList.inputWrapper, props.error ? classList.inputWrapperError : classList.inputWrapperValid]"
				@click="$emit('click:inputWrapper')"
			>
				<!-- 👉 Slot: Prepend Inner -->
				<slot name="prepend-inner">
					<i
						v-if="props.prependInnerIcon"
						:class="[iconTransition, props.prependInnerIcon, classList.prependInnerIcon]"
					/>
				</slot>

				<!-- 👉 Slot: Default -->
				<!-- TODO: We need to improve default slot implementation so that we can provide selected slot to selection component -->
				<slot
					:id="elementId"
					:readonly="props.readonly"
					:disabled="props.disabled"
					:class="[
						classList.inputChild,
						$slots['prepend-inner'] || props.prependInnerIcon
							? classList.inputChildWithPrependInner
							: classList.inputChildWithoutPrependInner,
						$slots['append-inner'] || props.appendInnerIcon
							? classList.inputChildWithAppendInner
							: classList.inputChildWithoutAppendInner,
					]"
				/>

				<!-- 👉 Slot: Append Inner -->
				<slot name="append-inner">
					<span v-if="props.loading">Loading..</span>
					<i
						v-else-if="props.appendInnerIcon"
						:class="[iconTransition, props.appendInnerIcon, classList.appendInnerIcon]"
					/>
				</slot>
			</div>
			<!-- !SECTION -->

			<!-- 👉 Slot: Append -->
			<slot name="append">
				<i
					v-if="props.appendIcon"
					:class="[iconTransition, props.appendIcon]"
				/>
			</slot>
		</div>
		<!-- !SECTION -->

		<!-- 👉 Slot: Bottom -->
		<slot name="bottom">
			<transition-expand>
				<div
					v-show="props.error || props.hint"
					:class="classList.messageContainer"
				>
					<small
						class="inline-block"
						:class="[props.error ? classList.messageError : classList.messageHint]"
					>
						{{ props.error || props.hint }}</small>
				</div>
			</transition-expand>
		</slot>
	</div>
</template>
