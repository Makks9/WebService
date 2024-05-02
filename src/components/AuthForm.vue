<script setup></script>

<template>

<p class="fs-2 text-center">Authentification</p> 
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Adresse Email</label
    >
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <label for="inputPassword5" class="form-label">Mot de passe</label>
  <input
    type="password"
    id="inputPassword5"
    class="form-control"
    aria-describedby="passwordHelpBlock"
  />
  <div id="passwordHelpBlock" class="form-text">
    Votre mot de passe doit contenir entre 8 et 20 caractères, inclure des lettres et des chiffres, et 
    ne doit pas contenir d'espaces, de caractères spéciaux ou d'émoticônes.
  </div>
  <br>
  <br>
  <div class="d-flex justify-content-center"> <!-- Centrer le bouton -->
  <button type="button" class="btn btn-outline-purple">Connecter</button>
  </div>

</template>

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
