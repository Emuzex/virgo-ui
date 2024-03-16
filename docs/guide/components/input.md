<script lang="ts" setup>
import api from '@virgo-ui/vue/component-meta/virgo-input.json';
</script>

# Input

<!-- 👉 Basic -->
## Basic

You can use `virgo-input` component to render basic input.

<demo src="../../components/demos/input/DemoInputBasic.vue"/>

## Placeholder

You can use `placeholder` attribute to add placeholder to the input.

<demo src="../../components/demos/input/DemoInputPlaceholder.vue"/>

## Label

You can use `label` prop to add label to the input.

For maximum flexibility you can use `label` slot.

<demo src="../../components/demos/input/DemoInputLabel.vue"/>

:::warning
When you use **label slot**, Note that label's `for` attribute needs to prefix the `virgo-input-` when binding it to input's `id` attribute.
:::

## Hint

You can use `hint` prop to add hint to the input.

<demo src="../../components/demos/input/DemoInputHint.vue"/>

## Icons

You can use various icon location prop to add icon to the input.

<demo src="../../components/demos/input/DemoInputIcons.vue"/>

## Sizing

You can use font-size utility to adjust the size of input.

<demo src="../../components/demos/input/DemoInputSizing.vue"/>

:::tip
Like `input`, `ASelect` & `ATextarea` also built on top of `ABaseInput` base component. Hence, This demo also applies to `ASelect` & `ATextarea`.
:::

## Roundness

You can adjust input roundness by providing border-radius utilities to `input-wrapper-classes` prop.

<demo src="../../components/demos/input/DemoInputRoundness.vue"/>

:::tip
Like `input`, `ASelect` & `ATextarea` also built on top of `ABaseInput` base component. Hence, This demo also applies to `ASelect` & `ATextarea`.
:::

## Types

You can use `type` attribute to add input type.

<demo src="../../components/demos/input/DemoInputTypes.vue"/>

## States

You can use `readonly` prop to make input read only.

Use `disabled` prop to make input disabled.

<demo src="../../components/demos/input/DemoInputStates.vue"/>
:::

## Validation

Virgo do not provide any validation mechanism at the moment as it assume it's better handled by third-party libraries like [VeeValidate](https://vee-validate.logaretm.com/)

<demo src="../../components/demos/input/DemoInputValidation.vue"/>

## API

<Api title="Virgo Input" :api="api"></Api>
