/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
const app = createApp(App)

registerPlugins(app)

import Keycloak from 'keycloak-js';
import { useAppStore } from './stores/app'

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'master',
    clientId: 'ems_frontend'
});
try {
    const authenticated = await keycloak.init({
        checkLoginIframe: false,
        onLoad: 'login-required'
    });
    if(authenticated){
        const store = useAppStore();
        store.keycloak = keycloak;
    }
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}
app.mount('#app')
