<template lang="html">




  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <!-- BOUTON POUR CREER UN NOUVEL UTILISATEUR -->
    <div class="col-md-12">

        <router-link :to="{ name: 'UtilisateursCreer', params: {} }" tag="button" class="card" id="test">🙋‍♂️ Créer un nouvel utilisateur</router-link>

    </div>

    <!-- BOUTONS POUR CHOISIR QUEL TYPE D'UTILISATEURS AFFICHER -->
    <div class="col-md-12">
      <div class="card">
        <router-link :to="{ name: 'UtilisateursApprenants', params: {} }" tag="button">👨‍🎓 Apprenants</router-link>
        <router-link :to="{ name: 'UtilisateursTuteurs', params: {} }" tag="button">👩‍🏫 Tuteurs</router-link>
        <router-link :to="{ name: 'UtilisateursSecretariat', params: {} }" tag="button">👩‍💼 Secretariat</router-link>
        <router-link :to="{ name: 'UtilisateursServiceFormationContinue', params: {} }" tag="button">👩‍⚖️ Service Formation Continue</router-link>
      </div>
    </div>



    <!-- CE ROUTER VIEW S'ACTUALISE A CHAQUE FOIS QUE L'ON CLIQUE SUR LES ROUTER LINK AU DESSUS -->
    <!-- TABLEAU DES UTILISATEURS -->
    <transition name="test" enter-active-class="animated fadeInDown">
      <router-view></router-view>
    </transition>


  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
    }
  },

  mounted (){
    // ON RECUPERE NOTRE OBJET JSON
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(response =>
      {
        console.log("sucess");
        this.users = response.body;

      }, response => {
        console.log("erreur");
      }
    )
  }



}
</script>

<style lang="css">
#test {
  background: #00ff84;
  background-image: -webkit-linear-gradient(top, #00ff84, #00ff95);
  background-image: -moz-linear-gradient(top, #00ff84, #00ff95);
  background-image: -ms-linear-gradient(top, #00ff84, #00ff95);
  background-image: -o-linear-gradient(top, #00ff84, #00ff95);
  background-image: linear-gradient(to bottom, #00ff84, #00ff95);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;

  font-size: 15px;
  padding: 10px 20px 10px 20px;
  border: solid #1f628d 1px;
  text-decoration: none;
}



</style>
