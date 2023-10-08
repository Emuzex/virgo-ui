import { addCustomTab } from '@nuxt/devtools-kit'
import {
  addComponent,
  addImports,
  addPluginTemplate,
  defineNuxtModule,
  extendViteConfig,
  useLogger,
} from '@nuxt/kit'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import type { PresetOptions as PresetThemeDefaultOptions } from '@virgo-vue/preset-theme-default'
import { presetThemeDefault } from '@virgo-vue/preset-theme-default'
import type { PartialDeep } from 'type-fest'
import type { PluginOptions, PresetvirgoOptions } from 'virgo-vue'
import { presetIconExtraProperties, presetvirgo, components as virgoComponents, composables as virgoComposables } from 'virgo-vue'

import type { UnocssNuxtOptions } from '@unocss/nuxt'

import { name, version } from '../package.json'

const configKey = 'virgo'

/** Nuxt Module Options */
// TODO: (types) We don't get nested autocompletion for options
export interface ModuleOptions {

  /**
   * Import virgo Preset Theme Default
   * When enabled, it will automatically set up the default theme preset for virgo and Uno.
   *
   * @default true
   */
  presetThemeDefault?: PresetThemeDefaultOptions | boolean

  /**
   * Options for virgo Preset
   */
  presetvirgoOptions?: PresetvirgoOptions

  /**
   * virgo Vue Initial Theme | Source npm pkg: `virgo-vue`
   * You can pass in your own initial theme to override the default theme.
   *
   * @remarks
   * The default theme for `initialTheme` is `light`. You can also make it `dark` by setting it to `dark`.
   *
   * @default 'light'
   */
  initialTheme?: PluginOptions['initialTheme']

  /**
   * virgo Vue Themes | Source npm pkg: `virgo-vue`
   * You can pass in your own themes to override the default themes.
   *
   * @remarks
   * The default themes for `light` and `dark` are:
   *
   * ```ts
   * {
   *   light: {
   *     class: '',
   *     colors: {
   *       primary: '265, 97.7%, 66.3%',
   *       success: '94.5, 100%, 39.6%',
   *       info: '200.1, 100%, 54.3%',
   *       warning: '42.4, 100%, 50%',
   *       danger: '358.3, 100%, 64.9%',
   *     },
   *     cssVars: {},
   *   },
   *   dark: {
   *     class: 'dark',
   *     colors: {
   *       primary: '261, 73%, 66.3%',
   *       success: '94.5, 73%, 39.6%',
   *       info: '200.1, 73%, 54.3%',
   *       warning: '42.4, 73%, 50%',
   *       danger: '358.3, 73%, 64.9%',
   *     },
   *     cssVars: {},
   *   },
   * }
   * ```
   */
  themes?: PartialDeep<PluginOptions['themes']>

  componentAliases?: PluginOptions['componentAliases']

  propsDefaults?: PluginOptions['propsDefaults']
}

export default defineNuxtModule<ModuleOptions>({
  defaults: {
    presetThemeDefault: true,
  },
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  hooks: {
    'prepare:types': ({ tsConfig, references }) => {
      tsConfig.compilerOptions ||= {}
      tsConfig.compilerOptions.types ||= []
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      tsConfig.compilerOptions!.types.push('virgo-vue/volar')
      references.push({
        types: 'virgo-vue/volar',
      })
    },
  },
  setup(opts, nuxt) {
    const logger = useLogger('virgo-vue')

    // Disable module if '@unocss/nuxt' is not installed.
    if (nuxt.options.modules.includes('@unocss/nuxt') === false) {
      logger.warn('You need to install "@unocss/nuxt" to use virgo Vue. Disabling virgo-vue module.')

      return
    }

    nuxt.options.unocss = nuxt.options.unocss || {} as UnocssNuxtOptions

    // Disable unocss preflight by default.
    nuxt.options.unocss.preflight = false

    // Add default presets for virgo into the unocss options.
    nuxt.options.unocss.presets = [
      ...(nuxt.options.unocss.presets || []), // Don't override existing presets.
      presetUno(),

      // virgo Preset
      presetvirgo(opts.presetvirgoOptions),
    ]

    /*
      👉 Preset Theme Default

      Inject preset theme default into the unocss options if isn't disabled.
    */
    const isPresetThemeDefaultEnabled = opts.presetThemeDefault !== false
    if (isPresetThemeDefaultEnabled) {
      nuxt.options.unocss.presets.push(
        presetThemeDefault(
          typeof opts.presetThemeDefault === 'object'
            ? opts.presetThemeDefault
            : undefined,
        ),
      )
    }

    /*
      👉 Preset Icons

      Inject preset icons extra properties into icons preset unocss options if icons preset isn't disabled.
    */
    if (nuxt.options.unocss.icons !== false) {
      nuxt.options.unocss.presets.push(
        presetIcons(
          typeof nuxt.options.unocss.icons === 'object'
            ? nuxt.options.unocss.icons
            : {
                scale: 1.2,
                extraProperties: presetIconExtraProperties,
              },
        ),
      )
    }

    nuxt.options.unocss.include = [
      /.*\/virgo-vue\.js(.*)?$/,
      '**/*.vue',
      '**/*.md',
    ]

    // Add inline plugin template for virgo
    const pluginOptions = {
      initialTheme: opts.initialTheme,
      themes: opts.themes,

      // componentAliases: opts.componentAliases || {},
      propsDefaults: opts.propsDefaults,
    }

    addPluginTemplate({
      filename: 'virgo-vue-plugin.mjs',
      getContents: () => {
        let stringifiedPluginOptions = JSON.stringify(pluginOptions)
        let componentAliasesImportStatement = ''

        // ℹ️ Component aliases
        if (opts.componentAliases) {
          const componentAliases = opts.componentAliases || {}
          const aliasedvirgoComponentsNames = [] /* We need this adding imports */

          for (const aliasComponentName in componentAliases) {
            const sourceComponent = componentAliases[aliasComponentName]
            const sourceComponentName = sourceComponent.name || sourceComponent.__name

            if (!name)
              throw new Error(`[virgo] Component you want to create alias of must have name. Unable to resolve component ${sourceComponentName}`)

            aliasedvirgoComponentsNames.push(sourceComponentName)
            componentAliases[aliasComponentName] = sourceComponentName
          }

          // Stringify component aliases options and remove quotes from values (because values are imports)
          // https://regex101.com/r/NqMqZ4/1
          let stringifiedComponentAliases = JSON.stringify(componentAliases)
            .replace(/(?<=:)"(\w+)"/g, '$1')

          // Prepend component aliases partial option string with "componentAliases" key
          stringifiedComponentAliases = `"componentAliases":${stringifiedComponentAliases}`

          // Create stringified plugin options' replace string based on whether plugin options are empty or not
          const replaceStr = stringifiedPluginOptions === '{}' ? `${stringifiedComponentAliases}}` : `,${stringifiedComponentAliases}}`

          // Inject component aliases into plugin options
          stringifiedPluginOptions = stringifiedPluginOptions.replace(/}$/g, replaceStr)

          // Generate import statement for component aliases
          componentAliasesImportStatement = `import { ${aliasedvirgoComponentsNames.join(',')} } from 'virgo-vue'`
        }

        const lines = [
          'import { virgo } from "virgo-vue"',
          componentAliasesImportStatement,
          `export default defineNuxtPlugin(nuxtApp => {
            nuxtApp.vueApp.use(virgo, ${stringifiedPluginOptions})
          })`,
        ]

        if (isPresetThemeDefaultEnabled)
          lines.unshift('import \'@virgo-vue/preset-theme-default/dist/style.css\'')

        lines.unshift('import \'virgo-vue/dist/style.css\'')

        return lines.join('\n')
      },
    })

    Object.keys(virgoComponents).forEach(name => {
      addComponent({
        name,
        export: name,
        filePath: 'virgo-vue',
      })
    })

    // Add Auto Completions for virgo Composables
    const composablesToExclude = ['useProp']

    Object.keys(virgoComposables)
      .filter(key => key.includes('use') && !composablesToExclude.includes(key))
      .forEach(name => {
        addImports({
          name,
          from: 'virgo-vue',
        })
      })

    // Add devtools tab for virgo
    addCustomTab({
      name: 'virgo-vue',
      title: 'virgo',
      icon: 'bx:atom',
      view: {
        type: 'iframe',
        src: 'https://virgo-ui.dev/',
      },
    })

    // Fixes auto-imports for virgo Composables
    extendViteConfig(config => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.include = config.optimizeDeps.include || []
      config.optimizeDeps.include.push('virgo-vue')
    })
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    virgo?: ModuleOptions
  }
  interface NuxtOptions {
    virgo?: ModuleOptions
  }
}
