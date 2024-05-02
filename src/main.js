import { createApp } from 'vue'
import App from './App.vue'
import router from './route';

// Dépendance vers le fichier CSS de Bootstrap
//import "bootstrap/dist/css/bootstrap.min.css"
// Dépendance vers le fichier CSS de Bootstrap-Icons
//import "bootstrap-icons/font/bootstrap-icons.css"
// Dépendance vers le fichier JavaScript de Bootstrap (pour gérer les aspects dynamiques)
//import "bootstrap"

const app = createApp(App)

app.use(router);

app.mount('#app')