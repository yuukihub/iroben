<template>
  <article class="c-articleCard">
    <h3 class="title">
      <img v-if="title"
          class="icon_list"
           :src="imgPath"
           alt="list">
      <span class="title-text">{{title}}</span>
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
    imgPath: {
      type: String,
      default: "",
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/include";
.c-articleCard {
  width: 80vw;
  margin: 0 auto 32px;
}
.title {
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  &-class,
  &-text{
    font-weight: 500;
    font-size: 1.1rem;
    @include KintoSans();
  }
  img {
    margin-right: 4px;
  }
}
</style>
