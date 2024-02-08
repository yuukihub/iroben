<template>
  <!--<v-ons-toolbar>-->
    <header class="l-header">
      <div class="inner">
        <div class="contents">
          <div class="top"></div>
          <v-ons-back-button :on-click="pop"></v-ons-back-button>
          <v-ons-button @click="pop">戻る</v-ons-button>
          <div>
            {{ backLabel }}
          </div>
          <slot></slot>
        </div>
        <img src="./img/header.png" alt="wave">
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
  .inner {
    position: relative;
  }
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
</style>
