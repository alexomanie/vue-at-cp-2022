<script setup lang="ts">
import { provide } from 'vue';
import Header from './components/Header.vue';
import { UserContext, user } from './models/user'

provide(UserContext, user)

</script>

<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.app {
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-areas: "header" "main";
  color: white;
}

header {
  grid-area: header;
  background: #121f4a;
}

main {
  grid-area: main;
  overflow-y: scroll;
}
</style>
