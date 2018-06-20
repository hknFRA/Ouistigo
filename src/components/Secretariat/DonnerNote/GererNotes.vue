<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <!-- TABLEAU DES APPRENANTS NON TUTORES -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">Apprenants Non Tutorés</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-hover table-striped">
            <thead>
              <th>Module</th>
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
              <tr>
                <td> Anglais </td>
                <td> <input type="text" name="" value=""> </td>
                <td> <input type="text" name="" value=""> </td>
                <td> <input type="text" name="" value=""> </td>
                <td> <input type="text" name="" value=""></td>
                <td> <input type="text" name="" value=""></td>
                <td>12</td>
                <td>12</td>
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
}
</script>

<style lang="css">
</style>
