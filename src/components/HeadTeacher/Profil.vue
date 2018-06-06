<template lang="html">

      <div class="row">


        <!-- IDENTIFIANT ET MOT DE PASSE -->
        <div class="col-md-8">
          <div class="card">
            <div class="header">
              <h4 class="title">👨‍💻 Identifiant / Mot de Passe</h4>
            </div>
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
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Identifiant de connexion</label>
                      <input type="text" class="form-control" placeholder="Username" value="jbenzakki">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Mot de Passe</label>
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


        <!-- INFORMATIONS PERSONNELLES -->
        <div class="col-md-8">
          <div class="card">
            <div class="header">
              <h4 class="title">👩‍🎓 Informations Personnelles</h4>
            </div>
            <div class="content">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Prenom</label>
                      <input type="text" class="form-control" placeholder="Company" value="Judith">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Nom de famille</label>
                      <input type="text" class="form-control" placeholder="Last Name" value="Benzakki">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Adresse Mail</label>
                      <input type="email" class="form-control" placeholder="Email" value="jb@evry.fr">
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Numero de téléphone</label>
                      <input type="email" class="form-control" placeholder="Email" value="066666666">
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-info btn-fill pull-right">Enregistrer</button>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
        <!-- FIN -->




        <!-- INSTRUCTIONS -->
        <div class="col-md-5">
          <div class="card">
            <div class="header">
              <h4 class="title">Instructions</h4>
            </div>
            <div class="content">
              <div>Pour ENREGISTRER vos modifications, cliquez sur le bouton suivant :
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
}
</script>

<style lang="css">
</style>
