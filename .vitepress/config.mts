import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cycling4hope",
  description: "A humanitarian cycling initiative from Oslo to Damascus supporting education and school rehabilitation projects in Syria.",
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/Logo_Thumbnail.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/Logo_Thumbnail.png' }],
    ['meta', { property: 'og:image', content: '/assets/Logo_Thumbnail.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/assets/Logo_Thumbnail.png' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'About the project', link: '/about' },
          { text: 'Timeline', link: '/timeline' },
          { text: 'Media', link: '/media' },
          { text: 'Contact', link: '/contact' },
          { text: 'One-pager', link: '/onepager' }
        ]
      }
    },
    no: {
      label: 'Norsk',
      lang: 'no-NO',
      link: '/no/',
      themeConfig: {
        nav: [
          { text: 'Om prosjektet', link: '/no/om-prosjektet' },
          { text: 'Tidslinje', link: '/no/timeline' },
          { text: 'Presse', link: '/no/media' },
          { text: 'Kontakt', link: '/no/kontakt' },
          { text: 'One-pager', link: '/no/onepager' }
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
          { text: 'اتصل بنا', link: '/ar/contact' },
          { text: 'ملخص المشروع', link: '/ar/onepager' }
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

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
