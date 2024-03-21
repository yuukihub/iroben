<template>
    <header class="l-header">
      <div v-if="headerDesignFlag">
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
        <button v-if="customButtonFlag"
                @click="click"
                :class="{'is-disabled':customButtonDisabledFlag === 0}"
                class="custom_button">
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
      headerDesignFlag: {
        type: Boolean,
        default: true,
        required: false
      },
      title: {
        type: String,
        default: "",
        required: false
      },
      customButtonFlag: {
        type: Array,
        default: false,
        required: true
      },
      customButtonDisabledFlag: {
        type: Boolean,
        default: false,
        required: false
      }
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
@import "./src/scss/foundation/mixins";
.l-header{
  &.is-normal {
    img {
      display: none;
    }
    .top {
      .bar {
        background: none;
        height: inherit;
      }
    }
  }
  .contents {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 64px;
    padding: 0 24px;
    @include mq(xsmall) {
      padding: 0 8px;
    }
  }
  .top {
    position: relative;
    .bar {
      background: white;
      height: 9vh;
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
      width: 28px;
    }
    &.is-disabled {
      pointer-events: none;
      img {
        filter: brightness(0) saturate(0) invert(0) sepia(0) saturate(0) hue-rotate(352deg) brightness(0) contrast(0);
      }
    }
  }
}
</style>
