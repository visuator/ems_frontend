<template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="2">
        <v-btn v-for="i in resultItems" :to="i.to">
          {{ i.name }}
        </v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const commonItems = [
  { name: 'Расписание', to: 'schedule' },
];
const itemsMap = {
  'admin': [
    { name: 'Посещаемость групп', to: 'groups' },
    { name: 'Импорт', to: 'import' }
  ],
  'lecturer': [
    { name: 'Задолженности', to: 'debts' },
    { name: 'Отметки', to: 'marks' },
  ],
  'student': [
    { name: 'Задолженности', to: 'debts' },
    { name: 'Отметки', to: 'marks' },
  ]
};
const resultItems = computed(() => [...commonItems, ...store.keycloak.realmAccess.roles.flatMap(x => itemsMap[x]).filter(x => x)]);
</script>
