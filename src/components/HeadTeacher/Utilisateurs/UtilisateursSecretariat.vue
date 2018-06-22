<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">


    <!-- TABLEAU DES UTILISATEURS -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">👩‍💼 Secretariat</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Actif</th>
              <th>Adresse Mail</th>
              <th></th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr v-for="value in users" >
                <td> {{value.IdUser}} </td>
                <td> {{value.Name}} </td>
                <td> {{value.FirstName}} </td>
                <td> {{value.Statut_connexion}} </td>
                <td> {{value.Mail_adress}} </td>
                <td> {{value.Phone_number}} </td>
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
      users: [],
    }
  },

  mounted (){
    // ON RECUPERE NOTRE OBJET JSON
    this.$http.get('http://localhost:54089/api/Users/test?param=secretariat').then(response =>
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
</style>
