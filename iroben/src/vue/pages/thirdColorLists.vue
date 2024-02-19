<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-lists></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import top from'../pages/top.vue';
import ColorExam from "@/vue/templetes/colorExam.vue";
import {thirdExam} from "../../resource/thirdExam"
import ColorLists from "@/vue/templetes/colorLists.vue";

export default {
  name: "thirdColorLists",
  components: {
    ColorLists,
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
      thirdTitle: "3級の問題",
      //thirdDispatchName:"addThirdFaultItems",
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(top);
    },
  },
  props: ['pageStack'],
  key: 'key_page4',
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
