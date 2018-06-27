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
                  <label>Identifiant d'application (non modifiable)</label>
                  <input type="text" class="form-control" disabled placeholder="Company" v-model="user.id">
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Identifiant de connexion</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.name">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mot de Passe</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.username">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Nom</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.adress">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Prenom</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.email">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Adresse Mail</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.email">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Numéro de téléphone</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="user.email">
                </div>
              </div>
            </div>



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
          <div>Pour MODIFIER le profil de cet utilisateur, faites les modifications dans les champs et cliquez sur le bouton suivant:
          </div>
          <div>
          </div>
          <button type="submit" class="btn btn-info btn-fill pull-right">Enregistrer les modifications</button>
          <div class="clearfix"></div>
        </div>
        <div class="content">
          <div>Pour SUPPRIMER cet utilisateur, cliquez sur le bouton suivant :
          </div>
          <div>
          </div>
          <button type="submit" class="btn btn-danger btn-fill pull-right">Supprimer</button>
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
      user: [],
    }
  },

  mounted ()
  {
    // ON RECUPERE NOTRE OBJET JSON
    this.$http.get('http://localhost:54089/api/Users/getuser?id='+this.$route.params.id).then(response =>
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
</style>
