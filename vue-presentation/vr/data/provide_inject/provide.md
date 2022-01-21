---
layout: left-right
---

### Vue provide/inject

```ts {10-16}
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

```ts {10-21}
// user.ts
import { createContext } from 'react'

export const user = {
    userId: "ReactUser",
    email: "reactuser@vueandreact.com"
}
export const UserContext = createContext(user)

// App.tsx
import { user, UserContext } from './models/user'r

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
