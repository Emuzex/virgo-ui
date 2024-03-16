# Customization
:::info
You can explore the default class list in thames page.
Don't forget to checkout [theme](/guide/features/theme.md) documentation to learn more about themes.
:::

### Dynamic Props

Inspired from [Vuetify](https://vuetifyjs.com/), Vrigo provides a way to configure the component props dynamically.

### Why Dynamic Props?

When you use a component from component libraries, that component has props defaults assigned to it according to common needs. For example, `color` prop is always set to `primary` because it is the most common color used in the application.

However, what about not so obvious props like `size` prop. Your design system might requires smaller components than provided by the component library. In that case you have to write `size` prop everywhere.

```vue
<template>
  <button size="sm">Submit</button>

  <button size="sm">Preview</button>

  <button size="sm">Download</button>
</template>
```

You have to repeat `size` prop everywhere which is super inconvenient and has few downsides as well (_we aren't going to discuss them here_).

### The Solution?

But what if we have a way to configure the props defaults for all the components provided by component libraries? That would be super convenient <i class="i-fluent-emoji-grinning-face"></i> and we don't have to repeat the same props everywhere.

With Virgo, you can configure the props defaults for all the components while registering the plugin.

```ts{4-8}
// ℹ️ Virgo don't have `size` prop. This is just an example.
createApp(App)
  .use(virgo, {
    propsDefaults: {
      button: {
        size: 'sm',
      },
    }
  })
```

Now, You can write your components without repeating the `size` prop and keep your code DRY.

```vue
<template>
  <button>Submit</button>

  <button>Preview</button>

  <button>Download</button>
</template>
```

Using `propsDefaults` you can set props defaults for any Virgo component.

### Nested Props Defaults

Life is not always simple and your client might need visually different component based on context. For example, you might need a text variant button inside alert and normal (fill variant) button elsewhere. Then we are back to square one. We have to repeat the `variant` prop in every alert <i class="i-fluent-emoji-expressionless-face"></i>

```vue
<template>
  <card>
    <p>You're running out of storage!</p>
    <button size="sm" class="ms-auto">Upgrade</button>
  </card>

  <card>
    <p>Critical error occurred!</p>
    <button size="sm" class="ms-auto">Check</button>
  </card>

  <card>
    <p>Payment failed!</p>
    <button size="sm" class="ms-auto">Retry</button>
  </card>
</template>
```

Virgo also provides support for nested props defaults. You can set props defaults for a component inside another component.

```ts{4-8}
createApp(App)
  .use(virgo, {
    propsDefaults: {
      card: {
        button: {
          size: 'sm',
        },
      },
    }
  })
```

Now, with new props defaults, you can write your components without repeating the `variant` prop and keep your code DRY.

```vue
<template>
	<card>
		<p>You're running out of storage!</p>
		<button class="ms-auto">Upgrade</button>
	</card>

	<card>
		<p>Critical error occurred!</p>
		<button class="ms-auto">Check</button>
	</card>

	<card>
		<p>Payment failed!</p>
		<button class="ms-auto">Retry</button>
	</card>
</template>
```

Cool right? <i class="i-fluent-emoji-smiling-face-with-sunglasses"></i>

Hold on, there is more. We're still repeating the `class` attribute. <i class="i-fluent-emoji-expressionless-face"></i>

![Breaks Keyboard GIF](https://media.tenor.com/Tp6pUkz1oR8AAAAC/breaks-keyboard.gif)

### Class, Style & Attrs Defaults

Apart from props, Virgo also supports setting defaults for `class`, `style` and `attrs` for all the components.

```ts
createApp(App)
  .use(virgo, {
    propsDefaults: {
      card: {
        button: {
          size: 'sm',
          class: 'ms-auto',
          // style: {}, /* You can also set default styles */
          // attrs: {}, /* Set default attrs, Just in case if needed */
        },
      },
    },
  })
```

Finally, we have a way to write our components without repeating the code and keep our code DRY.

```vue
<template>
  <!-- All buttons will have "ms-auto" class "light" variant -->
  <card>
    <p>You're running out of storage!</p>
    <button>Upgrade</button>
  </card>

  <card>
    <p>Critical error occurred!</p>
    <button>Check</button>
  </card>

  <card>
    <p>Payment failed!</p>
    <button>Retry</button>
  </card>
</template>
```

## Defaults for your component

You can also set defaults for your own components. For example, you can set defaults for your custom `AppBtn` component.

```ts{4-11}
createApp(App)
  .use(virgo, {
    propsDefaults: {
      AppButton: {
        class: 'uppercase',
      },
      AppCard: {
        AppButton: {
          propName: false,
        },
      }
    },
  })
```

Later in your component use `useDefaults` composable:

```vue
<script lang="ts" setup>
// other imports
import { useDefaults } from '@virgo-ui/vue'

// ❗ Make sure to use `_props` as name
const _props = defineProps<{}>() // or `withDefaults`

const { props, defaultsClass, defaultsStyle, defaultsAttrs } = useDefaults(_props)

// other code
</script>

<template>
  <div
    class="my-class"
    :class="defaultsClass"
    :style="[
      { color: 'red' },
      defaultsStyle,
    ]"
    v-bind="defaultsAttrs"
  >
    <!-- Your component content -->
    <!-- ❗ If you want to access props use `props.propName` -->
  </div>
</template>
```

:::warning
When you use `useDefaults` composable, you have to use `props.propName` while accessing the props to get props configured by defaults.

Even in your template, use `props.propName` to access the props.
:::
