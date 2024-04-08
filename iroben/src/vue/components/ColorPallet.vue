<template>
  <color-pallet-canvas></color-pallet-canvas>
  <div class="c-colorPallet">
    <div class="characters_wrap">
      <img src="../../img/img/common/img_character02_art.svg" alt="character02">
      <img src="../../img/img/common/img_character03_art.svg" alt="character03">
      <img src="../../img/img/common/img_character01_art.svg" alt="character01">
    </div>
    <div class="c-colorPallet_header">
      <h3>カラーパレット</h3>
    </div>
    <div class="tab">
      <div class="tab_menu">
        <button v-for="(obj,index) in tabLists"
                :key="index"
                :class="{
                  'is-current': isCurrent === index}"
                class="tab_button"
                @click="changeTab(index,obj.level)">{{ obj.title }}
        </button>
      </div>
      <div class="tab_content">
        <div v-show="isCurrent === 0">
          <!--3級-->
          <color-pallet-list
              :level="'third'"
              :fault-count-array="faultCountArray"
              :is-toggle-flag="checkToggleStatus('third')"
              :color-lists="thirdQuestion"
              @toggle="pushThirdToggle"
              @setColor="getPenColor"
              @setColorDetail="getColorDetail"
          ></color-pallet-list>
        </div>
        <div v-show="isCurrent === 1">
          <!--2級-->
          <color-pallet-list
              :level="'second'"
              :fault-count-array="faultCountArray"
              :is-toggle-flag="checkToggleStatus('second')"
              :color-lists="secondQuestion"
              @toggle="pushSecondToggle"
              @setColor="getPenColor"
              @setColorDetail="getColorDetail"
          ></color-pallet-list>
        </div>
        <div v-show="isCurrent === 2">
          <!--1級-->
          <color-pallet-list
              class="--firstClass"
              :level="'second'"
              :color-lists="firstQuestion()"
              :is-toggle-disabled="true"
              @setColor="getPenColor"
              @setColorDetail="getColorDetail"
          ></color-pallet-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {secondQuestion} from "@/resource/secondQuestion";
import {thirdQuestion} from "@/resource/thirdQuestion";
import ColorPalletList from "@/vue/components/ColorPalletList.vue";
import ColorPalletCanvas from "@/vue/components/ColorPalletCanvas.vue";
import thirdExam from "@/vue/pages/ThirdExam.vue";
import secondExam from "@/vue/pages/SecondExam.vue";
import {firstQuestion} from "@/resource/firstQuestion";

export default {
  name: "ColorPallet",
  components: {
    ColorPalletCanvas,
    ColorPalletList,
  },
  data() {
    return {
      secondQuestion: secondQuestion,
      thirdQuestion: thirdQuestion,
      level: String,
      faultCountArray: [],
      checkToggleStatus: this.checkToggle,
      tabLists: [
        {
          "title": "3級",
          "level": "third",
        },
        {
          "title": "2級",
          "level": "second",
        },
        {
          "title": "1級",
          "level": "first",
        },
      ],
      isCurrent: 0,
      penColor: "",
      colorDetail: Object,
      openModalFlag: false,
    }
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    },
  },
  methods: {
    firstQuestion() {
      return firstQuestion
    },
    getColorDetail(item, flag) {
      this.colorDetail = item;
      this.openModalFlag = flag;
      this.$emit("openModal", this.colorDetail, this.openModalFlag);
    },
    changeTab(sectionNum, level) {
      this.isCurrent = sectionNum;

      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem(level);
    },
    checkToggle(level) {
      return this.$store.state.toggles[level];
    },
    checkFaultItem(level) {
      let faultItem = this.$store.state[level].faultArray;
      let faultItemArray = JSON.parse(JSON.stringify(faultItem));
      this.faultCountArray = Array.from(
          new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
      );
    },
    pushSecondToggle() {
      this.$store.commit("toggle",
          {
            level: "second",
            flag: this.isSecondActive = !this.isSecondActive
          }
      );
      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem('second');
    },
    pushThirdToggle() {
      this.$store.commit("toggle",
          {
            level: "third",
            flag: this.isThirdActive = !this.isThirdActive
          }
      );
      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem('third');
    },
    getPenColor(value) {
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      context.strokeStyle = value;
      this.draw();
    },
    draw() {
      let canvas = document.getElementById("canvas");

      let drawData = {
        drawFlag: false,
        brushSize: 5,
        lineJoin: "round",
        lineCap: "round",
        oldX: 0,
        oldY: 0,
      }

      canvas.addEventListener("touchmove", function (e) {
        if (!drawData.drawFlag) return;
        let x = e.touches[0].pageX;
        let y = e.touches[0].pageY;
        let context = canvas.getContext("2d");
        context.lineWidth = drawData.brushSize;
        context.lineJoin = drawData.lineJoin;
        context.lineCap = drawData.lineCap;
        context.beginPath();
        context.moveTo(drawData.oldX, drawData.oldY);
        context.lineTo(x, y);
        context.stroke();
        context.closePath();
        drawData.oldX = x;
        drawData.oldY = y;
      }, true);
      canvas.addEventListener("touchstart", function (e) {
        drawData.drawFlag = true;
        drawData.oldX = e.touches[0].pageX;
        drawData.oldY = e.touches[0].pageY;
      }, true);
      canvas.addEventListener("touchend", function () {
        drawData.drawFlag = false;
      }, true);

      // デフォルトのイベントを禁止
      document.ontouchmove = function (evt) {
        evt.preventDefault();
      }
    },
  },
  props: ['pageStack'],
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "../src/scss/components/transition";

.toggle_wrap {
  display: flex;
  align-items: center;
}

.toggle_title {
  margin-right: 4px;
}

.characters_wrap {
  position: absolute;
  width: max-content;
  top: -65px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;

  img {
    height: 60px;

    &:first-child {
      height: 80px;
      animation: animate_chara02 3s linear infinite;
    }

    &:nth-child(2) {
      animation: animate_chara01 3s linear infinite;
    }

    &:last-child {
      height: 50px;
      animation: animate_chara03 3s linear infinite;
      margin-left: 10px;
    }
  }
}

.c-colorPallet {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: map_get($color, white);
  @include fadeIn();
}

.c-colorPallet_header {
  background: map_get($color, main01);

  h3 {
    @include KintoSans();
    color: map_get($color, white);
    font-weight: 500;
    margin: 0;
    padding: 16px 24px;
    font-size: 16px;
    @include mq(sp) {
      padding: 8px 16px;
      font-size: 14px;
    }
    @include mq(xsmall) {
      padding: 8px 16px;
      font-size: 12px;
    }
  }
}

.tab_content {
  background: map_get($color, white);
}

.tab_button {
  border: none;
  background: white;
  padding: 8px 0;
  width: calc(100% / 3);
  color: map_get($color, main01);
  font-size: 16px;
  font-weight: bold;
  @include mq(sp) {
    font-size: 14px;
  }

  &.is-disabled {
    pointer-events: none;
    color: map_get($color, gray02);
  }

  &.is-current {
    border-bottom: 2px solid map_get($color, main01);
  }
}
</style>
