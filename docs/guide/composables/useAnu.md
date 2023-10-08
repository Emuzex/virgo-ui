# `usevirgo`

`usevirgo` composable provides API for interactive with virgo.

:::card Basic

`usevirgo` provides following reactive variables:

- `themes: ConfigThemes` => Registered themes. You can modify colors & CSS variables at runtime 😍
- `activeThemeName: string` => Name of the active theme in your app
- `activeTheme: ({ name: string, theme: ThemeOptions })` => Convenient computed property to get details of active theme. Don't modify it 🙅🏻‍♂️

```ts
import { usevirgo } from 'virgo-vue';

const { themes, activeThemeName, activeTheme } = usevirgo()
```

:::

:::card Changing Active Theme

You can change the active theme at runtime by modifying the `activeThemeName` ref.

```ts{5}
import { usevirgo } from 'virgo-vue';

const { activeThemeName } = usevirgo()

activeThemeName.value = 'dark'
```

:::

:::::card Active Theme Details

Use `activeTheme` computed property to get the details of active theme.

```ts{6-7}
import { computed } from 'vue';
import { usevirgo } from 'virgo-vue';

const { activeTheme } = usevirgo()

const activeThemeName = computed(() => activeTheme.value.name)
const primaryColor = computed(() => activeTheme.value.theme.colors.primary)
```

<!-- ℹ️ We used after-demo slot to avoid unwanted mb -->
::::after-demo
:::warning
Modifying `activeTheme` computed property won't do anything so never mutate this computed property.
:::
::::

:::::

:::card Modifying Themes

You can modify any theme at runtime via `theme` ref.

```ts{8,12}
import { usevirgo } from 'virgo-vue';

const { themes } = usevirgo()

// Change primary color for all themes
for (const themeName in themes.value) {
  const theme = themes.value[themeName]
  theme.colors.primary = '235, 97.7%, 66.3%'
}

// Or you can also change the primary color for single theme
themes.value.light.colors.primary = '235, 97.7%, 66.3%'
```

:::

:::card
Related documentation:

- [Theme](/guide/features/theme.md)
- [Colors](/guide/getting-started/customization.html#color)
:::
