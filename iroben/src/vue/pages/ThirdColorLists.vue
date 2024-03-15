<template>
  <v-ons-page>
    <custom-toolbar :title="this.title"></custom-toolbar>
    <color-lists :color-lists="thirdExam" :level="'third'" @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import {thirdExam} from "@/resource/thirdExam";
import ColorLists from "@/vue/templetes/ColorLists.vue";
import thirdColorDetail from "@/vue/pages/ThirdColorDetail.vue";

export default {
  name: "thirdColorLists",
  components: {
    ColorLists,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
      title: "3級の慣用色一覧",
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
  props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
