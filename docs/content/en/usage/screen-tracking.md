---
title: Screen tracking
description: Learn how to track screen views using the Google Analytics  module for Nuxt
position: 6
category: Usage
---

<alert type="warning">
This documentation is only applicable when the Google Analytics 3 is enabled. For documentation on event tracking with Google Analytics 4, see <a href="https://matteo-gabriele.gitbook.io/vue-gtag/v/master/methods/screenviews">vue-gtag/screenview documentation</a>.
</alert>

This module injects `$ga` instance globally. You can access the instance anywhere using `this.$ga` (within a component), or `context.$ga` (for plugins, `asyncData`, `fetch`, `nuxtServerInit` ,and middleware)

## `screenview(options)`

* `options` 
  * Type: `String` | `Object`
  * `required`
  * The screen view event of a component

Track the screen hits of a page or a component.

You can pass a string as the `screenName` property for the screenview event sent to GA.

```js
this.$ga.screenview('home')
```

Or you can pass the event object with customized fields

```js
this.$ga.screenview({
  screenName: 'home',
  ... // other properties
})
```

<alert type="info">

You can turn on auto-tracking for screen view by adding `screenview` property to `autoTracking` field in `googleAnalytics` section.

```js[nuxt.config.js]
export {
  googleAnalytics: {
    id: 'UA-XXX-X',
    autoTracking: {
      screenview: true
    }
  }
}
```

</alert>
