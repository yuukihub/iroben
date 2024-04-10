<template>
  <article class="c-articleCard">
    <h3 class="title">
      <span class="title-text">{{ title }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/include";

.c-articleCard {
  max-width: 440px;
  width: 80vw;
  margin: -30px auto 0;
  @include mq(xsmall) {
    width: 90vw;
  }
}

.title {
  text-align: center;
  margin-top: 136px;
  margin-bottom: 24px;

  &-text {
    font-weight: 500;
    font-size: 18px;
    @include KintoSans();
  }

  img {
    margin-right: 4px;
  }
}
</style>
