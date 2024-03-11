<template>
    <div class="c-colorPaint">
      <div class="c-colorPaint_header">
        <h3>カラーパレット</h3>
      </div>
      <div class="tab">
        <div class="tab_menu">
          <button v-for="(tabName,index) in tabLists"
                  :key="index"
                  :class="{'is-current': isCurrent === index}"
                  class="tab_button"
                  @click="changeTab(index)">{{tabName}}</button>
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
                :color-lists="secondExam"
                @onClick="secondToggle"
            ></color-pallet-list>
          </div>
          <div v-show="isCurrent === 2">
            <!--3級-->
            <color-pallet-list
                :level="'third'"
                :fault-count-array="faultCountArray"
                :is-toggle-flag="checkToggleStatus('third')"
                :color-lists="thirdExam"
                @onClick="thirdToggle"
            ></color-pallet-list>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {secondExam} from "@/resource/secondExam";
import {thirdExam} from "@/resource/thirdExam";
import ColorPalletList from "@/vue/components/ColorPalletList.vue";

export default {
  name: "ColorPallet",
  components: {
    ColorPalletList,
  },
  data(){
    return {
      secondExam: secondExam,
      thirdExam: thirdExam,
      faultItem: this.$store.state["second"].faultArray,
      faultCountArray: "",
      checkToggleStatus: this.checkToggle,
      tabLists: ["1級","2級","3級",],
      isCurrent: 1,
    }
  },
  created() {
    //this.$store.stateのfaultArrayに重複して入っている色は削除
    let faultItemArray = JSON.parse(JSON.stringify(this.faultItem));
    this.faultCountArray = Array.from(
        new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
    );
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    },
  },
  methods: {
    secondToggle() {
      this.$store.commit("toggle",
          { level:"second",
            flag:this.isSecondActive = !this.isSecondActive
          }
      );
    },
    thirdToggle(){
      this.$store.commit("toggle",
          { level:"third",
            flag:this.isThirdActive = !this.isThirdActive
          }
      );
    },
    changeTab(sectionNum) {
      this.isCurrent = sectionNum;
    },
    checkToggle(level) {
      return this.$store.state.toggles[level];
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/foundation/variables";
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
}
.c-colorPaint_header {
  background: map_get($color, main01);
  h3 {
    margin: 0;
    padding: 16px 24px;
    color: white;
    font-size: 18px;
  }
}
.tab_content {
  background: map_get($color, white);
  padding: 0 24px 16px 24px;
}
.tab_button {
  border: none;
  background: white;
  padding: 8px 0;
  width: calc(100% / 3);
  color: map_get($color, main02);
  font-size: 16px;
  font-weight: bold;
  &.is-current {
    border-bottom: 2px solid map_get($color, main02);
  }
}
</style>
