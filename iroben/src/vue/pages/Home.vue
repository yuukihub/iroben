<template>
  <v-ons-page>
    <img class="img_logo" src="../../img/img/img_logo.svg" alt="iroben">
    <div class="parallax"></div>
    <div class="container">
      <div class="decoration_wrap">
        <img class="img_decoration01" src="../../img/img/img_decoration01.svg" alt="decoration01">
        <img class="img_decoration02" src="../../img/img/img_decoration02.svg" alt="decoration02">
        <img class="img_decoration03" src="../../img/img/img_decoration03.svg" alt="decoration03">
        <img class="img_decoration04" src="../../img/img/img_decoration04.svg" alt="decoration04">
      </div>
      <img class="img_wave" src="../../img/img/img_wave_bottmBig.svg" alt="wave">
      <div class="characters-wrap">
        <img class="character03" src="../../img/img/img_character03_art.svg" alt="character03">
        <img class="character02" src="../../img/img/img_character02_art.svg" alt="character02">
        <img class="character01" src="../../img/img/img_character01_art.svg" alt="character01">
      </div>
      <section class="container_inner">
        <heading title="Learn"></heading>
        <p class="article_desc">
          試験範囲の慣用色を<br>
          確認できます
        </p>
        <article-card path="../../img/img/img_title03.svg" alt="3級">
          <ul class="article_list">
            <li>
              <a href="#" @click="toThirdColorLists">慣用色一覧</a>
            </li>
            <li>
              <a href="#" @click="toThirdExam">理解度チェック</a>
            </li>
          </ul>
        </article-card>
        <article-card class="--right"
                      path="../../img/img/img_title02.svg"
                      alt="2級">
          <ul class="article_list">
            <li @click="toSecondColorLists">
              慣用色一覧
            </li>
            <li @click="toSecondExam">
              理解度チェック
            </li>
          </ul>
        </article-card>
        <heading title="Draw"></heading>
        <p class="article_desc">
          色彩検定に登場する色で<br>
          落書きしてみませんか？
        </p>
        <v-ons-button class="c-button" @click="toColorPaint">ペイント</v-ons-button>
        <aside class="img_announce" >
          <h4>
            1級準備中
          </h4>
          <img src="../../img/img/img_characters_announce.svg" alt="1級は現在準備中です。少々お待ちください">
        </aside>
      </section>
    </div>


  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import secondExam from "./SecondExam.vue";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
import thirdExam from "./ThirdExam.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import paint from "@/vue/pages/Paint.vue";
import ArticleCard from "@/vue/components/ArticleCard.vue";
import Heading from "@/vue/components/Heading.vue";

export default {
  name: "home",
  data(){
    return {
      paintFlag: false
    }
  },
  components: {
    Heading,
    ArticleCard,
    paint,
    customToolbar,
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    toColorPaint(){
      this.pageStack.push(paint);
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
  props: ['pageStack'],
}
</script>


<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "./src/scss/components/transition";
.container {
  position: relative;
}
.container_inner {
  background-color: map_get($color, white);
}
.img_logo {
  position: absolute;
  top: 64px;
  left: 40px;
}
.decoration_wrap {
  position: absolute;
  top: -24vh;
  left: 0;
  right: 0;
  .img_decoration01 {
    position: absolute;
    top: 6vh;
    right: 20px;
    animation: anime01 1s ease-in-out infinite alternate;
  }
  .img_decoration02 {
    position: absolute;
    top: 15vh;
    left: 20px;
    animation: anime02 1s ease-in-out infinite alternate;
  }
  .img_decoration03 {
    position: absolute;
    top: 12vh;
    left: 20px;
    animation: anime03 1s ease-in-out infinite alternate;
  }
  .img_decoration04 {
    position: absolute;
    top: 12vh;
    right: 105px;
    animation: anime04 1s ease-in-out infinite alternate;
  }
}
.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}
/* 背景画像の見えている高さ */
.parallax {
  height: 500px;
}
/* 背景画像 */
.parallax::before {
  //background-image: url();
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}
.characters-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -37vh;
  z-index: 1;
  .character01 {
    width: 18%;
  }
  .character02 {
    width: 17%;
  }
  .character03 {
    width: 18%;
  }
}
.article_list {
  li:not(:last-child) {
      margin-bottom: 8px;
  }
}
.article_desc {
  font-family: "KintoSans",serif;
  color: map_get($color, text);
  margin: 24px 0;
  text-align: center;
  word-break:keep-all;
}
.img_announce {
  position: fixed;
  top: 0;
  bottom: -70vh;
  right: -3px;
  height: max-content;
  margin: auto;
  z-index: 1;
  h4 {
    position: absolute;
    top: 12px;
    right: 17px;
    font-family: "KintoSans",serif;
    font-size: 0.9rem;
    color: map_get($color, text);
    margin: 0;
  }
  img {
    width: 100px;
  }
}
</style>
