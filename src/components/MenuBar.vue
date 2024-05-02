<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #65D8D3;">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Palmoodle</span> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Accueil</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/connexion" class="nav-link" :class="{ 'active': $route.path === '/connexion' }">Connexion</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br>
  
  <br>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Importe useRoute pour accéder à $route
const $route = useRoute(); // Récupère $route pour déterminer la route active
</script>

