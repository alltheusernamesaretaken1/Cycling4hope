# Om prosjektet

Humanitært sykkelprosjekt – Fra Oslo til Damaskus

Prosjektet er et humanitært initiativ der Alaa Same skal sykle fra Oslo til Damaskus for å samle inn midler til bygging og rehabilitering av skoler i Syria. Sykkelturen går gjennom flere europeiske land og har en varighet på omtrent tre måneder.

**Rute (planlagt):**
Norge → Sverige → Danmark → Tyskland → Tsjekkia → Østerrike → Ungarn → Serbia → Bulgaria → Tyrkia → Syria

Prosjektet kombinerer fysisk gjennomføringsevne med et tydelig humanitært formål. Målet er ikke bare å samle inn penger, men også å skape oppmerksomhet rundt barns situasjon i Syria og utdanningens rolle i gjenoppbygging og stabilitet.

**Prosjektet består av tre hovedfaser:**
1. Planlegging og forankring – dialog med stiftelser og samarbeidspartnere, strukturering av innsamlingsmodell.
2. Gjennomføring av sykkelreisen – ca. 3 måneder med dokumentasjon og synlighet underveis.
3. Oppfølging og implementering – samarbeid med lokale partnere og rapportering av effekt.

Prosjektet er i planleggingsfase og søker samarbeid for å sikre ansvarlig gjennomføring og langsiktig effekt.

---

# Prosjektmål og hva nettsiden skal brukes til

## Overordnede mål

- Bidra til økt tilgang på utdanning og tryggere skolemiljøer i Syria
- Samle inn midler til utdanningsrelaterte tiltak
- Skape oppmerksomhet rundt situasjonen for barn etter mange år med konflikt
- Vise konkret hvordan utdanning kan forandre liv

## Hva nettsiden skal brukes til

1. **Informasjonsplattform** – Presentere prosjektet, bakgrunnen og motivasjonen. Forklare hvorfor utdanning i Syria er kritisk viktig. Gi oversikt over ruten, tidslinjen og gjennomføringen.
2. **Innsamlingsplattform** – Ta imot donasjoner. Forklare hvordan midlene skal brukes. Skape trygghet gjennom åpenhet og struktur.
3. **Dokumentasjonsplattform** – Dele oppdateringer fra reisen. Publisere bilder, refleksjoner og fremdrift. Synliggjøre effekt etter gjennomført prosjekt.
4. **Troverdighets- og samarbeidsplattform** – Presentere bakgrunn og erfaring. Vise medieomtale og samarbeidspartnere. Tilrettelegge for dialog med stiftelser og aktører.

---

# Designbeslutninger

1. **Personlig historie som kjerne** – Prosjektet bygger på initiativtakers egen reise fra Syria til Norge og hvordan utdanning muliggjorde videre livsbygging.
2. **Kombinasjon av fysisk prestasjon og humanitært formål** – Langdistanse-sykkelturen er valgt som symbol på utholdenhet, langsiktighet og forpliktelse.
3. **Transparens og struktur** – Tydelige seksjoner for hvordan midler brukes, hvem samarbeidspartnerne er, og hvordan effekt måles.
4. **Tydelig faseinndeling** – Planlegging, gjennomføring og oppfølging for forutsigbarhet, struktur og langsiktig effekt.

---

# Fremtidige planer og funksjoner

1. **Formelle samarbeid** – Stiftelser, organisasjoner, lokal forankring i Syria.
2. **Dokumentasjon og historiefortelling** – Løpende oppdateringer, mediedekning, etterrapportering.
3. **Utvidet digital funksjonalitet (planlagt):**
   - Interaktivt kart som viser fremdrift i sanntid
   - Tidslinje med milepæler
   - Visuell fremstilling av innsamlingsmål og progresjon
   - Rapportside med før/etter-dokumentasjon av skoleprosjekter
4. **Langsiktig visjon** – Skape en modell for fremtidige initiativer, bygge nettverk rundt utdanningsstøtte.

---

# Teknisk oppsett

- **Rammeverk:** VitePress v1.6.4
- **Hosting:** GitHub Pages
- **Versjonskontroll:** GitHub (branch: main)
- **Bygg:** `npm run docs:build` → deployes via GitHub Actions til GitHub Pages
- **Lokalt:** `npm run docs:dev`
- **Språk:** Norsk (standard), Engelsk (`/en/`), Arabisk (`/ar/`)

---

# Design system

Kildefil: `.vitepress/theme/custom.css`

## CSS-variabler (bruk alltid disse, aldri hardkodede verdier)

| Variabel | Verdi (lys) | Verdi (mørk) | Bruksområde |
|---|---|---|---|
| `--c4h-primary` | `#0F2A44` | *(uendret)* | Primærfarge – bakgrunn, knapper, streker |
| `--c4h-secondary` | `#F1E6CF` | *(uendret)* | Sekundærfarge – piller, badges, aksenter |
| `--c4h-text-heading` | `#0F2A44` | `#F3F2EF` | Alle overskrifter |
| `--c4h-text-body` | `#2B2B2B` | `#D9D9D9` | Brødtekst |
| `--c4h-bg-main` | `#F3F2EF` | `#0B1724` | Sidebakgrunn |
| `--c4h-bg-surface` | `#FFFFFF` | `#132435` | Kort, bokser, overflater |
| `--c4h-border` | `rgba(15,42,68,0.15)` | *(uendret)* | Kantlinjer |
| `--c4h-radius` | `14px` | *(uendret)* | Avrunding på kort og bilder |

## Typografi

- **Font:** Inter (bundlet av VitePress, ingen import nødvendig)
- **Overskrifter:** `color: var(--c4h-text-heading)`, `font-weight: 900`, `letter-spacing: -0.02em`
- **Brødtekst:** `color: var(--c4h-text-body)`, `line-height: 1.65`
- **Labels/badges:** `font-size: 11–12px`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.08–0.1em`

## Komponentklasser (`c4h-*`-prefiks)

All egendefinert CSS bruker prefikset `c4h-`. Eksisterende klasser:

- `.c4h-card` – Kort med bakgrunn, border og radius
- `.c4h-footer`, `.c4h-footer-inner`, `.c4h-footer-brand`, `.c4h-footer-links` – Footer
- `.c4h-phase-pill` – Pille-badge (sekundærfarge bakgrunn, primærfarge tekst)
- `.c4h-tl-*` – Tidslinje-komponenter (v2)
- `.c4h-tl-marker` – Rund markør (primær eller soft-variant)
- `.c4h-tl-card`, `.c4h-tl-card-soft` – Tidslinjekort
- `.c4h-tl-status`, `.c4h-tl-status-active` – Statusbadge

## Dark mode

Bruker VitePress sin `.dark`-klasse. Alle fargevariabler defineres på nytt under `.dark {}`. Aldri bruk `@media (prefers-color-scheme: dark)`.

## Breakpoints (VitePress-standard)

- `640px` – Tablet
- `960px` – Desktop

## VitePress-variabler som er overstyrt

```css
--vp-c-brand-1    → var(--c4h-primary)
--vp-c-text-1     → var(--c4h-text-heading)
--vp-c-text-2     → var(--c4h-text-body)
--vp-c-bg         → var(--c4h-bg-main)
```

## RTL-støtte (arabisk)

Arabisk bruker `html[dir="rtl"]`. Footer og tidslinje har egne RTL-regler i custom.css.
