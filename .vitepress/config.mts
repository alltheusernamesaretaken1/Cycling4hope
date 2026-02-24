import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cycling4hope",
  description: "A humanitarian cycling initiative from Oslo to Damascus supporting education and school rehabilitation projects in Syria.",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/assets/Logo_Transparrent.png',
      dark: '/assets/Logo_Transparrent_DarkMode.png',
      alt: 'Website logo'
    },

    nav: [
      { text: 'Om prosjektet', link: '/om-prosjektet' },
      { text: 'Tidslinje', link: '/tidslinje' },
      { text: 'Media', link: '/media' },
      { text: 'Kontakt', link: '/kontakt' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
