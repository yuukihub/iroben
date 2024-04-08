<template>
  <header class="l-header">
    <div class="contents">
      <div>
        <v-ons-back-button></v-ons-back-button>
      </div>
      <p class="title">{{ title }}</p>
      <button v-if="customButtonFlag"
              @click="clear"
              :class="{'is-hide':customButtonDisabledFlag < 1}"
              class="custom_button">
        <img src="../../img/icon/icon_delete.svg" alt="削除">
      </button>
    </div>
    <img v-show="waveImageFlag" class="img_wave" src="../../img/img/common/img_wave_top_header.svg" alt="wave">
  </header>
</template>

<script>
import TheMiniButton from "@/vue/components/TheMiniButton.vue";

export default {
  components: {TheMiniButton},
  props: {
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
      required: true
    },
    waveImageFlag: {
      type: Boolean,
      default: true,
      required: false
    },
    props: ["pageStack"],
  },
  methods: {
    clear() {
      this.$emit('clear');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";

.l-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  .contents {
    width: 100%;
    padding: 16px 24px 0;
    @include mq(xsmall) {
      padding-left: 8px;
      padding-right: 8px;
    }

  }

  .top {
    position: relative;

    .bar {
      background: white;
      height: 12vh;
    }

    img {
      width: 100%;
    }
  }

  .title {
    width: 100%;
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    font-size: 16px;
    font-weight: 500;
    color: map_get($color, text);
    @include mq(xsmall) {
      font-size: 14px;
    }
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
    position: absolute;
    right: 24px;
    top: 16px;
    img {
      width: 28px;
      @include mq(xsmall) {
        width: 24px;
      }
    }

    &.is-hide {
      display: none;
    }
  }
}
.img_wave {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
}
</style>
