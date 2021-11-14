<script lang="ts" setup>
import { useRoute } from 'vue-router';
const { params: { movieId } } = useRoute()
</script>
<template>
    <div>{{ movieId }}</div>
</template>