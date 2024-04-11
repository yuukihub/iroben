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
import MainVisual from "@/vue/components/MainVisual.vue";

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
  components: {MainVisual, TheButton, customToolbar},
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import '../src/scss/components/checkbox';
@import "./src/scss/components/transition";
@import "./src/scss/components/contentArea";

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

.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}

.logo {
  display: block;
  width: 48vw;
  margin: auto;
  animation: fadeInUp02 1s 0s ease-in-out forwards;
  @include mq(regular) {
    width: 40vw;
  }
}
</style>
