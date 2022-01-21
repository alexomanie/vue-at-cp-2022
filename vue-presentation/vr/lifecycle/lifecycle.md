---
layout: left-right
---

### Vue lifecylce hooks
```ts {7-12}
// Movies.vue
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';

const userContext = inject<any>(UserContext)

onMounted(() => {
    console.log("Movies mounted!")
    console.log("UserContext is: ", userContext.value)
})

onUnmounted(() => console.log("Movies unmounted!"))

</script>
```

::right::

### React lifecylce hooks

```ts {5-11}
// Movies.tsx
export const Movies = () => {
  const userContext = useContext(UserContext)

  useEffect(() => {
    console.log('Movies mounted!')
    console.log('UserContext is: ', userContext)
    return () => {
      console.log('Movies unmounted!')
    }
  }, [])

  return (...)
}
```