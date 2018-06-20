<template lang="html">
  <div class="">

    <div class="wrapper principal">
      <div class="register-background">
        <div class="container contenu" style="margin-top: 0%">

          <!-- RANGEE DU MILIEU -->
          <div class="row">

            <!-- ZONE DE CONNEXION -->
            <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 ">
              <div class="register-card">
                <h3 class="title">Bonjour !</h3>
                <form class="register-form">

                  <label>Identifiant</label>
                  <!-- Liaison avec la variable Identifiant -->
                  <input v-model="identifiant" type="text" class="form-control" placeholder="ouistigo@evry.fr">

                  <!-- Liaison avec la variable MotDePasse -->
                  <label>Mot de passe</label>
                  <input v-model="motDePasse" type="password" class="form-control" placeholder="****">

                  <router-link v-on:click.native="connexion" :to="{ name: test, params: {} }" class="btn btn-danger btn-block" tag="button">Connexion</router-link>

                </form>

              </div>
            </div>

          </div>
        </div>



      </div>
    </div>

    <footer-ouistigo></footer-ouistigo>

  </div>



</template>

<script>
// Gestion de la CONNEXION
// L'Utilisateur entre son identifiant ainsi que son mot de passe
// Il clique sur le bouton de connexion
// Une foction vérifie son statut
// La variable test prend la route adéquat
//




import FooterOuistigo from './Footer'

export default {

  components : {
    FooterOuistigo,
  },

  data () {
    return {
      test : '',
      mdentifiant : '',
      motDePasse : '',
    }
  },

  methods : {
    connexion () {
      if(this.identifiant != "" && this.motDePasse != "") {
        this.test = 'AccueilHeadTeacher';
      }
      else {
        alert("Veuillez entrer un identifiant et/ou un mot de passe");
      }
    }
  },

  mounted () {
  }




}
</script>

<style lang="css">

.register-card {
  background-color: #FF8F5E;
  border-radius: 8px;
  color: #fff;
  max-width: 350px;
  margin: 20px 0 70px;
  min-height: 400px;
  padding: 30px;
}

/* CES 2 CLASSES PERMETTENT FIXER LE FOOTER EN BAS GRÂCE A FLEXBOX */
.principal {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contenu {
  flex: 1;
}

</style>
