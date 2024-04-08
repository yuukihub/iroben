<template>
  <header class="l-header">
    <div class="contents" :class="{'--bg':headerDesignFlag}">
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
    <img src="../../img/img/common/img_wave_top.svg" alt="wave">
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
      required: true
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

  &.is-normal {
    img {
      display: none;
    }
  }

  .contents {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 56px 24px 0;
    @include mq(xsmall) {
      padding-left: 8px;
      padding-right: 8px;
    }

    &.--bg {
      background: map_get($color, white);
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
    text-align: center;
    font-size: 18px;
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
</style>
