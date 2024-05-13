<template>
  <v-ons-page>
    <color-lists :color-lists="thirdQuestion"
                 :title="title"
                 :level="'third'"
                 @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import ColorLists from "@/vue/templetes/ColorLists.vue";
import ThirdColorDetail from "@/vue/pages/ThirdColorDetail.vue";
import {ROUTER} from "@/resource/constant-router";
import {THIRD_QUESTIONS} from "@/resource/third-questions";

export default {
  name: "ThirdColorLists",
  components: {
    ColorLists,
  },
  data() {
    return {
      thirdQuestion: THIRD_QUESTIONS,
      title: ROUTER.THIRD_COLOR_LIST_TITLE,
    }
  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push(value) {
      let item = JSON.stringify(value);
      this.pageStack.push({
        extends: ThirdColorDetail,
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

