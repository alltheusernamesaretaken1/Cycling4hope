<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang, isDark } = useData()

const t = computed(() => {
  if (lang.value === 'ar') {
    return {
      heroAlt: 'Cycling4hope – رحلة من أوسلو إلى دمشق',
      heroHeading: 'عن المشروع',
      bgLabel: 'رحلة بين عالمين',
      bgHeading: 'خلفية المشروع',
      bgP1: 'هذا المشروع يتجاوز مجرد رحلة دراجة. إنه مبادرة إنسانية سأقوم خلالها بالتجديف من أوسلو إلى دمشق لجمع تبرعات لبناء وإعادة تأهيل المدارس في سوريا.',
      bgP2: 'بعد سنوات من الصراع، يعيش ملايين الأطفال بلا تعليم آمن ومستقر. آلاف المباني المدرسية مدمرة أو تعاني من نقص التمويل، ونقص الموارد حاد. التعليم ليس مجرد تعلم – إنه استقرار وكرامة ومستقبل.',
      bgP3: 'من خلال التجديف عبر أوروبا وصولاً إلى سوريا، أريد الجمع بين القدرة على التحمل البدني وهدف واضح: رفع الوعي، وتعبئة الدعم، والمساهمة بشكل ملموس في حق الأطفال في التعليم.',
      bgP4: 'الرحلة رمزية – لكن الهدف ملموس تماماً.',
      goalsHeading: 'الأهداف والغاية',
      goals: [
        { icon: '🌍', title: 'التوعية', desc: 'إبراز وضع الأطفال في سوريا وإظهار مدى أهمية التعليم في إعادة الإعمار والاستقرار على المدى البعيد.' },
        { icon: '🎓', title: 'جمع التبرعات', desc: 'جمع تبرعات لإعادة تأهيل المدارس، وتوفير بيئات تعليمية آمنة ومواد تعليمية بالتعاون مع شركاء محليين.' },
        { icon: '🌱', title: 'التوثيق', desc: 'توثيق الرحلة والعملية على طول الطريق لخلق الشفافية والمشاركة والثقة.' },
        { icon: '💪', title: 'الأثر طويل المدى', desc: 'بناء هيكل يضمن استخدام الأموال بشكل مسؤول وأن يكون للمشروع أهمية دائمة تتجاوز رحلة الدراجة نفسها.' }
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
      routeHeading: 'المسار',
      routeStat1Label: 'رحلة دراجة طويلة المدى',
      routeStat1Value: 'جولة عبر أوروبا',
      routeStat2Label: 'المسار',
      routeStat2Value: 'النرويج ← السويد ← الدنمارك ← ألمانيا ← التشيك ← النمسا ← المجر ← صربيا ← بلغاريا ← تركيا ← سوريا',
      routeStat3Label: 'المدة',
      routeStat3Value: 'حوالي 3 أشهر',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      heroAlt: 'Sykling fra Oslo til Damaskus',
      heroHeading: 'Om prosjektet',
      bgLabel: 'En reise mellom to verdener',
      bgHeading: 'Prosjektbakgrunn',
      bgP1: 'Dette prosjektet handler om mer enn en sykkeltur. Det er et humanitært initiativ der jeg skal sykle fra Oslo til Damaskus for å samle inn midler til bygging og rehabilitering av skoler i Syria.',
      bgP2: 'Etter mange år med konflikt står millioner av barn uten trygg og stabil skolegang. Tusenvis av skolebygg er ødelagt eller underfinansiert, og mangelen på ressurser er kritisk. Utdanning er ikke bare læring – det er stabilitet, verdighet og fremtid.',
      bgP3: 'Ved å sykle gjennom Europa og hele veien til Syria ønsker jeg å kombinere fysisk gjennomføringsevne med et tydelig formål: å skape oppmerksomhet, mobilisere støtte og bidra konkret til barns rett til utdanning.',
      bgP4: 'Reisen er symbolsk – men målet er helt konkret.',
      goalsHeading: 'Mål og formål',
      goals: [
        { icon: '🌍', title: 'Bevisstgjøring', desc: 'Å løfte frem situasjonen for barn i Syria og synliggjøre hvor avgjørende utdanning er for gjenoppbygging og langsiktig stabilitet.' },
        { icon: '🎓', title: 'Innsamling', desc: 'Å samle inn midler til rehabilitering av skoler, trygge læringsmiljøer og utdanningsmateriell i samarbeid med lokale partnere.' },
        { icon: '🌱', title: 'Dokumentasjon', desc: 'Å dokumentere reisen og prosessen underveis for å skape åpenhet, engasjement og tillit.' },
        { icon: '💪', title: 'Langsiktig effekt', desc: 'Å bygge en struktur som sikrer at midlene brukes ansvarlig, og at prosjektet får varig betydning utover selve sykkelreisen.' }
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
      routeHeading: 'Rute',
      routeStat1Label: 'Langdistanse sykkeltur',
      routeStat1Value: 'Sykkeltur på tvers av Europa',
      routeStat2Label: 'Rute',
      routeStat2Value: 'Norge → Sverige → Danmark → Tyskland → Tjekkia → Østerrike → Ungarn → Serbia → Bulgaria → Tyrkia → Syria',
      routeStat3Label: 'Varighet',
      routeStat3Value: 'ca. 3 måneder',
    }
  }
  // Default: English
  return {
    heroAlt: 'Cycling from Oslo to Damascus',
    heroHeading: 'About the project',
    bgLabel: 'A journey between two worlds',
    bgHeading: 'Project background',
    bgP1: 'This project is about more than a cycling trip. It is a humanitarian initiative where I will cycle from Oslo to Damascus to raise funds for building and rehabilitating schools in Syria.',
    bgP2: 'After years of conflict, millions of children are without safe and stable schooling. Thousands of school buildings are destroyed or underfunded, and the lack of resources is critical. Education is not just learning – it is stability, dignity and a future.',
    bgP3: "By cycling through Europe all the way to Syria, I want to combine physical endurance with a clear purpose: to raise awareness, mobilise support and contribute concretely to children's right to education.",
    bgP4: 'The journey is symbolic – but the goal is entirely concrete.',
    goalsHeading: 'Goals & purpose',
    goals: [
      { icon: '🌍', title: 'Awareness', desc: 'To highlight the situation of children in Syria and show how vital education is for reconstruction and long-term stability.' },
      { icon: '🎓', title: 'Fundraising', desc: 'To raise funds for school rehabilitation, safe learning environments and educational materials in collaboration with local partners.' },
      { icon: '🌱', title: 'Documentation', desc: 'To document the journey and process along the way, creating transparency, engagement and trust.' },
      { icon: '💪', title: 'Long-term impact', desc: 'To build a structure that ensures funds are used responsibly and that the project has lasting significance beyond the cycling trip itself.' }
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
    routeHeading: 'Route',
    routeStat1Label: 'Long-distance cycling',
    routeStat1Value: 'A cross-European cycling journey',
    routeStat2Label: 'Route',
    routeStat2Value: 'Norway → Sweden → Denmark → Germany → Czech Republic → Austria → Hungary → Serbia → Bulgaria → Turkey → Syria',
    routeStat3Label: 'Duration',
    routeStat3Value: 'approx. 3 months',
  }
})
</script>

<template>
  <main class="c4h-about">

    <!-- ── Hero ── -->
    <section class="c4h-about-hero">
      <div class="c4h-about-hero-img-wrap">
        <div class="c4h-about-hero-overlay"></div>
        <img
          src="/assets/page_about_the_project/about_project_hero.png"
          :alt="t.heroAlt"
          class="c4h-about-hero-img"
        />
        <div class="c4h-about-hero-title">
          <h1>{{ t.heroHeading }}</h1>
        </div>
      </div>
    </section>

    <!-- ── Background ── -->
    <section class="c4h-about-section c4h-about-background">
      <h2>{{ t.bgHeading }}</h2>
      <div class="c4h-about-background-layout">
        <div class="c4h-about-body">
          <p>{{ t.bgP1 }}</p>
          <p>{{ t.bgP2 }}</p>
          <p>{{ t.bgP3 }}</p>
          <p>{{ t.bgP4 }}</p>
        </div>
        <div class="c4h-about-bg-logo-wrap">
          <img
            :src="isDark ? '/assets/Logo_Transparrent_DarkMode.png' : '/assets/Logo_Transparrent.png'"
            alt="Cycling4hope"
            class="c4h-about-bg-logo"
          />
        </div>
      </div>
    </section>

    <!-- ── Route ── -->
    <section class="c4h-about-section c4h-about-route-section">
      <h2>{{ t.routeHeading }}</h2>
      <div class="c4h-about-route-layout">
        <div class="c4h-about-route-img-wrap">
          <img
            src="/assets/page_about_the_project/route_artistic.png"
            alt="Route map"
            class="c4h-about-route-img"
          />
        </div>
        <div class="c4h-about-route-stats">
          <div class="c4h-about-route-stat">
            <div class="c4h-about-route-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/>
                <circle cx="15" cy="5" r="1"/>
                <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
              </svg>
            </div>
            <div>
              <h4>{{ t.routeStat1Label }}</h4>
              <p>{{ t.routeStat1Value }}</p>
            </div>
          </div>
          <div class="c4h-about-route-stat">
            <div class="c4h-about-route-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="6" cy="19" r="3"/>
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                <circle cx="18" cy="5" r="3"/>
              </svg>
            </div>
            <div>
              <h4>{{ t.routeStat2Label }}</h4>
              <p>{{ t.routeStat2Value }}</p>
            </div>
          </div>
          <div class="c4h-about-route-stat">
            <div class="c4h-about-route-stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
            </div>
            <div>
              <h4>{{ t.routeStat3Label }}</h4>
              <p>{{ t.routeStat3Value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Goals ── -->
    <section class="c4h-about-section c4h-about-goals">
      <div class="c4h-about-goals-inner">
        <h2>{{ t.goalsHeading }}</h2>
        <div class="c4h-about-goals-grid">
          <div v-for="goal in t.goals" :key="goal.title" class="c4h-about-goal">
            <span class="c4h-about-goal-icon">{{ goal.icon }}</span>
            <div>
              <h4>{{ goal.title }}</h4>
              <p>{{ goal.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Initiator ── -->
    <section class="c4h-about-section c4h-about-person">
      <div class="c4h-about-person-img-wrap">
        <img
          src="/assets/page_about_the_project/about_me.jpg"
          :alt="t.personAlt"
          class="c4h-about-person-img"
        />
      </div>
      <div class="c4h-about-person-text">
        <h2>{{ t.personHeading }}</h2>
        <p>{{ t.personP1 }}</p>
        <p>{{ t.personP2 }}</p>
        <p>{{ t.personP3 }}</p>
        <p>{{ t.personP4 }}</p>
      </div>
    </section>

    <!-- ── Vision ── -->
    <section class="c4h-about-section c4h-about-vision">
      <h2>{{ t.visionHeading }}</h2>
      <p class="c4h-about-vision-text">{{ t.visionText }}</p>
      <div class="c4h-about-vision-row">
        <div class="c4h-about-vision-items">
          <p class="c4h-about-vision-sub">{{ t.visionSub }}</p>
          <ul class="c4h-about-vision-list">
            <li v-for="item in t.visionItems" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="c4h-about-vision-box">
          <p class="c4h-about-vision-box-label">{{ t.visionBoxLabel }}</p>
          <p class="c4h-about-vision-box-body">{{ t.visionBoxBody }}</p>
        </div>
      </div>
    </section>

  </main>
</template>
