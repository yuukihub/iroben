<template>
  <div>
    <article class="c-modal">
      <img class="eye_image" src="../../img/img/common/img_eye.svg" alt="目">
      <slot>
      </slot>
      <div v-if="buttonFlag"
           class="modal-buttons">
        <custom-mini-button :label="okLabel"
                         :buttonType="'error'"
                         @click="process"></custom-mini-button>
        <the-mini-button :label="cancelLabel"
                         :buttonType="''"
                         @click="closeModal"></the-mini-button>
      </div>
      <a href="#" class="modal-close" @click="closeModal">✕</a>
    </article>
    <overlay @click="closeModal"></overlay>
  </div>
</template>

<script>
import Overlay from "@/vue/components/Overlay.vue";
import CustomMiniButton from "@/vue/components/CustomMiniButton.vue";

export default {
  name: "Modal",
  components: {CustomMiniButton, Overlay},
  props: {
    buttonFlag: {
      type: Boolean,
      default: false,
      required: false,
    },
    okLabel: {
      type: String,
      default: false,
      required: false,
    },
    cancelLabel: {
      type: String,
      default: false,
      required: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    process() {
      this.$emit('runProcess');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";

.c-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 6px;
  height: max-content;
  max-width: 280px;
  width: 100%;
  background: map_get($color, white);
  color: map_get($color, text);
  z-index: index($z-map, modal);
  @include boxShadow();

  .eye_image {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .overlay {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.7;
    top: -80%;
    left: 0;
  }

  .modal-close {
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 24px;
    color: map_get($color, white);
    text-decoration: none;
  }

  .modal-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    text-align: center;

    button:first-child {
      margin-right: 16px;
    }
  }
}
</style>
