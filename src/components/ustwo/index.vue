<template>
  <div>
    <Navigation />
    <Home />
  </div>
</template>

<script>
  import Navigation from './nav.vue'
  import Home from './home.vue'
  
  export default {
    name: 'ustwo',
    data () {
      return {
        msg: 'Welcome to Awesome Website '
      }
    },
    components: {
      Navigation,
      Home
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
