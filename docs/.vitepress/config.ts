import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS ? '/gguf/' : '/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'molbal',
  titleTemplate: ':title | GGUF Diffusion infopage',
  description:
    'GGUF quantization, open-source diffusion tooling, model registries, and ComfyUI workflows by molbal.',
  lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: base + 'gguf-diffusion-icon.png' }],
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-6RHBBPS3J5' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6RHBBPS3J5');`
      ]
    ],
    themeConfig: {
    siteTitle: 'GGUF Diffusion',
    logo: '/gguf-diffusion-icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started/' },
      { text: 'Custom nodes', link: 'https://github.com/molbal/ComfyUI-GGUF' },
      { text: 'Models', link: '/models/' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [{ text: 'Introduction', link: '/getting-started/' }]
      },
      {
        text: 'Ecosystem and Tooling',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/ecosystem/' },
          { text: 'Quant Formats', link: '/ecosystem/quant-formats' },
          { text: 'Quantizing Models', link: '/ecosystem/quantizing-models' }
        ]
      },
      {
        text: 'Models Registry',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/models/' },
          { text: 'MiniMax Music 3', link: '/models/minimax-music3' },
          { text: 'MiniMax H3 Turbo', link: '/models/minimax-h3-turbo' },
          { text: 'LTX 2.5', link: '/models/ltx-2-5' },
          { text: 'MiniMax H3', link: '/models/minimax-h3' },
          { text: 'Krea 2', link: '/models/krea2' },
          { text: 'Ideogram 4', link: '/models/ideogram-4' }
        ]
      },
      {
        text: 'Workflows',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/workflows/' },
          { text: 'Text to Image', link: '/workflows/text-to-image' },
          { text: 'Image Edit', link: '/workflows/image-edit' },
          { text: 'Text to Video', link: '/workflows/text-to-video' },
          { text: 'Multimodal to Video', link: '/workflows/multimodal-to-video' },
          { text: 'Text to Sound', link: '/workflows/text-to-sound' }
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Community and Support', link: '/community/' },
          { text: 'Social Profiles', link: '/community/socials' },
          { text: 'Books', link: '/community/books' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/molbal/gguf' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>'
        },
        link: 'https://www.linkedin.com/in/balint-molnar/',
        ariaLabel: 'LinkedIn'
      }
    ],
    editLink: {
      pattern: 'https://github.com/molbal/gguf/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'GGUF quantization and open-source diffusion tooling.',
      copyright: 'Copyright © 2026 molbal'
    }
  }
})
