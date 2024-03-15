<template>
  <v-ons-page>
    <custom-toolbar :header-design="false"></custom-toolbar>
    <color-pallet @openModal="setColorDetail"/>
    <color-pallet-modal  v-show="openModalFlag"
                         @closeModal="closeModal"
                         :color-title="colorTitle"
                         :color-code="colorCode"
                         :color-sub-title="colorSubTitle"
                         :color-tone-number="colorToneNumber"
                         :color-description="colorDescription"></color-pallet-modal>
  </v-ons-page>
</template>

<script>

import ColorPallet from "@/vue/components/ColorPallet.vue";
import CustomToolbar from "@/vue/components/CustomToolbar.vue";
import ColorPalletModal from "@/vue/components/ColorPalletModal.vue";

export default {
  name: "Paint",
  components: {
    ColorPalletModal,
    CustomToolbar,
    ColorPallet
  },
  data(){
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
    setColorDetail(item,flag){
      this.openModalFlag = flag;

      this.colorDetail = item;
      this.colorTitle = item.title;
      this.colorSubTitle = item.subTitle;
      this.colorCode = item.colorCode;
      this.colorToneNumber = item.toneNumber;
      this.colorDescription = item.description;

    },
    closeModal(){
      this.openModalFlag = false;
    },
  }
}
</script>
