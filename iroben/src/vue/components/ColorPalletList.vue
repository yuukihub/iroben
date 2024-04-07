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
            :class="{'is-disabled':isToggleDisabled}"
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
        <div v-if="faultCountArray.length">
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
        <div class="noData_desc" v-else>
          まだデータがありません。
        </div>
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
    isToggleDisabled: {
      type: Boolean,
      default: false,
      required: false
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
      this.$emit("toggle");
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
@import "../src/scss/foundation/include";
.c-colorPalletList{
  &.--firstClass {
    .c-colorLists{
      overflow-y: scroll;
      max-height: 23vh;
      &::-webkit-scrollbar {
        background: map_get($color, white);
        width: 1.5vw;
      }
      &::-webkit-scrollbar-thumb {
        background-color: map_get($color, gray03);
        border: 1px solid map_get($color, gray03);
        border-radius: 10px;
      }
    }
  }
}
.c-colorLists{
  @include KintoSans();
  padding: 8px;
  border: 1px solid map_get($color, gray03);
  border-radius: 6px;
  margin: 8px 8px 24px 8px;
  ul {
    display: grid;
    place-items: center;
    grid-gap: 1%;
    justify-content: space-between;
    grid-template-columns: 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7%;
    @include mq(sp) {
      grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
    }
    @include mq(regular) {
      width: 91%;
      grid-template-columns: 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4% 4%;
    }
  }
}
.color {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @include mq(xsmall) {
    width: 18px;
    height: 18px;
  }
  &[type="radio"]:checked:before {
    content: '';
    background-image: url(../../img/icon/icon_check.svg);
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    display: inline-block;
    vertical-align: middle;
    @include mq(xsmall) {
      width: 14px;
      height: 14px;
      top: 2px;
      left: 2px;
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
    font-size: 16px;
    padding: 8px 8px 4px 8px;
    @include mq(sp) {
      font-size: 14px;
    }
    @include mq(xsmall) {
      font-size: 12px;
    }
  }
  .title {
    width: max-content;
    margin-right: 4px;
  }
  .name {
    width: 38vw;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @include mq(xsmall) {
      width: 27vw;
    }
   &.is-disabled {
     cursor: none;
     color: map_get($color, gray01);
   }
  }
}
.toggle_wrap {
  display: flex;
  align-items: center;
  p {
    width: max-content;
    margin-right: 4px;
  }
}
.noData_desc {
  @include KintoSans();
  background: map_get($color, gray04);
  padding: 16px;
  text-align: center;
}
</style>


