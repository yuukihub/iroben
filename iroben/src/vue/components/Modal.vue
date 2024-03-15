<template>
  <div>
    <article class="c-modal">
      <img class="eye_image" src="../../img/icon_eye.svg" alt="目">
      <slot>
      </slot>
      <div v-if="buttonFlag"
           class="modal-buttons">
        <button @click="process">
          {{okLabel}}
        </button>
        <button @click="closeModal">
          {{cancelLabel}}
        </button>
      </div>
      <a href="#" class="modal-close" @click="closeModal">✕</a>
    </article>
    <overlay @click="closeModal"></overlay>
  </div>
</template>

<script>
import Overlay from "@/vue/components/Overlay.vue";

export default {
  name: "Modal",
  components: {Overlay},
  props: {
    buttonFlag: {
      type: Boolean,
      default: false,
      request: false,
    },
    okLabel: {
      type: String,
      default: false,
      request: false,
    },
    cancelLabel: {
      type: String,
      default: false,
      request: false,
    },
  },
  methods: {
    closeModal(){
      this.$emit('closeModal');
    },
    process(){
      this.$emit('runProcess');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
.c-modal {
  position: relative;
  max-width: 280px;
  width: 100%;
  background: map_get($color, white);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 6px;
  height: max-content;
  z-index: 3;
  @include boxShadow();
  .eye_image {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .overlay{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.7;
    top: -80%;
    left: 0;
  }
  .modal-close{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    color: map_get($color, white);
    text-decoration: none;
  }
  .modal-buttons {
    padding: 16px 0;
    text-align: center;
    button:first-child {
      margin-right: 16px;
    }
  }
}
</style>
