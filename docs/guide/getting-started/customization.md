<script setup lang="ts">
import { useCssVar } from '@vueuse/core';
import { useVirgo } from 'virgo-vue';
import { computed } from 'vue';

const { activeTheme, themes } = useVirgo()
const vpBrandHue = useCssVar('--vp-brand-hue')
const isPrimaryChanged = computed(() => activeTheme.value.theme?.colors.primary?.startsWith('235'))

const updatePrimaryColor = () => {
  const primaryColor = activeTheme.value.theme.colors.primary
  const primaryHue = isPrimaryChanged.value ? '265' : '235'

  // To update the look & feel of whole template, update VitePress primary color as well
  vpBrandHue.value = primaryHue

  // ℹ️ Change primary color for all themes. You can also just change the primary color of current/active theme 😇
  for (const themeName in themes.value) {
    const theme = themes.value[themeName]
    theme.colors.primary = `${primaryHue}, 97.7%, 66.3%`
  }
}

const currentButtonClass = computed(() => isPrimaryChanged ? 'bg-[hsl(265,97.7%,66.3%)]' : 'bg-[hsl(235,97.7%,66.3%)]');
</script>

# Customization

:::card Color

virgo uses [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) color format to define and use colors. You can update theme colors via [themes](/guide/features/theme.md) configurations.

Below is the list of default colors. You can also [add new colors](/guide/features/theme.html#how-to-add-new-color) to the palette.

<div class="flex gap-6 flex-wrap">
    <div class="rounded-2xl shadow-2xl shadow-primary shadow-opacity-40 w-26 h-26 font-semibold grid place-items-center">Primary</div>
    <div class="rounded-2xl shadow-2xl shadow-success shadow-opacity-40 w-26 h-26 font-semibold grid place-items-center">Success</div>
    <div class="rounded-2xl shadow-2xl shadow-info shadow-opacity-40 w-26 h-26 font-semibold grid place-items-center">Info</div>
    <div class="rounded-2xl shadow-2xl shadow-warning shadow-opacity-40 w-26 h-26 font-semibold grid place-items-center">Warning</div>
    <div class="rounded-2xl shadow-2xl shadow-danger shadow-opacity-40 w-26 h-26 font-semibold grid place-items-center">Danger</div>
</div>

<ABtn class="mt-8" :class="currentButtonClass" @click="updatePrimaryColor">{{ isPrimaryChanged ? 'Reset' : 'Change' }} primary </ABtn>

Also checkout related documentation:

- [`useVirgo` composable](/guide/composables/useVirgo.md)

:::

::::card CSS variables

For the most part, virgo uses CSS variables for other stuff to providing maximum flexibility and customization on the fly. All virgo's CSS variables are prefixed with `a-`.

:::details View all CSS vars
Below is CSS vars defined for preset theme default's light theme:

<<< @/../packages/preset-theme-default/src/scss/index.scss#all-css-vars
:::

Moreover, It's recommended that you [learn](/development/contributing.html#css-vars) CSS vars naming convention for color to know when you should wrap `hsl()` or use CSS var directly.

Additionally, theme can also [add](/guide/features/theme.html#adding-theme-based-css-variables) CSS variables based on the theme.
::::

::::card Component customization

All the UI configurable styles are applied using theme preset. If you have noticed in installation section there's a preset called `presetThemeDefault`.

`presetThemeDefault` have various shortcuts that styles the component. You can override these shortcuts to change the look & feel of the component.

To override those shortcuts use `shortcutOverrides` option as shown below:

```ts
presetThemeDefault({
  shortcutOverrides: {
    btn: 'px-[0.75em] py-[0.375em] rounded-[0.375em] gap-x-[0.375em] whitespace-nowrap',
  },
})
```

Guess, how our button will look like?

:::details View answer
It's a bootstrap button 🤯

Just change the colors to Bootstrap's color and see the magic 😍
![Bootstrap buttons using virgo](/images/guide/virgo-bootstrap-btns.png)
:::

You can refer to available shortcuts in [this](https://github.com/emuzex/virgo/blob/main/packages/preset-theme-default/src/shortcuts.ts) file.

If you like this simple customization don't forget to give a **star on Github**. If you don't like it give a triple star 😉.

<a class="!hover:opacity-100 !no-underline" href="https://github.com/emuzex/virgo" rel="noopener noreferrer" target="_blank">
    <ABtn class="text-sm my-2" icon="i-bx-star" variant="light" href="https://github.com/emuzex/virgo" tag="a">
        Give a star
    </ABtn>
</a>

::::

:::info
Don't forget to checkout [theme](/guide/features/theme.md) documentation to learn more about theme customization.
:::
