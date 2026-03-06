<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mapEl = ref(null)
let mapInstance = null

const stops = [
  { lat: 59.9139, lng: 10.7522 },
  { lat: 57.7089, lng: 11.9746 },
  { lat: 55.6761, lng: 12.5683 },
  { lat: 53.5753, lng: 10.0153 },
  { lat: 52.5200, lng: 13.4050 },
  { lat: 51.0504, lng: 13.7373 },
  { lat: 50.0755, lng: 14.4378 },
  { lat: 48.2082, lng: 16.3738 },
  { lat: 47.4979, lng: 19.0402 },
  { lat: 44.8176, lng: 20.4633 },
  { lat: 42.6977, lng: 23.3219 },
  { lat: 41.0082, lng: 28.9784 },
  { lat: 39.9334, lng: 32.8597 },
  { lat: 37.0000, lng: 35.3213 },
  { lat: 37.0662, lng: 37.3833 },
  { lat: 36.2021, lng: 37.1343 },
  { lat: 33.5138, lng: 36.2765 },
]

onMounted(async () => {
  const L = (await import('leaflet')).default
  await import('leaflet/dist/leaflet.css')

  const latlngs = stops.map(s => [s.lat, s.lng])

  mapInstance = L.map(mapEl.value, {
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: false,
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(mapInstance)

  L.polyline(latlngs, { color: 'rgba(15,42,68,0.15)', weight: 6, lineCap: 'round', lineJoin: 'round' }).addTo(mapInstance)
  L.polyline(latlngs, { color: '#0F2A44', weight: 2.5, lineCap: 'round', lineJoin: 'round' }).addTo(mapInstance)

  // Start and end markers only
  const makeIcon = (fill) => L.divIcon({
    className: '',
    html: `<div style="width:10px;height:10px;border-radius:50%;background:${fill};border:2px solid #0F2A44;box-shadow:0 1px 4px rgba(15,42,68,0.3);"></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  })

  L.marker([stops[0].lat, stops[0].lng], { icon: makeIcon('#F1E6CF') }).addTo(mapInstance)
  L.marker([stops[stops.length - 1].lat, stops[stops.length - 1].lng], { icon: makeIcon('#F1E6CF') }).addTo(mapInstance)

  mapInstance.fitBounds(L.latLngBounds(latlngs).pad(0.01))
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
})
</script>

<template>
  <div ref="mapEl" class="c4h-mini-routemap"></div>
</template>
