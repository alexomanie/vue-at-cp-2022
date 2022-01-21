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
layout: section
---

# Basics

---

# Basic structure of a vue component

```html {none|1-2|4|6|all}
<template>
</template>

<script></script>

<style></style>
```

---

# Directives

- apply side effects to the DOM, as in other frameworks
- v- as prefix
- arguments for directives are denoted by a colon after the directive
- modifiers denoted by a dot. Example: v-on:click.right 
- modifiers can be chained

---

# Data Properties
- data option is a function, called when creating a new component instance. 
- Returned object is wrapped in reactivity system of vue and exposed via component instance
- instance properties only added on first creation, use placeholder if value not available initially

---

# Methods

- defined in the `methods` property
- do not use arrow functions for methods because of correct this binding
- can be called directly in template, but better use **computed properties**
---

# computed properties
- make calucations based on properties
- defined in computed property
- helps to keep template cleaner
- cached based on their reactive dependencies. Multiple access return immediatelly if value not changed

---
layout: center
---
```vue {all|14-20|26}
<script>
  export default {
    data() {
      return {
        author: {
          name: 'John Doe',
          books: [
            'Vue 2 - Advanced Guide',
          ]
        }
      }
    }
    
    computed: {
      // a computed getter
      publishedBooksMessage() {
        // `this` points to the vm instance
        return this.author.books.length > 0 ? 'Yes' : 'No'
      }
    }
}
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
```

---

# Events

---

# Provide / inject

- can be used as a dependency provider and injector
- access props in nested components
- bindings are not reactive by default => use a ref property

---
layout: center
---

```js
app.component('todo-list', {
  // ...
  provide() {
    return {
      todoLength: Vue.computed(() => this.todos.length)
    }
  }
})

app.component('todo-list-statistics', {
  inject: ['todoLength'],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`)
  }
})
```

---
layout: section
---

# Composition Api

---

- increase separation of concern and reusability of code
- defined in **setup** component option
- setup is a function which accepts props and context property
- setup is called before data property, computed properties, or methods resolved
- everything that setup returns is available to the rest of the component
- difference to hooks: setup only called once, hooks can run multiple times during rendering

---
layout: two-cols
---

# useState
``` js
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
```

::right::

# composition-api

```js {1-11|12-18}
import { readonly, ref } from 'vue';

export function useState(initialState) {
  const state = ref(initialState);
  const setState = (newState) => {
    state.value = newState;
  };
  
  return [readonly(state), setState];
}

<script setup>
import { ref } from 'vue';
import { useState } from '../composables/state';

const [count, setCount] = useState(0);
</script>
```

---

# Routing

---


# State Management

---
src: ./vr/vite/vite.md
---

---
src: ./vr/vite/vite.md
---

---
src: ./vr/fetching/all.md
---

---
src: ./vr/fetching/state_ref.md
---

---
src: ./vr/fetching/watch_effect.md
---

---
src: ./vr/rendering/all.md
---

---
src: ./vr/rendering/conditional.md
---

---
src: ./vr/rendering/loops.md
---

---
src: ./vr/rendering/twowaybinding.md
---

---
src: ./vr/rendering/templateref.md
---

---
src: ./vr/data/props.md
---

---
src: ./vr/data/provide_inject/model.md
---

---
src: ./vr/data/provide_inject/provide.md
---

---
src: ./vr/data/provide_inject/inject.md
---

---
src: ./vr/data/events/all.md
---

---
src: ./vr/data/events/define.md
---

---
src: ./vr/data/events/click.md
---

---
src: ./vr/lifecycle/lifecycle.md
---

---
src: ./vr/routing/routes.md
---

---
src: ./vr/routing/links.md
---




