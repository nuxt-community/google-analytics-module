# Google Analytics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Google Analytics integration for Nuxt.js with [vue-analytics](https://github.com/MatteoGabriele/vue-analytics)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `@nuxtjs/google-analytics` dependency using yarn or npm to your project
- Add `@nuxtjs/google-analytics` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-12301-2'
    }]
  ]
}
```

using top level options

```js
{
  modules: [
    ['@nuxtjs/google-analytics']
  ],

  'google-analytics': {
    id: 'UA-12301-2'
  }
}
```

## Usage

Click [here](https://matteogabriele.gitbooks.io/vue-analytics/content/) for all options and features of vue-analytics

Differences between vue-analytics and the Nuxt.js implementation:

- The router instance is already added out of the box (read [here](https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/page-tracking.md#disable-page-auto-tracking) if you need to disable it)
- The `id` and `ua` properties have the exact same behaviour. The `ua` property has been added for backwards compatibily with previous releases

## License

[MIT License](./LICENSE)

Copyright (c) - Matteo Gabriele <m.gabriele.dev@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/google-analytics.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/google-analytics
[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/google-analytics/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/google-analytics
[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/analytics-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/analytics-module
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/analytics-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/analytics-module
[david-dm-src]: https://david-dm.org/nuxt-community/analytics-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/analytics-module
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
