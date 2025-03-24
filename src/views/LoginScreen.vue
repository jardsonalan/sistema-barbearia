<script setup lang="ts">
import { ref } from 'vue';

const viewPassword = ref(false)
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-md-height">
        <!-- Imagem da logo que aparece em dispositivos mobile e tablet's -->
        <v-col cols="12" v-if="$vuetify.display.smAndDown">
            <v-img src="/logo.png" class="w-100 mx-auto" style="max-width: 300px;" cover/>
        </v-col>
        <!-- Título que aparece em dispositivos mobile e tablet's -->
        <v-col cols="12" v-if="$vuetify.display.smAndDown" class="pa-4">
            <!-- Link de cadastro para dispositivos mobile e tablet's -->
            <div class="pa-3 mt-2">
                <span class="text-h4 font-weight-bold">Entre agora ou </span>
                <a href="/register" rel="noopener noreferrer" class="d-block text-h5 text-warning mt-2">Cadastre-se agora</a>
                <hr class="mt-3 rounded-lg text-grey-lighten-5">
            </div>
        </v-col>
        <!-- Formulário de login responsivo -->
        <v-col cols="12" md="6">
            <!-- Título que aparece em dispositivos laptops, televisões, entre outros -->
            <div v-if="$vuetify.display.mdAndUp" class="pa-3">
                <span class="text-h4">Bem-vindo(a) ao <span class="d-block text-warning font-weight-bold text-h3">Sistema de Barbearia</span></span>
                <hr class="mt-3 rounded-lg text-grey-lighten-5">
            </div>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="E-mail ou nome de usuário"
                                variant="outlined"
                            />
                            <v-text-field
                                label="Senha"
                                :type="viewPassword?'text':'password'"
                                variant="outlined"
                                :append-inner-icon="viewPassword?'mdi-eye':'mdi-eye-off'"
                                @click:append-inner="viewPassword = !viewPassword"
                            />
                            <div>
                                <v-btn class="w-100 bg-warning font-weight-bold" height="40px">Entrar</v-btn>
                                <div class="d-md-flex justify-md-space-between align-md-center mt-4">
                                    <!-- Link de cadastro para laptops, televisões, entre outros -->
                                    <a v-if="$vuetify.display.mdAndUp" href="/register" rel="noopener noreferrer" class="text-subtitle-1 text-warning">Cadastre-se agora</a>
                                    <a href="/password" rel="noopener noreferrer" class="d-flex d-md-inline justify-end w-xl-100 text-subtitle-1 text-grey-darken-3">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </v-col>
                        <!-- Botões para conexões externas: Google, Facebook ou LinkedIn -->
                        <v-col cols="12" class="pa-4">
                            <hr class="rounded-lg text-grey-lighten-5 mb-4">
                            <span class="d-flex justify-center text-subtitle-2 text-grey-darken-3">Conecte-se com:</span>
                            <div class="d-flex align-center justify-center ga-12 mt-2">
                                <v-btn icon="mdi-google" class="bg-warning" density="comfortable"></v-btn>
                                <v-btn icon="mdi-facebook" class="bg-warning" density="comfortable"></v-btn>
                                <v-btn icon="mdi-linkedin" class="bg-warning" density="comfortable"></v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-col>
        <!-- Imagem que aparece em dispositivos laptops, televisões, entre outros -->
        <v-col v-if="$vuetify.display.mdAndUp" md="6">
            <v-img src="https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-100 rounded-lg fill-height" cover gradient="to top right, #FFA726, transparent"></v-img>
        </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>
