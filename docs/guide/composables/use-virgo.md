# useVirgo <coming-badge/>

`useVirgo` composable can access the component props, inline styles, attributes, and classList. It is used to create a component with the default configuration previously set in the plugin config.

It will automatically detect the component and provide the default configuration set in the plugin config for that component. But if you want to specify what component configuration do you need, you can pass the component name as the second argument.
```vue
<script lang="ts" setup>
// other imports
import { useVirgo } from '@virgo-ui/vue'

// ❗ Make sure to use `_props` as name
const _props = defineProps<{}>() // or `withDefaults`

const { props, inlineStyle, attributes, classList } = useVirgo(_props)
// classList comes from plugin config 'classes'
// other code
</script>

<template>
  <div
    class="my-class"
    :class="classList.componentRoot"
    :style="[
      { color: 'red' },
      inlineStyle,
    ]"
    v-bind="attributes"
  >
    <!-- Your component content -->
    <!-- ❗ If you want to access props use `props.propName` -->
  </div>
</template>
```

:::warning
When you use `useVirgo` composable, you have to use `props.propName` while accessing the props to get props configured by defaults.

Even in your template, use `props.propName` to access the props.
:::
