<template>
  <v-ons-page>
    <img class="img_wave_top" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
    <nav>
      <div class="nav-btn"
           v-on:click="open=!open"
           v-bind:class="{ 'is-active': open }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-items" v-bind:class="{ 'is-active': open }">
        <div class="nav-learn">
          <h3 class="nav-title">
            <span>
              1級
            </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toFirstColorLists">
              <span>
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
          <h3 class="nav-title">
            <span>
              2級
            </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toSecondColorLists">
              <span>
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
            <li>
              <a href="#" @click="toSecondExam">
              <span>
                練習問題
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
          <h3 class="nav-title">
            <span>
              3級
            </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toThirdColorLists">
              <span>
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
            <li>
              <a href="#" @click="toThirdExam">
              <span>
                練習問題
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
        </div>
        <h3 class="nav-title">
          <span>
            その他
          </span>
        </h3>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toColorPaint">
              <span>
                ペイント
              </span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
          <li>
            <a href="#" @click="toTutorial">
              <span>
                チュートリアル
              </span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
          <li>
            <a href="#" @click="toAgreement">
              <span>
                利用規約
              </span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="top_mainVisual">
      <logo class="--home"></logo>
      <img class="img_balloon" src="../../img/img/common/img_balloon.png" alt="balloon">
      <img class="img_text01" src="../../img/img/common/img_text01.png" alt="全130色掲載">
      <img class="img_text02" src="../../img/img/common/img_text02.png" alt="最新版！">
      <img class="img_park" src="../../img/img/common/img_park.png" alt="park">
    </div>
    <img class="img_wave_bottom" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
  </v-ons-page>
</template>

<script>
import ThirdExam from "@/vue/pages/ThirdExam.vue";
import ThirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import Paint from "@/vue/pages/Paint.vue";
import SecondExam from "@/vue/pages/SecondExam.vue";
import SecondColorLists from "@/vue/pages/SecondColorLists.vue";
import FirstColorLists from "@/vue/pages/FirstColorLists.vue";
import ArticleCard from "@/vue/components/ArticleCard.vue";
import Agreement from "@/vue/pages/Agreement.vue";
import Tutorial from "@/vue/pages/Tutorial.vue";
import Logo from "@/vue/components/Logo.vue";

export default {
  name: "Home",
  data() {
    return {
      open: false
    }
  },
  components: {
    ArticleCard,
    Logo
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  props: ['pageStack'],
  methods: {
    toColorPaint() {
      this.pageStack.push(Paint);
      this.open = false;
    },
    toFirstColorLists() {
      this.pageStack.push(FirstColorLists);
      this.open = false;
    },
    toSecondExam() {
      this.pageStack.push(SecondExam);
      this.open = false;
    },
    toSecondColorLists() {
      this.pageStack.push(SecondColorLists);
      this.open = false;
    },
    toThirdExam() {
      this.pageStack.push(ThirdExam);
      this.open = false;
    },
    toThirdColorLists() {
      this.pageStack.push(ThirdColorLists);
      this.open = false;
    },
    toTutorial(){
      this.pageStack.push(Tutorial);
      this.open = false;
    },
    toAgreement() {
      this.pageStack.push(Agreement);
      this.open = false;
    }
  },
}
</script>


<style lang="scss" scoped>
@import "./src/scss/foundation/include";
@import "./src/scss/components/transition";
@import "../src/scss/components/sideNavi";

.l-header {
  img {
    width: 100%;
  }
}

.img_wave {
  &_top {
    width: 100%;
  }
  &_bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    transform: rotate(180deg);
  }
}

.top_mainVisual {
  position: relative;
  height: 77vh;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  .img_park {
    width: 94vw;
    position: absolute;
    top: 22vh;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate_logo05 6s ease infinite;
    @include mq(regular) {
      width: 70vw;
    }
  }
}

.c-logo {
  top: 10vh;
  margin: inherit;
  @include mq(regular) {
    top: 3vh;
  }
}
.img_balloon {
  position: absolute;
  width: 50px;
  top: 21vh;
  left: 40px;
  margin: auto;
  z-index: 1;
  animation: animate_logo01 6s ease infinite;
  @include mq(regular) {
    width: 90px;
    left: 120px;
  }
}
.img_text01 {
  width: 20vw;
  position: absolute;
  top: 24vh;
  right: 100px;
  z-index: 1;
  animation: animate_logo03 6s ease infinite;
  @include mq(regular) {
    width: 14vw;
    right: 240px;
  }
}
.img_text02 {
  width: 20vw;
  position: absolute;
  top: 22vh;
  left: 100px;
  z-index: 1;
  animation: animate_logo06 6s ease infinite;
  @include mq(regular) {
    width: 14vw;
    left: 240px;
  }
}


</style>
