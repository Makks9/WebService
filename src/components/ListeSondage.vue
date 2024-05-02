<template>
  <div>
    <p class="fs-2 text-center">ID du Sondage</p>      
      <ul class="list-group">
    <p class="fs-4">Question 1</p>
    <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question1" value="" id="firstRadio1">
    <label class="form-check-label" for="firstRadio1">Première réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question1" value="" id="secondRadio1">
    <label class="form-check-label" for="firstRadio1">Deuxième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question1" value="" id="thirdRadio1">
    <label class="form-check-label" for="firstRadio1">Troisième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question1" value="" id="fourthRadio1">
    <label class="form-check-label" for="firstRadio1">Quatrième réponse</label>
  </li>
  </ul>
  
    <br>
    <ul class="list-group">
    <p class="fs-4">Question 2</p>
    <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question2" value="" id="firstRadio2">
    <label class="form-check-label" for="firstRadio2">Première réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question2" value="" id="secondRadio2">
    <label class="form-check-label" for="firstRadio2">Deuxième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question2" value="" id="thirdRadio2">
    <label class="form-check-label" for="firstRadio2">Troisième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question2" value="" id="fourthRadio2">
    <label class="form-check-label" for="firstRadio2">Quatrième réponse</label>
  </li>
  </ul>
    <br>
    <ul class="list-group">
    <p class="fs-4">Question 3</p>
    <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question3" value="" id="firstRadio3">
    <label class="form-check-label" for="firstRadio3">Première réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question3" value="" id="secondRadio3">
    <label class="form-check-label" for="firstRadio3">Deuxième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question3" value="" id="thirdRadio3">
    <label class="form-check-label" for="firstRadio3">Troisième réponse</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="question3" value="" id="fourthRadio3">
    <label class="form-check-label" for="firstRadio3">Quatrième réponse</label>
  </li>
  </ul>
    <br>
    <br>
    <div class="d-flex justify-content-center"> <!-- Centrer le bouton -->
      <router-link to="/" type="button" class="btn btn-outline-purple" @click="afficherMessage">Envoyer</router-link>
    </div>
</div>
</template>

<script setup>

// Fonction pour afficher le message
const afficherMessage = () => {
  // Afficher une boîte de dialogue avec le message 
  alert('Votre vote a bien été pris en compte !');
}
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



