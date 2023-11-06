# Nuxt

:::card Installation

1. Instead of installing `@virgo-ui/vue` package, install `@virgo-ui/nuxt`.

    ```bash
    pnpm add @virgo-ui/nuxt && pnpm add -D @unocss/nuxt
    ```

    ```bash
    yarn add @virgo-ui/nuxt && yarn add -D @unocss/nuxt
    ```

    ```bash
    npm install @virgo-ui/nuxt && npm install -D @unocss/nuxt
    ```

2. Add Anu & UnoCSS in the nuxt modules array in the `nuxt.config.ts` file as shown below:

    ```ts
    import { defineNuxtConfig } from 'nuxt/config'

    export default defineNuxtConfig({
      modules: ['@virgo-ui/nuxt', '@unocss/nuxt'],
    })
    ```

3. Add UnoCSS config file `uno.config.ts` with the configuration shown below:

    ```ts
    import { defineConfig } from 'unocss'

    export default defineConfig({
      include: [/.*\/@virgo-ui_vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
    })
    ```

It's done, Let's try the button component 🥳

```vue
<template>
  <ABtn>Primary</ABtn>
</template>
```

:::

::::card Configuration

To configure Anu, You can use `anu` property in `nuxt.config.ts` file.

```ts{5-7}
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@virgo-ui/nuxt', '@unocss/nuxt'],
  anu: {
    // options
  },
})
```

You'll get autocompletion for all the available options.

:::warning
If you set `presets: []` in `uno.config.ts` then UnoCSS will disable all auto injected presets and you manually have to inject `virgo-vue` preset & others mentioned in [vue integration](/guide/getting-started/integrations/vue.html#usage) guide.
:::

:::info
When you update icons preset options in `uno.config.ts`, You'll discard auto injected option by Anu. You have to manually add icons preset options as mentioned in [vue integration](/guide/getting-started/integrations/vue.html#usage) guide.
:::

::::

:::card Volar Support

If you are using nuxt, Anu's module auto inject types for you you don't need to do anything.

Happy coding 🙌🏻

:::
