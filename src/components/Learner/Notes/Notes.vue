<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <!-- NOM ET PRENOM DE L'APPRENANT -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title"> {{user.name}} </h4>
        </div>
      </div>
    </div>
    <!-- FIN NOM ET PRENOM DE L'APPRENANT -->

    <!-- MODULES VALIDEES - - - - -->
    <div class="col-md-12">
      <div id="modulesValides" class="card">
        <div class="header">
          <h4 class="title">Modules Validés</h4>
        </div>

        <!-- Fonction qui va chercher tous les modules validés et qui va créer les champs  -->

        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>Module</th>
              <th>Note Finale</th>
              <th>Année</th>
              <th>Semestre</th>
            </thead>
            <tbody>
              <tr>
                <td>Anglais</td>
                <td>Anglais</td>
                <td>Anglais</td>
                <td>Anglais</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
    <!-- FIN MODULES VALIDEES - - -  -->


    <!-- DETAILS DE TOUS LES MODULES PASSEES PAR L'APPRENANT - - - - - - - -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">2018 Semestre 1</h4>
        </div>

        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>Module</th>
              <th>Tuteur</th>
              <th>Présentiel</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Devoir 3</th>
              <th>Contrôle Continu</th>
              <th>Partiel</th>
              <th>Note Finale</th>
              <th>Resultat</th>
            </thead>
            <tbody>
              <tr>
                <td>Anglais</td>
                <td>Terressa</td>
                <td>OUI</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>Validé</td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </div>
    <!-- FIN  DETAILS DE TOUS LES MODULES PASSEES PAR L'APPRENANT - - - - - - - -->



  </div>



</template>

<script>
export default {
  data () {
    return {
      user: [],
      modulesValides: [],

    }
  },

  mounted ()
  {
    // ON RECUPERE NOTRE OBJET JSON
    this.$http.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id).then(response =>
      {
        console.log("sucess");
        console.log("Le numero de l'id est : "+this.$route.params.id);
        this.user = response.body;

      }, response => {
        console.log("erreur");
      }
    )
  }

}
</script>

<style lang="css">
#modulesValides {
  background-color: #bcffbe;
}


</style>
