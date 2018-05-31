<template lang="html">

  <div class="row">

    <!-- IDENTIFIANT ET MOT DE PASSE -->
    <div class="col-md-7">
      <div class="card">
        <div class="content">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Type du nouvel utilisateur</label>
                  <select v-model="selected">
                    <option disabled value="">Choisissez</option>
                    <option>Apprenant</option>
                    <option>Tuteur</option>
                    <option>Secretariat</option>
                    <option>Service Formation Continue</option>
                  </select>
                </div>
              </div>
            </div>



            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Identifiant d'application</label>
                  <label>ATTENTION : cet identifiant ne pourra plus être modifié</label>
                  <input type="text" class="form-control" disabled placeholder="Company" value="7YYZGZ">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Identifiant de connexion</label>
                  <input type="text" class="form-control" placeholder="Username" value="jbenzakki">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mot de Passe</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Nom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Prenom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Adresse Mail</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Numéro de téléphone</label>
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


    <!-- INSTRUCTIONS -->
    <div class="col-md-5">
      <div class="card">
        <div class="header">
          <h4 class="title">Instructions</h4>
        </div>
        <div class="content">
          <div>Pour CREER ce nouvel utilisateur, remplissez les champs et cliquez sur le bouton suivant :
          </div>
          <div>
          </div>
          <button type="submit" class="btn btn-info btn-fill pull-right">Enregistrer</button>
          <div class="clearfix"></div>
        </div>
        
      </div>
    </div>
    <!-- FIN -->







  </div>

</template>

<script>
export default {

data () {
  return {
    selected: ''
  }
},

computed () {


}


}
</script>

<style lang="css">
</style>
