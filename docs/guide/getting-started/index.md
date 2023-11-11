# Virgo

::: tip NOTICE !
[Virgo UI](https://github.com/emuzex/virgo-ui) is currently in WIP. It is not yet ready for production use. We appreciate your support and feedback as we work to make it ready for everyone.

At present, the component library still needs a large number of components. You are welcome to contribute components, and you are also welcome to make comments and suggestions!
:::

:::card What is Virgo?
Virgo is Vue framework build using UnoCSS & VueUse. It provides ready to use components with great DX & flexibility. It is built with customization in mind.

Virgo provides component styles using UnoCSS preset so components are completely unstyled. This allows you to create the UI however you like and shape components according to your design.

Don't forget to checkout the <a href="/guide/features/presets" target="_blank">features</a> section.

:::

:::card Why virgo?

- Yes, there's UnoCSS, TailwindCSS, etc but they don't provide ready to use components
- DX Focused. You will enjoy writing code 💯
- [Configure UI](/guide/base-components/typography.html#config-array) using array instead of writing component's markup again to override
- It is for lazy people by a lazy person
- I co-authored premium templates such as [Vuexy](https://themeforest.net/item/vuexy-vuejs-html-laravel-admin-dashboard-template/23328599), [Materio](https://themeselection.com/item/materio-vuetify-vuejs-admin-template), etc so you can expect neat & lovable UI from Virgo.
- Thanks to UnoCSS, VueUse, etc You can now build your desired UI  & functionalities in no time using battle tested features.
- Customization is a piece of cake with Virgo. It is as simple as overriding object 🤯

:::

:::card Motivation

I work at [ThemeSelection](https://themeselection.com) and for a couple of times I had to build small Vue projects that required UI flexibility. I couldn't use Bootstrap because customization is not straight forward compared to frameworks like UnoCSS, WindiCSS & TailwindCSS.

Then there's a man I really look up to by the name of [@antfu](https://github.com/antfu) who is a great inspiration to me. He has built great tools for the Vue ecosystem and I used them in all of my Vue projects. Now the issue at hand was that setup and components had to be repeated in each project, and there was no component library based on frameworks like UnoCSS to offer components for rapidly and sufficiently constructing UI.

Hence, I created this UI lib which provides ready to use beautiful components with utilities to build UI quickly.

### Why not TailwindCSS

You probably didn't read the UnoCSS [README](https://github.com/unocss/unocss#readme).

### Why dependencies

Virgo is based on [UnoCSS](https://github.com/unocss/unocss), [VueUse](https://vueuse.org/) & [Floating UI](https://floating-ui.com/). Virgo is dependent on these dependencies because there is a saying that goes, "_Don't reinvent the wheel_."

:::

# Onu UI



## Introduction

Onu UI is a Vue.js based [UnoCSS](https://github.com/unocss/unocss) UI library that allows you to make beautiful websites.

It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

Onu UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

The component library is written with the latest [Vue3 setup script](https://vuejs.org/guide/typescript/composition-api.html), full of [Typescript](https://www.typescriptlang.org/), and uses [Vite](https://vitejs.dev/) and [Tsup](https://github.com/egoist/tsup) to package and build the component library. In addition, we also embrace the latest front-end ecological cutting-edge technology, thanks to [VueUse](https://vueuse.org/), and the huge Vite plugin ecosystem.

To install, please see [Installation](./install.md).


## Features

- 🌈 **Components Design** - Onu provides neat & beautiful crafted UI components.
- 🔥 **On demand Import**  - Provide resolver to automatically import only used components.
- 🎉 **Typescript Supported** - Support TypeScript & type checked & type inference.
- 💎 **[Iconify Icons](https://icones.js.org/)** - Use any icon from the library you love.
- 🍬 **[CSS Preset](https://github.com/onu-ui/onu-ui/tree/main/packages/preset)** - Has UnoCSS preset package to use, rendered UI easily.
- ⚙️ **Theme Config** - Use attribute mode like unocss to design. Support theme config to customize theme.


## Online Playground

<a target="_blank" href="https://codesandbox.io/p/github/yzh990918/onu-starter/main">
<img src="https://img.shields.io/badge/Try%20On-CodeSandbox-hsl(265%2C97%25%2C66%25)?style=for-the-badge&logo=codesandbox" height="35" />
</a><br/>

<a target="_blank"  href="https://stackblitz.com/edit/onu-starter">
<img src="https://img.shields.io/badge/Try%20on%20Stackblitz-1877F2?style=for-the-badge&logo=stackblitz&logoColor=white" height="35" />
</a>

## Best Practice

- [onu-starter](https://github.com/yzh990918/onu-starter)

More coming soon... welcome PR.

## Environment

All components supported in modern browsers, support of neerly two or three versions.

| [![IE / Edge](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386595-58e6efd6-bd29-4671-bf28-e289dc8911e2.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386577-a25d20a4-c8e3-4c57-86bc-a1c853264457.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386568-5c1d71d1-732d-41b6-a20c-9900d1bcaa7a.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386580-1a0870a7-0483-4c92-84ee-5afcd1da92d6.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386571-49e31a0f-d0e4-4efc-8808-a5eedd4101fe.png)](http://godban.github.io/browsers-support-badges/) Opera | [![Electron](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598389214-b4742a92-cfe7-4730-aefb-f2fb5fd046f3.png)](http://godban.github.io/browsers-support-badges/) Electron |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| last 2 versions                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |


## Latest Version

[![npm version](https://img.shields.io/github/package-json/v/onu-ui/onu-ui)](https://www.npmjs.com/package/onu-ui)

You can subscribe to this feed for new version notifications: https://github.com/onu-ui/onu-ui/releases

## Discussions

Since `OnuUI` is under intensive development, we need your valuable comments and feature requirements of the component

Welcome to contact us at [Discussions](https://github.com/onu-ui/onu-ui/discussions) or [Issues](https://github.com/onu-ui/onu-ui/issues/new/choose), we will be more than happy to reply to your message.

If you submit any bugs, please use the [OnuUI Playground](https://onu.zyob.top/play/) to provide a minimal reproduction.


## Contributing

Developers interested in contributing should read the [Code of Conduct](https://github.com/onu-ui/onu-ui/blob/main/CODE_OF_CONDUCT.md) and the [Contributing Guide](https://github.com/onu-ui/onu-ui/blob/main/CONTRIBUTING.md).

Thank you to all the people who already contributed to Onu UI!

<a href="https://github.com/onu-ui/onu-ui/graphs/contributors"><img src="https://contributors.nn.ci/api?repo=onu-ui/onu-ui" /></a>
