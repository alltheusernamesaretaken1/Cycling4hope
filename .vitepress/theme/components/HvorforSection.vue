<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const t = computed(() => {
  if (lang.value === 'ar') {
    return {
      heading: 'لماذا هذا المشروع مهم',
      intro: 'بعد سنوات طويلة من النزاع، يعيش ملايين الأطفال في سوريا دون إمكانية الوصول إلى تعليم آمن وجيد.',
      stat1h: 'أكثر من مليوني طفل',
      stat1p: 'خارج المدرسة اليوم',
      stat2h: 'آلاف المدارس',
      stat2p: 'مدمرة أو تعاني من نقص في التمويل',
      stat3h: 'نقص حاد',
      stat3p: 'في المعلمين والمواد التعليمية والمباني الآمنة',
      keysLabel: 'التعليم هو أحد أهم مفاتيح:',
      keys: ['الاستقرار', 'إعادة الإعمار', 'مستقبل أكثر أماناً للأجيال القادمة'],
      desc: 'يجمع هذا المشروع بين رحلة جسدية وهدف إنساني واضح – لخلق الوعي والحوار والدعم الملموس للتعليم.',
      sources: 'المصادر: UNICEF، NRC، ReliefWeb',
      imgAlt: 'أطفال سوريون في الفصل الدراسي',
    }
  }
  if (lang.value === 'en-US') {
    return {
      heading: 'Why this project matters',
      intro: 'After years of conflict, millions of children in Syria lack access to safe and quality education.',
      stat1h: 'Over 2 million children',
      stat1p: 'are out of school today',
      stat2h: 'Thousands of schools',
      stat2p: 'are destroyed or underfunded',
      stat3h: 'Critical shortage',
      stat3p: 'of teachers, materials, and safe school buildings',
      keysLabel: 'Education is one of the most important keys to:',
      keys: ['Stability', 'Reconstruction', 'A safer future for new generations'],
      desc: 'This project combines a physical journey with a clear humanitarian purpose – to create visibility, dialogue, and concrete support for education.',
      sources: 'Sources: UNICEF, NRC, ReliefWeb',
      imgAlt: 'Syrian children in a classroom',
    }
  }
  return {
    heading: 'Hvorfor dette prosjektet er viktig',
    intro: 'Etter mange år med konflikt står millioner av barn i Syria uten tilgang til trygg og god skolegang.',
    stat1h: 'Over 2 millioner barn',
    stat1p: 'er i dag uten skole',
    stat2h: 'Tusenvis av skoler',
    stat2p: 'er ødelagt eller underfinansiert',
    stat3h: 'Kritisk mangel',
    stat3p: 'på lærere, læremateriell og trygge skolebygg',
    keysLabel: 'Utdanning er en av de viktigste nøklene til:',
    keys: ['Stabilitet', 'Gjenoppbygging', 'En tryggere fremtid for nye generasjoner'],
    desc: 'Dette prosjektet kombinerer en fysisk reise med et tydelig humanitært formål – for å skape synlighet, dialog og konkret støtte til utdanning.',
    sources: 'Kilder: UNICEF, NRC, ReliefWeb',
    imgAlt: 'Syriske barn i klasserom',
  }
})
</script>

<template>
  <section class="c4h-hvorfor-section">
    <div class="c4h-hvorfor-inner">
      <div class="c4h-hvorfor-grid">
        <div class="c4h-hvorfor-left">
          <h2 class="c4h-hvorfor-heading">{{ t.heading }}</h2>
          <p class="c4h-hvorfor-intro">{{ t.intro }}</p>

          <div class="c4h-stat-card">
            <strong>{{ t.stat1h }}</strong>
            <p>{{ t.stat1p }}</p>
          </div>
          <div class="c4h-stat-card">
            <strong>{{ t.stat2h }}</strong>
            <p>{{ t.stat2p }}</p>
          </div>
          <div class="c4h-stat-card">
            <strong>{{ t.stat3h }}</strong>
            <p>{{ t.stat3p }}</p>
          </div>

          <p class="c4h-hvorfor-keys-label">{{ t.keysLabel }}</p>
          <ul class="c4h-hvorfor-list">
            <li v-for="key in t.keys" :key="key">{{ key }}</li>
          </ul>

          <p class="c4h-hvorfor-desc">{{ t.desc }}</p>
          <p class="c4h-hvorfor-sources"><em>{{ t.sources }}</em></p>
        </div>

        <div class="c4h-hvorfor-right">
          <img src="/assets/skole_syria.jpg" :alt="t.imgAlt" class="c4h-hvorfor-img" />
        </div>
      </div>
    </div>
  </section>
</template>
