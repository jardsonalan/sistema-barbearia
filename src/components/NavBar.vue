<script setup lang="ts">
defineProps({
    typeIcon: String,
    typeColor: String,
    typeTitle: String
})
</script>

<template>
    <v-app-bar>
        <template v-slot:prepend>
            <v-btn :icon="typeIcon" :color="typeColor"></v-btn>
        </template>

        <v-app-bar-title>{{ typeTitle }}</v-app-bar-title>
    </v-app-bar>
</template>

<style scoped>
</style>
