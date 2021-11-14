<script setup lang="ts">
import Header from './components/Header.vue';
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
  width: 100vw;
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-areas: "header" "main";
  color: white;
}

header {
  grid-area: header;
  background: #4a6875;
}

main {
  grid-area: main;
  background: #2d414a;
}
</style>
