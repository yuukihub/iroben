<template>
  <v-ons-page>

    <section class="c-card is-disabled">
      <h2>
        <!--<img :src="'../../img/title0'+slide+'.svg'" :alt="slide+'級'">-->
        <img src="../../img/title01.svg" alt="1級'">
      </h2>
      <div>
        <!--<div class="color">
          <div class="title_wrap">
            <p class="sub_title">
              本日の1級慣用色
            </p>
            <h3>
              スカイブルー
            </h3>
          </div>
        </div>-->
        <ul>
          <a href="">
            <li>
              慣用色テスト
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
          <a href="">
            <li>
              慣用色一覧
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
        </ul>
      </div>
    </section>

    <section class="c-card">
      <h2>
        <!--<img :src="'../../img/title0'+slide+'.svg'" :alt="slide+'級'">-->
        <img src="../../img/title02.svg" alt="2級'">
      </h2>
      <div>
        <v-ons-button class="c-button" @click="toThirdExam">慣用色テスト</v-ons-button>
        <v-ons-button class="c-button" @click="toThirdColorLists">慣用色一覧</v-ons-button>
        <ul>
          <a href="" @click="push">
            <li>
              慣用色テスト
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
          <a href="">
            <li>
              慣用色一覧
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
        </ul>
      </div>
    </section>

    <section class="c-card">
      <h2>
        <!--<img :src="'../../img/title0'+slide+'.svg'" :alt="slide+'級'">-->
        <img src="../../img/title03.svg" alt="3級'">
      </h2>
      <div>
        <ul>
          <a href="">
            <li>
              慣用色テスト
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
          <a href="">
            <li>
              慣用色一覧
              <img src="../../img/icon_arrowRight.svg" alt="右矢印">
            </li>
          </a>
        </ul>
      </div>
    </section>

    <div class="characters-wrap">
      <img class="character03" src="../../img/character03_art.svg" alt="character03">
      <img class="character02" src="../../img/character02_art.svg" alt="character02">
      <img class="character01" src="../../img/character01_art.svg" alt="character01">
    </div>
    <div class="bottom">
      <img src="../../img/wave-bottom.svg" alt="wave">
    </div>

  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import thirdExam from './thirdExam.vue';
import thirdColorLists from "@/vue/pages/thirdColorLists.vue";


export default {
  name: "home",
  components: {
    customToolbar,
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    toThirdExam() {
      this.pageStack.push(thirdExam);
    },
    toThirdColorLists() {
      this.pageStack.push(thirdColorLists);
    },
  },
  props: ['pageStack'],
  key: 'key_page2',
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.top_inner {
  display: flex;
}
.c-card {
  background: map_get($color, white);
  border: 1px solid map_get($color, gray03);
  border-radius: 10px;
  width: 100%;
  position: relative;
  .color {
    background: #87CEEB;
    border-radius: 10px 10px 0 0;
    display: inline-grid;
    place-content: center;
    width: 97%;
    margin: 3%;
    height: 293px;
  }
  .title_wrap {
    display: inline-grid;
    place-items: center;
    place-content: center;
  }
  h2 {
    position: absolute;
    margin: 0;
    top: -15px;
    left: 10px;
    z-index: 1;
  }
  .sub_title,
  h3 {
    background: map_get($color, white);
    padding: 4px;
    display: inline-block;
  }
  .sub_title {
    font-size: 10px;
  }
  h3 {
    font-size: 18px;
    margin: 10px 0 0 0;
  }
  &.is-disabled {
    background: map_get($color, gray03);
    display: inline-grid;
    place-content: center;
    div,ul {
      opacity: 0;
    }
  }
}
.characters-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2vh;
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
li {
  border-top: 1px solid #ccc;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom {
  img {
    position: absolute;
    bottom: 0;
  }
}

</style>
