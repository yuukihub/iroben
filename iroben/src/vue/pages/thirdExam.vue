<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-exam :questions="thirdExam"
    >

    </color-exam>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import top from'../pages/top.vue';
import ColorExam from "@/vue/templetes/colorExam.vue";
import {thirdExam} from "../../resource/thirdExam"

export default {
  name: "thirdExam",
  components: {
    ColorExam,
    customToolbar,
  },
  data() {
    return {
      thirdExam: thirdExam,
      thirdTitle: "3級の問題",
      thirdDispatchName:"addThirdFaultItems",
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
  props: ['pageStack'],
  key: 'key_page3',
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
