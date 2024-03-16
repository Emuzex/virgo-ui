<script setup lang="ts">
import { ref } from 'vue'
const name = ref('JD Solanki')
</script>

<template>
  <div class="grid-row sm:grid-cols-2 place-items-stretch">
    <virgo-input
      v-model="name"
      disabled
      label="Disabled"
    />
    <virgo-input
      v-model="name"
      readonly
      label="Readonly"
    />
  </div>
</template>
