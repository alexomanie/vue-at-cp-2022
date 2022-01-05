<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMovie } from '../composables/useMovie';

const { params: { movieId } } = useRoute()
const { movie, fetchMovie } = useMovie();

onMounted(() => fetchMovie(+movieId))

</script>
<template>
    <div>{{ movie?.id }}</div>
    <div>{{ movie?.title }}</div>
    <div>{{ movie?.release_date }}</div>
</template>