<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">


    <!-- TABLEAU DES UTILISATEURS -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">👨‍🎓 Apprenants</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Actif</th>
              <th>Adresse Mail</th>
              <th>Numéro de téléphone</th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr v-for="value in users" >
                <td> {{value.IdUser}} </td>
                <td> {{value.FirstName}} </td>
                <td> {{value.Name}} </td>
                <td> {{value.Statut_connexion}} </td>
                <td> {{value.Mail_adress}} </td>
                <td> {{value.phone}} </td>
                <td> {{value.website}} </td>
                <td><router-link :to="{ name: 'UtilisateurModifier', params: {id: value.id} }" tag="button">Modifier</router-link></td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>




  </div>


</template>

<script>
export default {


  data () {
    return {
      // INITIALISATION D'UN TABLEAU D'UTILIASTEUR VIDE
      users:null,
    }
  },

  mounted (){

    // ON RECUPERE NOTRE OBJET JSON
    //https://jsonplaceholder.typicode.com/users
    this.$http.get('http://localhost:54089/api/Users').then(response =>
      {
        console.log(response.data);

        // LE TABLEAU users PREND COMME VALEUR LA REPONSE JSON DE LA REQUETE
        this.users = response.data;

      }, response => {
        console.log("erreur");
      }
    )
  }

}
</script>

<style lang="css">
</style>
