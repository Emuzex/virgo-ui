# Installation

## Install packages

1. Add `@virgo-ui/vue` and its supporting libraries

    ::: code-group
      ```bash [pnpm]
   pnpm add @virgo-ui/vue
      ```
      ```bash [yarn]
   yarn add @virgo-ui/vue
      ```
      ```bash [npm]
   npm i @virgo-ui/vue
      ```
    :::

2. Update your `main.ts` file as shown below:

    ```js{3,5-6,8,10}
    import { createApp } from 'vue'
    import App from './App.vue'
    import { virgo } from '@virgo-ui/vue'

    // virgo styles
    import '@virgo-ui/vue/dist/style.css'

    // Using `app.use(virgo)` will register virgo plugin
    createApp(App)
      .use(virgo)
      .mount('#app')
    ```

It's done! 🥳

Now, Just refer to the component in your vue files:

```vue
<template>
    <virgo-button>
        <tooltip text="Hello!" />
        Hover Over Me
    </virgo-button>
</template>
```

<em class="block mt-12 mb-10">Probably you might not want to globally register the components. You can also follow the approaches below:</em>

### Tree Shaking

You can also follow À la carte fashion if you don't want to register all the components globally.

1. Set `registerComponents` option to `false` while registering virgo plugin.

    ```diff
      import { virgo } from '@virgo-ui/vue'

      createApp(App)
    -   .use(virgo)
    +   .use(virgo, { registerComponents: false })
        .mount('#app')
    ```

2. Now import the components individually from `@virgo-ui/vue`

    ```vue
    <script setup>
    import { Tooltip } from '@virgo-ui/vue'
    </script>

    <template>
      <virgo-button>
         <tooltip text="Hello!" />
         Hover Over Me
      </virgo-button>
    </template>
    ```

### Auto importing components w/ Tree shaking

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) lets you auto import components on demand. With this you can omit import statement and still get benefits of tree shaking.

1. Make sure to set `registerComponents` to `false` in the `main.ts` file if you haven't

    ```diff
      import { virgo } from '@virgo-ui/vue'

      createApp(App)
    -   .use(virgo)
    +   .use(virgo, { registerComponents: false })
        .mount('#app')
    ```

2. Install unplugin-vue-components:

    ::: code-group
      ```bash [pnpm]
      pnpm add -D unplugin-vue-components
      ```
      ```bash [yarn]
         yarn add -D unplugin-vue-components
      ```
      ```bash [npm]
       npm i -D unplugin-vue-components
     ```
    :::

3. Add the following in `vite.config.ts`:

    ```js
    // other imports
    import Components from 'unplugin-vue-components/vite'
    import { VirgoComponentResolver } from '@virgo-ui/vue'

    export default defineConfig({
      plugins: [
        // other plugins
        Components({
          resolvers: [
            VirgoComponentResolver()
          ]
        }),
      ],

      // other config
    })
    ```

4. Now just use the component and it will be auto imported on demand 🤯

    ```vue
    <template>
      <virgo-button>
         <tooltip text="Hello!" />
     	 Hover Over Me
      </virgo-button>
    </template>
    ```

## Volar Support

If you are using [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), you can specify global component types by adding the configuration below in your [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig).

```json
{
  "compilerOptions": {
    // ...
    "types": ["@virgo-vue/vue/volar"]
  }
}
```

If you have a typescript project, you will have to configure the above in the `tsconfig.json` file.

That's it, enjoy the autocompletion 🥳

