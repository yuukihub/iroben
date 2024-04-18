<template>
  <div class="sliders">
    <div class="sliders_inner">
      <ul class="sliders_lists">
        <li class="item fade">
            <span class="slide_title">
              1. <span>読んで、学ぶ</span>
            </span>
          <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial01.gif" alt="img_tutorial01">
            </span>
          <span class="slide_text">
              各級の「慣用色一覧」メニューから<br>
              試験範囲となる慣用色が確認できます。
            </span>
        </li>
        <li class="item fade">
            <span class="slide_title">
              2. <span>解いて、学ぶ</span>
            </span>
          <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial02.gif" alt="img_tutorial01">
            </span>
          <span class="slide_text">
              「練習問題」を繰り返し解くことで<br>
              あなたの暗記を確実にサポートします。
            </span>
        </li>
        <li class="item fade">
        <span class="slide_title">
              3. <span>描いて、学ぶ</span>
            </span>
          <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial03.gif" alt="img_tutorial01">
            </span>
          <span class="slide_text">
              「ペイント」メニューでは、<br>
              遊ぶ気持ちであなたの学びをサポートします。
            </span>
        </li>
      </ul>
      <div style="text-align:center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
    </div>
    <!-- Next and previous buttons -->
    <a class="prev" @click="plusSlides(-1)">
      <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
    </a>
    <a class="next" @click="plusSlides(1)">
      <img src="../../img/icon/icon_arrowRight.svg" alt="icon">
    </a>
  </div>
</template>

<script>
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "TutorialSlider",
  data() {
    return {
      slideIndex: 1,
      title: ROUTER.TUTORIAL_TITLE,
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("item");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../../src/scss/foundation/_include.scss";
@import "./src/scss/components/contentArea";
@import "../src/scss/components/transition";

.sliders {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: max-content;

}

.item {
  display: none;
}

.slide_image {
  display: block;

  img {
    width: 240px;
    margin: auto;
    display: block;
  }
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
  margin: 0 auto 40px;
  border-radius: 5px;
  animation: fadeInUpDown 3s linear infinite;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -15px;
    border: 15px solid transparent;
    border-top: 15px solid map_get($color, white);
  }

  span {
    font-size: 16px;
    font-weight: 500;
    @include KintoSans();
  }

  @include mq(xsmall) {
    font-size: 16px;
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

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;

  img {
    width: 32px;
  }
}

.prev {
  img {
    transform: rotate(-180deg);
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

@keyframes fade {
  from {
    opacity: 0.4
  }
  to {
    opacity: 1
  }
}
</style>
