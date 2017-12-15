<template>
  <div>
    <nav class="navigation" :class="{menuOpen: menuOpen}">
      <div class="navigation-buttons">
        <div class="navigation-logo"></div>
        <div class="navigation-toggle" v-on:mouseover="navHover" @click="toggleMenu">
          <div class="navigation-toggle-main"></div>
          <div class="svg-sequence">
            <Ring startColor="#16D6D9" endColor="#96CC29" :pause.sync="pause" />
          </div>
        </div>
      </div>
    </nav>
    <div class="modal menu" :class="[menuOpen ? 'show' : 'hide']">
      <nav class="navigation-overlay ">
        <ul class="menu-items">
          <li v-on:mouseover="menuHover('home')" class="navigation-overlay-link selected"><a href="#">home</a></li>
          <li v-on:mouseover="menuHover('us')" class="navigation-overlay-link"><a href="#">about us</a></li>
          <li v-on:mouseover="menuHover('work')" class="navigation-overlay-link"><a href="#">work</a></li>
          <li v-on:mouseover="menuHover('blog')" class="navigation-overlay-link"><a href="#">blog</a></li>
          <li v-on:mouseover="menuHover('join-us')" class="navigation-overlay-link"><a href="#">join us</a></li>
          <li v-on:mouseover="menuHover('contact-us')" class="navigation-overlay-link"><a href="#">contact us</a></li>
        </ul>
        <div :class="[currentBg === 'home' ? 'hovered': '']"
             class="navigation-overlay-bg navigation-overlay-bg-home"></div>
        <div :class="[currentBg === 'us' ? 'hovered' : '']"
             class="navigation-overlay-bg navigation-overlay-bg-us"></div>
        <div :class="[currentBg === 'work' ? 'hovered' : '']"
             class="navigation-overlay-bg navigation-overlay-bg-work"></div>
        <div :class="[currentBg === 'blog' ? 'hovered' : '']"
             class="navigation-overlay-bg navigation-overlay-bg-blog"></div>
        <div :class="[currentBg === 'join-us' ? 'hovered' : '']"
             class="navigation-overlay-bg navigation-overlay-bg-join-us"></div>
        <div :class="[currentBg === 'contact-us' ? 'hovered' : '']"
             class="navigation-overlay-bg navigation-overlay-bg-contact-us"></div>
      </nav>
    </div>
  </div>
</template>
<script>
  import Ring from './ring.vue'
  
  export default {
    name: 'ustwo',
    data () {
      return {
        menuOpen: false,
        pause: true,
        currentBg: 'home'
      }
    },
    methods: {
      navHover () {
        this.pause = false
      },
      toggleMenu () {
        this.menuOpen = !this.menuOpen
      },
      menuHover (currentBg) {
        this.currentBg = currentBg
      }
    },
    components: {
      Ring
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .navigation
    position fixed
    top 0
    right 0
    z-index 4000
    pointer-events auto
    padding 27px 0
    &-buttons
      display flex
      z-index 1
    &-toggle
      position relative
      cursor pointer
      height 40px
      margin 0 26px 0 16px
      &-main
        position relative
        z-index 1
        pointer-events none
        width 31px
        height 31px
        border 3px solid #fff
        box-sizing content-box
        border-radius 50%
        transtion all .2s linear
        &::before,
        &::after
          content ''
          position absolute
          width: 15px
          height: 3px
          background-color: #fff
          transition all .2s linear
          left calc(50% - 8px)
          top calc(50% - 1px - 3px)
        &::after
          top calc(50% - 1px + 3px)
      &-ring
        position absolute
        left: 0
        top: 0
        z-index 2
        fill #96cc29
        width: 56px
        height: 56px
        margin-left: -10px
        margin-top: -9px
  
  .menuOpen
    .navigation-toggle-main
      &::before
        transform: rotate(45deg) translate(2px, 2px)
      &::after
        transform rotate(-45deg) translate(2px, -2px)
  
  .svg-sequence
    pointer-events none
  
  .modal
    position fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index 3999
    opacity 0
    transition: opacity .2s linear
    transform translateZ(0)
    &.show
      opacity 1
  
  .navigation-overlay
    height: 100%
    background-image: linear-gradient(30deg, #16d6d9, #96cc29)
    transition background-image .2s ease-in-out
    display flex
  
  .menu-items
    position relative
    z-index 11
    margin: 0 0 0 128px
    padding: 0
    list-style none
    display flex
    flex-direction column
    justify-content center
    align-items center
  
  .navigation-overlay-link
    position relative
    color: #f8f8f8
    width: 100%
    font-size: 52px
    text-align left
    font-family: futura-pt, Arial Black, Arial Bold, Gadget, sans-serif
    text-transform: uppercase
    line-height: 1
    opacity 0
    transform translateY(20px)
    transition all .2s ease-out
    a
      display: block
      line-height 1.6em
    &:before
      content ""
      position absolute
      width 15px
      height 15px
      top: 50%
      left -30px
      margin-top: -7px
      border-radius 50%
      border 2px solid #fff
      opacity 0
      transform scale(0)
      transition .5s ease-in-out
      transform-origin 50% 50%
    &.selected
      &:before
        opacity 1
        background-color: #f8f8f8
        transform scale(1)
    &:hover
      &:before
        opacity 1
        transform scale(1)
  
  .show
    .navigation-overlay-link
      opacity 1
      transform translateY(0)
      &:first-child
        transition-delay .3s
      &:nth-child(2)
        transition-delay .4s
      &:nth-child(3)
        transition-delay .5s
      &:nth-child(4)
        transition-delay .6s
      &:nth-child(5)
        transition-delay .7s
      &:nth-child(6)
        transition-delay .8s
  
  .navigation-overlay-bg
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    opacity 0
    transition opacity .2s ease-in-out
    &-home
      background-image: linear-gradient(30deg, #16d6d9, #96cc29)
    &-us
      background-image: linear-gradient(30deg, #ed0082, #fa7d78)
    &-work
      background-image: linear-gradient(30deg, #6114cc, #fa7d78)
    &-blog
      background-image linear-gradient(30deg, #009cf3, #16d6d9)
    &-join-us
      background-image linear-gradient(30deg, #ffbf02, #fa7d78)
    &-contact-us
      background-image linear-gradient(30deg, #14c04d, #f5e664)
    &.hovered
      opacity 1
</style>
