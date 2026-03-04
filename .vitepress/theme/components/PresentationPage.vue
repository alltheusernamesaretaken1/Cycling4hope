<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang, isDark } = useData()

const homeLink = computed(() => {
  if (lang.value === 'ar') return '/ar/'
  if (lang.value === 'no-NO') return '/no/'
  return '/'
})

const ui = computed(() => {
  if (lang.value === 'ar') return { back: 'العودة →', download: 'تنزيل كـ PDF' }
  if (lang.value === 'no-NO') return { back: '← Tilbake', download: 'Last ned som PDF' }
  return { back: '← Back', download: 'Download as PDF' }
})

const t = computed(() => {
  if (lang.value === 'ar') {
    return {
      coverTitle: 'ركوب الدراجات من أوسلو إلى دمشق',
      coverTagline: 'مبادرة إنسانية بالدراجات لدعم التعليم وإعادة تأهيل المدارس في سوريا',
      missionHeading: 'خلفية المشروع',
      bgP1: 'هذا المشروع يتجاوز مجرد رحلة دراجة. إنه مبادرة إنسانية سأقوم خلالها بالتجديف من أوسلو إلى دمشق لجمع تبرعات لبناء وإعادة تأهيل المدارس في سوريا.',
      bgP2: 'بعد سنوات من الصراع، يعيش ملايين الأطفال بلا تعليم آمن ومستقر. آلاف المباني المدرسية مدمرة أو تعاني من نقص التمويل، ونقص الموارد حاد. التعليم ليس مجرد تعلم – إنه استقرار وكرامة ومستقبل.',
      bgP3: 'من خلال التجديف عبر أوروبا وصولاً إلى سوريا، أريد الجمع بين القدرة على التحمل البدني وهدف واضح: رفع الوعي، وتعبئة الدعم، والمساهمة بشكل ملموس في حق الأطفال في التعليم.',
      bgP4: 'الرحلة رمزية – لكن الهدف ملموس تماماً.',
      routeHeading: 'المسار',
      routeStat1Label: 'رحلة دراجة طويلة المدى',
      routeStat1Value: 'جولة عبر أوروبا',
      routeStat2Label: 'المسار',
      routeStat2Value: 'النرويج ← السويد ← الدنمارك ← ألمانيا ← التشيك ← النمسا ← المجر ← صربيا ← بلغاريا ← تركيا ← سوريا',
      routeStat3Label: 'المدة',
      routeStat3Value: 'حوالي 3 أشهر',
      goalsHeading: 'الأهداف والغاية',
      goals: [
        { icon: '🌍', title: 'التوعية', desc: 'إبراز وضع الأطفال في سوريا وإظهار مدى أهمية التعليم في إعادة الإعمار والاستقرار على المدى البعيد.' },
        { icon: '🎓', title: 'جمع التبرعات', desc: 'جمع تبرعات لإعادة تأهيل المدارس، وتوفير بيئات تعليمية آمنة ومواد تعليمية بالتعاون مع شركاء محليين.' },
        { icon: '🌱', title: 'التوثيق', desc: 'توثيق الرحلة والعملية على طول الطريق لخلق الشفافية والمشاركة والثقة.' },
        { icon: '💪', title: 'الأثر طويل المدى', desc: 'بناء هيكل يضمن استخدام الأموال بشكل مسؤول وأن يكون للمشروع أهمية دائمة تتجاوز رحلة الدراجة نفسها.' },
      ],
      personHeading: 'من أنا',
      personAlt: 'علاء سامع',
      personP1: 'أنا سوري نرويجي وجئت إلى النرويج كلاجئ بعد الحرب في سوريا. من خلال التعليم حصلت على فرصة بناء حياة جديدة – من المدرسة الثانوية إلى التعليم العالي.',
      personP2: 'منحني التعليم الاستقرار والتوجه والأمل في المستقبل. نفس الفرصة هذه هي ما أريده للأطفال في سوريا.',
      personP3: 'لدي خلفية في العمل التطوعي وقد شاركت سابقاً في مشاريع تتعلق بالتعليم. هذه المبادرة مبنية على التزام طويل المدى – وليست مجرد عمل لمرة واحدة.',
      personP4: 'رحلة الدراجة شخصية، لكن الغاية أكبر مني.',
      visionHeading: 'التركيز على التعليم والرؤية طويلة المدى',
      visionText: 'يتمحور المشروع حول هدف واحد واضح: التعليم.',
      visionSub: 'من خلال التعاون مع الأطراف ذات الصلة، ستذهب الأموال المجمعة إلى إجراءات ملموسة مثل:',
      visionItems: ['إعادة تأهيل المباني المدرسية', 'تحسين بيئات التعلم', 'الوصول إلى المواد الضرورية', 'دعم المبادرات المحلية'],
      visionBoxLabel: 'الهدف النهائي',
      visionBoxBody: 'الهدف هو ضمان حصول الأطفال على تعليم آمن ومستقر – شرط أساسي لإعادة الإعمار والتنمية المجتمعية والسلام الدائم.',
      contactHeading: 'تواصل معنا',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      coverTitle: 'Sykling fra Oslo til Damaskus',
      coverTagline: 'Et humanitært sykkelinitiativ til støtte for utdanning i Syria',
      missionHeading: 'Prosjektbakgrunn',
      bgP1: 'Dette prosjektet handler om mer enn en sykkeltur. Det er et humanitært initiativ der jeg skal sykle fra Oslo til Damaskus for å samle inn midler til bygging og rehabilitering av skoler i Syria.',
      bgP2: 'Etter mange år med konflikt står millioner av barn uten trygg og stabil skolegang. Tusenvis av skolebygg er ødelagt eller underfinansiert, og mangelen på ressurser er kritisk. Utdanning er ikke bare læring – det er stabilitet, verdighet og fremtid.',
      bgP3: 'Ved å sykle gjennom Europa og hele veien til Syria ønsker jeg å kombinere fysisk gjennomføringsevne med et tydelig formål: å skape oppmerksomhet, mobilisere støtte og bidra konkret til barns rett til utdanning.',
      bgP4: 'Reisen er symbolsk – men målet er helt konkret.',
      routeHeading: 'Rute',
      routeStat1Label: 'Langdistanse sykkeltur',
      routeStat1Value: 'Sykkeltur på tvers av Europa',
      routeStat2Label: 'Rute',
      routeStat2Value: 'Norge → Sverige → Danmark → Tyskland → Tjekkia → Østerrike → Ungarn → Serbia → Bulgaria → Tyrkia → Syria',
      routeStat3Label: 'Varighet',
      routeStat3Value: 'ca. 3 måneder',
      goalsHeading: 'Mål og formål',
      goals: [
        { icon: '🌍', title: 'Bevisstgjøring', desc: 'Å løfte frem situasjonen for barn i Syria og synliggjøre hvor avgjørende utdanning er for gjenoppbygging og langsiktig stabilitet.' },
        { icon: '🎓', title: 'Innsamling', desc: 'Å samle inn midler til rehabilitering av skoler, trygge læringsmiljøer og utdanningsmateriell i samarbeid med lokale partnere.' },
        { icon: '🌱', title: 'Dokumentasjon', desc: 'Å dokumentere reisen og prosessen underveis for å skape åpenhet, engasjement og tillit.' },
        { icon: '💪', title: 'Langsiktig effekt', desc: 'Å bygge en struktur som sikrer at midlene brukes ansvarlig, og at prosjektet får varig betydning utover selve sykkelreisen.' },
      ],
      personHeading: 'Hvem er jeg',
      personAlt: 'Alaa Same',
      personP1: 'Jeg er norsk-syrisk og kom til Norge som flyktning etter krigen i Syria. Gjennom utdanning fikk jeg muligheten til å bygge et nytt liv – fra videregående skole til høyere utdanning.',
      personP2: 'Utdanning ga meg stabilitet, retning og fremtidshåp. Det er den samme muligheten jeg ønsker at barn i Syria skal få.',
      personP3: 'Jeg har bakgrunn fra frivillig organisasjonsarbeid og har tidligere vært involvert i utdanningsrelaterte prosjekter. Dette initiativet bygger på langsiktig engasjement – ikke et engangsstunt.',
      personP4: 'Sykkelturen er personlig, men formålet er større enn meg.',
      visionHeading: 'Utdanningsfokus og langsiktig visjon',
      visionText: 'Prosjektet har ett tydelig fokus: utdanning.',
      visionSub: 'Gjennom samarbeid med relevante aktører skal innsamlede midler gå til konkrete tiltak som:',
      visionItems: ['Rehabilitering av skolebygg', 'Forbedring av læringsmiljø', 'Tilgang til nødvendig materiell', 'Støtte til lokale initiativer'],
      visionBoxLabel: 'Langsiktig mål',
      visionBoxBody: 'Målet er å sikre at barn får tilgang til trygg og stabil skolegang – en forutsetning for gjenoppbygging, samfunnsutvikling og varig fred.',
      contactHeading: 'Kontakt oss',
    }
  }
  return {
    coverTitle: 'Cycling from Oslo to Damascus',
    coverTagline: 'A humanitarian cycling initiative supporting education and school projects in Syria',
    missionHeading: 'Project background',
    bgP1: 'This project is about more than a cycling trip. It is a humanitarian initiative where I will cycle from Oslo to Damascus to raise funds for building and rehabilitating schools in Syria.',
    bgP2: 'After years of conflict, millions of children are without safe and stable schooling. Thousands of school buildings are destroyed or underfunded, and the lack of resources is critical. Education is not just learning – it is stability, dignity and a future.',
    bgP3: "By cycling through Europe all the way to Syria, I want to combine physical endurance with a clear purpose: to raise awareness, mobilise support and contribute concretely to children's right to education.",
    bgP4: 'The journey is symbolic – but the goal is entirely concrete.',
    routeHeading: 'Route',
    routeStat1Label: 'Long-distance cycling',
    routeStat1Value: 'A cross-European cycling journey',
    routeStat2Label: 'Route',
    routeStat2Value: 'Norway → Sweden → Denmark → Germany → Czech Republic → Austria → Hungary → Serbia → Bulgaria → Turkey → Syria',
    routeStat3Label: 'Duration',
    routeStat3Value: 'approx. 3 months',
    goalsHeading: 'Goals & purpose',
    goals: [
      { icon: '🌍', title: 'Awareness', desc: 'To highlight the situation of children in Syria and show how vital education is for reconstruction and long-term stability.' },
      { icon: '🎓', title: 'Fundraising', desc: 'To raise funds for school rehabilitation, safe learning environments and educational materials in collaboration with local partners.' },
      { icon: '🌱', title: 'Documentation', desc: 'To document the journey and process along the way, creating transparency, engagement and trust.' },
      { icon: '💪', title: 'Long-term impact', desc: 'To build a structure that ensures funds are used responsibly and that the project has lasting significance beyond the cycling trip itself.' },
    ],
    personHeading: 'Who I am',
    personAlt: 'Alaa Same',
    personP1: 'I am Norwegian-Syrian and came to Norway as a refugee after the war in Syria. Through education I got the opportunity to build a new life – from secondary school to higher education.',
    personP2: 'Education gave me stability, direction and hope for the future. That same opportunity is what I want children in Syria to have.',
    personP3: 'I have a background in voluntary organisational work and have previously been involved in education-related projects. This initiative is built on long-term commitment – not a one-time stunt.',
    personP4: 'The cycling trip is personal, but the purpose is bigger than me.',
    visionHeading: 'Education focus & long-term vision',
    visionText: 'The project has one clear focus: education.',
    visionSub: 'Through collaboration with relevant partners, raised funds will go to concrete measures such as:',
    visionItems: ['Rehabilitation of school buildings', 'Improvement of learning environments', 'Access to necessary materials', 'Support for local initiatives'],
    visionBoxLabel: 'Long-term goal',
    visionBoxBody: 'The goal is to ensure that children have access to safe and stable schooling – a prerequisite for reconstruction, societal development and lasting peace.',
    contactHeading: 'Contact us',
  }
})

function downloadPDF() {
  window.print()
}
</script>

<template>
  <div class="c4h-pres" :dir="lang === 'ar' ? 'rtl' : 'ltr'">

    <!-- ── Toolbar (screen only) ── -->
    <div class="c4h-pres-toolbar">
      <a :href="homeLink" class="c4h-pres-back">{{ ui.back }}</a>
      <button class="c4h-pres-download-btn" @click="downloadPDF">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        {{ ui.download }}
      </button>
    </div>

    <!-- ── Slide 1: Cover ── -->
    <section class="c4h-slide c4h-slide-cover">
      <img src="/assets/Logo_Transparrent_DarkMode.png" alt="Cycling4hope" class="c4h-pres-cover-logo" />
      <h1 class="c4h-pres-cover-title">{{ t.coverTitle }}</h1>
      <p class="c4h-pres-cover-tagline">{{ t.coverTagline }}</p>
      <p class="c4h-pres-cover-url">cycling4hope.com</p>
    </section>

    <!-- ── Slide 2: Mission ── -->
    <section class="c4h-slide">
      <span class="c4h-pres-slide-num">02</span>
      <h2>{{ t.missionHeading }}</h2>
      <div class="c4h-pres-mission-layout">
        <div class="c4h-pres-body">
          <p>{{ t.bgP1 }}</p>
          <p>{{ t.bgP2 }}</p>
          <p>{{ t.bgP3 }}</p>
          <p class="c4h-pres-italic">{{ t.bgP4 }}</p>
        </div>
        <img
          src="/assets/skole_syria.jpg"
          alt="School in Syria"
          class="c4h-pres-mission-img"
        />
      </div>
    </section>

    <!-- ── Slide 3: Route ── -->
    <section class="c4h-slide">
      <span class="c4h-pres-slide-num">03</span>
      <h2>{{ t.routeHeading }}</h2>
      <div class="c4h-pres-route">
        <img
          src="/assets/page_about_the_project/route_artistic.png"
          alt="Route map"
          class="c4h-pres-route-img"
        />
        <div class="c4h-pres-route-stats">
          <div class="c4h-pres-route-stat">
            <h4>{{ t.routeStat1Label }}</h4>
            <p>{{ t.routeStat1Value }}</p>
          </div>
          <div class="c4h-pres-route-stat">
            <h4>{{ t.routeStat2Label }}</h4>
            <p>{{ t.routeStat2Value }}</p>
          </div>
          <div class="c4h-pres-route-stat">
            <h4>{{ t.routeStat3Label }}</h4>
            <p>{{ t.routeStat3Value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Slide 4: Goals ── -->
    <section class="c4h-slide">
      <span class="c4h-pres-slide-num">04</span>
      <h2>{{ t.goalsHeading }}</h2>
      <div class="c4h-pres-goals">
        <div v-for="goal in t.goals" :key="goal.title" class="c4h-pres-goal">
          <span class="c4h-pres-goal-icon">{{ goal.icon }}</span>
          <div>
            <h4>{{ goal.title }}</h4>
            <p>{{ goal.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Slide 5: Who I am ── -->
    <section class="c4h-slide">
      <span class="c4h-pres-slide-num">05</span>
      <h2>{{ t.personHeading }}</h2>
      <div class="c4h-pres-person">
        <img
          src="/assets/page_about_the_project/about_me.jpg"
          :alt="t.personAlt"
          class="c4h-pres-person-img"
        />
        <div class="c4h-pres-body">
          <p>{{ t.personP1 }}</p>
          <p>{{ t.personP2 }}</p>
          <p>{{ t.personP3 }}</p>
          <p class="c4h-pres-italic">{{ t.personP4 }}</p>
        </div>
      </div>
    </section>

    <!-- ── Slide 6: Vision ── -->
    <section class="c4h-slide">
      <span class="c4h-pres-slide-num">06</span>
      <h2>{{ t.visionHeading }}</h2>
      <p class="c4h-pres-vision-intro">{{ t.visionText }}</p>
      <p class="c4h-pres-vision-sub">{{ t.visionSub }}</p>
      <ul class="c4h-pres-vision-list">
        <li v-for="item in t.visionItems" :key="item">{{ item }}</li>
      </ul>
      <div class="c4h-pres-vision-box">
        <p class="c4h-pres-vision-box-label">{{ t.visionBoxLabel }}</p>
        <p class="c4h-pres-vision-box-body">{{ t.visionBoxBody }}</p>
      </div>
    </section>

    <!-- ── Slide 7: Contact ── -->
    <section class="c4h-slide c4h-slide-contact">
      <span class="c4h-pres-slide-num">07</span>
      <div class="c4h-pres-contact-layout">
        <div class="c4h-pres-contact-left">
          <h2>{{ t.contactHeading }}</h2>
          <div class="c4h-pres-contact-box">
            <div class="c4h-pres-contact-items">
              <div class="c4h-pres-contact-item">
                <span class="c4h-pres-contact-icon">✉</span>
                <span>Alaa.samiaka@gmail.com</span>
              </div>
              <div class="c4h-pres-contact-item">
                <span class="c4h-pres-contact-icon">☎</span>
                <span>+47 969 71 519</span>
              </div>
              <div class="c4h-pres-contact-item">
                <span class="c4h-pres-contact-icon">🌐</span>
                <span>cycling4hope.com</span>
              </div>
            </div>
          </div>
          <img
            :src="isDark ? '/assets/Logo_Transparrent_DarkMode.png' : '/assets/Logo_Transparrent.png'"
            alt="Cycling4hope"
            class="c4h-pres-contact-logo"
          />
        </div>
        <div class="c4h-pres-contact-img-wrap">
          <img
            src="/assets/page_contact/alaa_interview_NRK.jpg"
            alt="Alaa Same – NRK interview"
            class="c4h-pres-contact-photo"
          />
        </div>
      </div>
    </section>

  </div>
</template>
