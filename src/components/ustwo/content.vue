<template>
  <div class="home-main-content-wrapper">
    <div class="scroll-wrapper">
      <div class="scroll-wrapper-inner" style="height: 855.2px;">
        <content-text></content-text>
      </div>
    </div>
    <div class="scroll-wrapper scroll-wrapper-home-carousel-products">
      <div class="scroll-wrapper-inner">
        <content-carousel></content-carousel>
      </div>
    </div>
  </div>
</template>
<script>
  import ContentText from './content-text'
  import ContentCarousel from './content-carousel'
  
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      ContentText,
      ContentCarousel
    }
  }
</script>
<style lang="stylus">
  .home-main-content-wrapper
    position relative
    z-index 1
    background-color #f8f8f8
  
  .scroll-wrapper-home-carousel-products
    padding: 120px 0
</style>
