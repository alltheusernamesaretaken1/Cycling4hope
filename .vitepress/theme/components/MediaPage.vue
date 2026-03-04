<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const ui = computed(() => {
  if (lang.value === 'ar') {
    return {
      heading: 'الإعلام والصحافة',
      intro: 'تغطية إعلامية نرويجية ودولية لقصة المشروع والسياق الإنساني المحيط به.',
      sectionNorwegian: 'وسائل الإعلام النرويجية',
      sectionInternational: 'وسائل الإعلام الدولية',
      sectionResearch: 'البحث والأكاديميا',
      readMore: 'اقرأ المقال',
      listenEpisode: 'استمع إلى الحلقة',
      watchVideo: 'شاهد الفيديو',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      heading: 'Media & Presseklipp',
      intro: 'Norsk og internasjonal mediedekning av prosjektets bakgrunn og den humanitære situasjonen i Syria.',
      sectionNorwegian: 'Norske medier',
      sectionInternational: 'Internasjonale medier',
      sectionResearch: 'Forskning & akademia',
      readMore: 'Les artikkelen',
      listenEpisode: 'Lytt til episoden',
      watchVideo: 'Se video',
    }
  }
  return {
    heading: 'Media & Press',
    intro: 'Norwegian and international press coverage of the project background and the humanitarian situation in Syria.',
    sectionNorwegian: 'Norwegian media',
    sectionInternational: 'International media',
    sectionResearch: 'Research & academia',
    readMore: 'Read article',
    listenEpisode: 'Listen to episode',
    watchVideo: 'Watch video',
  }
})

const norwegianItems = [
  {
    source: 'BT',
    sourceFull: 'Bergens Tidende',
    domain: 'bt.no',
    type: 'Reportasje',
    date: '12. desember 2024',
    title: 'Syria: Alaa Sami gjenforenes med familien etter 13 år',
    desc: 'Søndag falt Assad, og jubelen fylte gatene. Allerede mandag morgen krysset Alaa Sami grensen og satte føttene i Damaskus for første gang på 13 år.',
    url: 'https://www.bt.no/utenriks/i/vg8PLj/syria-alaa-sami-gjenforenes-med-familien-etter-13-aar',
    linkKey: 'readMore',
    image: '/assets/media/bt_alaa_sami.jpg',
  },
  {
    source: 'NRK',
    sourceFull: 'NRK Buskerud',
    domain: 'nrk.no',
    type: 'Nyheter',
    date: 'Desember 2024',
    title: 'Politikerne diskuterer retur av syriske flyktninger etter Assad-regimets fall i Syria',
    desc: 'Norske politikere diskuterer konsekvensene av Assads fall og hva det betyr for syriske flyktninger i Norge.',
    url: 'https://www.nrk.no/buskerud/politikerne-diskuterer-retur-av-syriske-flyktninger-etter-assad-regimets-fall-i-syria-1.17174957',
    linkKey: 'readMore',
    image: '/assets/media/nrk_flyktninger.jpg',
  },
  {
    source: 'PRIO',
    sourceFull: 'Peace Research Institute Oslo',
    domain: 'prio.org',
    type: 'Podkast',
    date: 'Desember 2024',
    title: 'What\'s Next for Syrian Refugees After Assad\'s Fall?',
    desc: 'Alaa Same deler sin personlige historie som syrisk flyktning i Norge – og reaksjonen da han fikk vite at regimet som styrte hjemlandet hans i tiår, endelig hadde falt.',
    url: 'https://www.prio.org/podcasts/prios-peace-in-a-pod/105',
    linkKey: 'listenEpisode',
    image: '/assets/media/prio_podcast.jpg',
  },
]

const internationalItems = [
  {
    source: 'WSJ',
    sourceFull: 'The Wall Street Journal',
    domain: 'wsj.com',
    type: 'Video',
    date: 'Desember 2024',
    title: 'Thousands of Syrians Gather for First Friday Prayers Since Fall of Assad',
    desc: 'Thousands of Syrians gathered in Damascus for the first Friday prayers since the fall of Bashar al-Assad\'s government, marking a historic moment of transition for the country.',
    url: 'https://www.wsj.com/video/thousands-of-syrians-gather-for-first-friday-prayers-since-fall-of-assad/EBD8AE74-8CB6-4EC4-8C7C-D6F85FD4FBF7',
    linkKey: 'watchVideo',
    image: '/assets/media/wsj_friday_prayers.jpg',
  },
]
</script>

<template>
  <main class="c4h-media">

    <!-- ── Hero ── -->
    <section class="c4h-media-hero">
      <h1>{{ ui.heading }}</h1>
      <div class="c4h-media-hero-bar"></div>
      <p class="c4h-media-intro">{{ ui.intro }}</p>
    </section>

    <!-- ── Norwegian media ── -->
    <section class="c4h-media-section">
      <div class="c4h-media-section-head">
        <h2>{{ ui.sectionNorwegian }}</h2>
        <span class="c4h-media-count">{{ norwegianItems.length }}</span>
      </div>
      <div class="c4h-media-list">
        <a
          v-for="item in norwegianItems"
          :key="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="c4h-media-item"
        >
          <img v-if="item.image" :src="item.image" :alt="item.title" class="c4h-media-item-thumb" />
          <div class="c4h-media-item-body">
            <div class="c4h-media-item-meta">
              <span class="c4h-media-item-source-label">
                <img
                  :src="`https://www.google.com/s2/favicons?domain=${item.domain}&sz=16`"
                  class="c4h-media-item-favicon"
                  :alt="item.sourceFull"
                />
                {{ item.sourceFull }}
              </span>
              <span class="c4h-media-item-arrow">↗</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <span class="c4h-media-item-link">{{ ui[item.linkKey] }}</span>
          </div>
        </a>
      </div>
    </section>

    <!-- ── International media ── -->
    <section class="c4h-media-section">
      <div class="c4h-media-section-head">
        <h2>{{ ui.sectionInternational }}</h2>
        <span class="c4h-media-count">{{ internationalItems.length }}</span>
      </div>
      <div class="c4h-media-list">
        <a
          v-for="item in internationalItems"
          :key="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="c4h-media-item c4h-media-item-intl"
        >
          <img v-if="item.image" :src="item.image" :alt="item.title" class="c4h-media-item-thumb" />
          <div class="c4h-media-item-body">
            <div class="c4h-media-item-meta">
              <span class="c4h-media-item-source-label">
                <img
                  :src="`https://www.google.com/s2/favicons?domain=${item.domain}&sz=16`"
                  class="c4h-media-item-favicon"
                  :alt="item.sourceFull"
                />
                {{ item.sourceFull }}
              </span>
              <span class="c4h-media-item-arrow">↗</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <span class="c4h-media-item-link">{{ ui[item.linkKey] }}</span>
          </div>
        </a>
      </div>
    </section>

  </main>
</template>
