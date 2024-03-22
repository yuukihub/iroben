<template>
  <article class="c-articleCard">
    <div class="noteRings">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
      <img src="../../img/img/img_noteRing.svg" alt="ノートリング">
    </div>
    <h3>
      <img :src="`${path}`" :alt="alt">
    </h3>
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    alt: {
      type: String,
      default: "",
      required: true
    },
    path: {
      type: String,
      default: "",
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/include";
.c-articleCard {
  position: relative;
  background-color: map_get($color, white);
  width: 85vw;
  border-radius: 8px;
  padding: 24px 64px;
  display: block;
  margin: auto;
  @include boxShadow;
  .noteRings {
    position: absolute;
    top: 0;
    left: 81vw;
    z-index: 1;
    img {
      display: block;
    }
  }
  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    img {
      width: 32px;
    }
  }
  &.--right {
    margin-top: 24px;
    margin-bottom: 24px;
    .noteRings {
      left: -2vw;
      transform: rotate(180deg);
    }
  }
}
</style>
