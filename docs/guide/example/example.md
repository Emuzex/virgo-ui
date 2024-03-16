<script lang="ts" setup>
import api from '@virgo-ui/vue/component-meta/tooltip.json';
</script>

# Component name <new-badge/> <coming-badge/> <update-badge/> <warn-badge/>

<!-- 👉 Basic -->
## Second level heading

Demo of a component with some description.
<demo src="../../components/demos/tooltip/DemoTooltipBasic.vue"/>

:::tip
Some tip to be shown here
:::

:::details Something
This is a detail
:::

## API

<Api title="Tooltip" :api="api"></Api>

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion).

### Keyboard Interactions

<keyboard-table :data="[
{
keys: ['Space'],
description: 'When focus is on an <code>AccordionTrigger</code> of a collapsed section, expands the section.',
},
{
keys: ['Enter'],
description: 'When focus is on an <code>AccordionTrigger</code> of a collapsed section, expands the section.',
},
{
keys: ['Tab'],
description: 'Moves focus to the next focusable element.',
},
{
keys: ['Shift + Tab'],
description: 'Moves focus to the previous focusable element.',
},
{
keys: ['ArrowDown'],
description: 'Moves focus to the next <code>AccordionTrigger</code> when <code>orientation</code> is <code>vertical</code>.',
},
{
keys: ['ArrowUp'],
description: 'Moves focus to the previous <code>AccordionTrigger</code> when <code>orientation</code> is <code>vertical</code>.',
},
{
keys: ['ArrowRight'],
description: 'Moves focus to the next <code>AccordionTrigger</code> when <code>orientation</code> is <code>horizontal</code>.',
},
{
keys: ['ArrowLeft'],
description: 'Moves focus to the previous <code>AccordionTrigger</code> when <code>orientation</code> is <code>horizontal</code>.',
},
{
keys: ['Home'],
description: 'When focus is on an <code>AccordionTrigger</code>, moves focus to the start <code>AccordionTrigger</code>.',
},
{
keys: ['End'],
description: 'When focus is on an <code>AccordionTrigger</code>, moves focus to the last <code>AccordionTrigger</code>.',
}]" />
