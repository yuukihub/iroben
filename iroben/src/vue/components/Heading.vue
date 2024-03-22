<template>
  <h2 class="c-heading">
          <span>
            {{title}}
          </span>
    <img src="../../img/img/img_decoration05.svg" alt="heading_decoration">
  </h2>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
.c-heading {
  position: relative;
  text-align: center;
  span {
    font-family: "MiuraGotic",serif;
    font-size: 2.6rem;
    color: map_get($color, text);
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  img {
    display: block;
    margin: auto;
  }
}
</style>
