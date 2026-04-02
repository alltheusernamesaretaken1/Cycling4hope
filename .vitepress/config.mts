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
          { text: 'Donate', link: 'https://molhamteam.com/en/campaigns/905' },
          { text: 'About the project', link: '/about' },
          { text: 'Timeline', link: '/timeline' },
          { text: 'Media', link: '/media' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    },
    no: {
      label: 'Norsk',
      lang: 'no-NO',
      link: '/no/',
      themeConfig: {
        nav: [
          { text: 'Doner', link: 'https://molhamteam.com/campaigns/905' },
          { text: 'Om prosjektet', link: '/no/om-prosjektet' },
          { text: 'Tidslinje', link: '/no/timeline' },
          { text: 'Presse', link: '/no/media' },
          { text: 'Kontakt', link: '/no/kontakt' }
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
          { text: 'تبرع', link: 'https://molhamteam.com/campaigns/905' },
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

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@eastwest-0?si=QyYIbhFK4JzJD6UH' },
      { icon: 'instagram', link: 'https://www.instagram.com/alaa_sami8/' }
    ]
  },
})
