import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cycling4hope",
  description: "A humanitarian cycling initiative from Oslo to Damascus supporting education and school rehabilitation projects in Syria.",
  base: '/',
  locales: {
    root: {
      label: 'Norsk',
      lang: 'no-NO',
      themeConfig: {
        nav: [
          { text: 'Om prosjektet', link: '/om-prosjektet' },
          { text: 'Tidslinje', link: '/tidslinje' },
          { text: 'Presse', link: '/media' },
          { text: 'Kontakt', link: '/kontakt' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'About', link: '/en/about' },
          { text: 'Timeline', link: '/en/timeline' },
          { text: 'Media', link: '/en/media' },
          { text: 'Contact', link: '/en/contact' }
        ]
      }
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      link: '/ar/',
      themeConfig: {
        nav: [
          { text: 'عن المشروع', link: '/ar/about' },
          { text: 'الخط الزمني', link: '/ar/timeline' },
          { text: 'الإعلام', link: '/ar/media' },
          { text: 'اتصل بنا', link: '/ar/contact' }
        ]
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/assets/Logo_Transparrent.png',
      dark: '/assets/Logo_Transparrent_DarkMode.png',
      alt: 'Website logo'
    },

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
