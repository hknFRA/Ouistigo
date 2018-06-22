<template lang="html">

  <div class="row">

    <!-- CHAMPS A REMPLIR -->
    <div class="col-md-7">
      <div class="card">
        <div class="content">
          <form>


            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Type du nouvel utilisateur</label>
                  <select v-model="utilisateur.Role">
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
                  <input type="text" class="form-control"  placeholder="" value="7777" disabled = disabled>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Identifiant de connexion</label>
                  <input type="text" class="form-control" placeholder="" value="jbenzakki" v-model="utilisateur.Id_connexion">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mot de Passe</label>
                  <input type="text" class="form-control" placeholder="" value="123456">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Nom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456" v-model="utilisateur.Nom">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Prenom</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456" v-model="utilisateur.Prenom">
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Adresse Mail</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456" v-model="utilisateur.Mail_adress">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Numéro de téléphone</label>
                  <input type="text" class="form-control" placeholder="Username" value="123456" v-model="utilisateur.Phone_number">
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
          <div>Pour CREER ce nouvel utilisateur, remplissez les champs et cliquez sur le bouton suivant :
          </div>
          <div>
          </div>
          <button type="submit" class="btn btn-info btn-fill pull-right" v-on:click.prevent="creerUtilisateur">Enregistrer</button>
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
      selected: '',
      utilisateur : {
        IdUser:"",
        Id_connexion:"",
        Role:"",
        FirstName:"",
        Name:"",
        Mail_adress:"",
        Phone_number:"",
      }


    }
  },

  computed () {

  },

  methods: {
    creerUtilisateur() {
      // POST
      this.$http.post('http://localhost:54089/api/Users', {
        IdUser : this.utilisateur.IdUser ,
        Id_connexion : this.utilisateur.Id_connexion ,
        Role : this.utilisateur.Role ,
        FirstName : this.utilisateur.FirstName ,
        Name : this.utilisateur.Name ,
        Mail_adress : this.utilisateur.Mail_adress ,
        Phone_number : this.utilisateur.Phone_number ,
      })
      .then(function(data){
        console.log(data);
      });


    }
  }


}


</script>

<style lang="css">
</style>
