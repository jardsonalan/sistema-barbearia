<script setup lang="ts">
// import LoginScreen from './views/LoginScreen.vue';
// import PasswordScreen from './views/PasswordScreen.vue';
import ValidationCodeScreen from './views/ValidationCodeScreen.vue';
</script>

<template>
  <v-app>
    <!-- Barra de navegação -->
    
    <v-main>
      <ValidationCodeScreen />
      <!-- <PasswordScreen /> -->
      <!-- <LoginScreen /> -->
    </v-main>

    <v-footer class="d-flex justify-center ga-2 bg-warning" style="max-height: 80px;">
      &copy;{{ new Date().getFullYear() }}
      <a class="text-decoration-none text-white font-weight-bold" href="#" target="_blank" rel="noopener noreferrer">Jardson Alan</a>
    </v-footer>
  </v-app>
</template>

<style scoped>
</style>
