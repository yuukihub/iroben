<template>
  <v-ons-page>
    <custom-header :title="this.title"
                    :custom-button-flag="false"></custom-header>
    <color-exam :questions="secondQuestion"
                :level="'second'"
                @toPaint="toPaint"
                @toColorList="toColorList">
    </color-exam>
  </v-ons-page>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import Top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import SecondColorLists from "@/vue/pages/SecondColorLists.vue";
import Paint from "@/vue/pages/Paint.vue";
import {SECONDQUESTIONS} from "@/resource/secondQuestion"
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "SecondExam",
  components: {
    ColorExam,
    CustomHeader,
  },
  data() {
    return {
      secondQuestion: SECONDQUESTIONS,
      title: ROUTER.SECOND_EXAM_TITLE,
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
      this.pageStack.push(SecondColorLists);
    },
    toPaint() {
      this.pageStack.push(Paint);
    },
  },
  props: ["pageStack"],
}
</script>
