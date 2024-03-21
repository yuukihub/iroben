<template>
  <color-pallet-canvas></color-pallet-canvas>
    <div class="c-colorPaint">
      <div class="c-colorPaint_header">
        <h3>カラーパレット</h3>
      </div>
      <div class="tab">
        <div class="tab_menu">
          <button v-for="(obj,index) in tabLists"
                  :key="index"
                  :class="{
                    'is-disabled': index === 0,
                    'is-current': isCurrent === index}"
                  class="tab_button"
                  @click="changeTab(index,obj.level)">{{obj.title}}</button>
        </div>
        <div class="tab_content">
          <div v-show="isCurrent === 0">
            <!--1級-->
            1級
          </div>
          <div v-show="isCurrent === 1">
            <!--2級-->
            <color-pallet-list
                :level="'second'"
                :fault-count-array="faultCountArray"
                :is-toggle-flag="checkToggleStatus('second')"
                :color-lists="secondQuestion"
                @onClick="pushSecondToggle"
                @setColor="getPenColor"
                @setColorDetail="getColorDetail"
            ></color-pallet-list>
          </div>
          <div v-show="isCurrent === 2">
            <!--3級-->
            <color-pallet-list
                :level="'third'"
                :fault-count-array="faultCountArray"
                :is-toggle-flag="checkToggleStatus('third')"
                :color-lists="thirdQuestion"
                @onClick="pushThirdToggle"
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

export default {
  name: "ColorPallet",
  components: {
    ColorPalletCanvas,
    ColorPalletList,
  },
  data(){
    return {
      secondQuestion: secondQuestion,
      thirdQuestion: thirdQuestion,
      level:String,
      faultCountArray: [],
      checkToggleStatus: this.checkToggle,
      tabLists: [
        {
          "title":"1級",
          "level":"first",
        },
        {
          "title":"2級",
          "level":"second",
        },
        {
          "title":"3級",
          "level":"third",
        },
      ],
      isCurrent: 1,
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
    getColorDetail(item,flag){
      this.colorDetail = item;
      this.openModalFlag = flag;
      this.$emit("openModal",this.colorDetail,this.openModalFlag);
    },
    changeTab(sectionNum,level) {
      this.isCurrent = sectionNum;

      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem(level);
    },
    checkToggle(level) {
      return this.$store.state.toggles[level];
    },
    checkFaultItem(level){
      let faultItem = this.$store.state[level].faultArray;
      let faultItemArray = JSON.parse(JSON.stringify(faultItem));
      this.faultCountArray = Array.from(
          new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
      );
    },
    pushSecondToggle() {
      this.$store.commit("toggle",
          { level:"second",
            flag:this.isSecondActive = !this.isSecondActive
          }
      );

      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem('second');
    },
    pushThirdToggle(){
      this.$store.commit("toggle",
          { level:"third",
            flag:this.isThirdActive = !this.isThirdActive
          }
      );

      //this.$store.stateのfaultArrayに重複して入っている色は削除
      this.checkFaultItem('third');
    },
    getPenColor(value){
      this.penColor = value;
      this.draw();
    },
    draw(){
      let drawData = {
        drawFlag : false,
        oldX : 0,
        oldY : 0,
        brushSize : 4,
        penColor : this.penColor
      }

      let canvas = document.getElementById("canvas");

      canvas.addEventListener("touchmove", function (e){
        if (!drawData.drawFlag) return;
        let x = e.touches[0].pageX;
        let y = e.touches[0].pageY;
        let context = canvas.getContext("2d");
        context.strokeStyle = drawData.penColor;
        context.lineWidth = drawData.brushSize;
        context.lineJoin= "round"; // 連結部分を丸にする
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(drawData.oldX, drawData.oldY);
        context.lineTo(x, y);
        context.stroke();
        context.closePath();
        drawData.oldX = x;
        drawData.oldY = y;
      }, true);
      canvas.addEventListener("touchstart", function(e){
        drawData.drawFlag = true;
        drawData.oldX = e.touches[0].pageX;
        drawData.oldY = e.touches[0].pageY;
      }, true);
      canvas.addEventListener("touchend", function(){
        drawData.drawFlag = false;
      }, true);

      // デフォルトのイベントを禁止
      document.ontouchmove = function(evt){
        evt.preventDefault();
      }

    }
  },
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
.toggle_wrap {
  display: flex;
  align-items: center;
}
.toggle_title {
  margin-right: 4px;
}
.c-colorPaint {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: map_get($color, white);
}
.c-colorPaint_header {
  background: map_get($color, main01);
  h3 {
    margin: 0;
    padding: 16px 24px;
    color: white;
    font-size: 18px;
    @include mq(sp) {
      padding: 16px;
      font-size: 0.9rem;
    }
    @include mq(xsmall) {
      padding: 8px 16px;
      font-size: 0.75rem;
    }
  }
}
.tab_content {
  background: map_get($color, white);
  padding: 0 16px 16px 16px;
  @include mq(sp) {
    padding: 0 8px 8px 8px;
  }
}
.tab_button {
  border: none;
  background: white;
  padding: 8px 0;
  width: calc(100% / 3);
  color: map_get($color, main02);
  font-size: 16px;
  font-weight: bold;
  @include mq(sp) {
    font-size: 0.9rem;
  }
  @include mq(xsmall) {
    font-size: 0.75rem;
  }
  &.is-disabled {
    pointer-events: none;
    color: map_get($color, gray02);
  }
  &.is-current {
    border-bottom: 2px solid map_get($color, main02);
  }
}
</style>
