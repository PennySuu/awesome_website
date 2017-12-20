<template>
  <div class="home-main-content-wrapper">
    <div class="scroll-wrapper">
      <div class="scroll-wrapper-inner" style="height: 855.2px;">
        <content-text></content-text>
      </div>
    </div>
  </div>
</template>
<script>
  import ContentText from './content-text'
  
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      ContentText
    }
  }
</script>
<style lang="stylus">
  .home-main-content-wrapper
    position relative
    z-index 1
    background-color #f8f8f8
</style>
