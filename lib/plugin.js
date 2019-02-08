import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const options = <%= serialize(options) %>

  Vue.use(VueAnalytics, {...{ router }, ...options})
}
