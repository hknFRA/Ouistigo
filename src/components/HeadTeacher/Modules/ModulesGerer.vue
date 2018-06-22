<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <!-- TABLEAU DES TUTEURS DISPONIBLES -->
    <div class="col-md-6">
      <div class="card">
        <div class="header">
          <h4 class="title">Tuteurs disponibles</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Inscription</th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr>
                <tr v-for="value in users" >
                  <td> {{value.IdUser}} </td>
                  <td> {{value.Name}} </td>
                  <td> {{value.FirstName}} </td>
                <td><input type="radio" name="" value=""></td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>

    <!-- TABLEAU DES APPRENANTS DISPONIBLES -->
    <div class="col-md-6">
      <div class="card">
        <div class="header">
          <h4 class="title">Apprenants disponibles</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Tutorat</th>
              <th>Inscription</th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr>
                <tr v-for="value in apprenants" >
                  <td> {{value.IdUser}} </td>
                  <td> {{value.FirstName}} </td>
                  <td> {{value.Name}} </td>
                  <td><input type="checkbox" name="" value=""></td>
                  <td><input type="checkbox" name="" value=""></td>
              </tr>
            </tbody>
          </table>



          <button type="submit" class="btn btn-info btn-fill pull-right">Enregistrer</button>
          <div class="clearfix"></div>
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

  data () {
    return {
      apprenants: [],
    }
  },

  mounted (){
    // ON RECUPERE NOTRE OBJET JSON
    this.$http.get('http://localhost:54089/api/Users/test?param=tuteur').then(response =>
      {
        console.log("sucess");
        this.users = response.body;

      }, response => {
        console.log("erreur");
      }
    )

    this.$http.get('http://localhost:54089/api/Users/test?param=apprenant').then(response =>
      {
        console.log("sucess");
        this.apprenants = response.body;

      }, response => {
        console.log("erreur");
      }
    )
  }
}
</script>

<style lang="css">
</style>
