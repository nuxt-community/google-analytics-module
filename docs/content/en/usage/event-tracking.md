---
title: Event tracking
description: Learn how to send event to Google Analytics with the Nuxt module
position: 5
category: Usage
---

<alert type="warning">
This documentation is only applicable when the Google Analytics 3 is enabled. For documentation on event tracking with Google Analytics 4, see <a href="https://matteo-gabriele.gitbook.io/vue-gtag/v/master/methods/events">vue-gtag/event documentation</a>.
</alert>

This module injects `$ga` instance globally.

You can access the instance anywhere using:
- `this.$ga` within a component
- `context.$ga` for plugins, `asyncData`, `nuxtServerInit` and [middleware](https://nuxtjs.org/guides/directory-structure/middleware)

## `event()`

The received parameters can be:

* Event `Object` contains:
  * `eventCategory` - the object that user interacted with.
    * Type: `String`
    * `required`
  * `eventAction` - the type of interaction (`click`, `play`, etc.)
    * Type: `String`
    * `required`
  * `eventLabel` - for categorizing events
    * Type: `String`
  * `eventValue` - a numberic value associated with the event
    * Type: `Number`
  
```js
this.$ga.event({
  eventCategory: 'category',
  eventAction: 'action',
  eventLabel: 'label',
  eventValue: 123
})
```

Or the Event's information can be spread directly as separate arguments, in the exact order

```js
event(eventCategory, eventAction, eventLabel, eventValue)
```

For example:

```js
this.$ga.event('category', 'action', 'label', 123)
```
