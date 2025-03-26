<script setup lang="ts">
</script>

<template>
  <v-app>
    <!-- Barra de navegação -->
    
    <v-main>
      <router-view />
    </v-main>

    <v-footer class="d-flex justify-center ga-2 bg-warning" style="max-height: 50px;">
      &copy;{{ new Date().getFullYear() }}
      <a class="text-decoration-none text-white font-weight-bold" href="#" target="_blank" rel="noopener noreferrer">Jardson Alan</a>
    </v-footer>
  </v-app>
</template>

<style scoped>
</style>
