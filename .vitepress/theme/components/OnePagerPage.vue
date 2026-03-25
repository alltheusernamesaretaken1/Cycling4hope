<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { lang, isDark } = useData();

const homeLink = computed(() => {
  if (lang.value === "ar") return "/ar/";
  if (lang.value === "no-NO") return "/no/";
  return "/";
});

const ui = computed(() => {
  if (lang.value === "ar")
    return { back: "العودة →", download: "تنزيل كـ PDF" };
  if (lang.value === "no-NO")
    return { back: "← Tilbake", download: "Last ned som PDF" };
  return { back: "← Back", download: "Download as PDF" };
});

const t = computed(() => {
  if (lang.value === "ar") {
    return {
      badge: "مبادرة إنسانية 2025",
      title: "على الدراجة من أوسلو إلى دمشق",
      titleAccent: "دعم التعليم والأمل",
      tagline:
        "رحلة على الدراجة منفردة تمتد 5500 كم عبر أوروبا إلى سوريا – لجمع التبرعات لبناء وإعادة تأهيل المدارس للأطفال في سوريا.",
      stat1Label: "المبادر",
      stat1Value: "علاء سامي",
      stat2Label: "تاريخ البدء",
      stat2Value: "أبريل 2025",
      stat3Label: "المدة",
      stat3Value: "~3 أشهر",
      stat4Label: "المسافة",
      stat4Value: "5,497 كم",
      whyHeading: "لماذا هذا المشروع؟",
      whyText:
        "بعد سنوات من الصراع، يعيش ملايين الأطفال في سوريا بلا تعليم آمن ومستقر. آلاف المباني المدرسية مدمرة أو تعاني من نقص التمويل. التعليم ليس مجرد تعلم – إنه استقرار وكرامة ومستقبل.",
      kpi1: "90%",
      kpi1Desc: "من المدارس في مناطق النزاع تضررت أو دمرت",
      kpi2: "2.4M",
      kpi2Desc: "طفل في سوريا محروم من التعليم",
      routeHeading: "المسار",
      routeValue:
        "النرويج → السويد → الدنمارك → ألمانيا → تشيكيا → النمسا → المجر → صربيا → بلغاريا → تركيا → سوريا",
      whoHeading: "من أنا",
      whoText:
        "أنا سوري نرويجي وجئت إلى النرويج كلاجئ بعد الحرب في سوريا. من خلال التعليم حصلت على فرصة بناء حياة جديدة. منحني التعليم الاستقرار والأمل في المستقبل – نفس الفرصة هذه هي ما أريده للأطفال في بلدي الحبيب سوريا. هذه المبادرة مبنية على التزام طويل المدى.",
      goalsHeading: "الأهداف",
      goals: [
        {
          icon: "🌍",
          title: "التوعية",
          desc: "إبراز وضع الأطفال وأهمية التعليم.",
        },
        {
          icon: "🎓",
          title: "جمع التبرعات",
          desc: "إعادة تأهيل المدارس وبيئات التعلم.",
        },
        { icon: "🌱", title: "التوثيق", desc: "الشفافية والوضوح طوال الرحلة." },
        {
          icon: "💪",
          title: "الأثر طويل المدى",
          desc: "خطة مسؤولة تضمن أثراً دائماً.",
        },
      ],
      sponsorHeading: "نبحث عن رعاة",
      sponsorWhy: "لماذا نتواصل",
      sponsorWhyText:
        "نحن في مرحلة التخطيط ونبحث عن شركاء يمكنهم المساهمة بالمعدات أو الدعم المالي.او من خلال تنظيم جلسات حوارية للحديث عن التعليم في سوريا. نرحب بالحوار مع المنظمات والشركات التي تشارك اهتماماً بالتعليم أو العمل الإنساني.",
      sponsorOffer: "ما يمكننا تقديمه",
      sponsorOfferText:
        "كشريك، ستكون حاضراً طوال المشروع — من التحضير إلى التنفيذ والتقرير النهائي:",
      sponsorItems: [
        "ذكر على cycling4hope.com",
        "ظهور مرئي على وسائل التواصل الاجتماعي",
        "إقرار في وثائق المشروع والتقرير النهائي",
      ],
      contactHeading: "تواصل معنا",
    };
  }
  if (lang.value === "no-NO") {
    return {
      badge: "Humanitært initiativ 2025",
      title: "Sykling fra Oslo til Damaskus",
      titleAccent: "Støtte utdanning og håp",
      tagline:
        "En solo sykkeltour på 5 497 km gjennom Europa til Syria – for å samle inn midler til bygging og rehabilitering av skoler for barn i Syria.",
      stat1Label: "Initiativtaker",
      stat1Value: "Alaa Same",
      stat2Label: "Startdato",
      stat2Value: "April 2025",
      stat3Label: "Varighet",
      stat3Value: "~3 måneder",
      stat4Label: "Avstand",
      stat4Value: "5,497 km",
      whyHeading: "Hvorfor dette prosjektet?",
      whyText:
        "Etter mange år med konflikt lever millioner av barn i Syria uten trygg og stabil skolegang. Tusenvis av skolebygg er ødelagt eller underfinansiert. Utdanning er ikke bare læring – det er stabilitet, verdighet og fremtid.",
      kpi1: "90 %",
      kpi1Desc: "av skolene i konfliktsoner er skadet eller ødelagt",
      kpi2: "2,4M",
      kpi2Desc: "barn i Syria har ikke tilgang til utdanning",
      routeHeading: "Rute",
      routeValue:
        "Norge → Sverige → Danmark → Tyskland → Tsjekkia → Østerrike → Ungarn → Serbia → Bulgaria → Tyrkia → Syria",
      whoHeading: "Hvem er jeg",
      whoText:
        "Jeg er norsk-syrisk og kom til Norge som flyktning etter krigen i Syria. Gjennom utdanning fikk jeg muligheten til å bygge et nytt liv. Utdanning ga meg stabilitet, retning og fremtidshåp – det er den samme muligheten jeg ønsker at barn i Syria skal få. Dette initiativet bygger på langsiktig engasjement.",
      goalsHeading: "Mål",
      goals: [
        {
          icon: "🌍",
          title: "Bevisstgjøring",
          desc: "Løfte frem situasjonen for barn i Syria.",
        },
        {
          icon: "🎓",
          title: "Innsamling",
          desc: "Midler til rehabilitering av skoler.",
        },
        {
          icon: "🌱",
          title: "Dokumentasjon",
          desc: "Åpenhet og synlighet underveis.",
        },
        {
          icon: "💪",
          title: "Langsiktig effekt",
          desc: "Ansvarlig struktur som sikrer varig effekt.",
        },
      ],
      sponsorHeading: "Vi søker sponsorer",
      sponsorWhy: "Hvorfor vi tar kontakt",
      sponsorWhyText:
        "Vi er i planleggingsfasen og søker partnere som kan bidra med utstyr eller finansiell støtte. Vi ønsker dialog med organisasjoner og bedrifter som deler interesse for utdanning, humanitært arbeid eller meningsfull påvirkning.",
      sponsorOffer: "Hva vi kan tilby",
      sponsorOfferText:
        "Som partner vil du være synlig gjennom hele prosjektet — fra forberedelse til gjennomføring og sluttrapportering:",
      sponsorItems: [
        "Anerkjennelse på cycling4hope.com",
        "Omtale og visuell eksponering på sosiale medier",
        "Anerkjennelse i prosjektdokumentasjon og sluttrapport",
      ],
      contactHeading: "Kontakt",
    };
  }
  return {
    badge: "Humanitarian Initiative 2025",
    title: "Cycling from Oslo to Damascus",
    titleAccent: "Supporting Education and Hope",
    tagline:
      "A solo 5,497 km cycling journey across Europe to Syria — raising funds for school construction and rehabilitation for children in Syria.",
    stat1Label: "Initiator",
    stat1Value: "Alaa Same",
    stat2Label: "Start Date",
    stat2Value: "April 2025",
    stat3Label: "Duration",
    stat3Value: "~3 months",
    stat4Label: "Distance",
    stat4Value: "5,497 km",
    whyHeading: "Why this project?",
    whyText:
      "After years of conflict, millions of children in Syria live without safe and stable schooling. Thousands of school buildings are destroyed or underfunded. Education is not just learning — it is stability, dignity and a future.",
    kpi1: "90%",
    kpi1Desc: "of schools in conflict zones damaged or destroyed",
    kpi2: "2.4M",
    kpi2Desc: "children in Syria without access to education",
    routeHeading: "Route",
    routeValue:
      "Norway → Sweden → Denmark → Germany → Czech Republic → Austria → Hungary → Serbia → Bulgaria → Turkey → Syria",
    whoHeading: "Who I am",
    whoText:
      "I am Norwegian-Syrian and came to Norway as a refugee after the war in Syria. Through education I got the opportunity to build a new life. Education gave me stability, direction and hope — the same opportunity I want for children in Syria. This initiative is built on long-term commitment.",
    goalsHeading: "Goals",
    goals: [
      {
        icon: "🌍",
        title: "Awareness",
        desc: "Highlight the situation of children in Syria.",
      },
      {
        icon: "🎓",
        title: "Fundraising",
        desc: "Funds for school rehabilitation and learning environments.",
      },
      {
        icon: "🌱",
        title: "Documentation",
        desc: "Transparency and visibility throughout the journey.",
      },
      {
        icon: "💪",
        title: "Long-term impact",
        desc: "Responsible structure ensuring lasting effect.",
      },
    ],
    sponsorHeading: "We are looking for sponsors",
    sponsorWhy: "Why we're reaching out",
    sponsorWhyText:
      "We are in the planning phase and are looking for partners who can contribute with equipment or financial support. We welcome dialogue with organisations and companies that share an interest in education, humanitarian work, or meaningful impact.",
    sponsorOffer: "What we can offer",
    sponsorOfferText:
      "As a partner, you will be visible throughout the entire project — from preparation through execution and final reporting:",
    sponsorItems: [
      "Recognition on cycling4hope.com",
      "Mentions and visual exposure on social media throughout the journey",
      "Acknowledgement in project documentation and the final report",
    ],
    contactHeading: "Contact",
  };
});

function downloadPDF() {
  window.print();
}
</script>

<template>
  <div class="c4h-op" :dir="lang === 'ar' ? 'rtl' : 'ltr'">
    <!-- Toolbar (screen only) -->
    <div class="c4h-pres-toolbar">
      <a :href="homeLink" class="c4h-pres-back">{{ ui.back }}</a>
      <button class="c4h-pres-download-btn" @click="downloadPDF">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {{ ui.download }}
      </button>
    </div>

    <!-- A4 page -->
    <div class="c4h-op-page">
      <!-- Header band (dark navy) -->
      <header class="c4h-op-header">
        <div class="c4h-op-header-content">
          <span class="c4h-op-badge">{{ t.badge }}</span>
          <h1 class="c4h-op-title">
            {{ t.title }}<br />
            <span class="c4h-op-title-accent">{{ t.titleAccent }}</span>
          </h1>
          <p class="c4h-op-tagline">{{ t.tagline }}</p>
          <div class="c4h-op-stats">
            <div class="c4h-op-stat">
              <p class="c4h-op-stat-label">{{ t.stat1Label }}</p>
              <p class="c4h-op-stat-value">{{ t.stat1Value }}</p>
            </div>
            <div class="c4h-op-stat">
              <p class="c4h-op-stat-label">{{ t.stat2Label }}</p>
              <p class="c4h-op-stat-value">{{ t.stat2Value }}</p>
            </div>
            <div class="c4h-op-stat">
              <p class="c4h-op-stat-label">{{ t.stat3Label }}</p>
              <p class="c4h-op-stat-value">{{ t.stat3Value }}</p>
            </div>
            <div class="c4h-op-stat">
              <p class="c4h-op-stat-label">{{ t.stat4Label }}</p>
              <p class="c4h-op-stat-value">{{ t.stat4Value }}</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/Logo_Transparrent_DarkMode.png"
          alt="Cycling4Hope"
          class="c4h-op-logo"
        />
      </header>

      <!-- Body: two columns -->
      <div class="c4h-op-body">
        <!-- Left column -->
        <div class="c4h-op-col-left">
          <!-- Why -->
          <section class="c4h-op-section">
            <p class="c4h-op-section-heading">{{ t.whyHeading }}</p>
            <div class="c4h-op-why-layout">
              <p class="c4h-op-why-text">{{ t.whyText }}</p>
              <img
                src="/assets/skole_syria.jpg"
                alt="Syria school"
                class="c4h-op-context-img"
              />
            </div>
            <div class="c4h-op-kpis">
              <div class="c4h-op-kpi">
                <strong>{{ t.kpi1 }}</strong>
                <p>{{ t.kpi1Desc }}</p>
              </div>
              <div class="c4h-op-kpi">
                <strong>{{ t.kpi2 }}</strong>
                <p>{{ t.kpi2Desc }}</p>
              </div>
            </div>
          </section>

          <!-- Who I am -->
          <section class="c4h-op-section">
            <p class="c4h-op-section-heading">{{ t.whoHeading }}</p>
            <div class="c4h-op-who-layout">
              <img
                src="/assets/page_about_the_project/about_me.jpg"
                alt="Alaa Same"
                class="c4h-op-who-img"
              />
              <p class="c4h-op-who-text">{{ t.whoText }}</p>
            </div>
          </section>

          <!-- Route map + stops -->
          <section class="c4h-op-section">
            <p class="c4h-op-section-heading">{{ t.routeHeading }}</p>
            <ClientOnly>
              <MiniRouteMap />
            </ClientOnly>
            <p class="c4h-op-route-stops">
              Oslo · Gothenburg · Malmö · Copenhagen · Hamburg · Berlin ·
              Dresden · Prague · Vienna · Budapest · Belgrade · Sofia · Istanbul
              · Ankara · Adana · Gaziantep · Aleppo · Damascus
            </p>
          </section>

          <!-- QR code -->
          <div class="c4h-op-qr">
            <img
              v-if="!isDark"
              src="/assets/cycling4hope-qr-light.png"
              alt="cycling4hope.com"
              class="c4h-op-qr-img"
            />
            <img
              v-else
              src="/assets/cycling4hope-qr-dark.png"
              alt="cycling4hope.com"
              class="c4h-op-qr-img"
            />
            <span class="c4h-op-qr-label">cycling4hope.com</span>
          </div>
        </div>

        <!-- Right column -->
        <div class="c4h-op-col-right">
          <!-- Goals -->
          <section class="c4h-op-section">
            <p class="c4h-op-section-heading">{{ t.goalsHeading }}</p>
            <div class="c4h-op-goals">
              <div
                v-for="goal in t.goals"
                :key="goal.title"
                class="c4h-op-goal"
              >
                <span class="c4h-op-goal-icon">{{ goal.icon }}</span>
                <div>
                  <strong>{{ goal.title }}</strong>
                  <p>{{ goal.desc }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Sponsors -->
          <section class="c4h-op-section">
            <p class="c4h-op-section-heading">{{ t.sponsorHeading }}</p>
            <div class="c4h-op-sponsor">
              <p class="c4h-op-sponsor-sub" style="margin-top: 0">
                {{ t.sponsorWhy }}
              </p>
              <p class="c4h-op-sponsor-text">{{ t.sponsorWhyText }}</p>
              <p class="c4h-op-sponsor-sub">{{ t.sponsorOffer }}</p>
              <p class="c4h-op-sponsor-text">{{ t.sponsorOfferText }}</p>
              <ul class="c4h-op-sponsor-list">
                <li v-for="item in t.sponsorItems" :key="item">{{ item }}</li>
              </ul>
            </div>
          </section>

          <!-- Contact -->
          <section class="c4h-op-contact">
            <p class="c4h-op-section-heading">{{ t.contactHeading }}</p>
            <div class="c4h-op-contact-items">
              <div class="c4h-op-contact-item">
                ✉&nbsp; alaa.samiaka@gmail.com
              </div>
              <div class="c4h-op-contact-item">☎&nbsp; +47 969 71 519</div>
              <div class="c4h-op-contact-item">🌐&nbsp; cycling4hope.com</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
