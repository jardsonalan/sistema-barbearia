<script setup lang="ts">
import NavigationDrawerDashboard from '@/components/NavigationDrawerDashboard.vue';
import { ref } from 'vue';

const viewMoney = ref(false)

const isDialogOpen = ref(false)

const listHours = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00']
</script>

<template>
  <NavigationDrawerDashboard>
    <template #list-item>
      <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard" color="warning"/>
      <v-list-item prepend-icon="mdi-account-box" title="Conta" value="conta" color="warning"/>
    </template>
    <template #main>
      <v-container>
        <h1 class="text-h5 text-md-h4 mt-2 mb-4 mb-md-6 font-weight-bold mb-3">Dashboard</h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mx-auto pa-3" height="150">
              <div class="d-flex justify-space-between">
                <v-card-item title="Receita" prepend-icon="mdi-currency-usd" class="pt-0"/>
                <v-btn :icon="viewMoney?'mdi-eye':'mdi-eye-off'" variant="text" @click.stop="viewMoney = !viewMoney"/>
              </div>
              <v-card-text class="text-h5">R$ {{ viewMoney?'...':0 }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mx-auto pa-3" height="150">
              <v-card-item title="Clientes" prepend-icon="mdi-account-group"/>
              <v-card-text class="text-h5 pt-4">0</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card flat class="border mb-4">
              <div class="d-md-flex justify-md-space-between">
                <v-card-title class="font-weight-bold">Agendamento de clientes</v-card-title>

                <v-card-title>
                  <v-btn
                    @click="isDialogOpen = true"
                    flat
                    size="small"
                    :ripple="false"
                    text="Adicionar cliente"
                    color="success"
                  />

                  <v-dialog v-model="isDialogOpen" width="500px">
                    <v-card>
                      <v-card-title>Adicionar cliente</v-card-title>

                      <v-card-text>
                        <v-row>
                          <v-col>
                            <v-text-field label="Nome"/>
                          </v-col>
                          <v-col>
                            <v-text-field label="Telefone" placeholder="(84) 00000-0000"></v-text-field>
                          </v-col>
                        </v-row>

                        <v-select label="Horário" :items="listHours"/>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer/>
                        <v-btn variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                        <v-btn variant="tonal" color="success">Adicionar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-title>
              </div>

              <v-table>
                <thead>
                  <tr>
                    <th class="text-center">Nome</th>
                    <th class="text-center">Telefone</th>
                    <th class="text-center">Horário</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-end">
                      <v-btn icon="mdi-delete" variant="text" class="text-red" density="comfortable"/>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </NavigationDrawerDashboard>
</template>

<style scoped>
</style>
