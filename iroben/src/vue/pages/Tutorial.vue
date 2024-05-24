<template>
  <v-ons-page>
    <custom-header :top-page-flag="false"
                   :title="this.title"
                   :custom-button-flag="false"></custom-header>
    <div class="wrap">
      <tutorial-slider></tutorial-slider>
    </div>
    <div class="bottom">
      <div class="bottom_inner">
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import TutorialSlider from "@/vue/components/TutorialSlider.vue";
import {ROUTER} from "@/resource/constant-router";

export default {
  name: "Tutorial",
  components: {
    TutorialSlider,
    CustomHeader,
  },
  data() {
    return {
      title: ROUTER.TUTORIAL_TITLE,
    }
  },
  props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "../../../src/scss/foundation/_include.scss";

.bottom_inner {
  height: 17vh;
}

.c-tutorialSlider {
  @include mq(sp) {
    top:100px;
  }
}


</style>
