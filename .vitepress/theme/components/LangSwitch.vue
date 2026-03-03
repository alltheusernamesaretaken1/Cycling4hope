<script setup>
import { useData } from 'vitepress'

const { lang } = useData()

const langs = [
  { label: 'EN', value: 'en-US', link: '/' },
  { label: 'NO', value: 'no-NO', link: '/no/' },
  { label: 'AR', value: 'ar', link: '/ar/' },
]
</script>

<template>
  <div class="c4h-lang-switch">
    <a
      v-for="l in langs"
      :key="l.value"
      :href="l.link"
      class="c4h-lang-btn"
      :class="{ 'c4h-lang-btn--active': lang === l.value }"
    >{{ l.label }}</a>
  </div>
</template>
