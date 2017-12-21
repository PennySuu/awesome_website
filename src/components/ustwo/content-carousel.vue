<template>
  <div class="home-carousel">
    <div class="home-carousel-items">
      <a href="#" class="home-carousel-item even">
        <div class="home-carousel-item-image">
          <div class="home-carousel-visual-content">
            <img src="../../assets/ford-gopark.jpg" alt="" class="home-carousel-visual-content-image">
          </div>
        </div>
        <div class="home-carousel-item-text">
          <div class="section-title">Client Work</div>
          <h2>Ford GoPark</h2>
          <div class="home-carousel-item-description">
            A smart parking service tackling congestion in one of London’s busiest boroughs
          </div>
        </div>
      </a>
      <a href="#" class="home-carousel-item odd">
        <div class="home-carousel-item-image">
          <div class="home-carousel-visual-content">
            <img src="../../assets/ford-gopark.jpg" alt="" class="home-carousel-visual-content-image">
          </div>
        </div>
        <div class="home-carousel-item-text">
          <div class="section-title">Client Work</div>
          <h2>Ford GoPark</h2>
          <div class="home-carousel-item-description">
            A smart parking service tackling congestion in one of London’s busiest boroughs
          </div>
        </div>
      </a>
    </div>
    <button class="home-carousel-shuffle"></button>
    <div class="view-carousel-related-page"></div>
  </div>
</template>
<script>

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
        display flex
        align-items flex-end
      &-text
        width: 55%
        top: 80px
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
      &.even
        padding-left: 100px
        left: 0
        right auto
        transform translateY(-330px)
        .home-carousel-item-text
          left: 0
      &.odd
        padding-right: 100px
        right: 130px
        left: auto
        transform translateY(-70px)
        .home-carousel-item-text
          right: 0
          left: 510px
  
  .section-title
    font-size: 16px;
    letter-spacing 1px
    line-height 28px
    margin: 7px
</style>
