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
  <virgo-button size="sm">Submit</virgo-button>

  <virgo-button size="sm">Preview</virgo-button>

  <virgo-button size="sm">Download</virgo-button>
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
      VirgoButton: {
        size: 'sm',
      },
    }
  })
```

Now, You can write your components without repeating the `size` prop and keep your code DRY.

```vue
<template>
  <virgo-button>Submit</virgo-button>

  <virgo-button>Preview</virgo-button>

  <virgo-button>Download</virgo-button>
</template>
```

Using `propsDefaults` you can set props defaults for any Virgo component.

### Nested Props Defaults

Life's complexities often extend to the need for varying visual components depending on the situation.
For instance, within a `card` component, a `size` variant of a `virgo-button` may be necessary, whereas in other contexts,
a standard (fill variant) `virgo-button` is more suitable. This scenario leads us to a familiar challenge. We find ourselves
needing to specify the `size` property within every `card` component repeatedly.
```vue
<template>
  <card>
    <p>You're running out of storage!</p>
    <virgo-button size="sm" class="ms-auto">Upgrade</virgo-button>
  </card>

  <card>
    <p>Critical error occurred!</p>
    <virgo-button size="sm" class="ms-auto">Check</virgo-button>
  </card>

  <card>
    <p>Payment failed!</p>
    <virgo-button size="sm" class="ms-auto">Retry</virgo-button>
  </card>
</template>
```

Virgo also provides support for nested props defaults. You can set props defaults for a component inside another component.

```ts{4-8}
createApp(App)
  .use(virgo, {
    propsDefaults: {
      Card: {
        VirgoButton: {
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
		<virgo-button class="ms-auto">Upgrade</virgo-button>
	</card>

	<card>
		<p>Critical error occurred!</p>
		<virgo-button class="ms-auto">Check</virgo-button>
	</card>

	<card>
		<p>Payment failed!</p>
		<virgo-button class="ms-auto">Retry</virgo-button>
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
      Card: {
        VirgoButton: {
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
  <!-- All virgo-buttons will have "ms-auto" class "light" variant -->
  <card>
    <p>You're running out of storage!</p>
    <virgo-button>Upgrade</virgo-button>
  </card>

  <card>
    <p>Critical error occurred!</p>
    <virgo-button>Check</virgo-button>
  </card>

  <card>
    <p>Payment failed!</p>
    <virgo-button>Retry</virgo-button>
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

Later in your component use `useVirgo` composable:

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


# Component Aliases

Probably there will be case where you have to use the same component provided by the component library but with a same set of props or attributes. For example, you might use `virgo-button` component for rendering icon only button with same set of props everywhere.

```vue
<template>
  <!-- We're repeating icon-only & variant="text" prop -->
  <virgo-button
    icon="i-bx-cloud"
    icon-only
  />

  <virgo-button
    icon="i-bx-trash"
    icon-only
  />

  <virgo-button
    icon="i-bx-send"
    icon-only
  />
</template>
```

In this type of cases, You can't use `propsDefaults` because you are using the same component everywhere with same set of props and might not need this component to have these same props everywhere. In this case, you can use `componentAliases` to create aliases for your components.

```ts{6-16}
// Import the component you want to set alias for
import { VirgoButton } from '@virgo-ui/vue'

createApp(App)
  .use(virgo, {
    componentAliases: {
      // Set alias for VirgoButton component
      MyIconButton: VirgoButton,
    },
    propsDefaults: {
      // Set props defaults for IconBtn component
      MyIconButton: {
        iconOnly: true,
      },
    }
  })
```

Now, you can use `MyIconButton` component everywhere in your app and it will have the same set of props.

```vue
<template>
  <my-icon-button icon="i-bx-cloud" />

  <my-icon-button icon="i-bx-trash" />

  <my-icon-button icon="i-bx-send" />
</template>
```

I guess, You're now convinced that Virgo is the best way to use component libraries in Vue. So, what are you waiting for? Go ahead and try it out.

:::info
Component aliases are registered globally so you don't have to import them.
:::
