import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default (ctx, inject) => {
  const options = <%= serialize(options) %>

  Vue.use(VueAnalytics, {...{ router: ctx.app.router }, ...options})
  
  ctx.$ga = Vue.$ga
  inject('ga', Vue.$ga)
}
