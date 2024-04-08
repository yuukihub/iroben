<template>
  <v-ons-page>
    <div class="c-navi" :class="{'is-show':open}">
      <input id="nav-input" type="checkbox" @click="open=!open">
      <label id="menu_btn" for="nav-input">
        <div class="nav-btn">
          <span class="navi-icon"></span>
          <span class="navi-icon"></span>
          <span class="navi-icon"></span>
        </div>
      </label>
      <nav>
        <div class="nav-items">
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
    </div>
    <main-visual></main-visual>
    <main class="container">
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
      open: false,
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
    },
  },
}
</script>


<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";
@import "../src/scss/components/sideNavi";

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
  background: map_get($color, white);

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


</style>
