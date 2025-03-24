<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

import { ref } from 'vue';

const password = ref(false)
const confirmPassword = ref(false)
</script>

<template>
    <NavBar flat type-icon="mdi-arrow-left-circle" type-color="warning" type-title="Voltar" route="/"/>
    <v-container fluid>
        <v-card max-width="500" class="text-center mx-auto pa-4" elevation="2">
            <h1 class="text-h5 font-weight-bold mb-3">Cadastre-se <span class="text-warning">agora</span></h1>
            <v-text-field label="Nome de usuário" variant="outlined" max-width="500" class="w-100"/>
            <v-text-field label="E-mail" variant="outlined" max-width="500" class="w-100"/>
            <v-text-field label="Senha" variant="outlined" max-width="500" class="w-100" :type="password?'text':'password'" :append-inner-icon="password?'mdi-eye':'mdi-eye-off'" @click:append-inner="password = !password"/>
            <v-text-field label="Confirme sua senha" variant="outlined" max-width="500" class="w-100" :type="confirmPassword?'text':'password'" :append-inner-icon="confirmPassword?'mdi-eye':'mdi-eye-off'" @click:append-inner="confirmPassword = !confirmPassword"/>
            <v-checkbox color="warning" class="mb-n5">
                <template v-slot:label>
                    <div class="text-caption">
                        Concordo com os
                        <v-tooltip location="bottom">
                            <template v-slot:activator="{ props }">
                                <a href="#" target="_blank" rel="noopener noreferrer" v-bind="props" class="text-decoration-none text-primary">
                                    Termos de Segurança
                                </a>
                            </template>
                            Ler os termos
                        </v-tooltip>
                    </div>
                </template>
            </v-checkbox>
            <v-btn text="Cadastrar" class="bg-warning w-100 font-weight-bold" height="40" max-width="500"></v-btn>
        </v-card>
    </v-container>
</template>

<style scoped>
</style>
