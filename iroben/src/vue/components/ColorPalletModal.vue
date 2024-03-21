<template>
 <modal>
   <div class="modal-color" :style="`background-color:${colorCode}`">
     <h2 class="modal-title">
       <p class="modal-subtitle">
         {{colorSubTitle}}
       </p>
       {{colorTitle}}
     </h2>
     <div class="modal-toneNumber">
       <div class="modal-toneNumber_inner">
         <p>
           色相番号：
         </p>
         <ul>
           <li v-for="(toneNumber, index) in colorToneNumber" :key="index">
             {{toneNumber}}
           </li>
         </ul>
       </div>
     </div>
   </div>
   <p class="modal-description">
     {{colorDescription}}
   </p>
 </modal>
</template>

<script>
import Overlay from "@/vue/components/Overlay.vue";
import Modal from "@/vue/components/Modal.vue";

export default {
  name: "ColorPalletModal",
  components: {Modal, Overlay},
  props: {
    colorTitle: {
      type: String,
      required: true
    },
    colorCode: {
      type: String,
      required: true
    },
    colorSubTitle: {
      type: String,
      required: true
    },
    toneNumber: {
      type: String,
      required: true
    },
    colorDescription: {
      type: String,
      required: true
    },
    colorToneNumber: {
      type: Array,
      default: "[]",
      required: true
    },
    openModalFlag: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    closeModal(){
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
.modal-title {
  display: table;
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  background: map_get($color, white);
  padding: 8px;
  margin: auto;
}
.modal-color {
  padding: 32px 16px;
  border-radius: 6px 6px 0 0;
}
.modal-subtitle {
  background: map_get($color, white);
  margin: 0;
  font-weight: normal;
  text-align: center;
  width: 100%;
  font-size: 14px;
}
.modal-toneNumber{
  display: flex;
  justify-content: center;
  margin-top: 8px;
  &_inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: map_get($color, white);
    padding: 4px;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    border: 1px solid map_get($color, gray03);
    border-radius: 40px;
    padding: 0 10px;
    text-align: center;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.modal-description {
  padding: 16px;
  font-feature-settings: "palt";
}
</style>
