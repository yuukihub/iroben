<template>
  <div class="c-colorPalletList">
    <div class="selectedColor_header">
      <div class="selectedColor">
        <p class="title">選択色</p>
        <a v-if="colorTitleFlag"
           class="name"
           @click="openModal">
          {{colorTitle}}
        </a>
        <p v-else class="name is-disabled">
          未選択
        </p>
      </div>
      <toggle
          @onClick="clickToggle"
          :level="level"></toggle>
    </div>
    <div v-if="!isToggleFlag">
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in colorLists" :key="index">
            <div class="color"
                 :tabindex="index"
                 :style="{background: item.colorCode}"
                 @click="getColorDetail(item)">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in faultCountArray" :key="index">
            <div class="color"
                 :tabindex="index"
                 :style="{background: item.colorCode}"
                 @click="getColorDetail(item)">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <modal v-show="modalFlag"
           :title="colorTitle"
           @closeModal="closeModal">
      <p>
        {{colorSubTitle}}
      </p>
      <p>
        {{colorDescription}}
      </p>
    </modal>
  </div>
</template>

<script>
import Toggle from "@/vue/components/Toggle.vue";
import Modal from "@/vue/components/Modal.vue";

export default {
  name: "ColorPalletList",
  components: {Modal, Toggle},
  data(){
    return {
      colorTitle: "未選択",
      colorSubTitle: "",
      colorDescription: "",
      colorTitleFlag: false,
      modalFlag: false,
    }
  },
  props: {
    colorLists: {
      type: Object,
      default: "{}",
      required: true
    },
    isToggleFlag: {
      type: Boolean,
      default: false,
      required: true
    },
    faultCountArray: {
      type: Array,
      default: "[]",
      required: true
    },
    level: {
      type: String,
      required: true
    },
  },
  methods: {
    clickToggle() {
      this.$emit("onClick");
    },
    getColorDetail(item){
      this.colorTitleFlag = true;
      this.colorTitle = item.title;
      this.colorSubTitle = item.subTitle;
      this.colorDescription = item.description;
    },
    openModal(){
      this.modalFlag = true;
    },
    closeModal(){
      this.modalFlag = false;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.c-colorPalletList {

}
.c-modal {
  top: -100%;
}
.c-colorLists{
  ul {
    display: grid;
    place-items: center;
    grid-gap: 1%;
    justify-content: space-between;
    grid-template-columns: 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7%;
  }
}
.color {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin: 0 0 6px 0;
  :focus {
    &.is-selected {
      border: 2px solid map_get($color, main01);
    }
  }
}
.selectedColor {
  display: flex;
  align-items: center;
  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 16px;
  }
  .title {
    margin-right: 4px;
  }
  .name {
    cursor: pointer;
   &.is-disabled {
     cursor: none;
     color: map_get($color, gray01);
   }
  }
}
</style>

