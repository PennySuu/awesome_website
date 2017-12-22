<template>
  <div class="header-wrapper">
    <div class="header-inner">
      <div class="scroll-wrapper" ref="scrollWrapper" v-on:mousemove="transitionLogoLayer">
        <div class="scroll-inner">
          <div class="header-intro">
            <div class="header-intro-video">
              <div class="videoBackground imageCSS">
                <img class="video-mobile-fallback" src="https://i.vimeocdn.com/video/626251677.jpg?mw=1280&mh=720" />
                <video preload="auto" playsinline loop muted autoplay src="../../assets/884903753.mp4"></video>
              </div>
            </div>
            <div class="header-intro-logo">
              <div class="header-intro-logo-wrapper">
                <svg class="layer-background" :style="LogoLayerStyle">
                  <title>ustwo logo layer</title>
                  <use xlink:href="./static/spritemap.svg#ustwologo"></use>
                </svg>
                <svg>
                  <title>ustwo logo layer</title>
                  <use xlink:href="./static/spritemap.svg#ustwologo"></use>
                </svg>
              </div>
            </div>
            <div class="hero-down-indicator">
              <div class="down-indicator">
                <div class="down-indicator-icon"></div>
              </div>
            </div>
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
        LogoLayerStyle: {
          transform: 'translate3d(0,0,0)'
        }
      }
    },
    components: {},
    methods: {
      transitionLogoLayer (event) {
        let elementAttributes = this.getElementAttributed(this.$refs.scrollWrapper)
        let screenPosition = {
          coordinateX: Math.round(200 * (event.clientX / elementAttributes.width - 0.5)) / 100,
          coordinateY: Math.round(200 * (event.clientY / elementAttributes.height - 0.5)) / 100
        }
        let transform = {
          transform: 'translate3d(' + (-1 * screenPosition.coordinateX || 0) * 10 + 'px, ' + (-1 * screenPosition.coordinateY || 0) * 10 + 'px, 0)'
        }
        this.LogoLayerStyle = transform
      },
      getElementAttributed (elem) {
        let ele = elem.getBoundingClientRect()
        return {
          width: ele.width,
          height: ele.height
        }
      }
    }
  }
</script>
<style lang="stylus">
  .scroll-wrapper
    height: 100%
  
  .header-wrapper
    height: 100%
    position relative
    top: auto
    left auto
    bottom auto
    right auto
    z-index 1
    margin: 0
    display: block
    box-sizing content-box
    padding-top: 0
    padding-bottom: 0
  
  .header-inner
    position fixed
    margin auto
    top: 0
    left: 0
    bottom auto
    right auto
    height: 100%
    width 100%
  
  .header-intro
    width 100vm
    display flex
    align-items center
    justify-content center
    height 100%
    cursor pointer
    left 0
  
  .header-intro-video
    flex 1
    height 100%
    width 100%
    position absolute
    left 0
    top 0
    z-index 1
    overflow hidden
  
  .videoBackground
    height: 100%
    width 100%
    position absolute
    left: 0
    top: 0
    z-index 1
    overflow hidden
    background-color #111
    video
      object-fit cover
      width 100%
      height 100%
      z-index -1000
  
  .imageCSS
    background-size cover
    background-position 50%
  
  .video-mobile-fallback
    position absolute
    object-fit cover
    width 100%
    height 100%
    z-index -1000
  
  .header-intro-logo-wrapper
    perspective 200
    width: 225px
  
  .header-intro-logo
    position relative
    z-index 1
    display flex
    align-items center
  
  .header-intro-logo svg
    position relative
    z-index 2
    top auto
    left: 0
    fill #f8f8f8
    width 100%
  
  svg.layer-background
    fill #000
    filter blur(4px)
    opacity .3
    position absolute
    top: 0
    left: 0
    z-index 2
  
  .hero-down-indicator
    position absolute
    z-index 2
    bottom 40px
  
  .down-indicator
    display: flex
    width 100vw
    justify-content center
  
  .down-indicator-icon
    width: 25px
    height: 64px
    background url('../../assets/icon-down-loop.gif') no-repeat 0
    background-size 100% auto
</style>

