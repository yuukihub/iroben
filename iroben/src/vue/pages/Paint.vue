<template>
  <v-ons-page>
    <custom-header :wave-image-flag="false"
                    @click="resetToggleFlag"/>
    <color-pallet @openModal="setColorDetail"/>
    <transition appear>
      <color-pallet-modal v-show="openModalFlag"
                          :color-title="colorTitle"
                          :color-code="colorCode"
                          :color-sub-title="colorSubTitle"
                          :color-tone-number="colorToneNumber"
                          :color-description="colorDescription"
                          @closeModal="closeModal"/>
    </transition>
  </v-ons-page>
</template>

<script>

import ColorPallet from "@/vue/components/ColorPallet.vue";
import ColorPalletModal from "@/vue/components/ColorPalletModal.vue";
import CustomHeader from "@/vue/components/CustomHeader.vue";

export default {
  name: "Paint",
  components: {
    CustomHeader,
    ColorPalletModal,
    ColorPallet
  },
  data() {
    return {
      openModalFlag: false,
      colorDetail: "",
      colorTitle: "",
      colorSubTitle: "",
      colorCode: "",
      colorToneNumber: "",
      colorDescription: "",
    }
  },
  methods: {
    setColorDetail(item, flag) {
      this.openModalFlag = flag;

      this.colorDetail = item;
      this.colorTitle = item.title;
      this.colorSubTitle = item.subTitle;
      this.colorCode = item.colorCode;
      this.colorToneNumber = item.toneNumber;
      this.colorDescription = item.description;
    },
    closeModal() {
      this.openModalFlag = false;
    },
    resetToggleFlag() {
      this.$store.commit("toggle",
          {
            level: "second",
            flag: false,
          }
      );
      this.$store.commit("toggle",
          {
            level: "third",
            flag: false,
          }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/components/transition";
</style>
