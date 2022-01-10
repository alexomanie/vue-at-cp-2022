<script setup lang="ts">
const emit = defineEmits<{
    (e: 'onImageClick'): void
}>();
</script>
<template>
    <div class="flex items-center justify-center h-full">
        <img
            @click="emit('onImageClick')"
            class="w-12 h-12 mr-2"
            src="../assets/logo.png"
            alt="vue logo"
        />
        <span>Welcome to the vue movie app</span>
    </div>
</template>