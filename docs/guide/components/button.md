<script lang="ts" setup>
import api from '@virgo-ui/vue/component-meta/virgo-button.json';
</script>

# Button

## Icons

You can use `icon` prop to render icon in button.

Use `append-icon` prop to render icon after default slot.


<demo src="../../components/demos/button/DemoButtonIcons.vue"/>

:::details You can also use default slot to render icon.

```vue{3}
<template>
  <virgo-button>
    <i class="i-bx-star" />
    <span>Primary</span>
  </virgo-button>
</template>
```
:::

## Block

Add `w-full` class to make block button.

<demo src="../../components/demos/button/DemoButtonBlock.vue"/>

## Icon Only

Use `icon-only` prop to render icon with icon only button.

<demo src="../../components/demos/button/DemoButtonIconOnly.vue"/>

## Loading

You can use the `loading` prop to inform about a background process or asynchronous operation.
This property will display a `Loading` component (by default) instead of the icon and/or label of the button.

<demo src="../../components/demos/button/DemoButtonLoading.vue"/>

## API

<Api title="Button" :api="api"></Api>
