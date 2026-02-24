<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const copy = computed(() => {
  if (lang.value === 'ar') {
    return {
      heroTitle: 'Journey of Purpose',
      heroText:
        'A structured documentation of the journey from Oslo to Damascus. Planning, execution, and the human stories behind each kilometer.',
      phase1: 'Phase 1 - Planning and Partnerships',
      phase2: 'Phase 2 - Cycling Journey',
      phase3: 'Phase 3 - Follow-up and Implementation',
      milestoneLabel: 'Milestone',
      m1Title: 'Route Mapping',
      m1Text: 'Defining a safe and realistic path through Europe and Turkey.',
      m1Card: 'Routes, elevation profile, weather windows, and border constraints.',
      m2Title: 'Sponsorship Acquisition',
      m2Text: 'Building ethical partnerships to fund both journey and aid impact.',
      m2Card: 'Partner outreach, media package, and transparent contribution model.',
      m3Title: 'Logistics and Gear',
      m3Text: 'Finalizing permits, bike setup, repair strategy, and checkpoints.',
      m3Card: 'Cross-border documentation, emergency contacts, and route backups.',
      oslo: 'Oslo, Norway',
      damascus: 'Damascus, Syria',
      startDate: 'Start Date: 12.05.2024',
      endDate: 'Arrival: 15.08.2024',
      j1Title: '01 - The European Heartland',
      j1Text: 'Germany and Austria. The first 1,500km through forests and alpine passes.',
      j2Title: '02 - The Balkans',
      j2Text: 'Rugged terrain and hospitality, heading toward Turkey via Thrace.',
      p3c1Title: 'Project Reporting',
      p3c1Text: 'Publish impact reports for donors, partners, and communities.',
      p3c2Title: 'Cultural Dialogue',
      p3c2Text: 'Photo and story exhibitions connecting Oslo and Damascus.',
      p3c3Title: 'Grant Distribution',
      p3c3Text: 'Transfer funds to trusted local NGOs supporting education projects.'
    }
  }

  if (lang.value === 'en-US') {
    return {
      heroTitle: 'Journey of Purpose',
      heroText:
        'A structured documentation of the journey from Oslo to Damascus. Planning, execution, and the human stories behind each kilometer.',
      phase1: 'Phase 1 - Planning and Partnerships',
      phase2: 'Phase 2 - Cycling Journey',
      phase3: 'Phase 3 - Follow-up and Implementation',
      milestoneLabel: 'Milestone',
      m1Title: 'Route Mapping',
      m1Text: 'Defining a safe and realistic path through Europe and Turkey.',
      m1Card: 'Routes, elevation profile, weather windows, and border constraints.',
      m2Title: 'Sponsorship Acquisition',
      m2Text: 'Building ethical partnerships to fund both journey and aid impact.',
      m2Card: 'Partner outreach, media package, and transparent contribution model.',
      m3Title: 'Logistics and Gear',
      m3Text: 'Finalizing permits, bike setup, repair strategy, and checkpoints.',
      m3Card: 'Cross-border documentation, emergency contacts, and route backups.',
      oslo: 'Oslo, Norway',
      damascus: 'Damascus, Syria',
      startDate: 'Start Date: 12.05.2024',
      endDate: 'Arrival: 15.08.2024',
      j1Title: '01 - The European Heartland',
      j1Text: 'Germany and Austria. The first 1,500km through forests and alpine passes.',
      j2Title: '02 - The Balkans',
      j2Text: 'Rugged terrain and hospitality, heading toward Turkey via Thrace.',
      p3c1Title: 'Project Reporting',
      p3c1Text: 'Publish impact reports for donors, partners, and communities.',
      p3c2Title: 'Cultural Dialogue',
      p3c2Text: 'Photo and story exhibitions connecting Oslo and Damascus.',
      p3c3Title: 'Grant Distribution',
      p3c3Text: 'Transfer funds to trusted local NGOs supporting education projects.'
    }
  }

  return {
    heroTitle: 'Reise med mening',
    heroText:
      'En strukturert dokumentasjon av reisen fra Oslo til Damaskus, fra planlegging til gjennomforing og menneskene bak hver kilometer.',
    phase1: 'Fase 1 - Planlegging og partnerskap',
    phase2: 'Fase 2 - Sykkelreisen',
    phase3: 'Fase 3 - Oppfolging og gjennomforing',
    milestoneLabel: 'Milepael',
    m1Title: 'Ruteplanlegging',
    m1Text: 'Definerer en trygg og realistisk rute gjennom Europa og Tyrkia.',
    m1Card: 'Ruter, hoydeprofil, vaervinduer og grensekrav.',
    m2Title: 'Sponsorer og samarbeid',
    m2Text: 'Bygger etiske partnerskap som stotter reisen og hjelpearbeidet.',
    m2Card: 'Partnerdialog, mediepakke og en transparent bidragsmodell.',
    m3Title: 'Logistikk og utstyr',
    m3Text: 'Ferdigstiller tillatelser, sykkeloppsett og sjekkpunkter.',
    m3Card: 'Grensedokumentasjon, nodkontakter og alternative ruter.',
    oslo: 'Oslo, Norge',
    damascus: 'Damaskus, Syria',
    startDate: 'Startdato: 12.05.2024',
    endDate: 'Ankomst: 15.08.2024',
    j1Title: '01 - Europa',
    j1Text: 'Tyskland og Osterrike. De forste 1500 km gjennom skog og alpint terreng.',
    j2Title: '02 - Balkan',
    j2Text: 'Kupert terreng og gjestfrihet pa vei mot Tyrkia via Trakia.',
    p3c1Title: 'Prosjektrapportering',
    p3c1Text: 'Publisering av tydelige effektrapporter for givere og partnere.',
    p3c2Title: 'Kulturell dialog',
    p3c2Text: 'Foto- og historieutstillinger som kobler Oslo og Damaskus.',
    p3c3Title: 'Fordeling av midler',
    p3c3Text: 'Overforing av midler til lokale NGO-er som stotter utdanning.'
  }
})
</script>

<template>
  <div class="c4h-timeline-page">
    <section class="c4h-timeline-hero">
      <h1>{{ copy.heroTitle }}</h1>
      <p>{{ copy.heroText }}</p>
    </section>

    <section class="c4h-phase">
      <div class="c4h-phase-pill">{{ copy.phase1 }}</div>

      <div class="c4h-timeline-track" aria-hidden="true"></div>

      <article class="c4h-milestone">
        <div class="c4h-milestone-copy">
          <h3>{{ copy.m1Title }}</h3>
          <p>{{ copy.m1Text }}</p>
        </div>
        <div class="c4h-dot" aria-hidden="true"></div>
        <div class="c4h-card">
          <h4>{{ copy.milestoneLabel }} 01</h4>
          <p>{{ copy.m1Card }}</p>
        </div>
      </article>

      <article class="c4h-milestone c4h-milestone-reverse">
        <div class="c4h-milestone-copy">
          <h3>{{ copy.m2Title }}</h3>
          <p>{{ copy.m2Text }}</p>
        </div>
        <div class="c4h-dot" aria-hidden="true"></div>
        <div class="c4h-card">
          <h4>{{ copy.milestoneLabel }} 02</h4>
          <p>{{ copy.m2Card }}</p>
        </div>
      </article>

      <article class="c4h-milestone">
        <div class="c4h-milestone-copy">
          <h3>{{ copy.m3Title }}</h3>
          <p>{{ copy.m3Text }}</p>
        </div>
        <div class="c4h-dot" aria-hidden="true"></div>
        <div class="c4h-card">
          <h4>{{ copy.milestoneLabel }} 03</h4>
          <p>{{ copy.m3Card }}</p>
        </div>
      </article>
    </section>

    <section class="c4h-phase">
      <div class="c4h-phase-pill">{{ copy.phase2 }}</div>

      <div class="c4h-journey-endpoints">
        <div>
          <p class="c4h-endpoint-label">{{ copy.oslo }}</p>
          <p class="c4h-endpoint-date">{{ copy.startDate }}</p>
        </div>
        <div>
          <p class="c4h-endpoint-label">{{ copy.damascus }}</p>
          <p class="c4h-endpoint-date">{{ copy.endDate }}</p>
        </div>
      </div>

      <div class="c4h-journey-grid">
        <article class="c4h-card">
          <h4>{{ copy.j1Title }}</h4>
          <p>{{ copy.j1Text }}</p>
        </article>
        <article class="c4h-card">
          <h4>{{ copy.j2Title }}</h4>
          <p>{{ copy.j2Text }}</p>
        </article>
      </div>
    </section>

    <section class="c4h-phase">
      <div class="c4h-phase-pill">{{ copy.phase3 }}</div>
      <div class="c4h-journey-grid c4h-journey-grid-3">
        <article class="c4h-card">
          <h4>{{ copy.p3c1Title }}</h4>
          <p>{{ copy.p3c1Text }}</p>
        </article>
        <article class="c4h-card">
          <h4>{{ copy.p3c2Title }}</h4>
          <p>{{ copy.p3c2Text }}</p>
        </article>
        <article class="c4h-card">
          <h4>{{ copy.p3c3Title }}</h4>
          <p>{{ copy.p3c3Text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
