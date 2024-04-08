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
    <img class="slider" src="../../img/img/top/img_iphone.png" alt="iphone">
    <div class="bottom">
      <div class="characters_wrap">
        <img src="../../img/img/common/img_character02_normal.svg" alt="chara02">
        <img src="../../img/img/common/img_character01_normal.svg" alt="chara01">
        <img src="../../img/img/common/img_character03_flag.svg" alt="chara03">
      </div>
      <div class="bottom_inner">
        <p class="desc">アプリをご利用いただくには、<br>
          利用規約をご確認の上ご利用ください</p>
        <div class="agree">
          <input type="checkbox" v-model="checked">
          <div class="agree_inner">
            <a href="#" @click="toAgreement">利用規約</a>
            <p>に同意する</p>
          </div>
        </div>
        <div class="button_area">
          <the-button label="はじめる"
                      :is-disabled-flag="checked"
                      @click="toHome"></the-button>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import home from './Home.vue';
import agreement from "@/vue/pages/Agreement.vue";
import TheButton from "@/vue/components/TheButton.vue";

export default {
  name: "top",
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    toHome() {
      this.pageStack.push(home);
    },
    toAgreement() {
      this.pageStack.push(agreement);
    }
  },
  props: ["pageStack"],
  components: {TheButton, customToolbar},
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
  @include mq(xsmall) {
    top: 10vh;
  }
}

.logo {
  display: block;
  width: 54vw;
  margin: auto;
  animation: fadeInUp02 1s 0s ease-in-out forwards;
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
  animation: fadeInUp02 2.7s 0s ease-in-out forwards;
  animation-delay: 0.1s;
  @include mq(xsmall) {
    bottom: -30px;
  }
}

.characters_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2vh;
  left: 0;
  right: 0;
  z-index: index($z-map, character);
  @include mq(xsmall) {
    top: 30px;
  }
  @include mq(big) {
    bottom: 21vh;
  }

  img {
    height: 6vh;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
      animation: animate_chara01 3s linear infinite;
    }

    &:nth-child(2) {
      height: 5vh;
      animation: animate_chara02 3s linear infinite;
    }

    &:last-child {
      animation: animate_chara03 3s linear infinite;
    }
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
    @include KintoSans();
    @include mq(sp) {
      padding: 13vh 0 16px 0;
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
    @include KintoSans();

    @include mq(big) {
      margin: 0 0 64px 0;
    }

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

.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}

</style>
