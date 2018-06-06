<template lang="html">

  <nav class="navbar navbar-default navbar-fixed">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand"> {{nomDeRoute}} </a>
      </div>
      <div class="collapse navbar-collapse">

      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data () {
    return {
      nomDeRoute : this.$route.name

    }
  },
  computed () {
    nomDeRoute : this.$route.name
  }
}
</script>

<style lang="css">
</style>
