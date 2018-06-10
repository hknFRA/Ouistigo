<template>

  <!-- <div id="app"> -->
  <div>
    <!-- <img src="./assets/logo.png"> -->

    <!-- MENU LATERAL -->
    <menu-ouistigo></menu-ouistigo>

    <div class="main-panel principal">
      <header-ouistigo></header-ouistigo>

      <div class="content contenu">
        <div class="container-fluid">

          <transition name="test" enter-active-class="animated fadeIn">
            <router-view></router-view>
          </transition>

        </div>
      </div>

      <!-- PIED DE PAGE -->
      <footer-ouistigo></footer-ouistigo>

    </div>




  </div>
</template>

<script>
import MenuOuistigo from './Menu'
import HeaderOuistigo from '../Composants_Generaux/Header'
import FooterOuistigo from '../Composants_Generaux/Footer'



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



/* CES 2 CLASSES PERMETTENT FIXER LE FOOTER EN BAS GRACE A FLEXBOX */
.principal {
  display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.contenu {
  flex: 1;
}


</style>
