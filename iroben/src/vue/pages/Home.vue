<template>
  <v-ons-page>
    <nav>
      <button type="btn" class="nav-btn" v-on:click="open=!open">
        　<i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <div class="nav-items" v-bind:class="{ 'is-active': open }">
        <h1>
          ロゴ
        </h1>
        <h2 class="nav-title">
          <img src="../../img/icon/icon_board_list.svg" alt="icon">
          学ぶ
        </h2>
        <h3 class="nav-subTitle">
          1級
        </h3>
        <ul class="nav-item">
          <li class="is-disabled">
            練習問題（※準備中）
          </li>
            <a href="#" @click="toFirstColorLists">
              <li>
                <span>慣用色一覧</span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </li>
            </a>
        </ul>
        <h3 class="nav-subTitle">
          2級
        </h3>
        <ul class="nav-item">
          <a href="#" @click="toSecondExam">
            <li>
              <span>練習問題</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
          <a href="#" @click="toSecondColorLists">
            <li>
              <span>慣用色一覧</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
        </ul>
        <h3 class="nav-subTitle">
          3級
        </h3>
        <ul class="nav-item">
          <a href="#" @click="toThirdExam">
            <li>
              <span>練習問題</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
          <a href="#" @click="toThirdColorLists">
            <li>
              <span>慣用色一覧</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
        </ul>
        <h2 class="nav-title">
          <img src="../../img/icon/icon_paint.svg" alt="icon">
          描く
        </h2>
        <ul class="nav-item">
          <a href="#" @click="toColorPaint">
            <li>
              <span>ペイント</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
        </ul>
        <h2 class="nav-title">
          <img src="../../img/icon/icon_paint.svg" alt="icon">
          その他
        </h2>
        <ul class="nav-item">
          <a href="#" @click="toColorPaint">
            <li>
              <span>利用規約</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </li>
          </a>
        </ul>
      </div>
    </nav>

    <main-visual></main-visual>
    <main class="container">
      <section>
        <!--<heading :title="'問いて学ぶ'"></heading>
        <article-card title="1級"
                      img-path="../../img/icon/icon_board_list.svg">
          <ul>
            <li>
              練習問題（現在準備中です）
            </li>
            <li>
              <a href="#" @click="toFirstColorLists">
                <span>慣用色一覧</span>
              </a>
            </li>
          </ul>
        </article-card>
        <article-card title="2級"
                      img-path="../../img/icon/icon_board_list.svg">
          <ul>
            <li>
              <a href="#" @click="toThirdExam">
                <span>練習問題</span>
              </a>
            </li>
            <li>
              <a href="#" @click="toThirdColorLists">
                <span>慣用色一覧</span>
              </a>
            </li>
          </ul>
        </article-card>
        <article-card title="3級"
                      img-path="../../img/icon/icon_board_list.svg">
          <ul>
            <li>
              <a href="#" @click="toSecondExam">
                <span>練習問題</span>
              </a>
            </li>
            <li>
              <a href="#" @click="toSecondColorLists">
                <span>慣用色一覧</span>
              </a>
            </li>
          </ul>
        </article-card>
        <heading :title="'描いて学ぶ'"></heading>
        <article-card>
          <ul>
            <a href="#" @click="toColorPaint">
              <span>ペイント</span>
            </a>
          </ul>
        </article-card>-->
      </section>
    </main>
  </v-ons-page>
</template>

<script>
import Heading from "@/vue/components/Heading.vue";
import MainVisual from "@/vue/components/MainVisual.vue";
import thirdExam from "@/vue/pages/ThirdExam.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import paint from "@/vue/pages/Paint.vue";
import secondExam from "@/vue/pages/SecondExam.vue";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
import firstColorLists from "@/vue/pages/FirstColorLists.vue";
import ArticleCard from "@/vue/components/ArticleCard.vue";

export default {
  name: "home",
  data(){
    return {
      open: false
    }
  },
  components: {
    ArticleCard,
    MainVisual,
    Heading,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  props: ['pageStack'],
  methods: {
    push() {
      this.pageStack.push(home);
    },
    pop(){
      this.pageStack.pop();
    },
    toColorPaint(){
      this.pageStack.push(paint);
    },
    toFirstColorLists() {
      this.pageStack.push(firstColorLists);
    },
    toSecondExam() {
      this.pageStack.push(secondExam);
    },
    toSecondColorLists() {
      this.pageStack.push(secondColorLists);
    },
    toThirdExam() {
      this.pageStack.push(thirdExam);
    },
    toThirdColorLists() {
      this.pageStack.push(thirdColorLists);
    },
  },
}
</script>


<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";
@import "../src/scss/components/sideNavi";

.container {
  &:before {
    content: "";
    background-image: url("../../img/img/common/img_wave_bottmBig.svg");
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 67vh;
  }
  &:after {
    content: "";
    background: map_get($color, white);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    width: 100%;
    height: 47vh;
  }
}
main {
  height: 67vh;
  position: absolute;
  bottom: 0;
  width: 100%;
}
section {
  position: absolute;
  top: 14vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  height: max-content;
  background: map_get($color, white);
  z-index: 2;
  h4,
  li {
    @include KintoSans();
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h4 {
    color: map_get($color, gray01);
    margin: 0;
    text-align: center;
  }
  a {
    display: flex;
    align-items: center;
    img {
      margin-right: 4px;
    }
  }
  ul {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid map_get($color, gray03);
    max-height: 220px;
    overflow-y: scroll;
  }
}
</style>
