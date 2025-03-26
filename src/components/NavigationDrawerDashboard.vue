<script setup lang="ts">
import { ref } from 'vue';

const drawerBarSmallScreen = ref(false)
</script>

<template>
  <!-- Barra de navegação que aparece para dispositivos mobile e tablet's -->
  <v-card class="fill-height">
    <v-layout v-if="$vuetify.display.mobile" class="fill-height">
      <v-app-bar color="warning" elevation="2">
          <v-btn
            variant="text"
            @click.stop="drawerBarSmallScreen = !drawerBarSmallScreen"
            :icon="drawerBarSmallScreen?'mdi-close':'mdi-menu'"
          />
          <v-toolbar-title>Sistema de Barbearia</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawerBarSmallScreen"
        :location="$vuetify.display.mobile?'top':undefined"
        temporary
        class="rounded-b-lg"
      >
        <v-list>
          <slot name="list-item"></slot>
        </v-list>
        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" class="text-red"></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main class="fill-height">
        <slot name="main"></slot>
      </v-main>
    </v-layout>

    <!-- Barra de navegação que aparece para dispositivos laptops, televisões, entre outros -->
    <v-layout class="fill-height" v-else>
      <v-navigation-drawer expand-on-hover rail elevation="2">
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="User" subtitle="Sistema de Barbearia"/>
        </v-list>
        <v-divider/>
        <v-list density="compact" nav>
          <slot name="list-item"></slot>
        </v-list>
        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" class="text-red"></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>
      <v-main class="fill-height">
        <slot name="main"></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>
