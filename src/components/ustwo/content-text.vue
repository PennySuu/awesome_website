<template>
  <div class="home-text-block">
    <h1 class="section-title">ustwo is a digital product and service studio</h1>
    <div class="home-message-text">
      <span>We drive positive change for </span>
      <span class="gradient-words gradient-words-hot">people</span>
      <span> , </span>
      <span class="gradient-words gradient-words-cold">businesses</span>
      <span> and </span>
      <span class="gradient-words gradient-words-lukewarm">organisations</span>
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus">
  .home-text-block
    display: flex
    flex-direction column
    justify-content center
    text-transform uppercase
    color #111
  
  .section-title
    font-weight normal
    font-size: 16px
    font-family: PxGrotesk-Regular, Arial, sans-serif
    letter-spacing 1px
    margin 0
  
  .home-message-text
    font-size: 66px
    width 100%
    margin: 0
    font-weight: 400
    font-family: futura-pt, Arial Black, Arial Bold, Gadget, sans-serif
    line-height: 1
  
  .gradient-words
    color: transparent
    -webkit-background-clip text
    background-clip text
    position relative
    &-hot
      background-image linear-gradient(30deg, #ffbf02, #ed0082)
    &-cold
      background-image linear-gradient(30deg, #009cf3, #16d6d9)
    &-lukewarm
      background-image linear-gradient(30deg, #16d6d9, #96cc29)
</style>
