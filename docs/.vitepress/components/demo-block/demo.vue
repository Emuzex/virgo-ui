<script lang='ts' setup name="demo-block">
import { computed } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'

const props = defineProps({
	github: {
		type: String,
		default: 'https://github.com/emuzex/virgo-ui',
	},
	highlightedCode: {
		type: String,
		default: '',
	},
	code: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	desc: {
		type: String,
		default: '',
	},
	lang: {
		type: String,
		default: 'vue',
	},
	expand: {
		type: Boolean,
		default: false,
	},
})

const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.highlightedCode),
)
const { copy, copied } = useClipboard({ source: decodeURIComponent(props.code) })
const [value, toggle] = useToggle()

</script>

<template>
    <div v-bind="$attrs" class="mt-6">
      <div class="virgo-demo_wrapper vp-raw bg">
        <slot />
      </div>
      <div class="relative">
        <div class="virgo-demo_actions">
          <a class="virgo-demo_action_item group" :href="github" target="_blank">
            <div class="virgo-demo_action_icon i-carbon-logo-github" />
            <div class="virgo-demo_tooltip group-hover:opacity-100">
              Edit on GitHub
            </div>
          </a>
          <a class="virgo-demo_action_item group"  @click="copy()">
            <div class="virgo-demo_action_icon i-carbon:copy" />
            <div class="virgo-demo_tooltip group-hover:opacity-100" >
              {{ copied ? 'Copied' : 'Copy code' }}
            </div>
          </a>
          <a class="virgo-demo_action_item group"  @click="toggle()">
            <div class="virgo-demo_action_icon i-carbon:fit-to-width" />
            <div class="virgo-demo_tooltip group-hover:opacity-100">
              {{ value ? 'Hidden code' : 'Show code' }}
            </div>
          </a>
        </div>
        <div v-show="value" :class="`language-${lang} extra-class`" v-html="decodedHighlightedCode" />
      </div>
    </div>
</template>
