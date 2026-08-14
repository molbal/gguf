import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS ? '/gguf/' : '/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'gguf',
  titleTemplate: ':title | gguf',
  description: 'Information and documentation for the gguf project.',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'gguf',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repository', link: 'https://github.com/molbal/gguf' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [{ text: 'About gguf', link: '/' }]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/molbal/gguf' }
    ],
    editLink: {
      pattern: 'https://github.com/molbal/gguf/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Built with VitePress.',
      copyright: 'Copyright © 2026 molbal'
    }
  }
})
