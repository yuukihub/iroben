<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-lists :color-lists="thirdExam"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import top from'../pages/top.vue';
import {thirdExam} from "../../resource/thirdExam"
import ColorLists from "@/vue/templetes/colorLists.vue";

export default {
  name: "thirdColorLists",
  components: {
    ColorLists,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
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
  //props: ['pageStack'],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
