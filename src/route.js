import { createRouter, createWebHistory } from 'vue-router';

// Importe tes composants de page
import MainPage from './components/MainPage.vue';
import AuthForm from './components/AuthForm.vue';
import ListeSondage from './components/ListeSondage.vue'; // Importe le composant ListeSondage

// Importe d'autres composants de page si nécessaire

const routes = [
  { path: '/', component: MainPage },
  { path: '/connexion', component: AuthForm },
  { path: '/liste-sondage', component: ListeSondage }, // Ajoute la route pour ListeSondage
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
