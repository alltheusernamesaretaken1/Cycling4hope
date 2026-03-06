<script setup>
import DefaultTheme from 'vitepress/theme'
import LangSwitch from './components/LangSwitch.vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { lang } = useData()

const t = computed(() => {
  if (lang.value === 'ar') return {
    title: 'ركوب الدراجات من أوسلو إلى دمشق',
    desc: 'مبادرة مستقلة لدعم التعليم وإعادة تأهيل المدارس في سوريا.',
    links: [
      { text: 'عن المشروع', href: '/ar/about' },
      { text: 'الخط الزمني', href: '/ar/timeline' },
      { text: 'الإعلام', href: '/ar/media' },
      { text: 'اتصل بنا', href: '/ar/contact' },
    ]
  }
  if (lang.value === 'no-NO') return {
    title: 'Sykling fra Oslo til Damaskus',
    desc: 'Et uavhengig initiativ for å støtte utdanning og skoleprosjekter i Syria.',
    links: [
      { text: 'Om prosjektet', href: '/no/om-prosjektet' },
      { text: 'Tidslinje', href: '/no/timeline' },
      { text: 'Presse', href: '/no/media' },
      { text: 'Kontakt', href: '/no/kontakt' },
    ]
  }
  return {
    title: 'Cycling from Oslo to Damascus',
    desc: 'An independent initiative to support education and school projects in Syria.',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Timeline', href: '/timeline' },
      { text: 'Media', href: '/media' },
      { text: 'Contact', href: '/contact' },
    ]
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <LangSwitch />
    </template>

    <template #layout-bottom>
      <footer class="c4h-footer">
        <div class="c4h-footer-inner">
          <div class="c4h-footer-brand">
            <h3>{{ t.title }}</h3>
            <p>{{ t.desc }}</p>
          </div>

          <div class="c4h-footer-links">
            <a v-for="link in t.links" :key="link.href" :href="link.href">{{ link.text }}</a>
          </div>
        </div>

        <div class="c4h-footer-bottom">
          © {{ new Date().getFullYear() }} Cycling4Hope
        </div>
      </footer>
    </template>
  </Layout>
</template>
