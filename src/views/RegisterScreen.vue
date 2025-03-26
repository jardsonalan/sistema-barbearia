<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { useRegisterUser } from '@/backend/backend';
import { ref } from 'vue';

const viewPassword = ref(false)
const viewConfirmPassword = ref(false)

const nameUser = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const confirmTerms = ref(false)

// Chamada do Hook que está dentro do backend
const { registerUser } = useRegisterUser()

// Função para cadastrar as informações do usuário no Hook
const register = () => {
    registerUser(nameUser.value, email.value, password.value, confirmPassword.value, confirmTerms.value)
}
</script>

<template>
    <NavBar flat type-icon="mdi-arrow-left-circle" type-color="warning" type-title="Voltar" route="/"/>
    <v-container fluid>
        <v-card max-width="500" class="text-center mx-auto pa-4" elevation="2">
            <h1 class="text-h5 font-weight-bold mb-3">Cadastre-se <span class="text-warning">agora</span></h1>
            <v-text-field label="Nome de usuário" variant="outlined" max-width="500" class="w-100" v-model="nameUser"/>
            <v-text-field label="E-mail" variant="outlined" max-width="500" class="w-100" v-model="email"/>
            <v-text-field label="Senha" variant="outlined" max-width="500" class="w-100" :type="viewPassword?'text':'password'" :append-inner-icon="viewPassword?'mdi-eye':'mdi-eye-off'" @click:append-inner="viewPassword = !viewPassword" v-model="password"/>
            <v-text-field label="Confirme sua senha" variant="outlined" max-width="500" class="w-100" :type="viewConfirmPassword?'text':'password'" :append-inner-icon="viewConfirmPassword?'mdi-eye':'mdi-eye-off'" @click:append-inner="viewConfirmPassword = !viewConfirmPassword" v-model="confirmPassword" :color="(password === confirmPassword)&&(confirmPassword !== '')?'green':'red'"/>
            <v-checkbox color="warning" class="mb-n5" v-model:model-value="confirmTerms">
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
            <v-btn text="Cadastrar" class="bg-warning w-100 font-weight-bold" height="40" max-width="500" @click="register"></v-btn>
        </v-card>
    </v-container>
</template>

<style scoped>
</style>
