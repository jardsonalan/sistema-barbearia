<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar flat type-icon="mdi-arrow-left-circle" type-color="warning" type-title="Voltar" route="/"/>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto pa-6" elevation="2" max-width="500">
          <h1 class="text-h5 font-weight-bold text-center mb-4">Informe seu <span class="text-warning">e-mail</span></h1>
          <v-text-field label="E-mail" class="w-100" style="max-width: 500px;" variant="outlined"/>
          <v-btn class="w-100 bg-warning font-weight-bold" height="40" width="70%" text="Enviar" to="/password/validation-code"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
