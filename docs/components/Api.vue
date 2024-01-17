<script lang="ts" setup>
import { unrefElement } from '@vueuse/core'
import { useSearch, useSelection } from '@virgo-ui/vue'
import { computed, onMounted, ref } from 'vue'

import type { ComponentApi } from '../../scripts/gen-component-meta'

const props = defineProps<{
  title: string
  api: ComponentApi
}>()

// SECTION Filtering
const q = ref('')

// filtered props
const { results: filteredProps } = useSearch(q, props.api.props, (q: string, prop: typeof props.api['props'][number]) => {
  return prop.name.includes(q)
  || prop.description.includes(q)
})

// filtered slots
const { results: filteredSlots } = useSearch(q, props.api.slots, (q: string, slot: typeof props.api['slots'][number]) => {
  return slot.name.includes(q)
  || slot.description.includes(q)
})

// filtered events
const { results: filteredEvents } = useSearch(q, props.api.events, (q: string, event: typeof props.api['events'][number]) => {
  return event.name.includes(q)
    || event.type.includes(q)
  || event.signature.includes(q)
})

// !SECTION

// SECTION Tabs
const { options: apiTabs, select, value: apiActiveTab } = useSelection({
  items: ['props', 'slots', 'events'],
  initialValue: 'props',
})

const foundNumbers = computed(() => ({
  props: filteredProps.value.length,
  slots: filteredSlots.value.length,
  events: filteredEvents.value.length,
}))

// !SECTION

const apiCard = ref()
const apiCardMinHeight = ref('')
onMounted(() => {
  apiCardMinHeight.value = window.getComputedStyle(unrefElement(apiCard.value)).height
})
</script>

<template>
  <div
    ref="apiCard"
		class="rounded-lg p-5 a-card relative overflow-hidden bg-[hsla(var(--a-surface-c),var(--un-bg-opacity,1))]"
    :style="{
      minHeight: apiCardMinHeight,
    }"
  >
	  <div class="a-card-padding next:pt-0 em:spacing:not-last:pb-4">
		  <div class="flex flex-wrap items-center justify-between">
			  <span class="a-title">{{ props.title }}</span>
			  <input
				  v-model="q"
				  class="text-sm max-w-200px border border-solid border-gray-600/20 p-2 rounded-md"
				  placeholder="Search API..."
			  />
		  </div>
	  </div>
    <div class="a-card-body">
      <div class="flex gap-4 mb-4">
        <button
          v-for="tab in apiTabs"
          :key="tab.value"
          class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2"
          :class="[!tab.isSelected && 'opacity-50']"
          @click="select(tab.value)"
        >
          <span>{{ tab.value }}</span>
          <span class="text-sm">({{ foundNumbers[tab.value as keyof typeof api] }})</span>
        </button>
      </div>

      <!-- Props -->
      <div v-show="apiActiveTab === 'props'">
        <div
          v-for="prop in filteredProps"
          :key="prop.name"
          class="not-last-mb-4"
        >
          <span class="font-semibold text-[hsla(var(--a-title-c),var(--a-title-opacity))]">{{ prop.name.replace('?', '') }}</span>
          <span class="text-[hsla(var(--a-base-c),var(--a-text-emphasis-light-opacity))]"> : {{ prop.type.replace(/\s*\| (undefined)$/, '') }}</span>
          <span
            v-if="prop.default !== 'unknown'"
            class="text-[hsla(var(--a-base-c),var(--a-text-emphasis-light-opacity))]"
          > = {{ prop.default }}</span>
          <div
            class="!children-[p]-m-0"
            v-html="prop.description"
          />
        </div>
      </div>

      <!-- Slots -->
      <div v-show="apiActiveTab === 'slots'">
        <div
          v-for="slot in filteredSlots"
          :key="slot.name"
          class="not-last-mb-4"
        >
          <span class="font-semibold text-[hsla(var(--a-title-c),var(--a-title-opacity))]">{{ slot.name }}</span>
          <span class="text-[hsla(var(--a-base-c),var(--a-text-emphasis-light-opacity))]"> : {{ slot.type }}</span>
          <div
            class="!children-[p]-m-0"
            v-html="slot.description"
          />
        </div>
      </div>

      <!-- Events -->
      <div v-show="apiActiveTab === 'events'">
        <div
          v-for="event in filteredEvents"
          :key="event.name"
          class="not-last-mb-4"
        >
          <span class="font-semibold text-[hsla(var(--a-title-c),var(--a-title-opacity))]">{{ event.name }}</span>
          <span class="text-[hsla(var(--a-base-c),var(--a-text-emphasis-light-opacity))]"> => {{ event.type }}</span>
          <!-- <div
            class="!children-[p]-m-0"
            v-text="event.signature"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
