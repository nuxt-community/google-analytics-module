import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = <%= JSON.stringify(options) %>
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
