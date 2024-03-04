<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-exam :questions="secondExam" :level="'second'">
    </color-exam>
  </v-ons-page>second
</template>

<script>
import customToolbar from "../../CustomToolbar.vue";
import top from "../pages/top.vue";
import ColorExam from "@/vue/templetes/colorExam.vue";
import {secondExam} from "../../resource/secondExam";

export default {
  name: "secondExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      secondExam: secondExam,
      title: "3級の問題",
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
