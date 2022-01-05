<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useMovies } from '../composables/useMovies';
import MovieCard from './MovieCard.vue';

const searchBox = ref<HTMLInputElement | null>(null)
const { movies, searchText, resultCount } = useMovies()

const focusInput = () => searchBox.value!.select()

onMounted(() => console.log("Movies mounted!"))
onUnmounted(() => console.log("Movies unmounted!"))

</script>

<template>
    <div class="flex flex-col items-center">
        <div class="py-4 flex flex-col gap-3">
            <input
                ref="searchBox"
                v-model="searchText"
                type="text"
                class="p-3 w-80 ring-2 ring-gray-600 bg-transparent focus:outline-none focus:ring-3 rounded-lg"
                placeholder="search movies and tv shows..."
            />
            <button
                @click="focusInput"
                class="bg-gray-600 border-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 border rounded-lg"
            >Focus the search</button>
            <span>Results: {{ resultCount }}</span>
        </div>
        <div class="flex gap-6 mt-5 flex-wrap mx-20">
            <router-link
                v-for="m in movies"
                :key="m.id"
                :to="{
                    name: 'MovieDetail',
                    params: { movieId: m.id },
                }"
            >
                <MovieCard :movie="m" />
            </router-link>
        </div>
    </div>
</template>