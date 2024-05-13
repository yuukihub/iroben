<template>
  <v-ons-page>
    <color-lists :color-lists="secondQuestion"
                 :title="title"
                 :level="'second'"
                 @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import ColorLists from "@/vue/templetes/ColorLists.vue";
import SecondColorDetail from "@/vue/pages/SecondColorDetail.vue";
import {ROUTER} from "@/resource/constant-router";
import {SECOND_QUESTIONS} from "@/resource/second-questions"

export default {
  name: "SecondColorLists",
  components: {
    ColorLists,
  },
  data() {
    return {
      secondQuestion: SECOND_QUESTIONS,
      title: ROUTER.SECOND_COLOR_LIST_TITLE,
    }
  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push(value) {
      let item = JSON.stringify(value);
      this.pageStack.push({
        extends: SecondColorDetail,
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

