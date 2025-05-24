<script setup lang="ts">
import NavigationDrawerDashboard from '@/components/NavigationDrawerDashboard.vue';
import { ref, computed } from 'vue';

type Client = {
  id: number,
  name: string,
  phone: string,
  hours: string,
  service: string
}

const viewMoney = ref(false)
const isDialogOpen = ref(false)

const name = ref('')
const phone = ref('')
const hours = ref('')
const service = ref('')
// Armazena o valor do serviço, quando o usuário confirma o atendimento na função (checkClient)
const money = ref(0)
// Armazena o total de clientes presentes na tabela
const countClients = computed(() => listClients.value.length)
// Serve para incrementar o id
let increment = 0

const listClients = ref<Client[]>([])
const listHours = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00']
const listServices = ['Cabelo', 'Barba', 'Cabelo + Barba']

// Função para cadastrar os dados dos clientes na tabela
function registerClient () {
  if (name.value.trim() !== '' && phone.value.trim() !== '' && hours.value.trim() !== '' && service.value.trim() !== '') {
    listClients.value.push({
      id: increment,
      name: name.value,
      phone: phone.value,
      hours: hours.value,
      service: service.value
    })

    name.value = ''
    phone.value = ''
    hours.value = ''
    service.value = ''
    increment++
  } else {
    alert('Preencha os campos corretamente.')
  }
}

// Função para deletar um cliente cadastrado na lista
function deleteClient(id: number) {
  listClients.value = listClients.value.filter(i => i.id != id)
}

// Função para indicar que o atendimento foi feito
function checkClient(id: number) {
  verifyValueService(id)
  listClients.value = listClients.value.filter(i => i.id != id)
}

// Função para verificar o tipo do serviço fornecido e adicionar o preço na variável (money)
function verifyValueService(id: number) {
  listClients.value.filter((item) => {
    // Verifica o tipo do serviço para adicionar o valor
    if (item.service === 'Cabelo' && item.id === id) {
      // Se for corte de cabelo, adiciona R$30,00 ao saldo
      money.value += 30
    } else if (item.service === 'Barba' && item.id === id) {
      // Se for corte da barba, adiciona R$20,00 ao saldo
      money.value += 20
    } else if (item.service === 'Cabelo + Barba' && item.id === id) {
      // Se for os dois cortes, adiciona R$50,00 ao saldo
      money.value += 50
    }
  })
}
</script>

<template>
  <NavigationDrawerDashboard>
    <template #list-item>
      <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="dashboard" color="warning" to="/dashboard"/>
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
              <v-card-text class="text-h5">R$ {{ viewMoney?'...':money }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mx-auto pa-3" height="150">
              <v-card-item title="Clientes" prepend-icon="mdi-account-group"/>
              <v-card-text class="text-h5 pt-4">{{ countClients }}</v-card-text>
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
                          <v-col cols="6">
                            <v-text-field label="Nome" variant="outlined" v-model="name"/>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field label="Telefone" placeholder="(00) 00000-0000" variant="outlined" v-model="phone"/>
                          </v-col>
                        </v-row>
                        <v-select label="Horário" :items="listHours" variant="outlined" v-model="hours"/>
                        <v-select label="Serviço" :items="listServices" variant="outlined" v-model="service"/>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer/>
                        <v-btn variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                        <v-btn variant="tonal" color="success" @click="registerClient">Adicionar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-title>
              </div>

              <v-table>
                <thead>
                  <tr>
                    <th class="font-weight-bold">Nome</th>
                    <th class="font-weight-bold">Telefone</th>
                    <th class="font-weight-bold">Horário</th>
                    <th class="font-weight-bold">Serviço</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(client, index) in listClients" :key="index">
                    <td>{{ client.name }}</td>
                    <td>{{ client.phone }}</td>
                    <td>{{ client.hours }}</td>
                    <td>{{ client.service }}</td>
                    <td class="text-end" v-if="listClients.length > 0">
                      <v-btn icon="mdi-check-bold" variant="text" class="text-green mr-3" density="comfortable" @click="checkClient(client.id)"/>
                      <v-btn icon="mdi-delete" variant="text" class="text-red" density="comfortable" @click="deleteClient(client.id)"/>
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
