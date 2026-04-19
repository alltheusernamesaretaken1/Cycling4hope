<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const images = [
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.32.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.33.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.35.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.36.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.37.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.39.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.40.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.41.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.43.jpeg',
  '/assets/page_why/WhatsApp%20Image%202026-04-08%20at%2007.53.44.jpeg',
]

const schoolImages = images.slice(0, 6)

const t = computed(() => {
  if (lang.value === 'no-NO') {
    return {
      pill: 'Utdanning i Syria',
      heroTitle: 'Hvorfor Syria',
      heroLead: 'Syriske skoler er ikke bare bygninger – de er grunnmuren for gjenoppbygging. Etter mer enn et tiår med konflikt er det å gjenopprette tilgangen til utdanning en av de mest direkte måtene å gi stabilitet og muligheter tilbake til en hel generasjon. Denne siden viser hva tallene forteller – og hva det betyr i praksis.',
      eduTitle: 'Utdanning i Syria',
      stats: [
        { value: '7,2 millioner', label: 'Mennesker som trenger utdanningsstøtte' },
        { value: '2,4 millioner', label: 'Barn som ikke går på skole' },
        { value: '3 700', label: 'Skoler som trenger rehabilitering eller reparasjon' },
        { value: '7 849', label: 'Ikke-operative skoler i landet' },
      ],
      eduP1: 'Bak disse tallene er det barn som sitter i klasserom bygget for tretti, delt av sytti. I nabolag rundt Damaskus-guvernoratet er dette ikke et unntak – det er normen. I Al-Raqqa er 1 347 av 1 476 skoler ikke operative. I Al-Hasakah er det 2 071 av 2 225. Bygningene som er igjen absorberer det de ødelagte ikke kan.',
      eduP2: 'De som bemanner dem er ofte ukvalifiserte. Lærermangel har tvunget skoler til å ansette personale med ingenting mer enn vitnemål fra videregående skole. De som er kvalifiserte forlater – offentlige lønninger kan ikke konkurrere med privatskoler, og dermed øker gapet mellom skoler som har ressurser og de som ikke har det.',
      eduP3: 'Etter hvert som fordrevne familier vender tilbake og flyktninger slår seg ned, forventes elevtallet å vokse med 15–20 %. Flere barn, færre kvalifiserte lærere, mindre plass.',
      eduP4: 'Rehabilitering endrer denne ligningen. Å gjenopprette en bygning er viktig – men å gjenopprette forholdene som lar en utdannet lærer bli, og et barn lære uten å sitte på gulvet, er det som gjør en struktur til en skole igjen.',
      source: 'Kilde: Syria HNO 2025, Molham Volunteer Team · Raske behovsvurderinger, Damaskus og landlig Damaskus (jan. 2025), Homs (aug. 2025)',
      geoLabel: 'Damaskus-guvernoratet',
      schoolTitle: 'Skolen vi støtter',
      schoolDetails: [
        { label: 'Hovedbygg', value: '2 etasjer — 12 klasserom, 4 administrative rom' },
        { label: 'Tilbygg', value: '1 etasje — 4 klasserom, 1 administrativt rom' },
        { label: 'Uteområde', value: 'Vaktmesterrom, tilgjengelige elevtoaletter, sitteplasser og beplantningsområder, personaltoaletter' },
        { label: 'Gårdsplass', value: '1 000 m²' },
        { label: 'Hage', value: '850 m²' },
        { label: 'Elever', value: '360 per kull' },
        { label: 'Lærere', value: '16' },
      ],
      captionBefore: 'Nåværende tilstand',
      captionAfter: 'Planlagt etter rehabilitering',
      rehabTitle: 'Hva rehabilitering gjør mulig',
      rehabP: 'En rehabilitert skole gir mer enn reparerte vegger. Den gjenoppretter et forutsigbart, trygt miljø der barn kan lære konsekvent og lærere kan arbeide med verdighet. Når klasserom ikke lenger er overfylte og grunnleggende fasiliteter fungerer, forbedres oppmøtet og kvalifiserte ansatte er mer tilbøyelige til å bli. Midlene som samles inn gjennom denne sykkelreisen går direkte til denne typen konkret, varig forandring – skole for skole, samfunn for samfunn.',
    }
  }
  if (lang.value === 'ar') {
    return {
      pill: 'التعليم في سوريا',
      heroTitle: 'لماذا سوريا',
      heroLead: 'المدارس السورية ليست مجرد مبانٍ — إنها البنية التحتية للتعافي. بعد أكثر من عقد من النزاع، يُعدّ إعادة الوصول إلى التعليم من أكثر الطرق مباشرةً لاستعادة الاستقرار والفرص لجيل بأكمله. تعرض هذه الصفحة ما تقوله البيانات وما يعنيه ذلك على أرض الواقع.',
      eduTitle: 'التعليم في سوريا',
      stats: [
        { value: '7.2 مليون', label: 'شخص يحتاج إلى دعم تعليمي' },
        { value: '2.4 مليون', label: 'طفل خارج المدرسة' },
        { value: '3,700', label: 'مدرسة تحتاج إلى تأهيل أو إصلاح' },
        { value: '7,849', label: 'مدرسة غير فاعلة على مستوى البلاد' },
      ],
      eduP1: 'خلف هذه الأرقام أطفال يجلسون في فصول دراسية بُنيت لثلاثين طالباً، يتشاركها سبعون. في أحياء محافظة دمشق، هذا ليس استثناءً — بل هو القاعدة. في الرقة، 1,347 من أصل 1,476 مدرسة غير فاعلة. وفي الحسكة، 2,071 من أصل 2,225. المباني القائمة تستوعب ما لا تستطيع المدمرة تحمله.',
      eduP2: 'من يعمل فيها كثيراً ما يكون غير مؤهل. دفع نقص المعلمين المدارسَ إلى توظيف موظفين لا يحملون أكثر من شهادة الثانوية العامة. أما المؤهلون فيرحلون — لأن رواتب القطاع العام لا تستطيع منافسة المدارس الخاصة، مما يوسّع الفجوة بين المدارس التي تمتلك موارد وتلك التي لا تمتلكها.',
      eduP3: 'مع عودة الأسر النازحة وتوطّن اللاجئين، من المتوقع أن يرتفع عدد الطلاب بنسبة 15–20%. مزيد من الأطفال، وعدد أقل من المعلمين المؤهلين، ومساحة أضيق.',
      eduP4: 'التأهيل يغيّر هذه المعادلة. إعادة المبنى مهمة — لكن استعادة الظروف التي تُتيح لمعلم مدرَّب البقاء، ولطفل التعلم دون الجلوس على الأرض، هي ما يحوّل المبنى من جديد إلى مدرسة.',
      source: 'المصدر: احتياجات سوريا الإنسانية 2025، فريق ملهم التطوعي · تقييمات احتياجات سريعة، دمشق وريف دمشق (يناير 2025)، حمص (أغسطس 2025)',
      geoLabel: 'محافظة دمشق',
      schoolTitle: 'المدرسة التي ندعمها',
      schoolDetails: [
        { label: 'المبنى الرئيسي', value: '2 طوابق — 12 فصلاً دراسياً، 4 غرف إدارية' },
        { label: 'الملحق', value: 'طابق واحد — 4 فصول دراسية، غرفة إدارية' },
        { label: 'المنطقة الخارجية', value: 'غرفة الحارس، دورات مياه طلابية مُيسَّرة، مناطق جلوس وزراعة، دورات مياه للموظفين' },
        { label: 'الفناء', value: '1,000 م²' },
        { label: 'الحديقة', value: '850 م²' },
        { label: 'الطلاب', value: '360 لكل دفعة' },
        { label: 'المعلمون', value: '16' },
      ],
      captionBefore: 'الحالة الراهنة',
      captionAfter: 'المخطط بعد التأهيل',
      rehabTitle: 'ما يتيحه التأهيل',
      rehabP: 'المدرسة المُؤهَّلة تقدم أكثر من جدران مُرمَّمة. إنها تستعيد بيئة آمنة ومنتظمة يتعلم فيها الأطفال بثبات ويعمل المعلمون بكرامة. حين لا تكون الفصول مكتظة وتعمل المرافق الأساسية، يتحسن الحضور ويميل المعلمون المؤهلون إلى البقاء. الأموال المجموعة عبر هذه الرحلة بالدراجة تذهب مباشرةً نحو هذا النوع من التغيير الملموس والدائم — مدرسةً تلو الأخرى، ومجتمعاً تلو الآخر.',
    }
  }
  return {
    pill: 'Education in Syria',
    heroTitle: 'Why Syria',
    heroLead: "Syria's schools are not just buildings — they are the infrastructure of recovery. After more than a decade of conflict, rebuilding access to education is one of the most direct ways to restore stability and opportunity for an entire generation. This page sets out what the data shows and what it means on the ground.",
    eduTitle: 'Education in Syria',
    stats: [
      { value: '7.2 million', label: 'People in need of education support' },
      { value: '2.4 million', label: 'Children out of school' },
      { value: '3,700', label: 'Schools in need of rehabilitation or repair' },
      { value: '7,849', label: 'Non-operational schools nationwide' },
    ],
    eduP1: "Behind these figures are children sitting in classrooms built for thirty, shared by seventy. In neighborhoods across Damascus governorate, this is not an exception — it is the norm. In Al-Raqqa, 1,347 of 1,476 schools are non-operational. In Al-Hasakah, 2,071 out of 2,225. The buildings that remain standing are absorbing what the destroyed ones cannot.",
    eduP2: "The people staffing them are often unqualified to do so. Teacher shortages have forced schools to hire staff with nothing more than a secondary school certificate. Those who are qualified leave — public sector salaries cannot compete with private schools, and so the gap widens between the schools that have resources and the ones that don't.",
    eduP3: "As displaced families return and refugees settle, student numbers are expected to grow by 15–20%. More children, fewer qualified teachers, less space.",
    eduP4: "Rehabilitation changes this equation. Restoring a building matters — but restoring the conditions that allow a trained teacher to stay, and a child to learn without sitting on the floor, is what turns a structure back into a school.",
    source: 'Source: Syria HNO 2025, Molham Volunteer Team · Rapid needs assessments, Damascus & Rural Damascus (Jan 2025), Homs (Aug 2025)',
    geoLabel: 'Damascus Governorate',
    schoolTitle: "The school we're supporting",
    schoolDetails: [
      { label: 'Main building', value: '2 floors — 12 classrooms, 4 administrative rooms' },
      { label: 'Annex', value: '1 floor — 4 classrooms, 1 administrative room' },
      { label: 'Outdoor area', value: "Caretaker's room, accessible student bathrooms, seating and planting areas, staff bathrooms" },
      { label: 'Courtyard', value: '1,000 m²' },
      { label: 'Garden', value: '850 m²' },
      { label: 'Students', value: '360 per cohort' },
      { label: 'Teachers', value: '16' },
    ],
    captionBefore: 'Current condition',
    captionAfter: 'Planned after rehabilitation',
    rehabTitle: 'What rehabilitation makes possible',
    rehabP: "A rehabilitated school provides more than repaired walls. It restores a predictable, safe environment where children can learn consistently and teachers can work with dignity. When classrooms are no longer overcrowded and basic facilities function, attendance improves and qualified staff are more likely to remain. The funds raised through this cycling journey go directly toward this kind of concrete, lasting change — school by school, community by community.",
  }
})
</script>

<template>
  <main class="c4h-why">

    <!-- ── Hero ── -->
    <section class="c4h-why-hero">
      <div class="c4h-why-hero-text">
        <span class="c4h-phase-pill">{{ t.pill }}</span>
        <h1>{{ t.heroTitle }}</h1>
        <p class="c4h-why-lead">{{ t.heroLead }}</p>
      </div>
      <div class="c4h-why-hero-img-wrap">
        <img
          src="/assets/page_why/the_cause_main.png"
          alt="The Cause"
          class="c4h-why-hero-img"
        />
      </div>
    </section>

    <!-- ── Education in Syria ── -->
    <section class="c4h-why-section c4h-why-no-border">
      <h2>{{ t.eduTitle }}</h2>
      <div class="c4h-why-stats-grid">
        <div v-for="s in t.stats" :key="s.label" class="c4h-stat-card">
          <strong>{{ s.value }}</strong>
          <p>{{ s.label }}</p>
        </div>
      </div>
      <p>{{ t.eduP1 }}</p>
      <p>{{ t.eduP2 }}</p>
      <p>{{ t.eduP3 }}</p>
      <p>{{ t.eduP4 }}</p>
      <p class="c4h-why-source">{{ t.source }}</p>
    </section>

    <!-- ── The school ── -->
    <section class="c4h-why-section">
      <span class="c4h-why-geo-label">{{ t.geoLabel }}</span>
      <h2>{{ t.schoolTitle }}</h2>

      <div class="c4h-why-school-layout">

        <!-- Left: video + caption -->
        <div class="c4h-why-school-left">
          <video
            class="c4h-why-video"
            controls
            preload="metadata"
            src="/assets/page_why/WhatsApp%20Video%202026-04-08%20at%2007.53.11.mp4"
          ></video>
          <p class="c4h-why-caption">{{ t.captionBefore }}</p>
        </div>

        <!-- Right: facts + images + caption -->
        <div class="c4h-why-school-right">
          <dl class="c4h-why-school-dl">
            <div v-for="d in t.schoolDetails" :key="d.label" class="c4h-why-school-row">
              <dt>{{ d.label }}</dt>
              <dd>{{ d.value }}</dd>
            </div>
          </dl>
          <div class="c4h-why-school-images">
            <img
              v-for="(img, i) in schoolImages"
              :key="i"
              :src="img"
              alt="School photo"
              class="c4h-why-gallery-img"
              loading="lazy"
            />
          </div>
          <p class="c4h-why-caption">{{ t.captionAfter }}</p>
        </div>

      </div>
    </section>

    <!-- ── What rehabilitation means ── -->
    <section class="c4h-why-section c4h-why-closing">
      <h2>{{ t.rehabTitle }}</h2>
      <p>{{ t.rehabP }}</p>
    </section>

  </main>
</template>
