import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueGtag from 'vue-gtag'

export default async (ctx, inject) => {
  const runtimeConfig = ctx.$config && ctx.$config.googleAnalytics || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  if (typeof options.asyncID === 'function') {
    options.id = await options.asyncID(ctx)
  }

  if (options.useGtag) {
    Vue.use(VueGtag, { config: { id: options.id }, ...options }, ctx.app.router)
    ctx.$gtag = Vue.$gtag
    inject('gtag', Vue.$gtag)
  } else {
    Vue.use(VueAnalytics, { router: ctx.app.router, ...options})
    ctx.$ga = Vue.$ga
    inject('ga', Vue.$ga)
  }
}
