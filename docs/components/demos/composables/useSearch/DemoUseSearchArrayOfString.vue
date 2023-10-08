<script setup lang="ts">
import { useSearch } from 'virgo-vue'
import { ref } from 'vue'

const q = ref('')
const fruits = ['banana', 'apple', 'watermelon', 'orange']
const { results } = useSearch(q, fruits)
</script>

<template>
  <AInput
    v-model="q"
    :hint="JSON.stringify(results)"
  />
</template>
