<template>
  <div class="c-tutorialSlider">
    <div class="sliders_inner">
      <ul class="sliders_lists">
        <li class="item fade">
          <div class="slide_title_block">
            <span class="slide_title">
              1. <span>読んで、学ぶ</span>
            </span>
          </div>
          <span class="slide_image">
            <img src="../../img/img/tutorial/img_tutorial01.gif" alt="img_tutorial01">
          </span>
          <span class="slide_text">
            各級の「慣用色一覧」メニューから<br>
            試験範囲となる慣用色が確認できます。
          </span>
        </li>
        <li class="item fade">
          <div class="slide_title_block">
            <span class="slide_title">
              2. <span>解いて、学ぶ</span>
            </span>
          </div>
          <span class="slide_image">
              <img src="../../img/img/tutorial/img_tutorial02.gif" alt="img_tutorial01">
            </span>
          <span class="slide_text">
            「練習問題」を繰り返し解くことで<br>
            あなたの暗記を確実にサポートします。
          </span>
        </li>
        <li class="item fade">
          <div class="slide_title_block">
           <span class="slide_title">
              3. <span>描いて、学ぶ</span>
            </span>
          </div>
          <span class="slide_image">
            <img src="../../img/img/tutorial/img_tutorial03.gif" alt="img_tutorial01">
          </span>
          <span class="slide_text">
            「ペイント」メニューでは、遊び感覚であなたの学びをサポートします。
            「ペイント」メニューでは、遊び感覚であなたの学びをサポートします。
          </span>
        </li>
      </ul>
      <div class="slide_dot">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
    </div>
    <template v-if="topPageFlag">
      <div v-if="slideIndex < 3"
           class="button_area">
        <custom-button label="次へ"
                       :is-disabled-flag="false"
                       @click="plusSlides(1)"></custom-button>
      </div>
      <div v-else
           class="button_area">
        <custom-button label="irobenを始める"
                       :is-disabled-flag="false"
                       @click="hideTutorial"></custom-button>
      </div>
      <a href="#" class="slide_skip"
         @click="hideTutorial">
        スキップ
        <img src="../../img/icon/icon_arrowRight_blue.svg" alt="icon">
      </a>
    </template>
    <template v-else>
      <a class="prev" @click="plusSlides(-1)">
        <img src="../../img/icon/icon_arrowLeft.svg" alt="icon">
      </a>
      <a class="next" @click="plusSlides(1)">
        <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
      </a>
    </template>
  </div>
</template>

<script>
import {ROUTER} from "@/resource/constant-router";
import CustomButton from "@/vue/components/CustomButton.vue";

export default {
  name: "TutorialSlider",
  components: {CustomButton},
  data() {
    return {
      slideIndex: 1,
      title: ROUTER.TUTORIAL_TITLE,
      slides: document.getElementsByClassName("item"),
      dots: document.getElementsByClassName("dot"),
    }
  },
  props: {
    topPageFlag: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    showSlides(n) {
      let i;
      if (n > this.slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = this.slides.length
      }
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      }
      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].className = this.dots[i].className.replace(" active", "");
      }
      this.slides[this.slideIndex - 1].style.display = "block";
      this.dots[this.slideIndex - 1].className += " active";
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    hideTutorial(){
      this.$emit("onClick");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../src/scss/foundation/_include.scss";
@import "../src/scss/components/transition";
@import "../src/scss/components/topWaveHeder";

.c-tutorialSlider {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: max-content;
  max-width: 500px;
  width: 100%;
  padding: 0 16px 0 16px;

  .item {
    display: none;
    .img_character {
      position: absolute;
      top: -28px;
      right: 0;
      left: 0;
      margin: auto;
      width: 40px;
      display: block;
      z-index: -1;
    }
    &:nth-child(2) .img_character {
      width: 45px;
    }
  }

  .slide_image {
    display: block;

    img {
      width: 240px;
      margin: auto;
      display: block;
      @include mq(xsmall) {
        width: 170px;
      }
    }
  }

  .slide_title_block {
    position: relative;
    margin-bottom: 40px;
    animation: fadeInUpDown 1.5s linear infinite;
  }

  .slide_title {
    position: relative;
    display: block;
    font-size: 16px;
    font-weight: 500;
    @include KintoSans();
    text-align: center;
    background: map_get($color, white);
    width: max-content;
    padding: 16px;
    margin: 0 auto;
    border-radius: 5px;

    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -15px;
      border: 15px solid transparent;
      border-top: 12px solid map_get($color, white);
    }

    span {
      font-size: 16px;
      font-weight: 500;
      @include KintoSans();
    }

  }

  .slide_text {
    @include KintoSans();
    font-size: 16px;
    text-align: center;
    display: block;
    margin: 24px 0;
    @include mq(xsmall) {
      font-size: 14px;
    }
  }

  .slide_dot {
    text-align: center;
  }

  .slide_skip {
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: end;
    img {
      margin-left: 8px;
    }
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    img {
      width: 32px;
    }
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }


  .dot {
    cursor: pointer;
    height: 1vh;
    width: 1vh;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  .button_area {
    margin-top: 48px;
  }
}


@keyframes fade {
  from {
    opacity: 0.4
  }
  to {
    opacity: 1
  }
}
</style>
