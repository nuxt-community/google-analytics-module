---
title: Setup
description: Learn how to setup the Google Analytics module in Nuxt
position: 2
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

1. Add `@nuxtjs/google-analytics` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add --dev @nuxtjs/google-analytics
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install --save-dev @nuxtjs/google-analytics
  ```

  </code-block>
</code-group>

  <alert type="warning">

  If you are using Nuxt **< v2.9**, you have to install the module as `dependency` (**without** `--dev` or `--save-dev`)

  </alert>

2. Add `@nuxtjs/google-analytics` to the `buildModules` section of `nuxt.config.js`:

  ```js[nuxt.config.js]
  {
    buildModules: [
      '@nuxtjs/google-analytics'
    ],
  }
  ```

  <alert type="warning">

  If you are using Nuxt **< v2.9**, you have to add it to `modules` section instead of `buildModules`.

  </alert>

### Configure

Add `googleAnalytics` section in `nuxt.config.js` to set the module options:

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    // Options
  }
}
```

Then pass your Google Analytics ID to `id` field of `googleAnalytics`:

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    id: 'UA-XXX-X'
  }
}
```

<alert type="info">

`router` instance is added out of the box. You can refer [here](https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/page-tracking.md#disable-page-auto-tracking) on to how to disable it if needed.

</alert>

### Runtime Config

You can use `publicRuntimeConfig`(from [runtime config](https://nuxtjs.org/guide/runtime-config)) to have dynamic environment variables available in production. Otherwise, the configuration options passed in `nuxt.config.js` will be read and hard-coded during the build once only.

```js[nuxt.config.js]
export default {
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
}
```

<alert type="info">

For a full list of usage, refer to [Vue Analytics Documentation](https://matteogabriele.gitbooks.io/vue-analytics).

</alert>
