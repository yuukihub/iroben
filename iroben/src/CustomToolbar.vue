<template>
  <!--<v-ons-toolbar>-->
    <header class="l-header">
      <div class="contents">
        <div class="top">
          <div class="bar"></div>
          <img src="./img/wave-top.svg" alt="wave">
        </div>

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
      position: absolute;
      top: 55px;
      z-index: -1;
    }
  }
}
</style>
