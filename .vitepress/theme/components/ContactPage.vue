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
      pressText: 'هل أنت صحفي أو تعمل في وسائل الإعلام؟ يسعدنا تزويدك بمجموعة صحفية تتضمن صوراً عالية الجودة ومعلومات مفصلة.',
      pressLink: 'زيارة صفحة الصحافة',
      formName: 'الاسم',
      formNamePlaceholder: 'اسمك الكامل',
      formEmail: 'البريد الإلكتروني',
      formEmailPlaceholder: 'بريدك@مثال.com',
      formSubject: 'الموضوع (اختياري)',
      formSubjectPlaceholder: 'ما الذي يتعلق به الأمر؟',
      formMessage: 'الرسالة',
      formMessagePlaceholder: 'اكتب رسالتك هنا...',
      formSubmit: 'إرسال الرسالة',
    }
  }
  if (lang.value === 'no-NO') {
    return {
      heading: 'Kontakt oss',
      intro: 'Har du spørsmål om reisen, ruten eller ønsker du å bidra til prosjektet? Vi setter stor pris på alle henvendelser.',
      emailLabel: 'E-post',
      phoneLabel: 'Telefon',
      pressHeading: 'Presse & Media',
      pressText: 'Er du journalist eller jobber i media? Vi har et eget pressesett med høyoppløselige bilder og bakgrunnsinfo.',
      pressLink: 'Gå til pressesiden',
      formName: 'Navn',
      formNamePlaceholder: 'Ola Nordmann',
      formEmail: 'E-post',
      formEmailPlaceholder: 'ola@eksempel.no',
      formSubject: 'Emne (valgfritt)',
      formSubjectPlaceholder: 'Hva gjelder det?',
      formMessage: 'Melding',
      formMessagePlaceholder: 'Skriv din melding her...',
      formSubmit: 'Send melding',
    }
  }
  return {
    heading: 'Contact us',
    intro: 'Do you have questions about the journey, the route, or would you like to contribute to the project? We appreciate all enquiries.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    pressHeading: 'Press & Media',
    pressText: 'Are you a journalist or working in media? We have a press kit with high-resolution images and background information.',
    pressLink: 'Go to the press page',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'you@example.com',
    formSubject: 'Subject (optional)',
    formSubjectPlaceholder: 'What is it regarding?',
    formMessage: 'Message',
    formMessagePlaceholder: 'Write your message here...',
    formSubmit: 'Send message',
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
          <a href="/media" class="c4h-contact-press-link">
            {{ t.pressLink }} →
          </a>
        </div>

      </div>

      <!-- Right: form -->
      <div class="c4h-contact-form-wrap">
        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          class="c4h-contact-form"
        >
          <div class="c4h-contact-form-row">
            <div class="c4h-contact-field">
              <label for="c4h-name">{{ t.formName }}</label>
              <input
                id="c4h-name"
                type="text"
                name="name"
                :placeholder="t.formNamePlaceholder"
                autocomplete="name"
              />
            </div>
            <div class="c4h-contact-field">
              <label for="c4h-email">{{ t.formEmail }}</label>
              <input
                id="c4h-email"
                type="email"
                name="email"
                :placeholder="t.formEmailPlaceholder"
                autocomplete="email"
              />
            </div>
          </div>

          <div class="c4h-contact-field">
            <label for="c4h-subject">{{ t.formSubject }}</label>
            <input
              id="c4h-subject"
              type="text"
              name="subject"
              :placeholder="t.formSubjectPlaceholder"
            />
          </div>

          <div class="c4h-contact-field">
            <label for="c4h-message">{{ t.formMessage }}</label>
            <textarea
              id="c4h-message"
              name="message"
              rows="5"
              :placeholder="t.formMessagePlaceholder"
            ></textarea>
          </div>

          <button type="submit" class="c4h-contact-submit">
            {{ t.formSubmit }}
          </button>
        </form>
      </div>

    </section>
  </main>
</template>
