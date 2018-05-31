<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <div class="col-md-7">
      <div class="card">
      <div class="content table-responsive table-full-width">
        <table class="table table-hover table-striped">
          <thead>
            <th>Nom</th>
            <th>Nombre d'inscrits</th>
          </thead>
          <tbody>

            <!-- DIRECTIVE QUI VA PARCOURIR LE TABLEAU users ET AFFICHER TOUS LES ELEMENTS -->
            <tr>
              <td>Anglais</td>
              <td>3</td>
              <td><router-link :to="{ name: 'ModulesConsulter', params: {} }" tag="button">Consulter</router-link></td>
              <td><router-link :to="{ name: 'ModulesGerer', params: {} }" tag="button">Gérer</router-link></td>
            </tr>

            <tr>
              <td>COOL</td>
              <td>3</td>
              <td><router-link :to="{ name: '', params: {} }" tag="button">Consulter</router-link></td>
              <td><router-link :to="{ name: '', params: {} }" tag="button">Gérer</router-link></td>
            </tr>

            <tr>
              <td>BADA</td>
              <td>9</td>
              <td><router-link :to="{ name: '', params: {} }" tag="button">Consulter</router-link></td>
              <td><router-link :to="{ name: '', params: {} }" tag="button">Gérer</router-link></td>
            </tr>


          </tbody>
        </table>

      </div>
</div>
    </div>

    <!-- INSTRUCTIONS -->
    <div class="col-md-5">
      <div class="card">
        <div class="header">
          <h4 class="title">Instructions</h4>
        </div>
        <div class="content">
          <div>CONSULTER : voir les notes des apprenants, le nom du tuteur
          </div>
          <div>GERER : affecter des apprenants, choisir le tuteur
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN -->


  </div>


</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
