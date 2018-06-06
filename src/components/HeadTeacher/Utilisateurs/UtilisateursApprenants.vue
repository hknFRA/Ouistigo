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
              <th></th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr v-for="value in users" >
                <td> {{value.id}} </td>
                <td> {{value.name}} </td>
                <td> {{value.email}} </td>
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
</style>
