<template>
  <v-ons-page>
    <nav>
      <button type="button" class="nav-btn" v-on:click="open=!open">
        　<i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <div class="nav-items" v-bind:class="{ 'is-active': open }">
        <h1>
          ロゴ
        </h1>
        <h2 class="nav-title">
          学ぶ
        </h2>
        <h3 class="nav-subTitle">
          1級
        </h3>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toFirstColorLists">
              <span>慣用色一覧</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
          <li class="is-disabled">
            <span>練習問題<span class="prepare_text">※現在準備中</span></span>
            <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
          </li>
        </ul>
        <h3 class="nav-subTitle">
          2級
        </h3>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toSecondColorLists">
              <span>慣用色一覧</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
          <li>
            <a href="#" @click="toSecondExam">
              <span>練習問題</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
        <h3 class="nav-subTitle">
          3級
        </h3>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toThirdColorLists">
              <span>慣用色一覧</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
          <li>
            <a href="#" @click="toThirdExam">
              <span>練習問題</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
        <h2 class="nav-title">
          描く
        </h2>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toColorPaint">
              <span>ペイント</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
        <h2 class="nav-title">
          その他
        </h2>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toColorPaint">
              <span>利用規約</span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
      </div>
    </nav>

   <!-- <main-visual></main-visual>-->
    <main class="container">
      <section>
        <article-card title="お知らせ"
                      img-path="../../img/icon/icon_board_list.svg">
          <ul class="notice_lists">
            <li>
              <span class="date">2024/4/30</span>
              <span><a href="#">特設ページ</a>を公開しました</span>
            </li>
            <li>
              <span class="date">2024/4/29</span>
              <span>Google Storeにリリースしました</span>
            </li>
            <li>
              <span class="date">2024/4/28</span>
              <span>Apple Storeにリリースしました</span>
            </li>
          </ul>
        </article-card>
        <article-card title="お問い合わせ"
                      img-path="../../img/icon/icon_board_list.svg">
          <a href="">こちら</a>からご連絡ください。
        </article-card>
        <article-card title="SNSシェア"
                      img-path="../../img/icon/icon_board_list.svg">

        </article-card>
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
  p {
    @include KintoSans();
  }
  .notice_lists {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid map_get($color, gray03);
    max-height: 33vh;
    overflow-y: scroll;
    li {
      border-bottom: 1px solid map_get($color, gray03);
    }
    span {
      display: block;
      margin-bottom: 4px;
    }
    a {
      display: inline;
    }
  }
  .characters_wrap {
    display: flex;
    justify-content: center;
    img {
      width: 60px;
    }
  }
}
</style>
