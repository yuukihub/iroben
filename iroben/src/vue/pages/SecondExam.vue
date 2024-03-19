<template>
  <v-ons-page>
    <custom-toolbar :title="this.title"></custom-toolbar>
    <color-exam :questions="secondExam" :level="'second'">
    </color-exam>
  </v-ons-page>second
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import {secondExam} from "@/resource/secondExam"
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "secondExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      secondExam: secondExam,
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
  },
  props: ["pageStack"],
}
</script>
