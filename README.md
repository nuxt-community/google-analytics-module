# Google Analytics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Google Analytics integration for Nuxt.js with [vue-analytics](https://github.com/MatteoGabriele/vue-analytics)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/google-analytics` dependency to your project

```bash
yarn add --dev @nuxtjs/google-analytics # or npm install --save-dev @nuxtjs/google-analytics
```

2. Add `@nuxtjs/google-analytics` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt older than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

```js
export default {
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-12301-2'
    }]
  ]
}
```

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-12301-2'
  }
}
```

## Usage

Click [here](https://matteogabriele.gitbooks.io/vue-analytics/content/) for all options and features of vue-analytics

Differences between vue-analytics and the Nuxt.js implementation:

- The router instance is already added out of the box (read [here](https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/page-tracking.md#disable-page-auto-tracking) if you need to disable it)
- The `id` and `ua` properties have the exact same behaviour. The `ua` property has been added for backwards compatibily with previous releases
- You can disable module for `nuxt dev` by setting `dev: false` option in module options
- Note: By default, you won't see hits going out in dev mode. For testing analytics in dev mode, you must add the following to `nuxt.config.js`:

  ```js
  debug: {
    enabled: true,
    sendHitTask: true
  }
  ```

## License

[MIT License](./LICENSE)

Copyright (c) - Matteo Gabriele <m.gabriele.dev@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/google-analytics/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/google-analytics

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/google-analytics.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/google-analytics

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/analytics-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/analytics-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/analytics-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/analytics-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/google-analytics.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/google-analytics
