<template>
  <v-ons-page>
    <color-lists :color-lists="firstQuestion"
                 :title="title"
                 :level="'first'"
                 :display-fault-count-flag="false"
                 @onClick="push"></color-lists>
  </v-ons-page>
</template>

<script>
import ColorLists from "@/vue/templetes/ColorLists.vue";
import FirstColorDetail from "@/vue/pages/FirstColorDetail.vue";
import {FIRST_QUESTIONS} from "@/resource/first-questions";
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "FirstColorLists",
  components: {
    ColorLists,
  },
  data() {
    return {
      firstQuestion: FIRST_QUESTIONS,
      title: ROUTER.FIRST_COLOR_LIST_TITLE,
    }
  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push(value) {
      let item = JSON.stringify(value);
      this.pageStack.push({
        extends: FirstColorDetail,
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
</style>
