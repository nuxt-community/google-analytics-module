import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = <%= serialize(options) %>
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
