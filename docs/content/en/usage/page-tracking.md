---
title: Page tracking
description: Learn how to track a page in Google Analytics with the Nuxt module
position: 4
category: Usage
---

This module injects `$ga` instance globally. You can access the instance anywhere using `this.$ga` (within a component), or `context.$ga` (for plugins, `asyncData`, `fetch`, `nuxtServerInit` ,and middleware)

## Automatic page tracking

Since `router` instance is added out of the box during installation of the module, it will handle page tracking automatically for you.

## Manual page tracking

### `page(options)`

* Type: `String` | `Object` | `VueRouter instance`

Track and send event on a single page.

<alert type="info">

You can read more about page tracking on [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/pages)

</alert>

The most standard is to pass the page path:

```js
this.$ga.page('/')
```

Or to pass an `Object` containing the page details:

```js
this.$ga.page({
  page: '/',
  title: 'Home page',
  location: window.location.href
})
```

Or to pass a `VueRouter` instance existing in the component. The module will auto-detect related information about the page.

```js
this.$ga.page(this.$router)
```

<alert type="info">

For other page tracking setting up options, please refer [Vue Analytics Documentation - Page tracking](https://matteogabriele.gitbooks.io/vue-analytics/content/docs/page-tracking.html)

</alert>
