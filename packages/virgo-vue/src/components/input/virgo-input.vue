<script lang="ts" setup>
import type { VirgoInputEvents } from './meta'
import { virgoInputProps, textareaBaseInputSlots } from './meta'
import { BaseInput, baseInputProps } from '@/components/base-input'
import { useDefaults } from '@/composables/use-defaults'
import { filterUsedSlots } from '@/utils/vue'

// SECTION Meta
const _props = defineProps(virgoInputProps)
defineEmits<VirgoInputEvents>()

defineOptions({
  name: 'VirgoInput',
  inheritAttrs: false,
})
const { props, defaultsClass, defaultsStyle, defaultsAttrs, classList} = useDefaults(_props)

// !SECTION

// const _baseInputProps = reactivePick(props, Object.keys(aBaseInputProps) as Array<keyof AInputProps>)
const _baseInputProps = reactivePick(props, Object.keys(baseInputProps) as any)
const attrs = useAttrs()

const input = ref<HTMLInputElement>()

const isInputTypeFile = attrs.type && attrs.type === 'file'

function handleInputWrapperClick() {
  input.value?.focus()
}
</script>

<template>
  <base-input
    v-bind="{ ..._baseInputProps, ...defaultsAttrs, class: $attrs.class }"
    :class="[classList.root, defaultsClass, isInputTypeFile && classList.fileType]"
    :style="defaultsStyle"
    @click:inputWrapper="handleInputWrapperClick"
  >
    <!-- ℹ️ Recursively pass down slots to child -->
    <template
      v-for="name in filterUsedSlots(textareaBaseInputSlots)"
      #[name]="slotProps"
    >
      <slot
        :name="name"
        v-bind="slotProps"
      />
    </template>
    <template #default="slotProps">
      <input
        v-bind="{ ...$attrs, ...slotProps }"
        ref="input"
        class="virgo-input-input"
        :value="props.modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
    </template>
  </base-input>
</template>
