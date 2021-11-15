<script lang="ts" setup>
import { useMovies } from '../composables/useMovies';
import MovieCard from './MovieCard.vue';

const { movies, searchText } = useMovies()

</script>

<template>
    <div class="flex flex-col items-center mt-5">
        <input
            v-model="searchText"
            type="text"
            class="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
            placeholder="search movies and tv shows..."
        />
        <div class="flex gap-6 mt-10 flex-wrap mx-20">
            <MovieCard v-for="m in movies" :key="m.show.id" :movie="m" />
        </div>
    </div>
</template>