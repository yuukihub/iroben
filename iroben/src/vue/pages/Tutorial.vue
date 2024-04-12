<template>
  <ons-page>
      <div>
        <!-- Full-width images with number and caption text -->
        <ul class="sliders">
          <li class="item fade">
            <span class="slide_title">
              <span>ステップ1</span>
              読んで、学ぶ
            </span>
            <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial01.gif" alt="img_tutorial01">
            </span>
            <span class="slide_text">
              試験範囲が全て掲載されています。<br>
              まずはしっかり読んで、<br>
              確実に内容を覚えましょう。<br>
              <br>
            </span>
            <a href="#" @click="toHome">スキップ</a>
          </li>
          <li class="item fade">
            <span class="slide_title">
              <span>ステップ2</span>
              問いて、学ぶ
            </span>
            <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial02.gif" alt="img_tutorial01">
            </span>
            <span class="slide_text">
              少し難しめの練習問題。<br>
              確実に力が付けられるように<br>
              答えをまる覚えしづらい設計になっています。<br>
            </span>
            <a href="#" @click="toHome">スキップ</a>
          </li>
          <li class="item fade">
            <span class="slide_title">
              <span>ステップ3</span>
              描いて、学ぶ
            </span>
            <span class="slide_image">
              <img class="eye_image" src="../../img/img/tutorial/img_tutorial03.gif" alt="img_tutorial01">
            </span>
            <span class="slide_text">
              慣用色の色のペンで落書きができます。<br>
              暗記に疲れた時に、休憩がてら<br>
              描きながら覚えるツールとしてご利用ください。
            </span>
            <a href="#" @click="toHome">スキップ</a>
          </li>
        </ul>
        <!-- Next and previous buttons -->
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div><!-- sliders -->
      <br>
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
  </ons-page>
</template>

<script>
import home from "@/vue/pages/Home.vue";

export default {
  name: "Tutorial",
  data() {
    return {
      slideIndex: 1,
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
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";
      dots[this.slideIndex-1].className += " active";
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    toHome() {
      this.pageStack.push(home);
    },
  },
  props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "../../../src/scss/foundation/_include.scss";
.sliders {
  position: relative;
}

/* Hide the images by default */
.item {
  display: none;
}

.slide_image {
  display: block;
  width: 260px;
  margin: auto;
  img {
    width: 100%;
  }
}


.slide_title {
  display: block;
  font-size:20px;
  font-weight: bold;
  @include KintoSans();
  text-align: center;
  span {
    font-weight: 500;
    font-size:16px;
    display: block;
    margin-bottom: 4px;
  }
}

.slide_text {
  @include KintoSans();
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
