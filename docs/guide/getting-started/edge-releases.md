# Edge releases

If you ever want to try the latest commits instead of waiting for the new release, You can use edge release of virgo.

We recommend using official releases always and only use this if you know what you are doing.

::::card Using edge release

Use below values for virgo packages in your project's `package.json` and run the installation again.

```json
{
  "dependencies": {
    "virgo-vue": "npm:virgo-vue-edge@latest",
    "@virgo-vue/nuxt": "npm:@virgo-vue/nuxt-edge@latest",
    "@virgo-vue/preset-theme-default": "npm:@virgo-vue/preset-theme-default-edge@latest"
  },
}
```

Congrats! You are now using unreleased changes <i class="i-fluent-emoji-partying-face"></i>

:::info
If you are using [pnpm](https://pnpm.io/) package manager and unable to get the latest changes, try removing [pnpm store](https://pnpm.io/cli/store) by running [`pnpm store prune`](https://pnpm.io/cli/store#prune) and then run `pnpm install` again.
:::

::::
