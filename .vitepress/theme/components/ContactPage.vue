<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const t = computed(() => {
  if (lang.value === 'ar') {
    return {
      heading: 'تواصل معنا',
      intro: 'هل لديك أسئلة حول الرحلة أو المسار، أو ترغب في المساهمة في المشروع؟ نحن نقدر جميع الاستفسارات.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      pressHeading: 'الصحافة والإعلام',
      pressText: 'هل أنت صحفي أو تعمل في وسائل الإعلام وتريد تغطية المشروع؟ لا تتردد في التواصل معنا عبر البريد الإلكتروني أو الهاتف – يسعدنا إجراء المقابلات والمحادثات التمهيدية.',
      socialHeading: 'تابعنا',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      heading: 'Kontakt oss',
      intro: 'Har du spørsmål om reisen, ruten eller ønsker du å bidra til prosjektet? Vi setter stor pris på alle henvendelser.',
      emailLabel: 'E-post',
      phoneLabel: 'Telefon',
      pressHeading: 'Presse & Media',
      pressText: 'Er du journalist eller jobber i media og ønsker å dekke prosjektet? Ta gjerne kontakt på e-post eller telefon – vi stiller gjerne opp til intervjuer og bakgrunnssamtaler.',
      socialHeading: 'Følg prosjektet',
    }
  }
  return {
    heading: 'Contact us',
    intro: 'Do you have questions about the journey, the route, or would you like to contribute to the project? We appreciate all enquiries.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    pressHeading: 'Press & Media',
    pressText: 'Are you a journalist or working in media and want to cover the project? Feel free to reach out by email or phone – we\'re happy to do interviews and background conversations.',
    socialHeading: 'Follow the project',
  }
})
</script>

<template>
  <main class="c4h-contact">

    <!-- ── Hero ── -->
    <section class="c4h-contact-hero">
      <h1>{{ t.heading }}</h1>
      <p class="c4h-contact-intro">{{ t.intro }}</p>
    </section>

    <!-- ── Grid ── -->
    <section class="c4h-contact-grid">

      <!-- Left: info + press -->
      <div class="c4h-contact-left">

        <div class="c4h-contact-info">
          <a :href="`mailto:Alaa.samiaka@gmail.com`" class="c4h-contact-info-item">
            <div class="c4h-contact-info-icon">✉</div>
            <div>
              <p class="c4h-contact-info-label">{{ t.emailLabel }}</p>
              <p class="c4h-contact-info-value">Alaa.samiaka@gmail.com</p>
            </div>
          </a>

          <a href="tel:+4796971519" class="c4h-contact-info-item">
            <div class="c4h-contact-info-icon">☎</div>
            <div>
              <p class="c4h-contact-info-label">{{ t.phoneLabel }}</p>
              <p class="c4h-contact-info-value">+47 969 71 519</p>
            </div>
          </a>
        </div>

        <div class="c4h-contact-social">
          <h3>{{ t.socialHeading }}</h3>
          <div class="c4h-contact-social-links">
            <a href="https://alaasame.com/" target="_blank" rel="noopener" class="c4h-contact-social-link">
              <div class="c4h-contact-social-icon c4h-contact-social-icon--web">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <p class="c4h-contact-social-link-label">Website</p>
                <p class="c4h-contact-social-link-name">alaasame.com</p>
              </div>
            </a>
            <a href="https://youtube.com/@eastwest-0?si=QyYIbhFK4JzJD6UH" target="_blank" rel="noopener" class="c4h-contact-social-link">
              <div class="c4h-contact-social-icon c4h-contact-social-icon--youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div>
                <p class="c4h-contact-social-link-label">YouTube</p>
                <p class="c4h-contact-social-link-name">@eastwest-0</p>
              </div>
            </a>
            <a href="https://www.instagram.com/westerners.arabic" target="_blank" rel="noopener" class="c4h-contact-social-link">
              <div class="c4h-contact-social-icon c4h-contact-social-icon--instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </div>
              <div>
                <p class="c4h-contact-social-link-label">Instagram</p>
                <p class="c4h-contact-social-link-name">@westerners.arabic</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/alaa-same/" target="_blank" rel="noopener" class="c4h-contact-social-link">
              <div class="c4h-contact-social-icon c4h-contact-social-icon--linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <p class="c4h-contact-social-link-label">LinkedIn</p>
                <p class="c4h-contact-social-link-name">Alaa Same</p>
              </div>
            </a>
          </div>
        </div>

        <div class="c4h-contact-press">
          <h3>{{ t.pressHeading }}</h3>
          <p>{{ t.pressText }}</p>
        </div>

      </div>

      <!-- Right: image -->
      <div class="c4h-contact-right">
        <img
          src="/assets/page_contact/alaa_interview_NRK.jpg"
          alt="Alaa Same – NRK interview"
          class="c4h-contact-right-img"
        />
      </div>

    </section>
  </main>
</template>
