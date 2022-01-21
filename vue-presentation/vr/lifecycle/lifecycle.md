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
