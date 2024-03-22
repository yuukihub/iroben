<template>
  <article class="c-articleCard">
    <h2>
      <img :src="`${path}`" :alt="alt">
    </h2>
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
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
.c-articleCard {
  position: relative;
  background: map_get($color, white);
  max-width: 300px;
  margin: 24px auto;
  border-radius: 6px;
  padding: 24px;
  h2 {
    position: absolute;
    top: -30px;
    margin: inherit;
  }
}
</style>
