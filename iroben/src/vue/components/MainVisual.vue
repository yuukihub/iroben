<template>
  <img class="img_wave" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
  <div class="mv">
    <div class="img_centerItems">
      <logo></logo>
      <div class="colorCode">
        <img src="../../img/img/common/img_colorCode01.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode02.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode03.png" alt="colorCode">
        <img src="../../img/img/common/img_colorCode04.png" alt="colorCode">
      </div>
    </div>
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
      <li>
        <img src="../../img/img/common/img_decoration_front01.png" alt="decoration">
      </li>
    </ul>
    <ul class="back_block">
      <li>
        <img src="../../img/img/common/img_star01.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/common/img_star03.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/common/img_star01.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/common/img_star02.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/common/img_decoration_back.png" alt="decoration">
      </li>
      <li>
        <img src="../../img/img/common/img_decoration_back.png" alt="decoration">
      </li>
      <li>
        <img src="../../img/img/common/img_decoration_back.png" alt="decoration">
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "@/vue/components/Logo.vue";

export default {
  name: "MainVisual",
  components: {Logo}
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/include";
@import "./src/scss/components/transition";

.img_wave {
  position: fixed;
  top: 0;
  width: 100%;
  @include mq(regular) {
    top: -60px;
  }
}

.img_centerItems {
  position: relative;
  height: 100%;
}

.logo {
  position: absolute;
  top: -40px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: max-content;
  text-align: center;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  z-index: index($z-map, topLogo);

  .logo_i {
    animation: animate_logo01 6s ease infinite;
  }

  .logo_r {
    animation: animate_logo02 4s ease infinite;
  }

  .logo_o {
    animation: animate_logo03 6s ease infinite;
  }

  .logo_b {
    animation: animate_logo04 5s ease infinite;
  }

  .logo_e {
    animation: animate_logo05 4s ease infinite;
  }

  .logo_n {
    animation: animate_logo06 4s ease infinite;
  }
}


.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.mv {
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  margin: auto;
}

.colorCode {
  height: 25vh;
  width: 100%;
  top: -10px;
  bottom: 0;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;

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

.front_block,
.back_block {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
}

.front_block {
  z-index: index($z-map, topFrontDecoration);
  top: 30vh;

  img {
    width: 40px;
  }
}

.back_block{
  top: 51vh;
  img {
    width: 32px;
  }
}

.front_block li,
.back_block li {
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
      width: 48px;
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
      width: 120vw;
      max-width: 700px;
      @include mq(regular){
        width: 70vw;
      }
    }
  }

  li:nth-child(6) {
    animation: animate_decoration_front02 linear infinite;
    animation-duration: 70s;
    animation-delay: -24s;

    img {
      width: 80vw;
      max-width: 700px;
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
      width: 80vw;
      max-width: 700px;
      @include mq(regular) {
        width: 60vw;
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
      @include mq(regular){
        width: 35vw;
      }
    }
  }

}

.back_block {
  z-index: -1;

  li:nth-child(1) {
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 34s;
  }

  li:nth-child(2) {
    animation: animate_decoration_back01 40s linear infinite;
    animation-duration: 32s;
    animation-delay: 5s;
  }

  li:nth-child(3) {
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 45s;
    animation-delay: 8s;
  }

  li:nth-child(4) {
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 32s;
    animation-delay: 2s;
  }

  li:nth-child(5) {
    animation: animate_decoration_back03 30s linear infinite;
    animation-duration: 100s;
    animation-delay: -30s;
    @include mq(regular){
      animation-duration: 200s;
      animation-delay: -35s;
    }

    img {
      width: 80vw;
      @include mq(regular){
        width: 35vw;
      }
    }
  }

  li:nth-child(6) {
    animation: animate_decoration_back03 30s linear infinite;
    animation-duration: 100s;
    animation-delay: 5s;

    @include mq(regular){
      animation-duration: 200s;
      animation-delay: -10s;
    }

    img {
      width: 80vw;
      @include mq(regular){
        width: 35vw;
      }
    }
  }

  li:nth-child(7) {
    animation: animate_decoration_back03 30s linear infinite;
    animation-duration: 100s;
    animation-delay: 40s;

    @include mq(regular){
      animation-duration: 200s;
      animation-delay: 0s;
    }

    img {
      width: 80vw;
      @include mq(regular){
        width: 35vw;
      }
    }
  }
}


.img_book {
  width: 100%;
  max-width: 680px;
  position: absolute;
  top: 170px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
