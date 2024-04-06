<template>
  <v-ons-page>
    <nav>
      <button type="button" class="nav-btn" v-on:click="open=!open">
        　<i class="fas fa-bars" aria-hidden="true"></i>
      </button>
      <div class="nav-items" v-bind:class="{ 'is-active': open }">
        <h2 class="nav-title">
          学ぶ
        </h2>
        <div class="nav-learn">
          <h3 class="nav-subTitle">
          <span>
            1級
          </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toFirstColorLists">
              <span>
                <img src="../../img/icon/icon_board_list.svg" alt="list">
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
          <h3 class="nav-subTitle">
          <span>
            2級
          </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toSecondColorLists">
              <span>
                <img src="../../img/icon/icon_board_list.svg" alt="list">
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
            <li>
              <a href="#" @click="toSecondExam">
              <span>
                <img src="../../img/icon/icon_board_check.svg" alt="list">
                練習問題
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
          <h3 class="nav-subTitle">
          <span>
            3級
          </span>
          </h3>
          <ul class="nav-item">
            <li>
              <a href="#" @click="toThirdColorLists">
              <span>
                <img src="../../img/icon/icon_board_list.svg" alt="list">
                慣用色一覧
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
            <li>
              <a href="#" @click="toThirdExam">
              <span>
                <img src="../../img/icon/icon_board_check.svg" alt="list">
                練習問題
              </span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
              </a>
            </li>
          </ul>
        </div>
        <h2 class="nav-title --draw">
          描く
        </h2>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toColorPaint">
              <span>
                <img src="../../img/icon/icon_paint.svg" alt="icon">
                ペイント
              </span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
        <h2 class="nav-title">
          規約
        </h2>
        <ul class="nav-item">
          <li>
            <a href="#" @click="toAgreement">
              <span>
                <img src="../../img/icon/icon_message.svg" alt="icon">
                利用規約
              </span>
              <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
            </a>
          </li>
        </ul>
      </div>
    </nav>

   <main-visual></main-visual>
    <main class="container">
      <section>
        <article-card title="お知らせ"
                      img-path="../../img/icon/icon_notice.svg">
          <ul class="notice_lists">
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
        <article-card title="今後の予定"
                      img-path="../../img/icon/icon_focus.svg">
          <p>
            1級の練習問題は現在準備中です。<br>
            リリースは「2024年秋」を予定しております。少々お待ちください。
          </p>
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
import agreement from "@/vue/pages/Agreement.vue";

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
    toAgreement(){
      this.pageStack.push(agreement);
    }
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
  @include mq(regular) {
    padding-top: 40px;
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
    font-size: 1rem;
  }
  .notice_lists {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid map_get($color, gray03);
    max-height: 33vh;
    overflow-y: scroll;
    li {
      border-bottom: 1px solid map_get($color, gray03);
      font-size: 1rem;
    }
    span {
      display: block;
      margin-bottom: 8px;
    }
    .date {
      font-size: 0.85rem;
      margin-bottom: 2px;
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
