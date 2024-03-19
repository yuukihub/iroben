<template>
  <div class="c-colorPalletList">
    <div class="selectedColor_header">
      <div class="selectedColor">
        <p class="title">選択色</p>
        <a v-if="colorTitleFlag"
           href="#"
           class="name"
           @click="openModal">
          {{colorTitle}}
        </a>
        <p v-else class="name is-disabled">
          未選択
        </p>
      </div>
      <div class="toggle_wrap">
        <p>不正解のみ</p>
        <toggle
            @onClick="clickToggle"
            :level="level"></toggle>
      </div>
    </div>
    <div v-if="!isToggleFlag">
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in colorLists" :key="index">
            <input type="radio"
                   :name="level"
                   class="color"
                   :tabindex="index"
                   :style="{background: item.colorCode}"
                   @click="getColorDetail(item)">
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in faultCountArray" :key="index">
              <input type="radio"
                     :name="`${level}-fault`"
                     class="color"
                     :tabindex="index"
                     :style="{background: item.colorCode}"
                     @click="getColorDetail(item)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/vue/components/Toggle.vue";
import ColorPalletModal from "@/vue/components/ColorPalletModal.vue";

export default {
  name: "ColorPalletList",
  components: {ColorPalletModal, Toggle},
  data(){
    return {
      colorTitle: "未選択",
      colorDetail: Object,
      colorTitleFlag: false,
      openModalFlag: false,
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
      this.colorTitleFlag = false;
    },
    getColorDetail(item){
      this.colorDetail = item;
      this.colorTitleFlag = true;
      this.colorTitle = item.title;
      this.$emit("setColor",this.colorDetail.colorCode);
    },
    openModal(){
      this.openModalFlag = true;
      this.$emit("setColorDetail",this.colorDetail,this.openModalFlag);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
.c-colorLists{
  ul {
    display: grid;
    place-items: center;
    grid-gap: 1%;
    justify-content: space-between;
    grid-template-columns: 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7%;
    @include mq(sp) {
      grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
    }
  }
}
.color {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin: 0 0 6px 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @include mq(sp) {
    width: 20px;
    height: 20px;
    margin: 0 0 3px 0;
  }
  @include mq(xsmall) {
    width: 16px;
    height: 16px;
    margin: 0 0 3px 0;
  }
  &[type="radio"]:checked:before {
    content: '';
    background-image: url(../../img/icon-check.svg);
    background-size: contain;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 3.5px;
    left: 4px;
    display: inline-block;
    vertical-align: middle;
    @include mq(sp){
      top: 1.5px;
      left: 2px;
    }
    @include mq(xsmall) {
      width: 12px;
      height: 12px;
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
    font-size: 14px;
    margin-right: 4px;
  }
  .name {
    font-size: 14px;
    cursor: pointer;
   &.is-disabled {
     cursor: none;
     color: map_get($color, gray01);
   }
  }
}
.toggle_wrap {
  display: flex;
  align-items: center;
  font-size: 14px;
  p {
    font-size: 14px;
    margin-right: 4px;
  }
}
</style>


