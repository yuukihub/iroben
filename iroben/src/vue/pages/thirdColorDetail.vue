<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <div class="wrap">
      <div class="c-colorCard">
        <img class="eyeImage" src="../../img/icon_eye.svg" alt="目">
        <div class="color" style="background: #0D99FF"></div>
        <div class="descBlock">
          <h2>生成色</h2>
          <p class="tornNumber">ltg8,p8+</p>
          <p class="desc">
            漂白あるいは染色される前の「素材そのものの色」のことをいいます。
            具体的には、ほんの少し黄色がかった白色です。
            アイボリーやオフホワイトと混同されるケースが多いですが、
            実はまったく別の色であることを覚えておきましょう。
          </p>
          <p>このページは、{{colorItem}}の詳細を表示する</p>
        </div>
      </div>
      <div class="bottom">
        <div class="characters_wrap">
          <img class="character01" src="../../img/character01_watch.svg" alt="character01">
          <img class="character02" src="../../img/character02_watch.svg" alt="character02">
          <img class="character03" src="../../img/character03_watch.svg" alt="character03">
        </div>
        <img class="wave" src="../../img/img_wave-bottom.svg" alt="wave">
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';

export default {
  name: "thirdColorDetail",
  components: {customToolbar},
  props: ['colorItem'],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
.c-colorCard {
  position: relative;
  background: map_get($color, white);
  border: 1px solid map_get($color, gray03);
  border-radius: 10px;
  max-width: 278px;
  width: 100%;
  margin: auto;
  box-shadow: 0px 0px 16px -14px #161c2b;
  .eyeImage {
    position: absolute;
    top: 13px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .color {
    background: #87CEEB;
    border-radius: 10px 10px 0 0;
    display: block;
    margin: 3%;
    height: 290px;
  }
  .descBlock {
    h2,
    .tornNumber {
      text-align: center;
    }
    .desc {
      margin: 16px;
      border-top: 1px solid map_get($color, gray03);
      padding-top: 16px;
    }
  }
}
.wrap {
  display: inherit;
  min-height: inherit;
  margin-top: 5vh;
  @include mq(sp){
    margin-top: 4vh;
  }
}
.characters_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: -85px;
  @include mq(sp){
    top: -80px;
  }
  .character01 {
    width: 13%;
    margin-top: 10px;
  }
  .character02 {
    width: 9%;
    margin-right: 4px;
  }
  .character03 {
    width: 10%;
  }
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 77vh;
  background: map_get($color, white);
  .wave {
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    @include mq(sp){
      top: -74px;
    }
  }
}
</style>
