<template lang="html">

  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

    <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->


    <div class="sidebar-wrapper">
      <div class="logo">
        <a class="simple-text">
          OUISTIGO
        </a>
      </div>

      <ul class="nav">
        <li class="active">
          <router-link :to="{ name: 'Apprenants', params: {} }" class="pe-7s-graph">Apprenants</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Modules', params: {} }" class="pe-7s-note2">Modules</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Utilisateurs', params: {} }" class="pe-7s-note2">Gérer les Utilisateurs</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Profil', params: {} }" class="pe-7s-news-paper">Mon Profil</router-link>
        </li>

        <li class="active-pro">
          <router-link :to="{ name: 'Utilisateurs', params: {} }" class="pe-7s-rocket">SE DECONNECTER</router-link>
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
