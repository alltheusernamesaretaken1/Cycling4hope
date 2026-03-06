import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import TimelinePage from './components/TimelinePage.vue'
import HvorforSection from './components/HvorforSection.vue'
import LangSwitch from './components/LangSwitch.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import MediaPage from './components/MediaPage.vue'
import PresentationPage from './components/PresentationPage.vue'
import OnePagerPage from './components/OnePagerPage.vue'
import RouteMap from './components/RouteMap.vue'
import MiniRouteMap from './components/MiniRouteMap.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('TimelinePage', TimelinePage)
    app.component('HvorforSection', HvorforSection)
    app.component('LangSwitch', LangSwitch)
    app.component('AboutPage', AboutPage)
    app.component('ContactPage', ContactPage)
    app.component('MediaPage', MediaPage)
    app.component('PresentationPage', PresentationPage)
    app.component('OnePagerPage', OnePagerPage)
    app.component('RouteMap', RouteMap)
    app.component('MiniRouteMap', MiniRouteMap)
  }
}
