<template>
  <div>
    <div class="c-loading">
      <p>削除中...</p>
      <div class="loading_wrap">
        <div class="loading_img">
          <img class="img_character03" src="../../img/img/common/img_character03_normal.svg" alt="character03">
          <img class="img_eraser" src="../../img/img/common/img_eraser.svg" alt="eraser">
        </div>
      </div>
    </div>
    <overlay></overlay>
  </div>
</template>

<script>
import Overlay from "@/vue/components/Overlay.vue";

export default {
  name: "Loading",
  components: {Overlay}
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";

.loading_wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  transform: rotate(-16deg);
  z-index: index($z-map, loadingImg);
}

p {
  position: fixed;
  top: -107px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  z-index: index($z-map, loadingImg);
  color: map_get($color, white);
}

.loading_img {
  position: relative;
  animation: animate_chara03 0.5s 0s ease-in-out infinite;

  img {
    position: absolute;
  }

  .img_character03 {
    width: 40px;
    transform: rotate(20deg);
  }

  .img_eraser {
    transform: rotate(11deg);
    top: 1px;
    left: -7px;
    width: 25px;
    animation: animate_eraser 0.5s 0s ease-in-out infinite;
  }
}

@keyframes animate_eraser {
  0% {
    transform: rotate(11deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(11deg);
  }
}
</style>
