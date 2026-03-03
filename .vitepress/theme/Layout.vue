<script setup>
import DefaultTheme from 'vitepress/theme'
import LangSwitch from './components/LangSwitch.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <LangSwitch />
    </template>

    <template #layout-bottom>
      <footer class="c4h-footer">
        <div class="c4h-footer-inner">
          <div class="c4h-footer-brand">
            <h3>Sykling fra Oslo til Damaskus</h3>
            <p>
              Et uavhengig initiativ for å støtte utdanning og skoleprosjekter i Syria.
            </p>
          </div>

          <div class="c4h-footer-links">
            <a href="/about">About</a>
            <a href="/timeline">Timeline</a>
            <a href="/media">Media</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div class="c4h-footer-bottom">
          © {{ new Date().getFullYear() }} Cycling4Hope
        </div>
      </footer>
    </template>
  </Layout>
</template>
