<script lang="ts" setup>
import { TMDB } from '../models/movie'

defineProps<{
    movie: TMDB.Movie
}>()
</script>
<template>
    <div class="h-120 w-60 shadow-xl flex flex-col bg-gray-800 rounded-b-xl relative group">
        <img v-if="movie.poster_path" class="w-full h-90" :src="movie.poster_image" alt="image" />
        <div v-else class="w-full h-90" />
        <div class="p-3 text-sm flex-1">
            <div class="flex justify-between h-10 text-gray-300 font-semibold">
                <span>{{ movie.name ?? movie.title }}</span>
                <span>{{ movie.vote_average }}/10</span>
            </div>
            <div class="flex justify-between text-xs mt-3 text-gray-400">
                <span class="uppercase w-[60%]">Premiered</span>
                <span class="uppercase w-[40%]">Type</span>
            </div>
            <div class="flex justify-between text-xs mt-2 text-gray-300 font-semibold">
                <span class="uppercase w-[60%]">{{ movie.release_date ?? movie.first_air_date }}</span>
                <span class="uppercase w-[40%]">{{ movie.media_type }}</span>
            </div>
        </div>
        <div
            class="absolute bottom-0 bg-gray-700 left-0 h-0 rounded-b-xl group-hover:h-[50%] max-h-[50%] transition-all duration-500 box-border"
        >
            <div class="pt-4 px-7 h-full overflow-hidden">{{ movie.overview }}</div>
        </div>
    </div>
</template>