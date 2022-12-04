import VueAnalytics from 'vue-analytics'
import VueGtag from 'vue-gtag'

declare module 'vuex' {
  interface Store<S> {
    $ga?: VueAnalytics
    $gtag?: VueGtag
  }
}
