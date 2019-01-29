import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app }) {
  const moduleOptions = <%= serialize(options) %>

  if (moduleOptions.id && typeof moduleOptions.id === 'function') {
    const id = moduleOptions.id;
    moduleOptions.id = () => id(app);
  }

  Vue.use(VueAnalytics, Object.assign({ router: app.router }, moduleOptions))
}
