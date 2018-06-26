<template lang="html">

  <!-- RANGEE DU TABLEAU -->
  <div class="row">

    <!-- NOM ET PRENOM DE L'UTILISATEUR -->
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">NOM ET PRENOM</h4>
        </div>
      </div>
    </div>
    <!-- FIN NOM ET PRENOM DE L'UTILISATEUR -->



    <!-- IDENTIFIANT ET MOT DE PASSE -->
    <div class="col-md-8">
      <div class="card">
        <div class="content">
          <form>
            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Identifiant d'application (non modifiable)</label>
                  <input type="text" class="form-control" disabled placeholder="Company" value="7YYZGZ">
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Identifiant de connexion</label>
                  <input type="text" class="form-control" placeholder="Username" value="jbenzakki">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Mot de Passe</label>
                  <input type="password" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Nom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>



            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Prénom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Date de dérnière connexion</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Adresse Mail</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label>Numero de Téléphone</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>



            <button type="submit" class="btn btn-info btn-fill pull-right">Enregistrer</button>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
    </div>
    <!-- FIN  -->


</div>

</template>

<script>
export default {
  mounted () {
    console.log("salut");
  }
}
</script>

<style lang="css">
</style>
