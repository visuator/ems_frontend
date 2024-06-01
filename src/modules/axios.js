import { useAppStore } from '@/stores/app';
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:6050"
});
api.interceptors.request.use((request) => {
    const store = useAppStore();
    request.headers.Authorization = `Bearer ${store.keycloak.token}`
    return request;
}, (error) => {
    return error;
})

export { api }