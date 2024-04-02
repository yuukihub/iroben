<template>
  <article class="c-articleCard">
    <h3 class="title">
      <span v-if="titleFlag">
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
  width: 80vw;
  margin: 0 auto 48px;
}
.title {
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 24px;
  &-class,
  &-text{
    font-family: "KintoSans",serif;
    font-weight: 500;
    color: map_get($color, text);
  }
  &-class {
    font-size: 1.43rem;
    margin-right: 2px;
  }
}
</style>
