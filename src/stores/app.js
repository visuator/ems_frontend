// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const keycloak = ref();
  return { keycloak }
})
