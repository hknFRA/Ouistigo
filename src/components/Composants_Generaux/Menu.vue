<template lang="html">



  <div class="sidebar" data-color="orange" data-image="assets/img/sidebar-5.jpg">

    <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->


    <div class="sidebar-wrapper">
      <div class="logo">
        <div class="row">
          <div class="col-md-3">
          <img src="./mascotte_f.png" class="img-responsive" alt=""  width="50">
          </div>
          <div class="col-md-9">
            <router-link :to="{ name: 'Accueil', params: {} }" class="simple-text">
              <p>Ouistigo</p>
            </router-link>
          </div>
        </div>
      </div>

      <ul class="nav">
        <li class="active">
          <router-link :to="{ name: 'Apprenants', params: {} }">
            <i class="pe-7s-smile"></i>
            <p>Apprenants</p>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Modules', params: {} }">
            <i class="pe-7s-note2"></i>
            <p>Modules</p>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Utilisateurs', params: {} }">
            <i class="pe-7s-users"></i>
            <p>Gérer les Utilisateurs</p>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Profil', params: {} }">
            <i class="pe-7s-user"></i>
            <p>Mon Profil</p>
          </router-link>
        </li>

        <li class="active-pro text-center">
          <router-link :to="{ name: 'Deconnexion', params: {} }">
            <i class="pe-7s-rocket"></i>
            <p>SE DECONNECTER</p>
          </router-link>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
export default {
  data () {
      return {

      }
}


}
</script>

<style lang="css">
</style>
