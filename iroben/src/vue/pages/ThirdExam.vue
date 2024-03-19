<template>
  <v-ons-page>
    <custom-toolbar :title="this.title"></custom-toolbar>
    <color-exam :questions="thirdQuestion"
                :level="'third'" @toPaint="toPaint"
                @toColorList="toColorList">
    </color-exam>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import {thirdQuestion} from "@/resource/thirdQuestion";
import {ROUTER} from "@/resource/constant-router";
import Paint from "@/vue/pages/Paint.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";


export default {
  name: "thirdExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      thirdQuestion: thirdQuestion,
      title: ROUTER.THIRD_EXAM_TITLE,
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
      this.pageStack.push(thirdColorLists);
    },
    toPaint() {
      this.pageStack.push(Paint);
    },
  },
  props: ["pageStack"],
}
</script>
