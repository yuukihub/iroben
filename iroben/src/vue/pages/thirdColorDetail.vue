<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <div class="colorDetail-wrap">
      <div class="top">
        <div class="characters_wrap">
          <img class="character01" src="../../img/character01_watch.svg" alt="character01">
          <img class="character02" src="../../img/character02_watch.svg" alt="character02">
          <img class="character03" src="../../img/character03_watch.svg" alt="character03">
        </div>
        <img class="wave" src="../../img/img_wave-bottom.svg" alt="wave">
      </div>
      <div class="c-colorCard">
        <img class="eyeImage" src="../../img/icon_eye.svg" alt="目">
        <div class="color" :style="`background-color:${item.colorCode}`"></div>
        <div class="descBlock">
          <h2>{{item.title}}</h2>
          <p class="tornNumber">lt10+,p12+</p>
          <p>
            {{item.subTitle}}
          </p>
          <p class="desc">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';

export default {
  name: "thirdColorDetail",
  components: {customToolbar},
  data(){
    return {
      //colorItem: String,
      item: "",
    }
  },
  mounted(){
      this.item = JSON.parse(this.colorItem);
  }
}
</script>

<style lang="scss">
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
@import "./src/scss/components/colorCard";
.colorDetail-wrap {
  display: inherit;
  min-height: inherit;
  .c-colorCard {
    margin-top: 5vh;
    @include mq(xsmall){
      margin-top: 1vh;
    }
  }
  .color {
    //background: #87CEEB;
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
  .characters_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: -90px;
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
  .top {
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
        top: -69px;
      }
    }
  }
}
</style>
