<template>
  <v-ons-page>
    <custom-toolbar :title="this.title"></custom-toolbar>
    <color-exam :questions="thirdExam" :level="'third'">
    </color-exam>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import top from "./Top.vue";
import ColorExam from "@/vue/templetes/ColorExam.vue";
import {thirdExam} from "@/resource/thirdExam";
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "thirdExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
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
  },
  props: ["pageStack"],
}
</script>
