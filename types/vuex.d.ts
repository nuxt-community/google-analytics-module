import type VueAnalytics from 'vue-analytics'

declare module 'vuex' {
  interface Store<S> {
    $ga: VueAnalytics,
  }
}
