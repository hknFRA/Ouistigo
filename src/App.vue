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
  components: {
    
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
