<script lang="ts" setup>
import { Movie } from '../../models/movie';

defineProps<{
    movie: Movie
}>()
</script>
<template>
    <div class="h-120 w-60 shadow-xl flex flex-col bg-gray-800 rounded-b-xl">
        <img class="w-full h-90" :src="movie.show.image?.medium" alt="image" />
        <div class="p-3 text-sm flex-1">
            <div class="flex justify-between h-10 text-gray-300 font-semibold">
                <span>{{ movie.show.name }}</span>
                <span>{{ movie.show.rating.average }}/10</span>
            </div>
            <div class="flex justify-between text-xs mt-3 text-gray-400">
                <span class="uppercase w-[60%]">Premiered</span>
                <span class="uppercase w-[40%]">Running Time</span>
            </div>
            <div class="flex justify-between text-xs mt-2 text-gray-300 font-semibold">
                <span class="uppercase w-[60%]">{{ movie.show.premiered }}</span>
                <span class="uppercase w-[40%]">{{ movie.show.runtime }}</span>
            </div>
        </div>
    </div>
</template>