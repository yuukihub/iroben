<template>
  <v-ons-page>
    <main-visula></main-visula>
    <div class="parallax"></div>
    <div class="container">
      <main>
        <div class="section_bg"></div>
        <section>
          <heading :title="'「問いて」\n学ぶ'"
                   class="--top"></heading>
          <div class="section_inner">
            <transition>
              <article-card
                  title="1"
                  path="../../img/img/img_character03_watch.svg"
                  alt="1級">
                <aside class="prepare">
                  <h5>現在準備中です。</h5>
                  <p>もう少々お待ちください。</p>
                </aside>
              </article-card>
            </transition>
            <transition>
              <article-card
                  title="2"
                  path="../../img/img/img_character01_watch.svg"
                  alt="2級">
                <ul class="article_list">
                  <li @click="toThirdColorLists">
                    慣用色一覧
                  </li>
                  <li @click="toThirdExam">
                    理解度チェック
                  </li>
                </ul>
              </article-card>
            </transition>
            <transition>
              <article-card title="3"
                            path="../../img/img/img_character02_normal.svg"
                            alt="3級">
                <ul class="article_list">
                  <li @click="toThirdColorLists">
                    慣用色一覧
                  </li>
                  <li @click="toThirdExam">
                    理解度チェック
                  </li>
                </ul>
              </article-card>
            </transition>
          </div>
        </section>
        <section class="section_paint">
          <heading :title="'「描いて」\n学ぶ'"></heading>
          <p class="article_desc">
            色彩検定に登場する色で<br>
            落書きしてみませんか？
          </p>
          <transition>
            <div class="section_inner">
              <article-card :title-flag="false">
                <ul class="paint_list">
                  <li @click="toColorPaint">
                    落書きして学ぶ
                  </li>
                </ul>
              </article-card>
            </div>
          </transition>
        </section>
      </main>
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
import TestBg from "@/vue/components/MainVisula.vue";
import MainVisula from "@/vue/components/MainVisula.vue";

export default {
  name: "home",
  data(){
    return {
      paintFlag: false,
    }
  },
  components: {
    MainVisula,
    TestBg,
    Heading,
    ArticleCard,
    paint,
    customToolbar,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
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
  position: absolute;
  top: 50vh;
  left: 0;
  right: 0;
  margin: auto;
  padding-bottom: 88px;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
}
main {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding-bottom: 88px;
}
.section_bg {
  height: 100vh;
  background: rgb(251,246,240);
  background: linear-gradient(180deg, rgba(251,246,240,1) 19%, rgba(251,246,240,0) 65%, rgba(252,218,203,0) 77%);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.1;
}
/* 背景画像の見えている高さ */
.parallax {
  position: relative;
  height: 74vh;
}
/* 背景画像 */
.parallax::before {
 // background-image: url("../../img/img/img_gradation_bg.png");
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
  li {
    font-family: "KintoSans";
    font-weight: 500;
    font-size: 1.2rem;
    color: map_get($color, text);
    padding: 0 32px;
    &:first-child {
      padding-top: 40px;
      padding-bottom: 24px;
    }
    &:last-child {
      padding-bottom: 32px;
    }
  }
}
.paint_list {
  li {
    font-family: "KintoSans";
    font-weight: 500;
    font-size: 1.2rem;
    color: map_get($color, text);
    padding: 24px 0 24px 32px;
  }
}
.article_desc {
  font-family: "KintoSans",serif;
  color: map_get($color, text);
  text-align: center;
  word-break:keep-all;
}
.prepare {
  font-family: "KintoSans";
  font-weight: 500;
  font-size: 1.08rem;
  color: map_get($color, text);
  background: map_get($color, gray04);
  border-radius: 5px;
  padding: 32px;
  text-align: center;
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
.section_paint {
  .c-articleCard {
    margin-bottom: 0;
  }
}
</style>
