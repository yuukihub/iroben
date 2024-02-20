<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-lists :color-lists="thirdExam" @onClick="getMessage"></color-lists>
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
    getMessage(value) {
      this.pageStack.push(top);
      this.message = value;
    },
  },
  props: ['pageStack'],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
