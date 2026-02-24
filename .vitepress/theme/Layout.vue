<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- Footer injected AFTER page content -->
    <template #layout-bottom>
      <footer class="c4h-footer">
        <div class="c4h-footer-inner">

          <div class="c4h-footer-brand">
            <h3>Cycling from Oslo to Damascus</h3>
            <p>
              Et uavhengig initiativ for å støtte utdanning og skoleprosjekter i Syria.
            </p>
          </div>

          <div class="c4h-footer-links">
            <a href="/om-prosjektet">Om prosjektet</a>
            <a href="/tidslinje">Tidslinje</a>
            <a href="/media">Media</a>
            <a href="/kontakt">Kontakt</a>
          </div>

        </div>

        <div class="c4h-footer-bottom">
          © {{ new Date().getFullYear() }} Cycling4Hope
        </div>
      </footer>
    </template>
  </Layout>
</template>