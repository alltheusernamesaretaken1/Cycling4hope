<script setup>
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

const stats = [
  { value: '7.2 million', label: 'People in need of education support' },
  { value: '2.4 million', label: 'Children out of school' },
  { value: '3,700', label: 'Schools in need of rehabilitation or repair' },
  { value: '7,849', label: 'Non-operational schools nationwide' },
]

const schoolDetails = [
  { label: 'Main building', value: '2 floors — 12 classrooms, 4 administrative rooms' },
  { label: 'Annex', value: '1 floor — 4 classrooms, 1 administrative room' },
  { label: 'Outdoor area', value: "Caretaker's room, accessible student bathrooms, seating and planting areas, staff bathrooms" },
  { label: 'Courtyard', value: '1,000 m²' },
  { label: 'Garden', value: '850 m²' },
  { label: 'Students', value: '360 per cohort' },
  { label: 'Teachers', value: '16' },
]
</script>

<template>
  <main class="c4h-why">

    <!-- ── Hero ── -->
    <section class="c4h-why-hero">
      <div class="c4h-why-hero-text">
        <span class="c4h-phase-pill">Education in Syria</span>
        <h1>Why Syria</h1>
        <p class="c4h-why-lead">
          Syria's schools are not just buildings — they are the infrastructure of recovery.
          After more than a decade of conflict, rebuilding access to education is one of the
          most direct ways to restore stability and opportunity for an entire generation.
          This page sets out what the data shows and what it means on the ground.
        </p>
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
      <h2>Education in Syria</h2>
      <div class="c4h-why-stats-grid">
        <div v-for="s in stats" :key="s.label" class="c4h-stat-card">
          <strong>{{ s.value }}</strong>
          <p>{{ s.label }}</p>
        </div>
      </div>
      <p>
        Behind these figures are children sitting in classrooms built for thirty, shared by seventy.
        In neighborhoods across Damascus governorate, this is not an exception — it is the norm.
        In Al-Raqqa, 1,347 of 1,476 schools are non-operational. In Al-Hasakah, 2,071 out of 2,225.
        The buildings that remain standing are absorbing what the destroyed ones cannot.
      </p>
      <p>
        The people staffing them are often unqualified to do so. Teacher shortages have forced schools
        to hire staff with nothing more than a secondary school certificate. Those who are qualified
        leave — public sector salaries cannot compete with private schools, and so the gap widens
        between the schools that have resources and the ones that don't.
      </p>
      <p>
        As displaced families return and refugees settle, student numbers are expected to grow by
        15–20%. More children, fewer qualified teachers, less space.
      </p>
      <p>
        Rehabilitation changes this equation. Restoring a building matters — but restoring the
        conditions that allow a trained teacher to stay, and a child to learn without sitting on
        the floor, is what turns a structure back into a school.
      </p>
      <p class="c4h-why-source">
        Source: Syria HNO 2025, Molham Volunteer Team · Rapid needs assessments, Damascus &amp; Rural Damascus (Jan 2025), Homs (Aug 2025)
      </p>
    </section>

    <!-- ── The school ── -->
    <section class="c4h-why-section">
      <span class="c4h-why-geo-label">Damascus Governorate</span>
      <h2>The school we're supporting</h2>

      <div class="c4h-why-school-layout">

        <!-- Left: video + caption -->
        <div class="c4h-why-school-left">
          <video
            class="c4h-why-video"
            controls
            preload="metadata"
            src="/assets/page_why/WhatsApp%20Video%202026-04-08%20at%2007.53.11.mp4"
          ></video>
          <p class="c4h-why-caption">Current condition</p>
        </div>

        <!-- Right: facts + images + caption -->
        <div class="c4h-why-school-right">
          <dl class="c4h-why-school-dl">
            <div v-for="d in schoolDetails" :key="d.label" class="c4h-why-school-row">
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
          <p class="c4h-why-caption">Planned after rehabilitation</p>
        </div>

      </div>
    </section>

    <!-- ── What rehabilitation means ── -->
    <section class="c4h-why-section c4h-why-closing">
      <h2>What rehabilitation makes possible</h2>
      <p>
        A rehabilitated school provides more than repaired walls. It restores a predictable, safe
        environment where children can learn consistently and teachers can work with dignity.
        When classrooms are no longer overcrowded and basic facilities function, attendance improves
        and qualified staff are more likely to remain. The funds raised through this cycling journey
        go directly toward this kind of concrete, lasting change — school by school, community by community.
      </p>
    </section>

  </main>
</template>
