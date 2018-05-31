<template lang="html">

  <div class="row">

    <!-- LIAISON AVEC LA VARIABLE "annee" -->
    <div class="col-md-7">
      <div class="card">

        <div>
          <div class="row">
            Année :
          </div>
          <div class="row">
            <select v-model="annee" value="2018">
              <option disabled value="">Choisissez une année</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
            </select>
          </div>
        </div>

        <div>
          <div class="row">
            Semestre :
          </div>

          <div class="row">
            <!-- LIAISON AVEC LA VARIABLE "semestre" -->
            <select  v-model="semestre" value="Semestre 1">
              <option disabled value="">Choisissez un semestre</option>
              <option>Semestre 1</option>
              <option>Semestre 2</option>
            </select>
          </div>
        </div>

      </div>
    </div>

    <!-- NOM DU TUTEUR -->
    <div class="col-md-7">
      <div class="card">
        <h4>Nom du tuteur</h4>
        <label for="">Nom du tuteur</label>
      </div>
    </div>

    <!-- TABLEAU DES APPRENANTS TUTORES -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">Apprenants Tutorés</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Devoir 3</th>
              <th>Contrôle Continu</th>
              <th>Partiel</th>
              <th>Note Finale</th>
              <th>Resultat</th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr v-for="value in users" >
                <td> {{value.id}} </td>
                <td> {{value.name}} </td>
                <td> {{value.email}} </td>
                <td> {{value.phone}} </td>
                <td> {{value.website}} </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>


    <!-- TABLEAU DES APPRENANTS NON TUTORES -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">Apprenants Non Tutorés</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Devoir 3</th>
              <th>Contrôle Continu</th>
              <th>Partiel</th>
              <th>Note Finale</th>
              <th>Resultat</th>
            </thead>
            <tbody>

              <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
              <tr v-for="value in users" >
                <td> {{value.id}} </td>
                <td> {{value.name}} </td>
                <td> {{value.email}} </td>
                <td> {{value.phone}} </td>
                <td> {{value.website}} </td>
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
      annee: '',
      semestre: '',
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
