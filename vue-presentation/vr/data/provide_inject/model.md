---
layout: left-right
---

### Vue provide/inject

```ts {1-8}
// user.ts
import { ref } from 'vue';

export const user = ref({
    userId: "VueUser",
    email: "vueuser@vueandreact.com"
})
export const UserContext = 'UserContext';

// App.vue
<script setup lang="ts">
import { provide } from 'vue';
import { UserContext, user } from './models/user'

provide(UserContext, user)
</script>
```

::right::

### React context provider api

```ts {1-8}
// user.ts
import { createContext } from 'react'

export const user = {
    userId: "ReactUser",
    email: "reactuser@vueandreact.com"
}
export const UserContext = createContext(user)

// App.tsx
import { user, UserContext } from './models/user'

export const App = () => {
  return (
    <UserContext.Provider value={user}>
      <div className="app">
        ...
      </div>
    </UserContext.Provider>
  )
}
```

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>
