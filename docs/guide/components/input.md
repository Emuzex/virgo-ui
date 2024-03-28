<script lang="ts" setup>
import inputApi from '@virgo-ui/vue/component-meta/virgo-input.json';
</script>

# Input

## Default classes
Base Input (wrapper of Virgo Input)

<<< @/../packages/virgo-vue/src/components/base-input/config.ts

Virgo Input

<<< @/../packages/virgo-vue/src/components/input/config.ts

<!-- 👉 Basic -->
## Basic

You can use `virgo-input` component to render basic input.

<demo src="../../components/demos/input/demo-input-basic.vue"/>

## Placeholder

You can use `placeholder` attribute to add placeholder to the input.

<demo src="../../components/demos/input/demo-input-placeholder.vue"/>

## Label

You can use `label` prop to add label to the input.

For maximum flexibility you can use `label` slot.

<demo src="../../components/demos/input/demo-input-label.vue"/>

:::warning
When you use **label slot**, Note that label's `for` attribute needs to prefix the `virgo-input-` when binding it to input's `id` attribute.
:::

:::tip
`virgo-input` built on top of `base-input` base component. Hence, This demo also applies to all other inherited component.
:::

## Hint

You can use `hint` prop to add hint to the input.

<demo src="../../components/demos/input/demo-input-hint.vue"/>

## Icons

You can use various icon location prop to add icon to the input.

<demo src="../../components/demos/input/demo-input-icons.vue"/>


## Types

You can use `type` attribute to add input type.

<demo src="../../components/demos/input/demo-input-types.vue"/>

## States

You can use `readonly` prop to make input read only.

Use `disabled` prop to make input disabled.

<demo src="../../components/demos/input/demo-input-states.vue"/>
:::

## Validation

Virgo do not provide any validation mechanism at the moment as it assume it's better handled by third-party libraries like [VeeValidate](https://vee-validate.logaretm.com/)

<demo src="../../components/demos/input/demo-input-validation.vue"/>

## API

<api title="Virgo Input" :api="inputApi"></Api>
