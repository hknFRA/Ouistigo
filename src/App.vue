<template>

  <!-- <div id="app"> -->
  <div>
    <!-- <img src="./assets/logo.png"> -->

    <menu-ouistigo></menu-ouistigo>

    <div class="main-panel">
      <header-ouistigo></header-ouistigo>

      <div class="content">
        <div class="container-fluid">

          <transition name="test" enter-active-class="animated fadeIn">
            <router-view></router-view>
          </transition>

        </div>
      </div>

      <footer-ouistigo></footer-ouistigo>

    </div>

  </div>
</template>

<script>
import MenuOuistigo from './components/Composants_Generaux/Menu'
import FooterOuistigo from './components/Composants_Generaux/Footer'
import HeaderOuistigo from './components/Composants_Generaux/Header'

export default {
  components: {
    MenuOuistigo,
    HeaderOuistigo,
    FooterOuistigo
  },
  name: 'App'
}
</script>

<style>
/* Essayer d'importer une bibliothèque locale pour économiser de la bande passante */
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
