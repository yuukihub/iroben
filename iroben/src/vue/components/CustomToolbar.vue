<template>
    <header class="l-header">
      <div v-if="headerDesign">
        <div class="top">
          <div class="bar"></div>
        </div>
        <img src="../../img/img_wave-top.svg" alt="wave">
      </div>
      <div class="contents">
        <div>
          <v-ons-back-button :on-click="pop"></v-ons-back-button>
        </div>
        <p class="title">{{ title }}</p>
        <button class="custom_button" @click="click">
          <img src="../../img/icon_delete.svg" alt="削除">
        </button>
      </div>
    </header>
</template>

<script>
  import TheMiniButton from "@/vue/components/TheMiniButton.vue";

  export default {
    components: {TheMiniButton},
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
      },
    },
    methods: {
      click(){
        this.$emit('clear');
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
    width: 100%;
    position: absolute;
    top: 16px;
    padding: 0 24px;
  }
  .top {
    position: relative;
    .bar {
      background: white;
      height: 55px;
    }
    img {
      width: 100%;
    }
  }
  .title {
    width: 100%;
    text-align: center;
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
  .custom_button {
    padding: 0;
    margin: 0;
    background: transparent;
    border: transparent;
    img {
      width: 30px;
    }
  }
}
</style>
