<template>
  <v-ons-page>
    <color-lists :color-lists="thirdExam"
                 :title="title"
                 :level="'third'"
                 @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import ColorLists from "@/vue/templetes/ColorLists.vue";
import thirdColorDetail from "@/vue/pages/ThirdColorDetail.vue";
import {ROUTER} from "@/resource/constant-router";
import {thirdExam} from "@/resource/thirdExam";

export default {
  name: "thirdColorLists",
  components: {
    ColorLists,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
      title: ROUTER.THIRD_COLOR_LIST_TITLE,
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
