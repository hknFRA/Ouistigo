<template lang="html">

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

import MenuOuistigo from './MenuFormationUnit'
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

<style lang="css">
</style>
