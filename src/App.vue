<template>
  <div id="app">
    <MenuBar />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script setup>
import MenuBar from './components/MenuBar.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
</style>
