<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-lists :color-lists="secondExam" :level="'second'" @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import {secondExam} from "../../resource/secondExam"
import ColorLists from "@/vue/templetes/ColorLists.vue";
import secondColorDetail from "@/vue/pages/SecondColorDetail.vue";

export default {
  name: "secondColorLists",
  components: {
    ColorLists,
    customToolbar,
  },
  data() {
    return {
      secondExam: secondExam,
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push (value) {
      let item = JSON.stringify(value);
      this.pageStack.push({
        extends: secondColorDetail,
        data() {
          return {
            colorItem: item
          };
        }
      })
    },
  },
  props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
