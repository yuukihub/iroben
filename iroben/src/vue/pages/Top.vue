<template>
  <v-ons-page>
    <header class="l-header">
      <div class="top">
        <div class="bar"></div>
      </div>
      <img src="../../img/img/common/img_wave_top.svg" alt="wave">
    </header>
    <h1>
      <img class="logo" src="../../img/img/top/img_top_title.svg" alt="iroben">
    </h1>
    <div class="decoration_wrap">
      <!--
      <img class="img_decoration --star_left01" src="../../img/img/top/img_star01.png" alt="decoration01">
      <img class="img_decoration --heart_left01" src="../../img/img/top/img_heart02.png" alt="decoration01">


      <img class="img_decoration --heart_right01" src="../../img/img/top/img_heart01.png" alt="decoration01">
      <img class="img_decoration --brush" src="../../img/img/top/img_brush.png" alt="decoration01">
      <img class="img_decoration --star_right01" src="../../img/img/top/img_star02.png" alt="decoration01">
      <img class="img_decoration --heart_right02" src="../../img/img/top/img_heart03.png" alt="decoration01">-->

      <!--<img class="img_decoration01" src="../../img/img/top/img_decoration01.svg" alt="decoration01">
      <img class="img_decoration02" src="../../img/img/top/img_decoration02.svg" alt="decoration02">
      <img class="img_decoration03" src="../../img/img/top/img_decoration03.svg" alt="decoration03">
      <img class="img_decoration04" src="../../img/img/top/img_decoration04.svg" alt="decoration04">-->
    </div>
    <img class="slider" src="../../img/img/top/img_iphone.png" alt="iphone">
    <div class="bottom">
      <div class="bottom_inner">
        <p class="desc">アプリをご利用いただくには、<br>
          利用規約をご確認の上ご利用ください</p>
        <div class="agree">
          <input type="checkbox"  v-model="checked">
          <div class="agree_inner">
            <a href="#">利用規約</a>
            <p>に同意する</p>
          </div>
        </div>
        <div class="button_area">
          <the-button label="はじめる"
                      :is-disabled-flag="checked"
                      @click="push"></the-button>
        </div>
      </div>
    </div>

  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import home from './Home.vue';
import TheButton from "@/vue/components/TheButton.vue";

export default {
  name: "top",
  data(){
    return {
      checked: false,
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(home);
    },
  },
  props: ["pageStack"],
  components: {TheButton, customToolbar },
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "./src/scss/components/transition";
.l-header {
  .top {
    .bar {
      background: white;
      height: 2vh;
    }
    img {
      width: 100%;
    }
  }
}
h1 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 !important;
  top: 14vh;
  @include mq(xsmall){
    top: 10vh;
  }
}
.logo {
  display: block;
  width: 54vw;
  margin: auto;
  @include mq(regular) {
    width: 40vw;
  }
}
.slider {
  position: absolute;
  top: 0;
  bottom: -20vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 36vh;
  animation: fadeInUp02 1.7s 0s ease-in-out forwards;
  @include mq(xsmall) {
    bottom: -30px;
  }
}
.characters_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 236px;
  z-index: index($z-map, character);
  @include mq(regular) {
    bottom: 24vh;
  }
  @include mq(big) {
    bottom: 19vh;
  }
}
.bottom {
  background-image: url("../../img/img/common/img_wave_bottmBig.svg");
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  &_inner {
    position: relative;
  }
  img {
    top: -8.5vh;
    @include mq(sp) {
      top: -9vh;
    }
    @include mq(xsmall) {
      top: -8vh;
    }
  }
  .desc {
    margin: 0;
    padding: 12vh 0 16px 0;
    text-align: center;
    @include mq(sp) {
      padding: 13vh 0 16px 0;
    }
    @include mq(regular) {
      padding: 20vh 0 16px 0;
    }
    @include mq(big) {
      padding: 16vh 0 16px 0;
    }
  }
  .agree {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 24px 0;
    &_inner {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }
    p {
      margin: 0;
    }
  }
  .button_area {
    padding: 0 16px 48px 16px;
    max-width: 500px;
    width: 100%;
    margin: auto;
  }
}
.decoration_wrap {
  position: absolute;
  z-index: 1;
  @include mq(regular){
    width: 49vh;
  }
  .img_decoration {
    &.--brush {
      position: absolute;
      width: 68px;
      @include mq(regular){
        width: 120px;
      }
    }
    &.--heart_left01 {
      position: absolute;
      width: 34px;
      @include mq(regular){
        width: 60px;
        bottom: -200px;
      }
    }
    &.--star_left01 {
      position: absolute;
      width: 62px;
      @include mq(regular){
        width: 120px;
      }
    }
    &.--heart_right01 {
      position: absolute;
      width: 52px;
      @include mq(regular){
      }
    }
    &.--heart_right02 {
      position: absolute;
      width: 28px;
      @include mq(regular){
      }
    }
    &.--star_right01 {
      position: absolute;
      width: 56px;
      @include mq(regular){
      }
    }
  }
  .img_decoration01 {
    position: absolute;
    top: 6vh;
    right: 20px;
    animation: anime01 2s ease-in-out infinite alternate;
  }
  .img_decoration02 {
    position: absolute;
    top: 15vh;
    left: 20px;
    animation: anime02 2s ease-in-out infinite alternate;
  }
  .img_decoration03 {
    position: absolute;
    top: 12vh;
    left: 20px;
    animation: anime03 2s ease-in-out infinite alternate;
  }
  .img_decoration04 {
    position: absolute;
    top: 12vh;
    right: 105px;
    animation: anime04 2s ease-in-out infinite alternate;
  }
}
.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}
</style>
