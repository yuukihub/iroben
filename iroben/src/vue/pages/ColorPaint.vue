<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <tab :tabList="tabList">
      <template v-slot:tabPanel-1>
       1級
      </template>
      <template v-slot:tabPanel-2>
        2級
        <color-pallet-list
            :fault-count-array="faultCountArray"
            :is-toggle-flag="isSecondActive"
            :color-lists="secondExam"
            @onClick="secondToggle"
            ></color-pallet-list>
      </template>
      <template v-slot:tabPanel-3>
        3級
        <color-pallet-list
            :fault-count-array="faultCountArray"
            :is-toggle-flag="isThirdActive"
            :color-lists="thirdExam"
            @onClick="thirdToggle"
        ></color-pallet-list>
      </template>
    </tab>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import {secondExam} from "@/resource/secondExam";
import {thirdExam} from "@/resource/thirdExam";
import Toggle from "@/vue/components/Toggle.vue";
import Tab from "@/vue/components/Tab.vue";
import ColorPalletList from "@/vue/components/ColorPalletList.vue";

export default {
  name: "ColorPaint",
  components: {
    ColorPalletList,
    Tab,
    Toggle,
    customToolbar,
  },
  data(){
    return {
      faultItem: this.$store.state["second"].faultArray,
      faultCountArray: "",
      secondExam: secondExam,
      thirdExam: thirdExam,
      isSecondActive: false,
      isThirdActive: false,
      tabList: ["1級","2級", "3級"],
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
      this.isSecondActive = !this.isSecondActive
    },
    thirdToggle(){
      this.isThirdActive = !this.isThirdActive
    }
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

</style>
