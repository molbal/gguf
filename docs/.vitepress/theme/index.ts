import DefaultTheme from 'vitepress/theme'
import DownloadCard from './components/DownloadCard.vue'
import BigExternalLink from "./components/BigExternalLink.vue";
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DownloadCard', DownloadCard)
    app.component('BigExternalLink', BigExternalLink)
  }
}
