<template>
  <v-ons-page>
    <custom-header :title="this.title"
                    :custom-button-flag="false"></custom-header>
    <color-exam :questions="thirdQuestion"
                :level="'third'" @toPaint="toPaint"
                @toColorList="toColorList">
    </color-exam>
  </v-ons-page>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import Top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import Paint from "@/vue/pages/Paint.vue";
import ThirdColorLists from "@/vue/pages/ThirdColorLists.vue";
import {THIRD_QUESTIONS} from "@/resource/third-questions";
import {ROUTER} from "@/resource/constant-router";


export default {
  name: "ThirdExam",
  components: {
    ColorExam,
    CustomHeader,
  },
  data() {
    return {
      thirdQuestion: THIRD_QUESTIONS,
      title: ROUTER.THIRD_EXAM_TITLE,
    }
  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(Top);
    },
    toColorList() {
      this.pageStack.push(ThirdColorLists);
    },
    toPaint() {
      this.pageStack.push(Paint);
    },
  },
  props: ["pageStack"],
}
</script>
