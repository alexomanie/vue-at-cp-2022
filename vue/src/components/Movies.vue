<script lang="ts" setup>
import { useMovies } from '../composables/useMovies';
import MovieCard from './MovieCard.vue';

const { movies, searchText, resultCount } = useMovies()

</script>

<template>
    <div class="flex flex-col items-center">
        <div class="py-4 flex flex-col">
            <input
                v-model="searchText"
                type="text"
                class="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
                placeholder="search movies and tv shows..."
            />
            <span class="mt-1">Results: {{ resultCount }}</span>
        </div>
        <div class="flex gap-6 mt-5 flex-wrap mx-20">
            <MovieCard v-for="m in movies" :key="m.id" :movie="m" />
        </div>
    </div>
</template>