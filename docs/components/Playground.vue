<script lang="ts" setup>
import { Tooltip} from '@virgo-ui/vue'
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
	count.value++
}
</script>

<template>
  <div class="container mx-auto min-h-screen">
	  <span>
		  <tooltip>
			  <div class="flex flex-col justify-center items-center space-y-3 p-3">
				  <div>count: {{ count }}</div>
				  <button class="capitalize text-white bg-purple-600 em:spacing:px-4 font-medium em:spacing:rounded-lg em:spacing:h-10 focus-visible:ring-2 ring-offset-2" @click="increment">Increment</button>
			  </div>
		  </tooltip>
		  Play here...
	  </span>
  </div>
</template>
