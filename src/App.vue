<template>

  <!-- <div id="app"> -->
  <div>


    <transition name="test" enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>


export default {
// Nous sommes sur le composant global
// On déclare dans data() toutes les variables dont on aura besoin dans tout le projet

  name: 'App',

  components: {
  },

  data() {
    return {
      connexion: false,
    }
  },



  }
  </script>

  <style>

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
