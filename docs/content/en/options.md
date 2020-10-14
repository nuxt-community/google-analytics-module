---
title: Options
description: a list of configuration options for Google Analytics in Nuxt
position: 3
category: Guide
fullscreen: false
---

To configure the module, you can use `googleAnalytics` section in `nuxt.config.js`.

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    // Options
  }
}
```

## Google Analytics options

### `id`

* Type: `String`
* **Required**

The tracking ID of your Google Analytics account. It is required to have Google Analytics (GA) know which account and property to send the data to.

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    id: 'UA-XXX-X'
  }
}
```

<alert type="info">

For backwards compatibilities, use `ua` instead.

</alert>

### `debug`

* Type: `Object`
  * `enabled`: `Boolean` - to enable the debug mode
  * `sendHitTask`: `Boolean` - to sent GA hits. Default is `false` for development mode.

### `dev`

* Type: `Boolean`

Turn on the development mode and disable the module.

### `checkDuplicatedScript`

* Type: `Boolean`

It will detect if any analytics script has been added in your HTML page.

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    checkDuplicatedScript: true
  }
}
```

### `disableScriptLoader`

* Type: `Boolean`

Disable the script loader

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    disableScriptLoader: true
  }
}
```
