# Google Analytics
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/google-analytics/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-analytics)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/google-analytics.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-analytics)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/analytics-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/analytics-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/analytics-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/analytics-module)
[![Dependencies](https://david-dm.org/nuxt-community/analytics-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/analytics-module)


[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

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

* The router instance is already added out of the box (read [here](https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/page-tracking.md#disable-page-auto-tracking) if you need to disable it)
* The `id` and `ua` properties have the exact same behaviour. The `ua` property has been added for backwards compatibily with previous releases


## License

[MIT License](./LICENSE)

Copyright (c) -
