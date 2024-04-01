<template>
  <article class="c-articleCard">
    <h3>
      <img :src="`${path}`" :alt="alt">
      <span class="title" v-if="titleFlag">
        <span class="title-class">{{title}}</span><span class="title-text">級対策</span>
      </span>
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
      required: false
    },
    path: {
      type: String,
      default: "",
      required: false
    },
    title: {
      type: String,
      default: "",
      required: false
    },
    titleFlag: {
      type: Boolean,
      default: true,
      required: false
    }
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
  padding: 8px;
  display: block;
  margin: auto;
  @include boxShadow;
  &:not(:last-child) {
  margin: 0 auto 40px;
  }
  &:first-child {
    margin: 40px auto;
  }
  h3 {
    position: absolute;
    top: -21px;
    left: 16px;
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    color: map_get($color, text);
    img {
      height: 40px;
      margin-right: 8px;
    }
    span{
      font-family: "KintoSans";
      font-weight: 500;
      font-size: 1.4rem;
      color: map_get($color, text);
    }
    .title {
      display: flex;
      align-items: baseline;
    }
    .title-class {
      font-size: 1.5rem;
    }
    .title-text {
      font-size: 1.3rem;
    }
  }
}
</style>
