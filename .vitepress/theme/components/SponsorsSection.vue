<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const t = computed(() => {
  if (lang.value === 'ar') {
    return {
      heading: 'شركاء الدعم',
      sub: 'يتشرف المشروع بدعم شركاء متميزين يؤمنون بأهمية هذه المبادرة.',
      visitBtn: 'زيارة الموقع →',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      heading: 'Samarbeidspartnere',
      sub: 'Prosjektet støttes av partnere som tror på initiativet og bidrar til at reisen kan gjennomføres.',
      visitBtn: 'Besøk nettsiden →',
    }
  }
  return {
    heading: 'Sponsors',
    sub: 'The project is supported by partners who believe in the initiative and help make the journey possible.',
    visitBtn: 'Visit website →',
  }
})

const sponsors = [
  {
    name: 'Oslo Sykkelverksted',
    url: 'https://www.oslosykkelverksted.no/',
    logo: '/assets/page_home/Sponsor Logo Oslo sykkelverksted.png',
    desc: {
      'en-US': "Oslo's leading bicycle specialists, based in Grünerløkka, Oslo. Carrying renowned brands like Focus and Kalkhoff, they offer expert guidance on everything from e-bikes to long-distance touring bikes and workshop services.",
      'no-NO': "Oslos ledende sykkelspesialister, med base på Grünerløkka, Oslo. Med kjente merker som Focus og Kalkhoff tilbyr de ekspert­veiledning på alt fra el-sykler til langdistanse­sykler og verkstedtjenester.",
      'ar':    "متخصصو الدراجات الرائدون في أوسلو، ومقرهم في غرونرلوكا، أوسلو. يحملون ماركات مرموقة مثل Focus وKalkhoff، ويقدمون توجيهاً متخصصاً في كل شيء من الدراجات الكهربائية إلى دراجات التجوال بعيدة المدى وخدمات الورشة.",
    },
  },
  {
    name: 'ABUS',
    url: 'https://www.abus.com/no',
    logo: '/assets/page_home/Sponsor Logo Abus.png',
    desc: {
      'en-US': "German security manufacturer with a century of expertise. A global leader in bicycle locks and helmets, trusted by cyclists worldwide for their reliability and build quality.",
      'no-NO': "Tysk sikkerhetsprodusent med hundre års erfaring. En global ledende aktør innen sykkellåser og hjelmer, kjent for sin pålitelighet og høye kvalitet.",
      'ar':    "شركة أمان ألمانية بخبرة تمتد لقرن من الزمن. رائدة عالمياً في أقفال وخوذات الدراجات، وتحظى بثقة الدرّاجين في جميع أنحاء العالم لموثوقيتها وجودة تصنيعها.",
    },
  },
  {
    name: 'Ortlieb',
    url: 'https://de.ortlieb.com/',
    logo: '/assets/page_home/Sponsor Logo Ortlieb.png',
    desc: {
      'en-US': "German manufacturer of waterproof bags, built and designed in Germany since 1982. The global benchmark for touring panniers and bikepacking gear — trusted by long-distance cyclists for their durability, repairability, and all-weather reliability.",
      'no-NO': "Tysk produsent av vanntette vesker, bygget og designet i Tyskland siden 1982. Den globale standarden for sykkelvesker og bikepacking-utstyr – betrodd av langdistansesyklister for holdbarhet, reparerbarhet og pålitelighet i all slags vær.",
      'ar':    "شركة ألمانية لتصنيع الحقائب المقاومة للماء، تُصنَّع وتُصمَّم في ألمانيا منذ عام 1982. المرجع العالمي لحقائب التجوال وأدوات البايكباكينج — موثوقة من قِبل راكبي الدراجات على المسافات الطويلة لمتانتها وقابليتها للإصلاح وموثوقيتها في جميع الأحوال الجوية.",
    },
  },
]
</script>

<template>
  <section class="c4h-sponsors">
    <div class="c4h-sponsors-inner">
      <div class="c4h-sponsors-header">
        <h2 class="c4h-sponsors-heading">{{ t.heading }}</h2>
        <p class="c4h-sponsors-sub">{{ t.sub }}</p>
      </div>
      <div class="c4h-sponsors-grid">
        <div v-for="s in sponsors" :key="s.name" class="c4h-sponsors-card">
          <div class="c4h-sponsors-logo-wrap">
            <img :src="s.logo" :alt="s.name" class="c4h-sponsors-logo" />
          </div>
          <div class="c4h-sponsors-body">
            <h3 class="c4h-sponsors-name">{{ s.name }}</h3>
            <p class="c4h-sponsors-desc">{{ s.desc[lang] ?? s.desc['en-US'] }}</p>
            <a :href="s.url" target="_blank" rel="noopener noreferrer" class="c4h-sponsors-btn">{{ t.visitBtn }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
