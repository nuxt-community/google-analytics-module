import { Module, Context } from '@nuxt/types'
import VueAnalytics, { InstallOptions } from 'vue-analytics'
import { VueGtag, PluginOptions } from 'vue-gtag'
import './vuex'

interface BaseOptions {
  id?: string
  asyncID?: (context: Context) => Promise<string>
  /**
   * @deprecated use id instead
   */
  ua?: string
  useGtag?: boolean
}

interface VueAnalyticsOptions extends BaseOptions, Omit<InstallOptions, 'id'> {
  useGtag?: false
}

interface VueGtagOptions extends BaseOptions, Omit<PluginOptions, 'config'> {
  useGtag: true
}

type Options = VueAnalyticsOptions | VueGtagOptions

declare module '@nuxt/vue-app' {
  interface Context {
    $ga?: VueAnalytics
    $gtag?: VueGtag
  }

  interface NuxtAppOptions {
    $ga?: VueAnalytics
    $gtag?: VueGtag
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $ga?: VueAnalytics
    $gtag?: VueGtag
  }

  interface NuxtAppOptions {
    $ga?: VueAnalytics
    $gtag?: VueGtag
  }

  interface Configuration {
    googleAnalytics?: Options
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    // @ts-expect-error vue-analytics marks this object as required
    $ga?: VueAnalytics
    // @ts-expect-error vue-gtag marks this object as required
    $gtag?: VueGtag
  }
}

declare const analyticsModule: Module<Options>
export default analyticsModule
