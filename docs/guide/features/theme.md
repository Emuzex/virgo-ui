# Theme <coming-badge/>

Virgo is a framework-independent package that gives you the freedom to choose
from a multitude of CSS options. Of course, we won't leave you hanging here
either; the `@virgo-ui/vue` package already includes a basic setup that you
can customize to your liking by configuring the plugin.

<br>

#### Default configs
:::details Button
<<< @/../packages/virgo-vue/src/components/button/config.ts
:::
:::details Tooltip
<<< @/../packages/virgo-vue/src/components/tooltip/config.ts
:::

<br>

Since we are big fan
of UnoCSS, these base settings are written with it in mind, and a preset has
been created for Virgo to support these (`@virgo-ui/theme-glassmorphism`).

Here are the steps to use Virgo with UnoCSS, according to our vision.

## UnoCSS

1. Add `@virgo-ui/theme-glassmorphism` and optionally your loved icons
   ::: code-group
      ```bash [pnpm]
      pnpm add @virgo-ui/theme-glassmorphism && pnpm add -D unocss @iconify-json/bx
      ```
      ```bash [yarn]
        yarn add @virgo-ui/theme-glassmorphism && yarn add -D unocss @iconify-json/bx
      ```
      ```bash [npm]
        npm i @virgo-ui/theme-glassmorphism && npm install -D unocss @iconify-json/bx
      ```
   :::

2. Add UnoCSS to `vite.config.ts`

    ```ts
    import Unocss from 'unocss/vite'

    export default {
      plugins: [
        Unocss(),
      ],
    }
    ```

3. Create the UnoCSS Config file `uno.config.ts` in the root of the project with the content below:

    ```ts
    import { presetVirgo, presetIconExtraProperties } from '@virgo-ui/vue'
    import { presetThemeDefault } from '@virgo-ui/theme-glassmorphism'
    import {
      defineConfig,
      presetIcons,
      presetUno,
    } from 'unocss'

    export default defineConfig({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.2,
          extraProperties: presetIconExtraProperties,
        }),

        // @virgo-ui/vue preset
        presetVirgo(),

        // default theme preset
        presetThemeDefault(),
      ],
      include: [/.*\/@virgo-ui_vue\.js(.*)?$/, './**/*.{vue,md,ts}'],
    })
    ```

4. Update your `main.ts` file as shown below:

    ```js{5-6,13,11-12}
    import { createApp } from 'vue'
    import App from './App.vue'
    import { virgo } from '@virgo-ui/vue'

    // UnoCSS import
    import 'uno.css'

    // virgo styles
    import '@virgo-ui/vue/dist/style.css'

    // default theme styles
    import '@virgo-ui/theme-glassmorphism/dist/style.css'

    // Using `app.use(virgo)` will register virgo plugin
    createApp(App)
      .use(virgo)
      .mount('#app')
    ```

It's done! Enjoy! 🥳
