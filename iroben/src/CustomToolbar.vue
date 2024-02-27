<template>
  <!--<v-ons-toolbar>-->
    <header class="l-header">
      <div class="contents">
        <div class="top">
          <div class="bar"></div>
        </div>
        <img src="./img/img_wave-top.svg" alt="wave">
        <v-ons-back-button :on-click="pop"></v-ons-back-button>

        <div>
          {{ backLabel }}
        </div>
        <slot></slot>
      </div>
    </header>
</template>

<script>
  export default {
    props: ['pop','backLabel']
  }
</script>

<style lang="scss" scoped>
.l-header{
  .back-button{
    height: inherit;
    line-height: inherit;
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: absolute;
    z-index: 1;
    top: 55px;
    left: 0;
  }
  .contents {
    position: relative;
  }
  .back-button__label {
    display: block;
    width: 100%;
    text-align: center;
  }
  .top {
    position: relative;
    .bar {
      background: white;
      height: 55px;
    }
    img {
      width: 100%;
      z-index: -1;
    }
  }
}
</style>
