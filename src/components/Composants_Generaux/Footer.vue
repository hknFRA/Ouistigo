<template lang="html">
  <footer id="piedDePage" class="footer">

    <div class="container-fluid">

      <p class="copyright pull-right">
        &copy; JBPROJET1 /
        <router-link :to="{ name: '', params: {} }">Copyright</router-link>
        / 2018
      </p>

    </div>

  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
#piedDePage {
  background-color: #bcfff9;
}

</style>
