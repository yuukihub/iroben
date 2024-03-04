<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-lists :color-lists="thirdExam" :level="'third'" @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import {thirdExam} from "../../resource/thirdExam"
import ColorLists from "@/vue/templetes/colorLists.vue";
import thirdColorDetail from "@/vue/pages/thirdColorDetail.vue";

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
    push (value) {
      let item = JSON.stringify(value);
      this.pageStack.push({
        extends: thirdColorDetail,
        data() {
          return {
            colorItem: item
          };
        }
      })
    },
  },
  props: ['pageStack'],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
