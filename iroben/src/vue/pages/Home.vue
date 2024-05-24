<template>
  <v-ons-page>
    <img class="img_wave_top" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
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
    <div class="wrap">
      <img class="img_wave" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
      <logo></logo>
      <div class="colorCode">
        <img src="../../img/img/common/img_colorCode01.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode02.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode03.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode04.png" alt="colorCode">
      </div>
      <img class="img_park" src="../../img/img/common/img_park.png" alt="park">
      <ul class="front_block">
        <li>
          <img src="../../img/img/common/img_star01.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/common/img_blur_star01.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/common/img_star01.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/common/img_star02.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/common/img_blur_decoration01.png" alt="heart">
        </li>
        <li>
          <img src="../../img/img/common/img_decoration_front01.png" alt="decoration">
        </li>
        <li>
          <img src="../../img/img/common/img_decoration_front02.png" alt="decoration">
        </li>
      </ul>
    </div>
    <img class="img_wave_bottom" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
  </v-ons-page>
</template>

<script>
import ThirdExam from "@/vue/pages/ThirdExam.vue";
import ThirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import Paint from "@/vue/pages/Paint.vue";
import SecondExam from "@/vue/pages/SecondExam.vue";
import SecondColorLists from "@/vue/pages/SecondColorLists.vue";
import FirstColorLists from "@/vue/pages/FirstColorLists.vue";
import Agreement from "@/vue/pages/Agreement.vue";
import Tutorial from "@/vue/pages/Tutorial.vue";
import Logo from "@/vue/components/Logo.vue";
import MainVisual from "@/vue/components/MainVisual.vue";

export default {
  name: "Home",
  data() {
    return {
      open: false
    }
  },
  components: {
    MainVisual,
    Logo
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
    toTutorial() {
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
@import "./src/scss/foundation/include";
@import "./src/scss/components/transition";
@import "../src/scss/components/sideNavi";

.l-header {
  img {
    width: 100%;
  }
}
.img_wave {
  &_top {
    position: fixed;
    width: 100%;
  }

  &_bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    transform: rotate(180deg);
  }
}

.img_park {
  width: 350px;
  position: absolute;
  top: 260px;
  left: 0;
  @include mq(xsmall) {
    width: 300px;
  }
  @include mq(sp) {
    top: 250px;
    width: 320px;
  }
  @include mq(regular) {
    width: 70vw;
    top: 32vh;
  }
  @include mq(big) {
    top: 100px;
    bottom: 0;
    margin: auto;
  }
}

.img_wave {
  position: fixed;
  top: 0;
  width: 100%;
  @include mq(regular) {
    top: -120px;
  }
}

.wrap {
  overflow: hidden;
}

.c-logo {
  top: 240px;
  margin: inherit;
  @include mq(sp) {
    top: 200px;
  }
  @include mq(regular) {
    top: 300px;
  }
  @include mq(big) {
    top: 500px;
  }
}

.colorCode {
  height: 25vh;
  width: 100%;
  top: 170px;
  position: absolute;
  right: 0;
  left: 0;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  z-index: 1;
  @include mq(sp) {
    top: 150px;
  }
  @include mq(regular) {
    top: 200px;
  }
  @include mq(big) {
    top: 360px;
  }

  img {
    position: absolute;
    width: 40px;
    right: 0;
    z-index: index($z-map, topColorCodeDecoration);

    &:first-child {
      left: 19vw;
      margin: auto;
      animation: animate_logo01 6s ease infinite;
    }

    &:nth-child(2) {
      left: -21vw;
      margin: auto;
      animation: animate_logo06 4s ease infinite;
    }

    &:nth-child(3) {
      left: -40vw;
      margin: auto;
      bottom: 10px;
      animation: animate_logo02 4s ease infinite;
    }

    &:nth-child(4) {
      right: 37vw;
      margin: auto;
      bottom: 0;
      animation: animate_logo06 4s ease infinite;
    }
  }
}

.front_block {
  position: absolute;
  top: 0;
  width: 100%;
  height: 55%;
  overflow: hidden;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
}

.front_block {
  z-index: index($z-map, topFrontDecoration);
  top: 240px;

  img {
    width: 40px;
  }
}

.front_block li {
  position: absolute;
  display: block;
  animation-delay: 0s;
  left: 100%;
}

.front_block {

  li:nth-child(1) {
    animation: animate_decoration_front01 30s linear infinite;
    animation-duration: 40s;
    animation-delay: -30s;

    img {
      width: 38px;
    }
  }

  li:nth-child(2) {
    animation: animate_decoration_front04 60s linear infinite;
    animation-duration: 44s;
    animation-delay: -2s;
    z-index: index($z-map, topFrontDecoration);

    img {
      width: 64px;
    }
  }

  li:nth-child(3) {
    animation: animate_decoration_front01 30s linear infinite;
    animation-duration: 40s;
    animation-delay: -1s;
  }

  li:nth-child(4) {
    animation: animate_decoration_front03 linear infinite;
    animation-duration: 40s;
    animation-delay: 2s;
  }

  li:nth-child(5) {
    animation: animate_decoration_front02 linear infinite;
    animation-duration: 40s;
    animation-delay: -18s;
    z-index: index($z-map, topFrontDecoration);

    img {
      width: 100vw;
      max-width: 600px;
      @include mq(regular) {
        width: 60vw;
      }
    }
  }

  li:nth-child(6) {
    animation: animate_decoration_front02 linear infinite;
    animation-duration: 70s;
    animation-delay: -24s;

    img {
      width: 60vw;
      max-width: 600px;
      @include mq(regular) {
        width: 50vw;
      }
    }
  }

  li:nth-child(7) {
    animation: animate_decoration_front02 linear infinite;
    animation-duration: 70s;
    animation-delay: 4s;

    img {
      width: 60vw;
      max-width: 600px;
      @include mq(regular) {
        width: 50vw;
      }
    }
  }

  li:nth-child(8) {
    animation: animate_decoration_front05 linear infinite;
    animation-duration: 70s;
    animation-delay: 13s;

    img {
      width: 80vw;
      max-width: 700px;
      @include mq(regular) {
        width: 35vw;
      }
    }
  }

}

</style>
