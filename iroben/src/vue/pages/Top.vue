<template>
  <v-ons-page>
    <header class="l-header">
      <div class="top">
        <div class="bar"></div>
      </div>
      <img src="../../img/img_wave-top.svg" alt="wave">
    </header>
    <h1>
      <img class="logo" src="../../img/img_logo.svg" alt="iroben">
    </h1>

    <img class="slider" src="../../img/img_iphone.png" alt="iphone">
    <div class="characters_wrap">
      <img class="character01" src="../../img/character01.svg" alt="character01">
      <img class="character02" src="../../img/character02.svg" alt="character02">
      <img class="character03" src="../../img/character03.svg" alt="character03">
    </div>
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
  bottom: 216px;
  z-index: index($z-map, character);
  @include mq(regular) {
    bottom: 24vh;
  }
  @include mq(big) {
    bottom: 19vh;
  }
  .character01 {
    width: 6vh;
    @include mq(regular) {
      width: 10vh;
    }
    @include mq(big) {
      width: 8vh;
    }
  }
  .character02 {
    width: 7vh;
    @include mq(regular) {
      width: 11vh;
    }
    @include mq(big) {
      width: 8vh;
    }
  }
  .character03 {
    width: 10vh;
    @include mq(regular) {
      width: 15vh;
    }
    @include mq(big) {
      width: 12vh;
    }
  }
}
.bottom {
  background-image: url("../../img/img_wave-bottmBig.svg");
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
    padding: 0 16px 32px 16px;
    max-width: 500px;
    width: 100%;
    margin: auto;
  }
}
</style>
