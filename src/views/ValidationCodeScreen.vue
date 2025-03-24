<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar flat type-icon="mdi-arrow-left-circle" type-color="warning" type-title="Voltar"/>
  <v-container fluid class="fill-height">
    <v-row>
        <v-col cols="12">
            <v-card
                class="w-100 text-center mx-auto ma-4 pa-5 rounded-lg"
                elevation="2"
                max-width="500"
            >
                <h1 class="text-h5 font-weight-bold text-center mb-2">Verifique seu <span class="text-warning">e-mail</span></h1>
                <div class="text-caption">
                    Mandamos um código de verificação para admin..@email.com <br> Por favor, verifique o seu e-mail e coloque o código abaixo.
                </div>
                <v-sheet color="surface">
                    <v-otp-input
                        type="number"
                        variant="outlined"
                    />
                </v-sheet>
                <v-btn
                    color="warning"
                    height="40"
                    text="Verificar"
                    flat
                    width="70%"
                    class="font-weight-bold"
                />
                <div class="text-caption mt-3">
                    Não recebeu o código? <a href="#" class="text-decoration-none text-warning font-weight-bold">Enviar código</a>
                </div>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
