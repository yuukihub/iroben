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
    <main-visual></main-visual>
    <div class="bottom">
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
          <custom-button label="はじめる"
                         :is-disabled-flag="!checked"
                         @click="toHome"></custom-button>
        </div>
      </div>
    </div>
    <transition>
      <div v-if="tutorialCookie"
           class="tutorial_container">
        <tutorial-slider :top-page-flag="true"
                         @onClick="hideTutorial"></tutorial-slider>
      </div>
    </transition>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomHeader.vue';
import CustomButton from "@/vue/components/CustomButton.vue";
import Top from './Top.vue';
import Home from './Home.vue';
import Agreement from "@/vue/pages/Agreement.vue";
import MainVisual from "@/vue/components/MainVisual.vue";
import Tutorial from "@/vue/pages/Tutorial.vue";
import TutorialSlider from "@/vue/components/TutorialSlider.vue";

export default {
  name: "top",
  components: {TutorialSlider, CustomButton, Tutorial, MainVisual, customToolbar},
  data() {
    return {
      checked: false,
      tutorialCookie: Boolean,
    }
  },
  created() {
    let period = 2592000000; // 30日間　保存期間:(1000ミリ秒 * 60秒 * 1分)
    // localStorageで使用するkey名
    let storage_key = 'tutorialCookie'; // 広告バナー管理で使用する値
    let storage_period_key = false; // 保存期間で使用する値

    // 保存期間の値が保存されている場合
    if (localStorage.getItem(storage_period_key) !== null) {
      // 保存されている値と現在の値の差を見て、期間を過ぎていないか確認
      let df = Date.now() - parseFloat(localStorage.getItem(storage_period_key));
      this.tutorialCookie = false;

      if (df > period) {
        // 期間を過ぎている場合はlocalStorageの値を削除
        localStorage.removeItem(storage_key);
        localStorage.removeItem(storage_period_key);
        this.tutorialCookie = true;
      }
    }

    // チュートリアル管理の値が保存されていない場合はチュートリアルを表示
    if (localStorage.getItem(storage_key) === null) {
      this.tutorialCookie = true;
    }

    localStorage.setItem(storage_key, this.tutorialCookie);
    localStorage.setItem(storage_period_key, Date.now());
},
methods: {
  pop()
  {
    this.pageStack.pop();
  }
,
  toTop()
  {
    this.pageStack.push(Top);
  }
,
  toHome()
  {
    this.pageStack.push(Home);
  }
,
  toAgreement()
  {
    this.pageStack.push(Agreement);
  }
,
  hideTutorial()
  {
    this.tutorialCookie = false;
  }
}
,
props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import '../src/scss/components/checkbox';
@import "./src/scss/components/transition";
@import "./src/scss/components/contentArea";
@import "./src/scss/components/topWaveHeder";

h1 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 !important;
  top: 14vh;
  z-index: 1;
  @include mq(xsmall) {
    top: 10vh;
  }
}

.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}

.logo {
  display: block;
  max-width: 180px;
  width: 100%;
  margin: 3vh auto 0;
  animation: fadeInUp02 1s 0s ease-in-out forwards;
}

.tutorial_container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 100;
  background: map_get($color, backGroundColor);
}

.page__content {
  overflow: hidden !important;
}

.button--material {
  box-shadow: none;
  font-size: 17px;
  line-height: 32px;
}

</style>
