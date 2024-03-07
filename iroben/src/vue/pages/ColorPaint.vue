<template>
  <v-ons-page>
    <div>
      <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tab 2</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Tab 3</a>
      </div>

      <div class="content">
        <div v-if="activetab === 1">
          Content for tab one
        </div>
        <div v-if="activetab === 2">
          <color-pallet-list
              :level="'second'"
              :fault-count-array="faultCountArray"
              :is-toggle-flag="isSecondActive"
              :color-lists="secondExam"
              @onClick="secondToggle"
          ></color-pallet-list>
        </div>
        <div v-if="activetab === 3">
          <color-pallet-list
              :level="'third'"
              :fault-count-array="faultCountArray"
              :is-toggle-flag="isThirdActive"
              :color-lists="thirdExam"
              @onClick="thirdToggle"
          ></color-pallet-list>
        </div>
      </div>
    </div>

    <!--<custom-toolbar></custom-toolbar>-->

  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import {secondExam} from "@/resource/secondExam";
import {thirdExam} from "@/resource/thirdExam";
import ColorPalletList from "@/vue/components/ColorPalletList.vue";
import Tabs from "@/vue/components/Tabs.vue";
import Tab from "@/vue/components/Tab.vue";

export default {
  name: "ColorPaint",
  components: {
    ColorPalletList,
    customToolbar,
    Tabs,
    Tab
  },
  data(){
    return {
      faultItem: this.$store.state["second"].faultArray,
      faultCountArray: "",
      secondExam: secondExam,
      thirdExam: thirdExam,
      isSecondActive: this.$store.state.toggles["second"],
      isThirdActive: this.$store.commit("toggle", { level:"third"}),//false,
      activetab: 1 ,
    }
  },
  created() {
    //this.$store.stateのfaultArrayに重複して入っている色は削除
    let faultItemArray = JSON.parse(JSON.stringify(this.faultItem));
    this.faultCountArray = Array.from(
        new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
    );
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
  },
}
</script>

<style lang="scss" scoped>
.toggle_wrap {
  display: flex;
  align-items: center;
}
.toggle_title {
  margin-right: 4px;
}
.c-colorPallet {
  width: 100%;
}
.tabs{
  display: flex;
  font-size: 20px;
  margin: 20px;
  a {
    margin-right: 50px;
  }
}
</style>
