<template lang="html">
  <div class="">

    <div class="wrapper">
      <div class="register-background">
        <div class="filter-black"></div>
        <div class="container">

          <!-- RANGEE DU MILIEU -->
          <div class="row">

            <!-- ZONE DE CONNEXION -->
            <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 ">
              <div class="register-card">
                <h3 class="title">Bonjour !</h3>
                <form class="register-form">
                  <label>Email</label>
                  <input type="text" class="form-control" placeholder="">

                  <label>Mot de passe</label>
                  <input type="password" class="form-control" placeholder="">

                  <router-link :to="{ name: 'Accueil', params: {} }" class="btn btn-danger btn-block" tag="button">Connexion</router-link>

                </form>

              </div>
            </div>

          </div>
        </div>

        <div class="footer register-footer text-center">
          <h6>&copy; 2018, crée par JB Projet 1</h6>
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

.register-card {
  background-color: #FF8F5E;
  border-radius: 8px;
  color: #fff;
  max-width: 350px;
  margin: 20px 0 70px;
  min-height: 400px;
  padding: 30px;
}





</style>
