# Configuration
:::info
You can explore the default class list in thames page.
Don't forget to checkout [theme](/guide/features/theme.md) documentation to learn more about themes.
:::

## TypeScript

If you’re using TypeScript, the library expose a `defineVirgoConfig` function to help you get types hints:

```ts
import {virgo, defineVirgoConfig } from '@virgo-ui/vue';
import { createApp } from 'vue';

const app = createApp(App);

app.use(
	virgo,
	defineVirgoConfig({
		classes: {
			VirgoButton: {
				// …
			}
		}
	})
)
```

## Dedicated config file <coming-badge/>

You can also define your configuration in a dedicated file named `virgo.config.ts`. Virgo automatically detect it in the root of your project.

```ts
import { defineVirgoConfig } from '@virgo-ui/vue';

export default defineVirgoConfig({
	classes: {
		VirgoButton: {
			// …
		},
	},
});
```

## Available options

```ts
interface PluginOptions {
	registerComponents: boolean
	classes: PartialDeep<ComponentsClasses>
	componentAliases: Record<string, any>
	defaultProps: PartialDeep<PluginOptionDefaults>
	baseZIndex: number
}
```

- `registerComponents` - Register all components globally. Default is `true`.
- `classes` - Customize the classes of the components. You can find the configuration for every component on its own page (Default classes section).
- `componentAliases` - Register aliases for components. Default is `{}`.
- `defaultProps` - Set default props for components. You can find the prop list for every component on its own page (API section). Default is `{}`.
- `baseZIndex` - Set the base z-index for the components. Default is `2000`.

## Default props

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

```ts
// ℹ️ Virgo don't have `size` prop. This is just an example.
createApp(App)
  .use(virgo, {
    defaultProps: {
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

Using `defaultProps` you can set props defaults for any Virgo component.

### Nested Default Props

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

Virgo also provides support for nested default props. You can set it for a component inside another component.

```ts
createApp(App)
  .use(virgo, {
    defaultProps: {
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

Hold on, there is more. We're still repeating the `class` attribute.


### Class, Style & Attrs Defaults

Apart from props, Virgo also supports setting defaults for `class`, `style` and `attrs` for all the components.
We have a classes configuration too, sot when you set defaults for `class`, it will be merged with the classes configuration, you can access it in classList on key `inheritedClass'.

```ts
createApp(App)
  .use(virgo, {
	  defaultProps: {
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

```ts
createApp(App)
  .use(virgo, {
    defaultProps: {
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
When you use `useVirgo` composable, you have to use `props.propName` while accessing the props to get props configured in plugin.

Even in your template, use `props.propName` to access the props.
:::


# Component Aliases

Probably there will be case where you have to use the same component provided by the component library but with a same set of props or attributes. For example, you might use `virgo-button` component for rendering icon only button with same set of props everywhere.

```vue
<template>
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

In this type of cases, You can't use `defaultProps` because you are using the same component everywhere with same set of props and might not need this component to have these same props everywhere. In this case, you can use `componentAliases` to create aliases for your components.

```ts
// Import the component you want to set alias for.
import { VirgoButton } from '@virgo-ui/vue'

createApp(App)
  .use(virgo, {
    componentAliases: {
      // Set alias for VirgoButton component
      MyIconButton: VirgoButton,
    },
    defaultProps: {
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

:::info
Component aliases are registered globally so you don't have to import them.
:::

## Classes

### Styling components

All components behaves the same:

- You can set the CSS classes to apply globally for each component in the config
- These classes can be static or conditional, based on the component props
- Classes defined globally can be extended or overrided locally

::: tip NOTICE
The value returned by classes must be a valid [Vue class binding](https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes): Array, Object or String.
:::

The following options are valid.

### Static classes

Let’s say you want all your buttons to have a `simple-button` class.

You will find all valid classes for each component in the component's page (Default Classes section).

In `classes` use the component name as key for the list.

```ts
createApp(App)
  .use(virgo, {
	  classes: {
		  VirgoButton: {
			  button: 'simple-button',
		  }
	  }
  })
```

Now all `VirgoButton` components got `class="btn"`.

### Dynamic classes

We stay with the button example. Let’s say you want to add a `btn--disabled` class when the button is disabled.

This `button` key can also be a function. It receive _all_ the component instance props as an Object, allowing you to conditionally apply classes.

Here is an example using the `VirgoButton` `disabled` prop:

```ts
createApp(App)
  .use(virgo, {
	  classes: {
		  VirgoButton: {
			  button: ({ disabled }) => {
					return [
						'simple-button',
						{
							'disabled-button': disabled
						}
					];
				}
		  }
	  }
  })
```
The results are:

- `<VirgoButton />` will render `<button class="simple-button"></button>`
- `<VirgoButton disabled />` will render `<button class="simple-button disabled-button"></button>`

### Using variants to define multiple styles globally

::: tip
`variant` and the `bare` prop exists on all components.
:::

Being able to apply classes globally is a great way to avoid repetitions in the code.
But it’s common to have several styles for the same component.
A popular example is buttons, where there is usually a _primary_ and _secondary_ style for example.

This is the purpose of the `variant`, a prop that exists on each and every Virgo components. Its sole usage is to apply classes conditionally in the config.

The `variant` prop accepts the same type of values as the `class` binding in a Vue component:

```vue
<!-- No variant -->
<virgo-button>Label</virgo-button>

<!-- Single variant -->
<virgo-button variant="primary">Label</virgo-button>

<!-- Multiple variants separated by space -->
<virgo-button variant="primary large">Label</virgo-button>

<!-- Conditional variants (variable is a boolean) -->
<virgo-button :variant="['primary', { 'large': variable }]">Label</virgo-button>
```

The variant is then available **as a normalized object** in the config, allowing you to apply classes conditionally:

```ts
createApp(App)
	.use(virgo, {
		classes: {
			VirgoButton: {
				button: ({ disabled, variant }) => {
					return [
						'simple-button',
						{
							'disabled-button': disabled,
							'large-button': variant?.large,
							'primary-button': variant?.primary
						}
					];
				}
			}
		}
	})
```

::: warning
To simplify applying classes conditionally in the config, the `variant` prop is transformed and provided as an object of booleans to the class method, for example `{ primary: true, medium: true, large: false }`.

If no `variant` is given, the value stays `undefined`, it’s not transformed into an object.
:::

### Overriding config

In case you need more control, you can **override the global classes** by passing the `bare` prop:

```vue
<virgo-button class="free-from-global-config-button" bare>Label</virgo-button>
```

It will output only the locally defined classes:

```vue
<button class="free-from-global-config-button">Label</button>
```

