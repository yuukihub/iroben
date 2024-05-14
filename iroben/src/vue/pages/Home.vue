<template>
  <v-ons-page>
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
    <div class="--home">
      <main-visual></main-visual>
    </div>
    <div class="bottom">
      <div class="bottom_inner">
        <article-card title="お知らせ">
          <iframe src="https://iroben-info.web.app/?1"></iframe>
        </article-card>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import MainVisual from "@/vue/components/MainVisual.vue";
import ThirdExam from "@/vue/pages/ThirdExam.vue";
import ThirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import Paint from "@/vue/pages/Paint.vue";
import SecondExam from "@/vue/pages/SecondExam.vue";
import SecondColorLists from "@/vue/pages/SecondColorLists.vue";
import FirstColorLists from "@/vue/pages/FirstColorLists.vue";
import ArticleCard from "@/vue/components/ArticleCard.vue";
import Agreement from "@/vue/pages/Agreement.vue";
import Tutorial from "@/vue/pages/Tutorial.vue";

export default {
  name: "Home",
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
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";
@import "../src/scss/components/sideNavi";
@import "./src/scss/components/contentArea";

.l-header {
  img {
    width: 100%;
  }
}

h4{
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


iframe {
  width: 100%;
  border-radius: 3px;
  border: 1px solid map_get($color, gray03);
  margin: 0;
  padding: 16px 8px 0;
  background: map_get($color, white);
  margin-bottom: 16px;
  height: 180px;
  @include mq(sp){
    max-height: 90px;
  }
}

</style>
