---
title: Screen tracking
description: How to track screen view using GA
position: 6
category: Usage
---

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