<template>
  <v-ons-page>
    <custom-toolbar :title="this.title"
                    :custom-button-flag="false"></custom-toolbar>
      <color-exam :questions="secondQuestion"
                  :level="'second'"
                  @toPaint="toPaint"
                  @toColorList="toColorList">
    </color-exam>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import {secondQuestion} from "@/resource/secondQuestion"
import {ROUTER} from "@/resource/constant-router";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
import Paint from "@/vue/pages/Paint.vue";

export default {
  name: "secondExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      secondQuestion: secondQuestion,
      title: ROUTER.SECOND_EXAM_TITLE,
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(top);
    },
    toColorList() {
      this.pageStack.push(secondColorLists);
    },
    toPaint() {
      this.pageStack.push(Paint);
    },
  },
  props: ["pageStack"],
}
</script>
