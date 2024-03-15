<template>
  <!--<v-ons-toolbar>-->
    <header class="l-header">
      <div v-if="headerDesign">
        <div class="top">
          <div class="bar"></div>
        </div>
        <img src="../../img/img_wave-top.svg" alt="wave">
      </div>
      <div class="contents">
        <div>
          <v-ons-back-button :on-click="pop" :options="'ああああ'"></v-ons-back-button>
        </div>
        <p class="title">{{ title }}</p>
      </div>
    </header>
</template>

<script>
  export default {
    props: {
      headerDesign: {
        type: Boolean,
        default: true,
        required: false
      },
      title: {
        type: String,
        default: "",
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.l-header{
  .contents {
    display: flex;
    align-items: center;
    position: absolute;
    top: 24px;
    left: 16px;
    width: 100%;
  }
  .top {
    position: relative;
    .bar {
      background: white;
      height: 55px;
    }
    img {
      width: 100%;
      z-index: -1;
    }
  }
  .title {
    width: 100%;
    text-align: center;
    padding-right: 56px;
    font-size: 16px;
    font-weight: bold;
    color: map_get($color, text);
  }
  .back-button {
    padding-left: 0;
    &__label {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
