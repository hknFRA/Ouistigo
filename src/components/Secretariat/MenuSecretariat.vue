<template lang="html">

  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

    <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->


    <div class="sidebar-wrapper">
      <div class="logo">
        <div class="row">
          <div class="col-md-3">
          <img src="@/assets/mascotte_f.png" class="img-responsive" alt=""  width="50">
          </div>
          <div class="col-md-9">
            <router-link :to="{ name: 'AccueilSecretariat', params: {} }" class="simple-text">
              <p>Ouistigo</p>
            </router-link>
          </div>
        </div>
      </div>

      <ul class="nav">

          <router-link :to="{ name: '', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-smile"></i>
              <p>Apprenants</p>
            </a>
          </router-link>

          <router-link :to="{ name: 'DonnerNote', params: {} }" active-class="active" tag="li">
            <a href="#">
              <i class="pe-7s-note2"></i>
              <p>Gérer notes</p>
            </a>
          </router-link>


          <router-link :to="{ name: 'ProfilSecretariat', params: {} }" active-class="active" tag="li">
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
}
</script>

<style lang="css">
</style>
