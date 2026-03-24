<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const ui = computed(() => {
  if (lang.value === 'ar') return {
    heading: 'المسار', sub: 'رحلة دراجة منفردة مخططة تمتد ~5500 كم عبر أوروبا إلى سوريا – عبر 11 دولة على مدى نحو 3 أشهر. قد تتطور المسار والجدول الزمني مع تقدم الرحلة.',
    stats: [{ val: '5,497', label: 'كيلومتر' }, { val: '11', label: 'دولة' }, { val: '17', label: 'توقف' }, { val: '~3 أشهر', label: 'المدة' }],
  }
  if (lang.value === 'no-NO') return {
    heading: 'Rute', sub: 'En planlagt solo sykkelreise på 5 497 km gjennom Europa til Syria – gjennom 11 land over omtrent 3 måneder. Rute og tidslinje kan endre seg underveis.',
    stats: [{ val: '5,497', label: 'Kilometer' }, { val: '11', label: 'Land' }, { val: '17', label: 'Stopp' }, { val: '~3 mnd', label: 'Varighet' }],
  }
  return {
    heading: 'Route', sub: 'A planned solo cycling journey of 5,497 km across Europe to Syria — through 11 countries over roughly 3 months. The route and timeline may evolve as the journey progresses.',
    stats: [{ val: '5,497', label: 'Kilometres' }, { val: '11', label: 'Countries' }, { val: '17', label: 'Stops' }, { val: '~3 mo', label: 'Duration' }],
  }
})
</script>

<template>
  <section class="c4h-routemap">
    <div class="c4h-routemap-inner">

      <h2 class="c4h-routemap-heading">{{ ui.heading }}</h2>

      <div class="c4h-routemap-layout">

        <!-- Left: stats + text -->
        <div class="c4h-routemap-left">
          <div class="c4h-routemap-stats">
            <div v-for="stat in ui.stats" :key="stat.label" class="c4h-routemap-stat">
              <div class="c4h-routemap-stat-val">{{ stat.val }}</div>
              <div class="c4h-routemap-stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <p class="c4h-routemap-sub">{{ ui.sub }}</p>
        </div>

        <!-- Right: Komoot embed -->
        <div class="c4h-routemap-right">
          <div class="c4h-routemap-wrap">
            <iframe
              src="https://www.komoot.com/tour/2831402073/embed"
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              style="border-radius: var(--c4h-radius);"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
