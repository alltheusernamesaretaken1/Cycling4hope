<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const copy = computed(() => {
  if (lang.value === 'en-US') {
    return {
      title: 'Timeline',
      intro:
        'Our three-phase structure ensures transparency and strong humanitarian impact from preparation to final implementation.',
      phaseLabel1: 'Phase 01',
      phaseLabel2: 'Phase 02',
      phaseLabel3: 'Phase 03',
      phase1: 'Planning and Partnerships',
      phase2: 'Cycling Journey',
      phase3: 'Follow-up and Implementation',
      statusActive: 'Active',
      statusPlanned: 'Planned',
      p1Text:
        'Preparation includes route planning, partnerships, fundraising, and logistics to ensure safe and effective execution.',
      p2Text:
        'The ride from Oslo to Damascus. We cycle through Europe and the Middle East to build awareness and support.',
      p3Text:
        'Impact reporting, documentation, and follow-up of supported education initiatives for long-term sustainability.',
      p1Date: 'March - April 2026',
      p2Date: 'May - July 2026',
      p3Date: 'September - December 2026'
    }
  }

  if (lang.value === 'ar') {
    return {
      title: 'الخط الزمني',
      intro:
        'هيكلنا المكون من ثلاث مراحل يضمن الشفافية الكاملة وتحقيق أثر إنساني فعلي من التخطيط وحتى التنفيذ.',
      phaseLabel1: 'المرحلة 01',
      phaseLabel2: 'المرحلة 02',
      phaseLabel3: 'المرحلة 03',
      phase1: 'التخطيط والشراكات',
      phase2: 'رحلة الدراجات',
      phase3: 'المتابعة والتنفيذ',
      statusActive: 'قيد التنفيذ',
      statusPlanned: 'مخطط',
      p1Text:
        'تشمل التحضيرات تخطيط المسار والشراكات وجمع التبرعات واللوجستيات لضمان تنفيذ آمن وفعال.',
      p2Text:
        'الرحلة من أوسلو إلى دمشق عبر أوروبا والشرق الأوسط لزيادة الوعي وحشد الدعم.',
      p3Text:
        'تقارير النتائج وتوثيق الأثر والمتابعة المباشرة لمبادرات التعليم لضمان الاستدامة.',
      p1Date: 'مارس - أبريل 2026',
      p2Date: 'مايو - يوليو 2026',
      p3Date: 'سبتمبر - ديسمبر 2026'
    }
  }

  return {
    title: 'Tidslinje',
    intro:
      'Vår tre-fase struktur sikrer full åpenhet og stor humanitær effekt gjennom hele prosjektet, fra forberedelser til implementering.',
    phaseLabel1: 'Fase 01',
    phaseLabel2: 'Fase 02',
    phaseLabel3: 'Fase 03',
    phase1: 'Planlegging og partnerskap',
    phase2: 'Sykkelreisen',
    phase3: 'Oppfølging og implementering',
    statusActive: 'Pågår',
    statusPlanned: 'Planlagt',
    p1Text:
      'Omfattende forberedelser med ruteplanlegging, partnerskap, innsamling og logistikk for trygg og effektiv gjennomføring.',
    p2Text:
      'Selve reisen fra Oslo til Damaskus. Vi sykler gjennom Europa og Midtøsten for å bygge engasjement og samle støtte.',
    p3Text:
      'Rapportering av resultater, dokumentasjon av effekt og oppfølging av støttede utdanningsinitiativer.',
    p1Date: 'Mars - April 2026',
    p2Date: 'Mai - Juli 2026',
    p3Date: 'September - Desember 2026'
  }
})
</script>

<template>
  <main class="c4h-tl-page">
    <div class="c4h-tl-wrap">
      <header class="c4h-tl-hero">
        <h1>{{ copy.title }}</h1>
        <p>{{ copy.intro }}</p>
      </header>

      <section class="c4h-tl-content">
        <div class="c4h-tl-line" aria-hidden="true"></div>

        <article class="c4h-tl-item c4h-tl-item-active">
          <div class="c4h-tl-marker" aria-hidden="true">
            <span>●</span>
          </div>
          <div class="c4h-tl-card">
            <div class="c4h-tl-card-head">
              <div>
                <span class="c4h-tl-phase-id">{{ copy.phaseLabel1 }}</span>
                <h2>{{ copy.phase1 }}</h2>
              </div>
              <span class="c4h-tl-status c4h-tl-status-active">{{ copy.statusActive }}</span>
            </div>
            <p class="c4h-tl-text">{{ copy.p1Text }}</p>
            <p class="c4h-tl-date">{{ copy.p1Date }}</p>
          </div>
        </article>

        <article class="c4h-tl-item">
          <div class="c4h-tl-marker c4h-tl-marker-soft" aria-hidden="true">
            <span>🚴</span>
          </div>
          <div class="c4h-tl-card c4h-tl-card-soft">
            <div class="c4h-tl-card-head">
              <div>
                <span class="c4h-tl-phase-id">{{ copy.phaseLabel2 }}</span>
                <h2>{{ copy.phase2 }}</h2>
              </div>
              <span class="c4h-tl-status">{{ copy.statusPlanned }}</span>
            </div>
            <p class="c4h-tl-text">{{ copy.p2Text }}</p>
            <p class="c4h-tl-date">{{ copy.p2Date }}</p>
          </div>
        </article>

        <article class="c4h-tl-item">
          <div class="c4h-tl-marker c4h-tl-marker-soft" aria-hidden="true">
            <span>✓</span>
          </div>
          <div class="c4h-tl-card c4h-tl-card-soft">
            <div class="c4h-tl-card-head">
              <div>
                <span class="c4h-tl-phase-id">{{ copy.phaseLabel3 }}</span>
                <h2>{{ copy.phase3 }}</h2>
              </div>
              <span class="c4h-tl-status">{{ copy.statusPlanned }}</span>
            </div>
            <p class="c4h-tl-text">{{ copy.p3Text }}</p>
            <p class="c4h-tl-date">{{ copy.p3Date }}</p>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>
