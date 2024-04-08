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
    <main-visual></main-visual>
    <main class="container">
      <section>
        <article-card title="お知らせ">
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
        <article-card title="今後の予定">
          <p class="info_message">
            1級の以下の機能は現在準備中です。
          </p>
          <ul class="info_lists">
            <li>
              ・練習問題
            </li>
            <li>
              ・<a href="#" @click="toColorPaint">ペイント</a>の不正解のみ表示機能
            </li>
          </ul>
          <p class="info_message">
            公開は<span>2024年秋頃</span>を予定しています。
          </p>
        </article-card>
      </section>
    </main>
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

.container {
  &:after {
    content: "";
    background: map_get($color, white);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    width: 100%;
    height: 37vh;
  }
}

main {
  height: 57vh;
  position: absolute;
  bottom: 0;
  width: 100%;
}

section {
  position: absolute;
  top: 22vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  height: max-content;
  background: map_get($color, white);
  z-index: index($z-map, topSection);
  padding-bottom: 56px;
  padding-top: 16px;
  &:before {
    content: "";
    background-image: url("../../img/img/common/img_wave_bottom.svg");
    position: absolute;
    left: 0;
    right: 0;
    bottom: 22vw;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100vw;
    height: 100%;
    z-index: -1;

    @include mq(big) {
      height: 62vh;
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

  .notice_lists {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid map_get($color, gray03);
    max-height: 33vh;
    overflow-y: scroll;

    li {
      border-bottom: 1px solid map_get($color, gray03);
      font-size: 16px;
    }

    span {
      display: block;
      margin-bottom: 8px;
    }

    .date {
      font-size: 14px;
      margin-bottom: 2px;
    }

    a {
      display: inline;
    }
  }

  .info_lists {
    max-width: 250px;
    width: 100%;
    margin: auto;
    padding: 8px 0 16px 0;
    font-size: 16px;

    li {
      margin-bottom: 0;
      @include KintoSans();
    }
  }

  .info_message {
    font-size: 16px;
    text-align: center;
    @include KintoSans();

    span {
      background: linear-gradient(transparent 60%, #fed32b 60%);
    }
  }
}

</style>
