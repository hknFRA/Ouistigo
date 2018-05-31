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
                <td>12</td>
                <td>Bachir</td>
                <td>Djafri</td>
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
                <td>12</td>
                <td>S</td>
                <td>Sarunyaa</td>
                <td><input type="checkbox" name="" value=""></td>
                <td><input type="checkbox" name="" value=""></td>
              </tr>
              <tr>
                <td>12</td>
                <td>B</td>
                <td>Kenza</td>
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
}
</script>

<style lang="css">
</style>
