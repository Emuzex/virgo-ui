const path = require('path')

module.exports = {
  title: 'Virgo UI',
  description: 'Virgo-UI is a versatile Vue3 component library built with TypeScript, offering a collection of reusable components and a unique headless mode for enhanced customization. Optimized for performance and flexibility, it\'s a developer-friendly solution for diverse project needs.',
  themeConfig: {
    repo: 'https://github.com/Emuzex/virgo-ui',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'About Virgo', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Component A', link: '/components/component-a' },
          { text: 'Component B', link: '/components/component-b' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'virgo-ui': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    }
  }
}
