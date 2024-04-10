<template>
  <v-ons-page>
    <header class="l-header">
      <img src="../../img/img/common/img_wave_top.svg" alt="wave">
    </header>
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
    <img class="slider" src="../../img/img/top/img_iphone.svg" alt="iphone">
    <div class="bottom">
      <div class="characters_wrap">
        <img src="../../img/img/common/img_character02_normal.svg" alt="chara02">
        <img src="../../img/img/common/img_character01_normal.svg" alt="chara01">
        <img src="../../img/img/common/img_character03_flag.svg" alt="chara03">
      </div>
      <div class="bottom_inner">
        <article-card title="お知らせ">
          <ul class="info_lists">
            <li>
              <span class="date">2024/4/30</span>
              <span>Androidアプリをリリースしました</span>
            </li>
            <li>
              <span class="date">2024/4/29</span>
              <span>iPadOSアプリをリリースしました</span>
            </li>
            <li>
              <span class="date">2024/4/28</span>
              <span>iOSアプリをリリースしました</span>
            </li>
          </ul>
        </article-card>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import MainVisual from "@/vue/components/MainVisual.vue";
import thirdExam from "@/vue/pages/ThirdExam.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import paint from "@/vue/pages/Paint.vue";
import secondExam from "@/vue/pages/SecondExam.vue";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
import firstColorLists from "@/vue/pages/FirstColorLists.vue";
import ArticleCard from "@/vue/components/ArticleCard.vue";
import agreement from "@/vue/pages/Agreement.vue";

export default {
  name: "home",
  data() {
    return {
      open: false
    }
  },
  components: {
    ArticleCard,
    MainVisual,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  props: ['pageStack'],
  methods: {
    toColorPaint() {
      this.pageStack.push(paint);
      this.open = false;
    },
    toFirstColorLists() {
      this.pageStack.push(firstColorLists);
      this.open = false;
    },
    toSecondExam() {
      this.pageStack.push(secondExam);
      this.open = false;
    },
    toSecondColorLists() {
      this.pageStack.push(secondColorLists);
      this.open = false;
    },
    toThirdExam() {
      this.pageStack.push(thirdExam);
      this.open = false;
    },
    toThirdColorLists() {
      this.pageStack.push(thirdColorLists);
      this.open = false;
    },
    toAgreement() {
      this.pageStack.push(agreement);
      this.open = false;
    }
  },
}
</script>


<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";
@import "../src/scss/components/sideNavi";
@import "./src/scss/components/contentArea";
@import "./src/scss/components/infoLists";

.l-header {
  img {
    width: 100%;
  }
}

h4,
li {
  @include KintoSans();
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}

h4 {
  color: map_get($color, gray01);
  margin: 0;
  text-align: center;
}

p {
  @include KintoSans();
  font-size: 16px;
}

.characters_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3vh;
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
    height: 7vh;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
      animation: animate_chara01 3s linear infinite;
    }

    &:nth-child(2) {
      height: 6vh;
      animation: animate_chara02 3s linear infinite;
    }

    &:last-child {
      animation: animate_chara03 3s linear infinite;
    }
  }
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 36vh;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  @include mq(xsmall) {
    bottom: -30px;
  }
}

</style>
