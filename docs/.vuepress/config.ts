import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
    base: '/bootstrap-vue-3/',
    title: 'BootstrapVue 3',
    head: [['link', { rel: 'icon', href: '/bootstrap-vue-3/favicon.ico' }]],
    themeConfig: {
      logo: '/logo.png',
      repo: 'https://github.com/cdmoro/bootstrap-vue-3',
      editLink: true,
      lastUpdated: true,
      navbar: [
        { text: 'Home', link: '/' },
        { text: 'Docs', link: '/getting-started/' },
        { text: 'Components', link: '/components/' },
      ],
      sidebar: {
        '/components/': [
          {
            text: 'Components',
            children: [
              './Badge.md',
              // './InputGroup.md'
            ]
          }
        ]
      }
    }
})