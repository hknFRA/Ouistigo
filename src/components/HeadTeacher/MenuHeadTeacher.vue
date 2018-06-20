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

        <!-- ON DONNE LE TAG "LI" AU ROUTER VIEW -->
        <!-- QUAND IL EST ACTIF, IL EST EN SURBRILLANCE -->
          <router-link :to="{ name: 'Apprenants', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-smile"></i>
              <p>Apprenants</p>
          </a>
          </router-link>



          <router-link :to="{ name: 'Modules', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-note2"></i>
              <p>Modules</p>
            </a>
          </router-link>



          <router-link :to="{ name: 'UtilisateursApprenants', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-users"></i>
              <p>Gérer les Utilisateurs</p>
            </a>
          </router-link>


          <router-link :to="{ name: 'Profil', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-user"></i>
              <p>Mon Profil</p>
            </a>
          </router-link>



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
