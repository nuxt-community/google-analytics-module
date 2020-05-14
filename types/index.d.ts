import type Vue from 'vue'
import type { default as VueAnalytics, InstallOptions } from 'vue-analytics'
import './vuex'

declare module '@nuxt/vue-app' {
  interface Context {
    $ga: VueAnalytics
  }
  interface NuxtAppOptions {
    $ga: VueAnalytics
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $ga: VueAnalytics
  }

  interface NuxtAppOptions {
    $ga: VueAnalytics
  }

  interface Configuration {
    googleAnalytics?: InstallOptions
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $ga: VueAnalytics
  }
}
