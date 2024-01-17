<script lang="ts" setup>
import { ref } from 'vue'

const isTooltipVisible = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-12">
    <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2">
      <tooltip
        v-model="isTooltipVisible"
        text="Cotton candy"
      />

      Button
    </button>

    <div class="flex flex-wrap gap-4">
      <button
		  class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2"
		  @click="isTooltipVisible = true"
      >
        Show tooltip
      </button>
      <button
		  class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2"
		  @click="isTooltipVisible = false"
      >
        Hide tooltip
      </button>
    </div>
  </div>
</template>
