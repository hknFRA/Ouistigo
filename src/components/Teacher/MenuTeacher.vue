<template lang="html">

  <div class="sidebar" data-color="azure" data-image="assets/img/sidebar-5.jpg">

    <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->


    <div class="sidebar-wrapper">
      <div class="logo">
        <div class="row">
          <div class="col-md-3">
          <img src="@/assets/mascotte_f.png" class="img-responsive" alt=""  width="50">
          </div>
          <div class="col-md-9">
            <router-link :to="{ name: 'AccueilTeacher', params: {} }" class="simple-text">
              <p>Ouistigo</p>
            </router-link>
          </div>
        </div>
      </div>

      <ul class="nav">

        <li>
          <router-link :to="{ name: 'ProfilTeacher', params: {} }">
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
}
</script>

<style lang="css">
</style>
