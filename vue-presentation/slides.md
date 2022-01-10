---
# try also 'default' to start simple
theme: vuetiful
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Vue Vortrag @ CP Openspace 2022
# persist drawings in exports and build
drawings:
  persist: false
---

# Vue.js 3 - Basics

Ein bisschen Theorie und etwas mehr Praxis

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Barebones Vue App

```js
const App = {
  data() {
    return {
      message: 'Hello world!'
    }
  }
}

Vue.createApp(App).mount('#app')
```

```html
<div id="app">
  {{ message }} Nice to meet Vue.
</div>
```

---
layout: center
---

# Components

---

# Basic structure of a vue component

```html {none|1-2|4|6|all}
<template>
</template>

<script></script>

<style></style>
```

---

# Data Properties

---

# Methods

---

# computed properties

---


# Composition Api

---


# Routing
---


# State Management
---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

