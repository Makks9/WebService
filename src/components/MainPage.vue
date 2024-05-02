<template>
  <div>
    <p class="fs-2 text-center">Liste des sondages</p> 
    <ol class="list-group list-group-numbered">
      <li v-for="(sondage, index) in sondages" :key="index" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ sondage.titre }}</div>
          {{ sondage.contenu }}
        </div>
        <!-- Utilise router-link pour le lien -->
        <router-link to="/liste-sondage" class="btn btn-outline-purple">Voter</router-link>
      </li>
    </ol>
  </div>
</template>

<script setup>
const sondages = [
  { id: '1', titre: 'Sondage 1', contenu: 'Contenu du sondage 1' },
  { id: '2', titre: 'Sondage 2', contenu: 'Contenu du sondage 2' },
  { id: '3', titre: 'Sondage 3', contenu: 'Contenu du sondage 3' },
  { id: '4', titre: 'Sondage 4', contenu: 'Contenu du sondage 4' },  
  { id: '5', titre: 'Sondage 5', contenu: 'Contenu du sondage 5' },
];
</script>

<style scoped>
.btn-outline-purple {
  color: #805ad5;
  background-color: #fff;
  border-color: #805ad5;
}

.btn-outline-purple:hover {
  color: #fff;
  background-color: #805ad5;
  border-color: #805ad5;
}
</style>


