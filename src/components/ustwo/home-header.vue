<template>
  <div class="header-wrapper">
    <div class="header-inner">
      <div class="scroll-wrapper">
        <div class="scroll-inner">
          <div class="header-intro">
            <div class="header-intro-video">
              <div class="videoBackground imageCSS">
                <img src="https://i.vimeocdn.com/video/626251677.jpg?mw=1280&mh=720" alt="">
                <video preload="auto" playsinline loop muted autoplay
                       src="blob:https://ustwo.com/e6776478-19a7-488a-8f67-849850e41416"></video>
              </div>
            </div>
            <div class="header-intro-logo"></div>
            <div class="hero-down-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style lang="stylus">
  .header-wrapper
    height: 100%
    position relative
    top: auto
    left auto
    bottom auto
    right auto
    z-index 1
  
  .header-inner
    position fixed
    margin auto
    top: 0
    left: 0
    bottom auto
    right auto
    height: 100%
    width 100%
  
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
</style>

