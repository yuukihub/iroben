<template>
  <v-ons-page>
    <color-lists :color-lists="secondQuestion"
                 :title="title"
                 :level="'second'"
                 @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';
import ColorLists from "@/vue/templetes/ColorLists.vue";
import secondColorDetail from "@/vue/pages/SecondColorDetail.vue";
import {ROUTER} from "@/resource/constant-router";
import {secondQuestion} from "@/resource/secondQuestion"

export default {
  name: "secondColorLists",
  components: {
    ColorLists,
    customToolbar,
  },
  data() {
    return {
      secondQuestion: secondQuestion,
      title: ROUTER.SECOND_COLOR_LIST_TITLE,
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
