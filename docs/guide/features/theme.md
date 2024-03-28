# Theme <coming-badge/>

Virgo is a framework-independent package that gives you the freedom to choose
from a multitude of CSS options. Of course, we won't leave you hanging here
either; the `@virgo-ui/vue` package already includes a basic setup that you
can customize to your liking by configuring the plugin.

Since we are big fan
of UnoCSS, these base settings are written with it in mind, and a default theme has
been created for Virgo to support these.

Here are the steps to use Virgo with UnoCSS, according to our vision.

## UnoCSS

1. Add 'unocss', '@virgo-ui/theme-base' and optionally your loved icons
   ::: code-group
      ```bash [pnpm]
       pnpm add -D unocss @virgo-ui/theme-base @iconify-json/bx
      ```
      ```bash [yarn]
        yarn add -D unocss @virgo-ui/theme-base @iconify-json/bx
      ```
      ```bash [npm]
        npm install -D unocss @virgo-ui/theme-base @iconify-json/bx
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
    import { presetVirgo, presetIconExtraProperties } from '@virgo-ui/theme-base'
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
        presetVirgo()
      ],
      include: [/.*\/@virgo-ui_vue\.js(.*)?$/, './**/*.{vue,md,ts}'],
    })
    ```

4. Update your `main.ts` file as shown below:

    ```js{5-6,13,11-12}
    import { createApp } from 'vue'
    import App from './App.vue'
    import { virgo } from '@virgo-ui/vue'
    import { themeBase } from '@virgo-ui/theme-base'

    // UnoCSS import
    import 'uno.css'

    // virgo styles, only includes transitions and a scroll-lock style
    import '@virgo-ui/vue/dist/style.css'

   	// virgo default theme style
    import '@virgo-ui/theme-base/dist/style.css'

    // Using `app.use(virgo)` will register virgo plugin
    createApp(App)
      .use(virgo, themeBase())
      .mount('#app')
    ```

## Craft your theme

See in the [Configuration](/guide/getting-started/configuration.html) section how to craft your own theme.
