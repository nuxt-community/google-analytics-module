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

<alert type="info">

`router` instance is added out of the box. You can refer [here](https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/page-tracking.md#disable-page-auto-tracking) on to how to disable it if needed.

</alert>

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

### `asyncID`

* Type: `Function`
  * Should return a `String` as tracking `id` for GA account.

Allow an asynchronous function to load the `id`

```js[nuxt.config.js]
export default {
  googleAnalytics: {
    asyncID: async (context) => { 
      /* do something */

      return 'UA-XXX-X' 
    }
  }
}
```

<alert type="warning">

If both `id` and `asyncID` are present, the returned value from `asyncID` will override the value of `id`.

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

<alert type="info">

For a full list of options, please see [Vue Analytics] documentation.

</alert>