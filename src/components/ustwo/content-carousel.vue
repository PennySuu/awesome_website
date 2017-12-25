<template>
  <div class="home-carousel">
    <div class="home-carousel-items">
      <a href="#" class="home-carousel-item" v-for="(item, index) in list" :key="index"
         v-on:mouseenter="mouseenter(index, $event)" v-on:mouseleave="mouseleave(index, $event)"
         :class="[index%2 ? 'odd' : 'even',  (index===even.active || index===odd.active) ? 'active' : '', (index===even.previous || index===odd.previous) ? 'previous' : '']">
        <div class="home-carousel-item-image">
          <div class="home-carousel-visual-content">
            <img :src="item.img_src" alt="" class="home-carousel-visual-content-image">
          </div>
        </div>
        <div class="home-carousel-item-text">
          <div class="section-title">Client Work</div>
          <h2>{{item.title}}</h2>
          <div class="home-carousel-item-description">{{item.description}}</div>
        </div>
      </a>
    </div>
    <button class="home-carousel-shuffle"></button>
    <div class="view-carousel-related-page"></div>
  </div>
</template>
<script>
  
  export default {
    data () {
      return {
        list: [
          {
            img_src: './static/ford-gopark.jpg',
            title: 'Ford GoPark',
            description: 'A smart parking service tackling congestion in one of London’s busiest boroughs'
          },
          {
            img_src: './static/android-wear.jpg',
            title: 'Android wear',
            description: 'An evolving creative partnership setting the standard for watch face design'
          },
          {
            img_src: './static/foursquare.jpg',
            title: 'Foursquare',
            description: 'A fresh business customer portal experience designed to showcase the enterprise offering'
          },
          {
            img_src: './static/adidas-go.jpg',
            title: 'Adidas Go',
            description: 'A music app designed to track, enhance and improve your running performance'
          },
          {
            img_src: './static/google-cardboard.jpg',
            title: 'Google Cardboard',
            description: 'An accessible go-to how-to guide for VR design principles'
          },
          {
            img_src: './static/harvey-nichols.jpg',
            title: 'Ford GoPark',
            description: 'A unique consumer-centred loyalty experience built to engage and reward'
          },
          {
            img_src: './static/sky-kids.jpg',
            title: 'Harvey Nicholsk',
            description: 'A smart parking service tackling congestion in one of London’s busiest boroughs'
          },
          {
            img_src: './static/nbc-sprout.jpg',
            title: 'NBC Sprout',
            description: 'A fun, colourful and exploratory game for Terrific Trucks'
          }
        ],
        even: {
          active: 0,
          previous: 6
        },
        odd: {
          active: 1,
          previous: 7
        },
        isHover: false,
        timer: null
      }
    },
    computed: {},
    methods: {
      init () {
        //this.carousel()
      },
      carousel () {
        if (this.isHover) {
          clearTimeout(this.timer)
          return
        }
        this.timer = setTimeout(() => {
          this.even.active = this.even.active === 6 ? 0 : this.even.active + 2
          this.even.previous = this.even.previous === 6 ? 0 : this.even.previous + 2
          this.odd.active = this.odd.active === 7 ? 1 : this.odd.active + 2
          this.odd.previous = this.odd.previous === 7 ? 1 : this.odd.previous + 2
          this.carousel()
        }, 5000)
      },
      mouseenter (index, event) {
        this.isHover = true
        if (index % 2) {
          event.target.classList.add('justBeenHovered')
          document.querySelector('.even.active').classList.add('otherIsHovered')
        }
      },
      mouseleave (index, event) {
        if (index % 2) {
          event.target.classList.add('justBeenHovered')
          document.querySelector('.even.active').classList.add('justBeenHovered')
          document.querySelector('.even.active').classList.remove('otherIsHovered')
          document.querySelector('.even.active').addEventListener('transitionend', this.removeClass.bind(this, document.querySelector('.even.active'), 'justBeenHovered'), false)
          event.target.addEventListener('transitionend', this.removeClass.bind(this, event.target, 'justBeenHovered'), false)
        }
      },
      removeClass (element, className) {
        element.classList.remove(className)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style lang="stylus">
  .home-carousel
    position relative
    display flex
    flex-direction column
    flex 1
    &-items
      position relative
      height: 730px
      display flex
      justify-content: center
      align-items: center
      flex 1
    &-visual-content
      width 590px
      height: 400px
      &-image
        width 100%
        height 100%
        box-shadow 5px 5px 15px rgba(0, 0, 0, .2)
    &-item
      position absolute
      top 50%
      &-image
        visibility hidden
        position relative
        display flex
        align-items flex-end
        transition: all .2s linear
        &::after
          content ''
          width 250px
          position absolute
          top: 0
          right: 0
          bottom: 0
          opacity: 0
          transition opacity .15s ease-in-out
          z-index 10
      &-text
        visibility hidden
        width: 55%
        top: 80px
        z-index: 20;
        transform translate3d(0, -40px, 0)
        position absolute
        h2
          font-size: 50px
          margin: 0
          font-family: futura-pt, Arial Black, Arial Bold, Gadget, sans-serif;
      &-description
        font-size: 18px
        padding-top: 20px
        opacity: 0
        transform translateY(15px)
        transition all .2s ease-in
      &:hover
        .home-carousel-item-description
          opacity 1
          transform translateY(0)
        .home-carousel-item-image
          &::after
            opacity .75
            transition-duration .32s
      &.even
        padding-left: 100px
        left: 0
        right auto
        transform translateY(-330px)
        .home-carousel-item-text
          left: 0
        .home-carousel-item-image
          transform scale(.95)
          &::after
            left: 0
        &:hover
          .home-carousel-item-image
            &::after
              background linear-gradient(-90deg, transparent, #fff)
      &.odd
        padding-right: 100px
        right: 130px
        left: auto
        transform translateY(-70px)
        .home-carousel-item-text
          right: 0
          left: 510px
        .home-carousel-item-image
          transform scale(.9)
          &::after
            background linear-gradient(-90deg, #fff, transparent)
      &.active
        &.even
          z-index 8
          .home-carousel-item-image
            transform scale(1)
          .home-carousel-item-image,
          .home-carousel-item-text
            transition-delay .4s
        &.odd
          z-index 6
          .home-carousel-item-image
            transform scale(.95)
          .home-carousel-item-image,
          .home-carousel-item-text
            transition-delay .2s
        .home-carousel-item-image,
        .home-carousel-item-text
          visibility visible
        &.otherIsHovered
          .home-carousel-item-image
            transform: scale(.95);
            transition-delay: 0s
        &.justBeenHovered
          .home-carousel-item-image
            transition-delay 0s
        &:hover
          z-index 9
          .home-carousel-item-image
            transform scale(1)
      &.previous
        &.even
          z-index 7
          .home-carousel-item-image,
          .home-carousel-item-text
            transition-delay .2s
        &.odd
          z-index 4
          .home-carousel-item-image,
          .home-carousel-item-text
            transition-delay 0s
  
  .home-carousel-item:not(.active) {
    z-index: 0
  }
  
  .section-title
    font-size: 16px;
    letter-spacing 1px
    line-height 28px
    margin: 7px
</style>
