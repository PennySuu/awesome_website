<template>
  <div style="height: 100%">
    <HomeHead />
    <ContentMain />
  </div>
</template>

<script>
  import HomeHead from './home-header'
  import ContentMain from './content'
  
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      HomeHead,
      ContentMain
    }
  }
</script>
<style lang="stylus">
  .scroll-wrapper
    position relative
    z-index 1
    display: flex
    justify-content: center
    height: 100%
    & > *
      flex 1
      width: 100%
      max-width 1200px
      margin 0 auto
  
  .scroll-wrapper-inner
    display: flex
    justify-content: center
    height 100%
    & > :first-child
      width 100vw
</style>
