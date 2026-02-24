import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import TimelinePage from './components/TimelinePage.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('TimelinePage', TimelinePage)
  }
}
