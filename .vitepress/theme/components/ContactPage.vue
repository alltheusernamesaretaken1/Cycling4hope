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
    }
  }
  return {
    heading: 'Contact us',
    intro: 'Do you have questions about the journey, the route, or would you like to contribute to the project? We appreciate all enquiries.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    pressHeading: 'Press & Media',
    pressText: 'Are you a journalist or working in media and want to cover the project? Feel free to reach out by email or phone – we\'re happy to do interviews and background conversations.',
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
