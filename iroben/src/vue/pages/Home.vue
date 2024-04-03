<template>
  <v-ons-page>
    <main-visual></main-visual>
    <main class="container">
        <!--<heading :title="'解いた問題数\n学ぶ'"></heading>-->
      <section>
        <article-card title="3">
          <ul>
            <li>
              <a href="#" @click="toSecondColorLists">
                <span>慣用色一覧</span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="右矢印">
              </a>
            </li>
            <li>
              <a href="#" @click="toSecondExam">
                <span>理解度チェック</span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="右矢印">
              </a>
            </li>
          </ul>
        </article-card>
        <article-card title="2">
          <ul>
            <li>
              <a href="#" @click="toThirdColorLists">
                <span>慣用色一覧</span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="右矢印">
              </a>
            </li>
            <li>
              <a href="#" @click="toThirdExam">
                <span>理解度チェック</span>
                <img src="../../img/icon/icon_arrowRight.svg" alt="右矢印">
              </a>
            </li>
          </ul>
        </article-card>
        <article-card title="1"
                      class="--last">
          <div class="prepare_announce">
            <h4>現在準備中です。</h4>
          </div>
        </article-card>
      </section>
    </main>
  </v-ons-page>
</template>

<script>
import Heading from "@/vue/components/Heading.vue";
import MainVisual from "@/vue/components/MainVisual.vue";
import SideNavigation from "@/vue/components/SideNavigation.vue";
import thirdExam from "@/vue/pages/ThirdExam.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import paint from "@/vue/pages/Paint.vue";
import secondExam from "@/vue/pages/SecondExam.vue";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
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
    SideNavigation,
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
      //console.log("neko")
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
@import "./src/scss/components/transition";

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
    background-repeat: no-repeat;
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
    margin-bottom: 8px;
  }
  h4 {
    color: map_get($color, gray01);
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
  }
  ul {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid map_get($color, gray03);
  }
  .prepare_announce {
    border: 1px solid map_get($color, gray03);
    background:map_get($color, gray04);
    padding: 12px;
    text-align: center;
    border-radius: 5px;
    margin: 0;
  }
  .c-articleCard {
    &.--last {
      margin-bottom: 0;
    }
  }
}
</style>
