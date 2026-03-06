<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'

const { lang, isDark } = useData()

const mapEl = ref(null)
let mapInstance = null
const markers = []

const stops = [
  { name: 'Oslo',       country: { en: 'Norway',      no: 'Norge',     ar: 'النرويج'    }, lat: 59.9139, lng: 10.7522, desc: { en: 'Starting point – April 2025.', no: 'Startpunkt – april 2025.', ar: 'نقطة البداية – أبريل 2025.' } },
  { name: 'Gothenburg', country: { en: 'Sweden',       no: 'Sverige',   ar: 'السويد'     }, lat: 57.7089, lng: 11.9746, desc: { en: 'Planned stop in Sweden.',        no: 'Planlagt stopp i Sverige.',  ar: 'توقف مخطط في السويد.' } },
  { name: 'Malmö',      country: { en: 'Sweden',       no: 'Sverige',   ar: 'السويد'     }, lat: 55.6050, lng: 13.0038, desc: { en: 'Planned stop before Denmark.',   no: 'Planlagt stopp før Danmark.', ar: 'توقف مخطط قبل الدنمارك.' } },
  { name: 'Copenhagen', country: { en: 'Denmark',      no: 'Danmark',   ar: 'الدنمارك'   }, lat: 55.6761, lng: 12.5683, desc: { en: 'Planned stop in Denmark.',        no: 'Planlagt stopp i Danmark.',  ar: 'توقف مخطط في الدنمارك.' } },
  { name: 'Hamburg',    country: { en: 'Germany',      no: 'Tyskland',  ar: 'ألمانيا'    }, lat: 53.5753, lng: 10.0153, desc: { en: 'Planned stop in Germany.',        no: 'Planlagt stopp i Tyskland.', ar: 'توقف مخطط في ألمانيا.' } },
  { name: 'Berlin',     country: { en: 'Germany',      no: 'Tyskland',  ar: 'ألمانيا'    }, lat: 52.5200, lng: 13.4050, desc: { en: 'Planned stop in Germany.',        no: 'Planlagt stopp i Tyskland.', ar: 'توقف مخطط في ألمانيا.' } },
  { name: 'Dresden',    country: { en: 'Germany',      no: 'Tyskland',  ar: 'ألمانيا'    }, lat: 51.0504, lng: 13.7373, desc: { en: 'Planned stop toward Central Europe.', no: 'Planlagt stopp mot Sentral-Europa.', ar: 'توقف مخطط نحو وسط أوروبا.' } },
  { name: 'Prague',     country: { en: 'Czech Rep.',   no: 'Tsjekkia',  ar: 'تشيكيا'     }, lat: 50.0755, lng: 14.4378, desc: { en: 'Planned stop in Central Europe.', no: 'Planlagt stopp i Sentral-Europa.', ar: 'توقف مخطط في وسط أوروبا.' } },
  { name: 'Vienna',     country: { en: 'Austria',      no: 'Østerrike', ar: 'النمسا'     }, lat: 48.2082, lng: 16.3738, desc: { en: 'Planned stop in Central Europe.', no: 'Planlagt stopp i Sentral-Europa.', ar: 'توقف مخطط في وسط أوروبا.' } },
  { name: 'Budapest',   country: { en: 'Hungary',      no: 'Ungarn',    ar: 'المجر'      }, lat: 47.4979, lng: 19.0402, desc: { en: 'Planned stop in Central Europe.', no: 'Planlagt stopp i Sentral-Europa.', ar: 'توقف مخطط في وسط أوروبا.' } },
  { name: 'Belgrade',   country: { en: 'Serbia',       no: 'Serbia',    ar: 'صربيا'      }, lat: 44.8176, lng: 20.4633, desc: { en: 'Planned stop heading south.',     no: 'Planlagt stopp på vei sørover.', ar: 'توقف مخطط في الطريق جنوباً.' } },
  { name: 'Sofia',      country: { en: 'Bulgaria',     no: 'Bulgaria',  ar: 'بلغاريا'    }, lat: 42.6977, lng: 23.3219, desc: { en: 'Planned stop before Turkey.',     no: 'Planlagt stopp før Tyrkia.',  ar: 'توقف مخطط قبل تركيا.' } },
  { name: 'Istanbul',   country: { en: 'Turkey',       no: 'Tyrkia',    ar: 'تركيا'      }, lat: 41.0082, lng: 28.9784, desc: { en: 'Gateway to Turkey.',              no: 'Inngang til Tyrkia.',         ar: 'بوابة تركيا.' } },
  { name: 'Ankara',     country: { en: 'Turkey',       no: 'Tyrkia',    ar: 'تركيا'      }, lat: 39.9334, lng: 32.8597, desc: { en: 'Planned stop in Turkey.',         no: 'Planlagt stopp i Tyrkia.',   ar: 'توقف مخطط في تركيا.' } },
  { name: 'Adana',      country: { en: 'Turkey',       no: 'Tyrkia',    ar: 'تركيا'      }, lat: 37.0000, lng: 35.3213, desc: { en: 'Planned stop in southern Turkey.', no: 'Planlagt stopp i Sør-Tyrkia.', ar: 'توقف مخطط في جنوب تركيا.' } },
  { name: 'Gaziantep',  country: { en: 'Turkey',       no: 'Tyrkia',    ar: 'تركيا'      }, lat: 37.0662, lng: 37.3833, desc: { en: 'Planned stop near the border.',  no: 'Planlagt stopp nær grensen.', ar: 'توقف مخطط قرب الحدود.' } },
  { name: 'Aleppo',     country: { en: 'Syria',        no: 'Syria',     ar: 'سوريا'      }, lat: 36.2021, lng: 37.1343, desc: { en: 'Planned stop in Syria.',          no: 'Planlagt stopp i Syria.',    ar: 'توقف مخطط في سوريا.' } },
  { name: 'Damascus',   country: { en: 'Syria',        no: 'Syria',     ar: 'سوريا'      }, lat: 33.5138, lng: 36.2765, desc: { en: 'Destination – Damascus.',         no: 'Målpunkt – Damaskus.',       ar: 'الوجهة – دمشق.' } },
]

const locale = computed(() => {
  if (lang.value === 'ar') return 'ar'
  if (lang.value === 'no-NO') return 'no'
  return 'en'
})

const ui = computed(() => {
  if (lang.value === 'ar') return {
    heading: 'المسار', sub: 'رحلة دراجة منفردة مخططة تمتد ~5500 كم عبر أوروبا إلى سوريا – عبر 11 دولة على مدى نحو 3 أشهر. قد تتطور المسار والجدول الزمني مع تقدم الرحلة.',
    stats: [{ val: '~5 500', label: 'كيلومتر' }, { val: '11', label: 'دولة' }, { val: '18', label: 'توقف' }, { val: '~3 أشهر', label: 'المدة' }],
  }
  if (lang.value === 'no-NO') return {
    heading: 'Rute', sub: 'En planlagt solo sykkelreise på omtrent 5 500 km gjennom Europa til Syria – gjennom 11 land over omtrent 3 måneder. Rute og tidslinje kan endre seg underveis.',
    stats: [{ val: '~5 500', label: 'Kilometer' }, { val: '11', label: 'Land' }, { val: '18', label: 'Stopp' }, { val: '~3 mnd', label: 'Varighet' }],
  }
  return {
    heading: 'Route', sub: 'A planned solo cycling journey of approximately 5,500 km across Europe to Syria — through 11 countries over roughly 3 months. The route and timeline may evolve as the journey progresses.',
    stats: [{ val: '~5,500', label: 'Kilometres' }, { val: '11', label: 'Countries' }, { val: '18', label: 'Stops' }, { val: '~3 mo', label: 'Duration' }],
  }
})

function makeIcon(L, type) {
  const isEndpoint = type === 'start' || type === 'end'
  const size   = isEndpoint ? 14 : 9
  const border = isEndpoint ? 3 : 2
  const fill   = isEndpoint ? '#F1E6CF' : '#F3F2EF'
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${fill};border:${border}px solid #0F2A44;box-shadow:0 1px 6px rgba(15,42,68,0.25);"></div>`,
    iconSize:    [size, size],
    iconAnchor:  [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 4)],
  })
}

onMounted(async () => {
  const L = (await import('leaflet')).default
  await import('leaflet/dist/leaflet.css')

  const latlngs = stops.map(s => [s.lat, s.lng])
  const loc = locale.value

  mapInstance = L.map(mapEl.value, {
    center: [48, 22],
    zoom: 4,
    zoomControl: true,
    scrollWheelZoom: false,
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(mapInstance)

  // Shadow + main line
  L.polyline(latlngs, { color: 'rgba(15,42,68,0.12)', weight: 8, lineCap: 'round', lineJoin: 'round' }).addTo(mapInstance)
  L.polyline(latlngs, { color: '#0F2A44', weight: 3, lineCap: 'round', lineJoin: 'round' }).addTo(mapInstance)

  stops.forEach((stop, i) => {
    const type = i === 0 ? 'start' : i === stops.length - 1 ? 'end' : 'stop'
    const countryName = stop.country[loc] || stop.country.en
    const desc = stop.desc[loc] || stop.desc.en
    const marker = L.marker([stop.lat, stop.lng], { icon: makeIcon(L, type) })
      .addTo(mapInstance)
      .bindPopup(`
        <div class="c4h-map-popup">
          <div class="c4h-map-popup-country">${countryName}</div>
          <div class="c4h-map-popup-name">${stop.name}</div>
          <div class="c4h-map-popup-desc">${desc}</div>
        </div>
      `, { maxWidth: 220, closeButton: false })
    markers.push(marker)
  })

  mapInstance.fitBounds(L.latLngBounds(latlngs).pad(0.06))
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
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

        <!-- Right: map + stop pills -->
        <div class="c4h-routemap-right">
          <div class="c4h-routemap-wrap">
            <div ref="mapEl" class="c4h-routemap-map"></div>
          </div>
          <div class="c4h-routemap-pills">
            <button
              v-for="(stop, i) in stops"
              :key="stop.name"
              class="c4h-routemap-pill"
              :class="{ 'is-start': i === 0, 'is-end': i === stops.length - 1 }"
              @click="() => { mapInstance.setView([stop.lat, stop.lng], 7, { animate: true }); markers[i].openPopup() }"
            >
              <span class="c4h-routemap-dot"></span>
              {{ stop.name }}
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
