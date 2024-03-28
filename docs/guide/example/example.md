<script lang="ts" setup>
import tooltipApi from '@virgo-ui/vue/component-meta/tooltip.json';
</script>

# Component name <new-badge/> <coming-badge/> <update-badge/> <warn-badge/>

## Default Classes

<<< @/../packages/virgo-vue/src/components/tooltip/config.ts

## Second level heading

Demo of a component with some description.
<demo src="../../components/demos/tooltip/demo-tooltip-basic.vue"/>

:::tip
Some tip to be shown here
:::

:::details Something
This is a detail
:::

## API

<api title="Tooltip" :api="tooltipApi"></api>

## Accessibility

Adheres to the [Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button).

### Keyboard Interactions

<keyboard-table :data="[
{
keys: ['Space'],
description: 'Trigger the button.',
},
{
keys: ['Enter'],
description: 'Trigger the button.',
}]" />
